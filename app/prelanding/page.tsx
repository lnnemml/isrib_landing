'use client';

export default function PreLanding() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-primary to-primary opacity-50"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-center">
            Your Brain Isn't "Underperforming."
            <br />
            <span className="text-accent">It's Being Biochemically Restricted.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed text-center">
            A specific cellular stress-response pathway (ISR) can suppress cognitive clarity, memory recall, and learning efficiency — especially after prolonged stress, overwork, or neurological strain. ISRIB A15 is a research compound that targets this pathway.
          </p>
          
          <div className="bg-secondary/50 border-l-4 border-accent p-6 rounded-r-lg mb-8 max-w-2xl mx-auto">
            <p className="text-gray-300 leading-relaxed italic">
              I've seen people push themselves hard — work, study, burnout — and feel their mind "slip" even while their motivation stays high. That's why I started researching ISR modulation.
            </p>
          </div>
          
          <div className="text-center">
            <a 
              href="#qualification"
              className="inline-block bg-accent hover:bg-accent-dark text-primary font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:scale-105 text-lg"
            >
              Continue to Research Breakdown →
            </a>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section id="qualification" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            This Is For You If:
          </h2>
          
          <div className="space-y-4 mb-12">
            <div className="bg-primary p-6 rounded-lg border-l-4 border-accent flex items-start">
              <span className="text-accent text-2xl mr-4">✓</span>
              <p className="text-lg text-gray-300">
                You feel your thinking used to be sharper than it is now
              </p>
            </div>
            
            <div className="bg-primary p-6 rounded-lg border-l-4 border-accent flex items-start">
              <span className="text-accent text-2xl mr-4">✓</span>
              <p className="text-lg text-gray-300">
                You can focus, but it takes more effort than before
              </p>
            </div>
            
            <div className="bg-primary p-6 rounded-lg border-l-4 border-accent flex items-start">
              <span className="text-accent text-2xl mr-4">✓</span>
              <p className="text-lg text-gray-300">
                You learn slower despite trying harder
              </p>
            </div>
            
            <div className="bg-primary p-6 rounded-lg border-l-4 border-accent flex items-start">
              <span className="text-accent text-2xl mr-4">✓</span>
              <p className="text-lg text-gray-300">
                Your brain "lags" under stress or after periods of intense work
              </p>
            </div>
            
            <div className="bg-primary p-6 rounded-lg border-l-4 border-accent flex items-start">
              <span className="text-accent text-2xl mr-4">✓</span>
              <p className="text-lg text-gray-300">
                You want clarity — not stimulation
              </p>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            This Is Not For You If:
          </h2>
          
          <div className="space-y-4 mb-12">
            <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-red-500/50 flex items-start">
              <span className="text-red-400 text-2xl mr-4">✗</span>
              <p className="text-lg text-gray-300">
                You're looking for a quick dopamine hit or "instant hype"
              </p>
            </div>
            
            <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-red-500/50 flex items-start">
              <span className="text-red-400 text-2xl mr-4">✗</span>
              <p className="text-lg text-gray-300">
                You're not interested in research-grade compounds
              </p>
            </div>
            
            <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-red-500/50 flex items-start">
              <span className="text-red-400 text-2xl mr-4">✗</span>
              <p className="text-lg text-gray-300">
                You expect pharmaceutical or medical claims
              </p>
            </div>
          </div>
          
          <div className="bg-accent/10 border-2 border-accent/30 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-300 leading-relaxed text-center">
              <strong className="text-accent">Important:</strong> This is a research compound. It is not approved to diagnose, treat, cure, or prevent any disease. It is intended for scientific investigation only.
            </p>
          </div>
          
          <div className="text-center">
            <a 
              href="#mechanism"
              className="inline-block bg-accent hover:bg-accent-dark text-primary font-semibold px-10 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:scale-105 text-lg"
            >
              See How ISR Pathway Modulation Works →
            </a>
          </div>
        </div>
      </section>

      {/* The Mechanism */}
      <section id="mechanism" className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The ISR Pathway
          </h2>
          
          <div className="bg-secondary/50 border-l-4 border-accent p-8 rounded-r-lg mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              When the Integrated Stress Response activates, protein synthesis in neurons decreases.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              This affects synaptic plasticity — your brain's ability to form, store, and retrieve information efficiently.
            </p>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            What ISRIB A15 Does
          </h2>
          
          <div className="bg-primary p-8 rounded-lg border border-accent/20 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              Evidence suggests it may support the reversal of ISR-related translational suppression, restoring normal synaptic signaling.
            </p>
            <p className="text-xl text-accent leading-relaxed font-semibold">
              In simple terms: it may help your brain access clarity it already has, instead of forcing stimulation from the outside.
            </p>
          </div>
          
          <div className="text-center">
            <a 
              href="/"
              className="inline-block bg-accent hover:bg-accent-dark text-primary font-semibold px-12 py-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:scale-105 text-xl"
            >
              Continue →
            </a>
            <p className="text-sm text-gray-400 mt-4">
              Full research breakdown, user protocols, and purity data
            </p>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-8 px-4 bg-primary border-t border-accent/20">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-400">
          <p className="mb-2">
            <strong>Research Compound:</strong> ISRIB A15 is not FDA-approved and is not intended to diagnose, treat, cure, or prevent any disease. Information provided is for educational and research purposes only.
          </p>
        </div>
      </footer>
    </main>
  );
}
