// lib/analytics.ts
// MINIMAL GTM - Only essential events for traffic analysis

// Type declarations
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// ============================================
// CONFIGURATION
// ============================================

export const GTM_ID = 'GTM-M2QCB45Q';

// Debug mode
const DEBUG = process.env.NODE_ENV === 'development';

const log = (...args: any[]) => {
  if (DEBUG) console.log('📊 GTM:', ...args);
};

// ============================================
// CORE FUNCTIONS
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
  log('Event pushed:', event);
};

// ============================================
// TRACKING FUNCTIONS
// ============================================

// 1. Track prelanding view
export const trackPrelandingView = (): void => {
  pushToDataLayer({
    event: 'prelanding_view',
    page_type: 'prelanding',
  });
  
  log('Prelanding view');
};

// 2. Track prelanding CTA click
export const trackPrelandingCTA = (location: string): void => {
  pushToDataLayer({
    event: 'prelanding_cta_click',
    cta_location: location,
  });
  
  log('Prelanding CTA click:', location);
};

// 3. Track landing view from prelanding
export const trackLandingViewFromPrelanding = (): void => {
  pushToDataLayer({
    event: 'landing_view_from_prelanding',
    page_type: 'landing',
    source: 'prelanding',
  });
  
  log('Landing view from prelanding');
};

// 4. Track email capture
export const trackEmailCapture = (source: string): void => {
  pushToDataLayer({
    event: 'email_capture',
    capture_source: source,
  });
  
  log('Email capture:', source);
};

// 5. Track buy button click
export const trackBuyClick = (product: '500mg' | '1g', price: number, location: string): void => {
  pushToDataLayer({
    event: 'buy_click',
    product_sku: product,
    product_price: price,
    button_location: location,
    destination_url: `https://isrib.shop/buy-${product}.html`,
  });
  
  log('Buy click:', { product, price, location });
};
