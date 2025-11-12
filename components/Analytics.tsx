'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initDataLayer, initRedditPixel, trackPage } from '@/lib/analytics';

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize tracking on mount
  useEffect(() => {
    // Initialize dataLayer FIRST (before GTM script runs)
    initDataLayer();
    
    // Initialize Reddit Pixel (if you want direct tracking)
    // If you manage Reddit Pixel via GTM, you can comment this out
    initRedditPixel();
    
    console.log('✅ Analytics initialized (GTM-only mode)');
  }, []);

  // Track page changes
  useEffect(() => {
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
      trackPage(url);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}
