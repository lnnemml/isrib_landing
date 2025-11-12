// lib/analytics.ts
// GTM-ONLY VERSION - Cleaner, No Duplication

// Types
export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

// Type declarations
declare global {
  interface Window {
    dataLayer: any[];
    rdt: any;
  }
}

// ============================================
// CONFIGURATION
// ============================================

export const GTM_ID = 'GTM-M2QCB45Q';
export const REDDIT_PIXEL_ID = process.env.NEXT_PUBLIC_REDDIT_PIXEL_ID || '';

// Debug mode
const DEBUG = process.env.NODE_ENV === 'development';

const log = (...args: any[]) => {
  if (DEBUG) console.log(...args);
};

// ============================================
// GOOGLE TAG MANAGER - PRIMARY METHOD
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
// REDDIT PIXEL (Optional - can also be managed via GTM)
// ============================================

// Initialize Reddit Pixel
export const initRedditPixel = (): void => {
  if (typeof window === 'undefined') return;
  
  if (!REDDIT_PIXEL_ID) {
    console.warn('⚠️ REDDIT_PIXEL_ID not configured');
    return;
  }

  const w: any = window;
  const d: Document = document;
  
  if (!w.rdt) {
    const p: any = (w.rdt = (...args: any[]) => {
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

  w.rdt('init', REDDIT_PIXEL_ID, {
    optOut: false,
    useDecimalCurrencyValues: true,
  });

  w.rdt('track', 'PageVisit');
  
  log('✅ Reddit Pixel initialized:', REDDIT_PIXEL_ID);
};

// ============================================
// TRACKING FUNCTIONS
// ============================================

// Track page view
export const trackPage = (url: string): void => {
  if (typeof window === 'undefined') return;

  pushToDataLayer({
    event: 'page_view',
    page_path: url,
    page_title: document.title,
    page_location: window.location.href,
  });
  
  log('📄 Page view tracked:', url);
};

// Track email capture
export const trackEmailCapture = (source: string): void => {
  pushToDataLayer({
    event: 'email_capture',
    event_category: 'engagement',
    event_label: source,
    value: 1,
  });
  
  log('📧 Email capture tracked:', source);
};

// Track button click
export const trackButtonClick = (buttonName: string, location: string): void => {
  pushToDataLayer({
    event: 'button_click',
    button_name: buttonName,
    button_location: location,
    event_category: 'engagement',
    event_label: `${buttonName}_${location}`,
  });
  
  log('🔘 Button click tracked:', buttonName, location);
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
  
  log('👁️ Product view tracked:', productName, productPrice);
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
  
  log('🛒 Add to cart tracked:', productName, quantity);
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
  
  log('💰 Purchase tracked:', { orderId, value, productName, quantity });
};
