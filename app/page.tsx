'use client';

import { useState } from 'react';
import EmailCapture from '@/components/EmailCapture';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Discovery from '@/components/Discovery';
import Evidence from '@/components/Evidence';
import Experience from '@/components/Experience';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';

export default function Home() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <main className="min-h-screen">
      <Hero onOpenEmail={() => setShowEmailModal(true)} />
      <Problem />
      <Discovery />
      <Evidence />
      <Experience />
      <CTASection />
      <FAQ />
      
      <EmailCapture 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
      />
    </main>
  );
}
