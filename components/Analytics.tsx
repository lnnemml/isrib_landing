'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { initGA, initRedditPixel, trackPage } from '@/lib/analytics';

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialize tracking on mount
  useEffect(() => {
    initGA();
    initRedditPixel();
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
