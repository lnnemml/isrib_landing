// lib/analytics.ts
// FIXED VERSION - Google Analytics 4 + Reddit Pixel + GTM Integration

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

// Type declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    rdt: any;
  }
}

// ============================================
// CONFIGURATION
// ============================================

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
export const REDDIT_PIXEL_ID = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID || '';
export const GTM_ID = 'GTM-M2QCB45Q'; // Your GTM container

// Debug mode - set to false in production
const DEBUG = process.env.NODE_ENV === 'development';

const log = (...args: any[]) => {
  if (DEBUG) console.log(...args);
};

// ============================================
// GOOGLE TAG MANAGER (GTM) - PRIMARY METHOD
// ============================================

// Initialize dataLayer before GTM loads
export const initDataLayer = (): void => {
  if (typeof window === 'undefined') return;
  
  window.dataLayer = window.dataLayer || [];
  log('✅ DataLayer initialized');
};

// Push events to GTM dataLayer
export const pushToDataLayer = (event: any): void => {
  if (typeof window === 'undefined') return;
  
  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  
  window.dataLayer.push(event);
  log('📊 GTM Event pushed:', event);
};

// ============================================
// GOOGLE ANALYTICS 4 (via GTM is preferred)
// ============================================

// Initialize GA4 ONLY if GTM doesn't have it configured
export const initGA = (): void => {
  if (typeof window === 'undefined') return;
  
  // Check if GA_MEASUREMENT_ID is configured
  if (!GA_MEASUREMENT_ID) {
    console.warn('⚠️ GA_MEASUREMENT_ID not configured');
    return;
  }
  
  // Wait a bit to see if GTM loads GA4
  setTimeout(() => {
    // If gtag doesn't exist after GTM should have loaded, initialize directly
    if (!window.gtag) {
      log('📊 Initializing GA4 directly (GTM not handling it)');
      
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

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

      log('✅ GA4 initialized directly:', GA_MEASUREMENT_ID);
    } else {
      log('✅ GA4 loaded by GTM');
    }
  }, 1000);
};

// Track pageview (works with both GTM and direct GA4)
export const trackPageview = (url: string): void => {
  if (typeof window === 'undefined') return;

  // Always push to dataLayer (for GTM)
  pushToDataLayer({
    event: 'page_view',
    page_path: url,
    page_title: document.title,
    page_location: window.location.href,
  });
  
  // Also send directly if gtag exists
  if (window.gtag && GA_MEASUREMENT_ID) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
    log('📄 Pageview tracked:', url);
  }
};

// Track GA4 event
export const trackGAEvent = ({ action, category, label, value }: GAEvent): void => {
  if (typeof window === 'undefined') return;

  const eventData = {
    event: action,
    event_category: category,
    event_label: label,
    value: value,
  };

  // Push to dataLayer (for GTM)
  pushToDataLayer(eventData);
  
  // Also send directly if gtag exists
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  log('📊 GA Event:', eventData);
};

// ============================================
// REDDIT PIXEL
// ============================================

// Initialize Reddit Pixel
export const initRedditPixel = (): void => {
  if (typeof window === 'undefined') return;
  
  if (!REDDIT_PIXEL_ID) {
    console.warn('⚠️ REDDIT_PIXEL_ID not configured');
    return;
  }

  (function(w: any, d: Document) {
    if (!w.rdt) {
      const p: any = (w.rdt = function(...args: any[]) {
        if (p.sendEvent) {
          p.sendEvent.apply(p, args);
        } else {
          p.callQueue.push(args);
        }
      });
      p.callQueue = [];
      p.sendEvent = null;
      const t = d.createElement('script');
      t.src = 'https://www.redditstatic.com/ads/pixel.js';
      t.async = true;
      const s = d.getElementsByTagName('script')[0];
      if (s && s.parentNode) {
        s.parentNode.insertBefore(t, s);
      }
    }
  })(window, document);

  window.rdt('init', REDDIT_PIXEL_ID, {
    optOut: false,
    useDecimalCurrencyValues: true,
  });

  window.rdt('track', 'PageVisit');
  
  log('✅ Reddit Pixel initialized:', REDDIT_PIXEL_ID);
};

