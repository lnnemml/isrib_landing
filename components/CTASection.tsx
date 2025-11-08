export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary to-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-accent/20 border border-accent px-6 py-2 rounded-full mb-4">
            <p className="text-accent font-semibold text-sm">
              ⚡ Intro Offer: Limited Research Batch
            </p>
          </div>
          <h2 className="section-heading">
            Ready to Release the Brake?
          </h2>
          <p className="section-subheading">
            Start with ISRIB A15—the optimized analog designed for human use.
          </p>
          <p className="text-gray-400 text-sm">
            Early access for researchers only • Ships within 48 hours
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* 500mg Option */}
          <div className="bg-secondary border-2 border-accent/30 rounded-lg p-8 hover:border-accent transition-all">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Start Here</h3>
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through mr-3">$200</span>
                <span className="text-4xl font-bold text-accent">$130</span>
              </div>
              <div className="inline-block bg-red-500/20 border border-red-500 px-3 py-1 rounded-full mb-2">
                <span className="text-red-400 font-bold text-sm">35% OFF</span>
              </div>
              <p className="text-gray-400">500mg • ~33-50 doses</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Perfect for first-time trial</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>4-6 week protocol</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>See if ISRIB works for you</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Ships within 48 hours</span>
              </li>
            </ul>
            
            <a 
              href="https://isrib.shop/buy-500mg.html" 
              className="block btn-primary text-center"
            >
              Order 500mg
            </a>
          </div>
          
          {/* 1g Option */}
          <div className="bg-secondary border-2 border-accent rounded-lg p-8 relative hover:scale-105 transition-all">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-accent text-primary px-4 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </span>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Full Protocol</h3>
              <div className="mb-2">
                <span className="text-2xl text-gray-500 line-through mr-3">$300</span>
                <span className="text-4xl font-bold text-accent">$200</span>
              </div>
              <div className="inline-block bg-red-500/20 border border-red-500 px-3 py-1 rounded-full mb-2">
                <span className="text-red-400 font-bold text-sm">33% OFF</span>
              </div>
              <p className="text-gray-400">1000mg • ~66-100 doses</p>
            </div>
            
            <ul className="space-y-3 mb-8 text-gray-300">
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>8-12 week complete protocol</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Best per-dose value</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Includes cycling strategy</span>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-2">✓</span>
                <span>Priority support</span>
              </li>
            </ul>
            
            <a 
              href="https://isrib.shop/buy-1g.html" 
              className="block btn-primary text-center"
            >
              Order 1g
            </a>
          </div>
        </div>
        
        <div className="bg-accent/10 border border-accent/30 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-lg mb-4 text-center">What's Included:</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>98%+ purity ISRIB A15</span>
            </div>
            <div className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Certificate of Analysis (COA)</span>
            </div>
            <div className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Detailed dosing protocol</span>
            </div>
            <div className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Discreet shipping within 48h</span>
            </div>
            <div className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Email support & troubleshooting</span>
            </div>
            <div className="flex items-start">
              <span className="text-accent mr-2">✓</span>
              <span>Research-backed guidance</span>
            </div>
          </div>
        </div>
        
        <div className="text-center bg-secondary/50 border border-accent/20 p-6 rounded-lg mb-6">
          <p className="text-sm text-gray-300 mb-2">
            <span className="font-semibold text-accent">Purity verified.</span> Discreet shipping.
          </p>
        </div>
        
        <div className="text-center bg-primary p-6 rounded-lg">
          <p className="text-sm text-gray-400 mb-2">
            <span className="font-semibold">Important:</span> ISRIB A15 is a research compound, not FDA-approved. Intended for personal research use only.
          </p>
          <p className="text-sm text-gray-400">
            Follow the protocol for 2 weeks. If you notice no cognitive improvement, contact us—we'll troubleshoot together.
          </p>
        </div>
      </div>
    </section>
  );
}
