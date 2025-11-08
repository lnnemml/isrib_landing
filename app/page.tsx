'use client';

import { useState } from 'react';
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

export default function Home() {
  const [showEmailModal, setShowEmailModal] = useState(false);

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
