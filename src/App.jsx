import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PlatformDetails from './components/PlatformDetails';
import Pricing from './components/Pricing';
import { Industries, FinalCTA } from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-cyan selection:text-navy">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Metocean, Mission, Risk detailed sections */}
        <PlatformDetails />
        
        {/* AI Analysis Highlight */}
        <section className="py-32 bg-cyan/5 border-y border-cyan/10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Expert-Supervised AI Intelligence</h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-16">
              The platform is NOT designed to replace engineers. It is built to augment their capabilities—accelerating 
              technical interpretation, report drafting, and risk explanation while maintaining expert validation.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Pattern Interpretation', text: 'AI identifies subtle metocean trends' },
                { title: 'Technical Summaries', text: 'Automated executive operational briefs' },
                { title: 'Report Drafting', text: 'Accelerate documentation from days to hours' },
                { title: 'Risk Explanation', text: 'Clear narratives for critical thresholds' }
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border-white/5 hover:bg-white/5 transition-colors">
                  <div className="text-cyan font-bold mb-2 uppercase text-xs tracking-widest">{item.title}</div>
                  <div className="text-gray-300 text-sm">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing />
        <Industries />
        <FinalCTA />
      </main>

      <footer className="py-12 border-t border-white/5 bg-navy">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <span className="text-xl font-bold tracking-tight text-white uppercase">
              Konfersi<span className="text-cyan">.</span>
            </span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 Konfersi Intelligence Platform. All rights reserved.
          </div>
          <div className="flex gap-8 text-gray-400 text-sm">
            <a href="#" className="hover:text-cyan">Terms</a>
            <a href="#" className="hover:text-cyan">Privacy</a>
            <a href="#" className="hover:text-cyan">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
