'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initDataLayer, initGA, initRedditPixel, trackPage } from '@/lib/analytics';

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize tracking on mount
  useEffect(() => {
    // Initialize dataLayer FIRST (before GTM script runs)
    initDataLayer();
    
    // Then initialize GA4 (only if GTM doesn't handle it)
    initGA();
    
    // Initialize Reddit Pixel
    initRedditPixel();
    
    console.log('✅ Analytics initialized');
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
