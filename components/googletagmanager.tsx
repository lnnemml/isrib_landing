'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const GTM_ID = 'GTM-M2QCB45Q';

export default function GoogleTagManager() {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // Push initial GTM event
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    
    console.log('✅ GTM initialized:', GTM_ID);
  }, []);

  return (
    <>
      {/* GTM Script */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      
      {/* GTM noscript fallback */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

// Type declaration for dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}
