'use client';

export default function PreLanding() {
  return (
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-primary to-primary opacity-50"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="mb-6 text-center">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-semibold border border-accent/30">
              Research Brief • 3 min read
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-center">
            Why High-Performance Thinking Breaks Under Stress
            <span className="text-accent"> — And Why Most Solutions Miss The Target</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed text-center">
            Understanding the cellular mechanism that blocks memory formation, focus, and learning capacity during chronic stress — and the pathway that can restore it.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            The Cognitive Shutdown You Probably Recognize
          </h2>
          
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              If you've ever experienced these patterns, you're not alone:
            </p>
            
            <ul className="space-y-3 ml-6">
              <li className="flex items-start">
                <span className="text-accent mr-3">•</span>
                <span>Reading the same paragraph multiple times without retention</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">•</span>
                <span>Mental fatigue that doesn't resolve with rest or sleep</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">•</span>
                <span>Procrastination driven by genuine cognitive resistance (not laziness)</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3">•</span>
                <span>Memory and focus deteriorating despite lifestyle optimization</span>
              </li>
            </ul>
            
            <p className="pt-4">
              These aren't symptoms of "getting older" or "needing more discipline." They're manifestations of a specific cellular stress response that blocks protein synthesis in neurons.
            </p>
          </div>
        </div>
      </section>

      {/* The Mechanism */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            The Integrated Stress Response (ISR): Your Brain's Emergency Brake
          </h2>
          
          <div className="bg-secondary/50 border-l-4 border-accent p-6 rounded-r-lg mb-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              When cells detect stress — whether from inflammation, oxidative damage, viral infection, or chronic overwork — they activate the <span className="font-semibold text-accent">Integrated Stress Response (ISR)</span>.
            </p>
          </div>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <div>
              <h3 className="text-xl font-bold mb-3 text-accent">How It Works:</h3>
              <ol className="space-y-3 ml-6">
                <li className="flex items-start">
                  <span className="font-bold text-accent mr-3">1.</span>
                  <span>Stress kinases phosphorylate eIF2α (a translation initiation factor)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-accent mr-3">2.</span>
                  <span>This inactivates the eIF2B complex, which normally recycles eIF2</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-accent mr-3">3.</span>
                  <span>Without active eIF2B, protein synthesis grinds to a halt</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-accent mr-3">4.</span>
                  <span>Memory formation requires new proteins — without them, learning capacity collapses</span>
                </li>
              </ol>
            </div>
            
            <div className="bg-primary p-6 rounded-lg border border-accent/20">
              <p className="font-semibold mb-2">The Critical Problem:</p>
              <p>
                This response is protective for acute stress (hours). But in modern life — chronic work stress, inflammation, poor sleep, aging — <span className="font-semibold text-accent">the ISR never turns off</span>.
              </p>
              <p className="mt-3">
                Your neurons remain in "emergency shutdown mode," unable to synthesize the proteins needed for memory consolidation, synaptic plasticity, and cognitive function.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Other Solutions Fail */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Why Stimulants and Supplements Don't Solve This
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Most cognitive enhancers work by increasing neurotransmitter activity (stimulants) or providing metabolic substrates (supplements). But they don't address the <span className="font-semibold">translational blockade</span> at the root of ISR-mediated dysfunction.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-primary p-6 rounded-lg border border-accent/20">
                <h3 className="text-xl font-bold mb-3 text-accent">Stimulants</h3>
                <p className="text-base">
                  Caffeine, modafinil, amphetamines — they push your existing neurotransmitter systems harder. Like revving an engine with the parking brake engaged. You get arousal, not restoration.
                </p>
              </div>
              
              <div className="bg-primary p-6 rounded-lg border border-accent/20">
                <h3 className="text-xl font-bold mb-3 text-accent">Supplements</h3>
                <p className="text-base">
                  Racetams, choline, adaptogens — they modulate signaling pathways or provide metabolic support. But if protein synthesis is blocked at the eIF2B level, these interventions can't restore memory formation.
                </p>
              </div>
            </div>
            
            <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg mt-8">
              <p className="font-semibold text-lg mb-2">The Core Issue:</p>
              <p>
                Without addressing eIF2B inactivation, you're treating downstream symptoms while the upstream block remains in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Discovery */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            The UCSF Discovery: Releasing the Brake
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              In 2013, Dr. Peter Walter's laboratory at UCSF identified a small molecule that stabilizes the eIF2B complex, preventing ISR-mediated shutdown. They called it <span className="font-semibold text-accent">ISRIB</span> (Integrated Stress Response Inhibitor).
            </p>
            
            <div className="bg-secondary/50 border-l-4 border-accent p-6 rounded-r-lg">
              <h3 className="text-xl font-bold mb-4">Key Research Findings:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent mr-3">→</span>
                  <span><strong>Memory restoration in aged mice:</strong> Elderly mice treated for 3 days performed like young mice in cognitive tests, with effects lasting weeks (eLife, 2020)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">→</span>
                  <span><strong>TBI recovery:</strong> Brain-injured mice regained normal learning and memory function, even when treated months after injury (Science, 2017)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">→</span>
                  <span><strong>Mechanism:</strong> ISRIB allosterically stabilizes eIF2B, allowing translation to continue despite phosphorylated eIF2α</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">→</span>
                  <span><strong>Safety profile:</strong> No observed toxicity at effective doses. Lead researcher quote: "It is totally benign."</span>
                </li>
              </ul>
            </div>
            
            <p className="pt-4">
              The compound works by binding at the interface of eIF2B subunits, essentially "stapling" the complex into its active conformation. This allows neurons to maintain protein synthesis even under conditions that would normally trigger ISR shutdown.
            </p>
            
            <div className="bg-primary p-6 rounded-lg border border-accent/20 mt-8">
              <p className="font-semibold mb-3">Current Status:</p>
              <p>
                ISRIB is currently in human clinical trials (Calico/Google, 2024) for ALS-related cognitive impairment. Multiple research groups are exploring applications in traumatic brain injury, age-related cognitive decline, and neurodegenerative conditions.
              </p>
              <p className="mt-3 text-sm text-gray-400">
                <strong>Note:</strong> ISRIB is not FDA-approved. Research analogs like ISRIB-A15 are available for personal research purposes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Compound */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            ISRIB-A15: The Optimized Analog
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              In the process of optimizing ISRIB's pharmacokinetic properties, researchers developed structural analogs. <span className="font-semibold text-accent">ISRIB-A15</span> is one such analog — modified for improved oral bioavailability and potency.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-primary p-4 rounded-lg border border-accent/20 text-center">
                <div className="text-3xl font-bold text-accent mb-2">~5-15mg</div>
                <p className="text-sm">Typical effective dose</p>
              </div>
              <div className="bg-primary p-4 rounded-lg border border-accent/20 text-center">
                <div className="text-3xl font-bold text-accent mb-2">3-7 days</div>
                <p className="text-sm">Time to noticeable effects</p>
              </div>
              <div className="bg-primary p-4 rounded-lg border border-accent/20 text-center">
                <div className="text-3xl font-bold text-accent mb-2">Weeks</div>
                <p className="text-sm">Duration of benefits</p>
              </div>
            </div>
            
            <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg mt-8">
              <p className="font-semibold mb-3">Key Characteristics:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Non-stimulant mechanism (no dopamine/norepinephrine activity)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Targets fundamental translational machinery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>Effects persist beyond active dosing period</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3">✓</span>
                  <span>No reported tolerance development in user reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Reports Context */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            What Self-Experimenters Report
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              While human clinical data is still emerging, a growing community of researchers and biohackers have documented their experiences with ISRIB-A15:
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-accent">
                <p className="italic mb-2">
                  "Information retention dramatically improved after 1-2 days. While reading complex papers, it became way easier to remember expressions and context. Like defragmenting a cluttered hard drive."
                </p>
                <p className="text-sm text-gray-400">— PhD Student, r/Nootropics</p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-accent">
                <p className="italic mb-2">
                  "Not hyper like on modafinil, just much more engaged. Tasks didn't feel like mountains anymore. I could start things without mental resistance."
                </p>
                <p className="text-sm text-gray-400">— Software Engineer, LongeCity Forum</p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-accent">
                <p className="italic mb-2">
                  "Working memory noticeably stronger by day 5. I could hold entire architectures in my head again. The fog lifted like a window cracked open."
                </p>
                <p className="text-sm text-gray-400">— Technical Lead, Reddit</p>
              </div>
            </div>
            
            <div className="bg-primary p-6 rounded-lg border border-accent/20 mt-8">
              <p className="font-semibold mb-3">Common Themes:</p>
              <ul className="space-y-2 text-base">
                <li>• Enhanced memory consolidation and recall</li>
                <li>• Reduced cognitive friction when starting tasks</li>
                <li>• Sustained mental clarity without stimulant effects</li>
                <li>• Improved stress resilience and emotional stability</li>
                <li>• Minimal side effects (most report none)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-secondary to-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Learn More?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Read the complete research summary, see full study citations, user protocol details, and purity verification data.
          </p>
          
          <a 
            href="/"
            className="inline-block bg-accent hover:bg-accent-dark text-primary font-semibold px-12 py-5 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/50 hover:scale-105 text-lg"
          >
            See Full Research & Data →
          </a>
          
          <p className="text-sm text-gray-400 mt-6">
            Comprehensive breakdown • Study citations • User experiences • Dosing protocols
          </p>
          
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start">
              <span className="text-accent mr-3 text-xl">✓</span>
              <div>
                <p className="font-semibold text-sm">Published Research</p>
                <p className="text-xs text-gray-400">eLife, Science, UCSF studies</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-accent mr-3 text-xl">✓</span>
              <div>
                <p className="font-semibold text-sm">Purity Verification</p>
                <p className="text-xs text-gray-400">COA with every batch</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-accent mr-3 text-xl">✓</span>
              <div>
                <p className="font-semibold text-sm">Usage Protocols</p>
                <p className="text-xs text-gray-400">Exact dosing & cycling</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Disclaimer */}
      <footer className="py-8 px-4 bg-primary border-t border-accent/20">
        <div className="max-w-3xl mx-auto text-center text-sm text-gray-400">
          <p className="mb-2">
            <strong>Research Context:</strong> ISRIB and its analogs are experimental compounds currently under investigation. Information presented is for educational purposes and should not be construed as medical advice.
          </p>
          <p>
            ISRIB-A15 is sold as a research chemical for personal research purposes only. Not FDA-approved. Not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </footer>
    </main>
  );
}
