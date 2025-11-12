'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { trackLandingViewFromPrelanding } from '@/lib/analytics';
import EmailCapture from '@/components/EmailCapture';
import EmailCaptureInline from '@/components/EmailCaptureInline';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import WhoIsThisFor from '@/components/WhoIsThisFor';
import Discovery from '@/components/Discovery';
import Evidence from '@/components/Evidence';
import PurityGuarantee from '@/components/PurityGuarantee';
import Experience from '@/components/Experience';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';

function HomeContent() {
  const [showEmailModal, setShowEmailModal] = useState(false);
  const searchParams = useSearchParams();

  // Track if user came from prelanding
  useEffect(() => {
    // Check if URL contains utm_campaign=prelander or referrer is /research
    const isFromPrelanding = 
      searchParams?.get('utm_campaign') === 'prelander' ||
      document.referrer.includes('/research');
    
    if (isFromPrelanding) {
      trackLandingViewFromPrelanding();
    }
  }, [searchParams]);

  return (
    <main className="min-h-screen">
      <Hero onOpenEmail={() => setShowEmailModal(true)} />
      <Problem />
      <WhoIsThisFor />
      <Discovery />
      <Evidence />
      <PurityGuarantee />
      <Experience />
      <CTASection />
      <EmailCaptureInline />
      <FAQ />
      
      <EmailCapture 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
      />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
