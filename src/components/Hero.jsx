import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,242,255,0.1),transparent_70%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-cyan uppercase glass rounded-full border border-cyan/30">
              Intelligence for Offshore Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
              AI-Enhanced Marine <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400 glowing-cyan">
                Operational Intelligence
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-400 mb-10 leading-relaxed">
              Reduce offshore operational uncertainty using integrated metocean analysis, 
              mission planning, and marine risk intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-cyan text-navy hover:bg-white transition-all px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 group">
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto glass text-white hover:bg-white/10 transition-all px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2">
                <Play className="w-5 h-5 fill-current" />
                Explore Platform
              </button>
            </div>
          </motion.div>
        </div>

        {/* Hero Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="glass rounded-2xl p-2 md:p-4 border border-white/10 shadow-2xl shadow-cyan/10">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-white/5">
               <img 
                src="/konfersi_hero_dashboard_1777658326269.png" 
                alt="Konfersi Intelligence Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
              
              {/* Floating UI elements overlay for extra depth */}
              <div className="absolute top-4 right-4 glass p-4 rounded-lg hidden md:block">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-cyan animate-ping"></div>
                  <span className="text-xs font-mono text-cyan">LIVE METOCEAN FEED</span>
                </div>
                <div className="text-lg font-bold text-white">Hs: 2.4m</div>
                <div className="text-[10px] text-gray-400">Direction: 245° SW</div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan/10 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 blur-3xl rounded-full"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