// Track Reddit event
export const trackRedditEvent = ({ event, customEventName, value, currency = 'USD', itemCount, ...params }: RedditEvent): void => {
  if (typeof window === 'undefined' || !window.rdt) return;

  const eventData: any = { ...params };

  if (event === 'Purchase' && value) {
    eventData.value = value;
    eventData.currency = currency;
    eventData.itemCount = itemCount || 1;
  }

  if (event === 'Custom' && customEventName) {
    window.rdt('track', 'Custom', { customEventName, ...eventData });
  } else {
    window.rdt('track', event, eventData);
  }

  log('🔴 Reddit Event:', event, eventData);
};

// ============================================
// COMBINED TRACKING
// ============================================

// Track page view on all platforms
export const trackPage = (url: string): void => {
  trackPageview(url);
  if (window.rdt) {
    trackRedditEvent({ event: 'PageVisit' });
  }
};

// Track email capture
export const trackEmailCapture = (source: string): void => {
  pushToDataLayer({
    event: 'email_capture',
    event_category: 'engagement',
    event_label: source,
    value: 1,
  });

  trackGAEvent({
    action: 'email_capture',
    category: 'engagement',
    label: source,
    value: 1,
  });

  if (window.rdt) {
    trackRedditEvent({
      event: 'Lead',
      leadType: 'email',
      source: source,
    });
  }
};

// Track button click
export const trackButtonClick = (buttonName: string, location: string): void => {
  pushToDataLayer({
    event: 'button_click',
    button_name: buttonName,
    button_location: location,
  });

  trackGAEvent({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName}_${location}`,
  });

  if (window.rdt) {
    trackRedditEvent({
      event: 'ViewContent',
      contentType: 'button_click',
      contentName: buttonName,
      location: location,
    });
  }
};

// Track product view
export const trackProductView = (productName: string, productPrice: number): void => {
  pushToDataLayer({
    event: 'view_item',
    ecommerce: {
      items: [{
        item_name: productName,
        price: productPrice,
        currency: 'USD',
      }]
    }
  });

  trackGAEvent({
    action: 'view_item',
    category: 'ecommerce',
    label: productName,
    value: productPrice,
  });

  if (window.rdt) {
    trackRedditEvent({
      event: 'ViewContent',
      contentType: 'product',
      contentName: productName,
      value: productPrice,
      currency: 'USD',
    });
  }
};

// Track add to cart
export const trackAddToCart = (productName: string, productPrice: number, quantity: number): void => {
  pushToDataLayer({
    event: 'add_to_cart',
    ecommerce: {
      items: [{
        item_name: productName,
        price: productPrice,
        quantity: quantity,
        currency: 'USD',
      }]
    }
  });

  trackGAEvent({
    action: 'add_to_cart',
    category: 'ecommerce',
    label: productName,
    value: productPrice * quantity,
  });

  if (window.rdt) {
    trackRedditEvent({
      event: 'AddToCart',
      productName: productName,
      value: productPrice,
      currency: 'USD',
      itemCount: quantity,
    });
  }
};

// Track purchase
export const trackPurchase = (orderId: string, value: number, productName: string, quantity: number): void => {
  pushToDataLayer({
    event: 'purchase',
    ecommerce: {
      transaction_id: orderId,
      value: value,
      currency: 'USD',
      items: [{
        item_name: productName,
        price: value / quantity,
        quantity: quantity,
      }]
    }
  });

  if (window.gtag && GA_MEASUREMENT_ID) {
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

  if (window.rdt) {
    trackRedditEvent({
      event: 'Purchase',
      transactionId: orderId,
      value: value,
      currency: 'USD',
      itemCount: quantity,
      productName: productName,
    });
  }

  log('💰 Purchase tracked:', { orderId, value, productName, quantity });
};
