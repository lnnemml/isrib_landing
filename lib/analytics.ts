// lib/analytics.ts
// Google Analytics 4 + Reddit Pixel Tracking

// Types
export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export interface RedditEvent {
  event: 'ViewContent' | 'Lead' | 'AddToCart' | 'Purchase' | 'PageVisit' | 'Custom';
  customEventName?: string;
  value?: number;
  currency?: string;
  itemCount?: number;
  [key: string]: any;
}

// Type declarations - unified for the entire app
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    rdt: (...args: any[]) => void;
  }
}

// ============================================
// GOOGLE ANALYTICS 4
// ============================================

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Initialize GA4
export const initGA = (): void => {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return;
  
  // Load gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: true,
    anonymize_ip: true,
  });

  console.log('✅ GA4 initialized:', GA_MEASUREMENT_ID);
};

// Track pageview
export const trackPageview = (url: string): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// Track GA4 event
export const trackGAEvent = ({ action, category, label, value }: GAEvent): void => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
  
  console.log('📊 GA Event:', { action, category, label, value });
};

// ============================================
// REDDIT PIXEL
// ============================================

export const REDDIT_PIXEL_ID = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID || '';

// Initialize Reddit Pixel
export const initRedditPixel = (): void => {
  if (typeof window === 'undefined' || !REDDIT_PIXEL_ID) return;

  // Load Reddit Pixel script
  !(function(w: any, d: Document) {
    if (!w.rdt) {
      const p = w.rdt = function(...args: any[]) {
        p.sendEvent ? p.sendEvent.apply(p, args) : p.callQueue.push(args);
      };
      p.callQueue = [];
      const t = d.createElement('script');
      t.src = 'https://www.redditstatic.com/ads/pixel.js';
      t.async = true;
      const s = d.getElementsByTagName('script')[0];
      s.parentNode!.insertBefore(t, s);
    }
  })(window, document);

  window.rdt('init', REDDIT_PIXEL_ID, {
    optOut: false,
    useDecimalCurrencyValues: true,
    aaid: '',
    email: '',
    externalId: '',
    idfa: '',
  });

  // Track initial pageview
  window.rdt('track', 'PageVisit');
  
  console.log('✅ Reddit Pixel initialized:', REDDIT_PIXEL_ID);
};

// Track Reddit event
export const trackRedditEvent = ({ event, customEventName, value, currency = 'USD', itemCount, ...params }: RedditEvent): void => {
  if (typeof window === 'undefined' || !window.rdt) return;

  const eventData: any = {
    ...params,
  };

  // Add value tracking for Purchase events
  if (event === 'Purchase' && value) {
    eventData.value = value;
    eventData.currency = currency;
    eventData.itemCount = itemCount || 1;
  }

  // Track custom event or standard event
  if (event === 'Custom' && customEventName) {
    window.rdt('track', 'Custom', { customEventName, ...eventData });
  } else {
    window.rdt('track', event, eventData);
  }

  console.log('🔴 Reddit Event:', event, eventData);
};

// ============================================
// COMBINED TRACKING (GA4 + Reddit)
// ============================================

// Track page view on both platforms
export const trackPage = (url: string): void => {
  trackPageview(url);
  trackRedditEvent({ event: 'PageVisit' });
};

// Track email capture
export const trackEmailCapture = (source: string): void => {
  // GA4
  trackGAEvent({
    action: 'email_capture',
    category: 'engagement',
    label: source,
    value: 1,
  });

  // Reddit
  trackRedditEvent({
    event: 'Lead',
    leadType: 'email',
    source: source,
  });
};

// Track button click
export const trackButtonClick = (buttonName: string, location: string): void => {
  // GA4
  trackGAEvent({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName}_${location}`,
  });

  // Reddit
  trackRedditEvent({
    event: 'ViewContent',
    contentType: 'button_click',
    contentName: buttonName,
    location: location,
  });
};

// Track product view
export const trackProductView = (productName: string, productPrice: number): void => {
  // GA4
  trackGAEvent({
    action: 'view_item',
    category: 'ecommerce',
    label: productName,
    value: productPrice,
  });

  // Reddit
  trackRedditEvent({
    event: 'ViewContent',
    contentType: 'product',
    contentName: productName,
    value: productPrice,
    currency: 'USD',
  });
};

// Track add to cart
export const trackAddToCart = (productName: string, productPrice: number, quantity: number): void => {
  // GA4
  trackGAEvent({
    action: 'add_to_cart',
    category: 'ecommerce',
    label: productName,
    value: productPrice * quantity,
  });

  // Reddit
  trackRedditEvent({
    event: 'AddToCart',
    productName: productName,
    value: productPrice,
    currency: 'USD',
    itemCount: quantity,
  });
};

// Track purchase
export const trackPurchase = (orderId: string, value: number, productName: string, quantity: number): void => {
  // GA4
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'purchase', {
      transaction_id: orderId,
      value: value,
      currency: 'USD',
      items: [{
        item_id: productName,
        item_name: productName,
        price: value / quantity,
        quantity: quantity,
      }],
    });
  }

  // Reddit
  trackRedditEvent({
    event: 'Purchase',
    transactionId: orderId,
    value: value,
    currency: 'USD',
    itemCount: quantity,
    productName: productName,
  });

  console.log('💰 Purchase tracked:', { orderId, value, productName, quantity });
};
