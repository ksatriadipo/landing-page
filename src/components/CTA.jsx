import React from 'react';
import { motion } from 'framer-motion';
import { Ship, Wind, Anchor, HardHat, Factory, Waves } from 'lucide-react';

const industries = [
  { name: 'Offshore Oil & Gas', icon: Factory },
  { name: 'Marine Construction', icon: HardHat },
  { name: 'Renewable Energy', icon: Wind },
  { name: 'Port & Logistics', icon: Ship },
  { name: 'Offshore Wind', icon: Waves },
  { name: 'Coastal Infrastructure', icon: Anchor }
];

const Industries = () => {
  return (
    <section className="py-32 bg-navy-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-20">Industries Served</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-default"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl glass border border-white/5 flex items-center justify-center mb-4 group-hover:border-cyan/50 group-hover:bg-cyan/10 transition-all duration-300">
                <ind.icon className="w-10 h-10 text-gray-400 group-hover:text-cyan transition-colors" />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{ind.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-ocean-gradient opacity-50 -z-10"></div>
      {/* Background visual placeholder */}
      <div className="absolute inset-0 opacity-20 -z-20 scale-150">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.2),transparent_70%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">Plan Marine Operations <br />With Confidence</h2>
          <p className="text-xl text-gray-400 mb-12">
            Join the leading offshore contractors and energy enterprises using Konfersi 
            to eliminate uncertainty and optimize mission success.
          </p>
          <button className="bg-cyan text-navy hover:bg-white transition-all px-10 py-5 rounded-full font-bold text-xl shadow-2xl shadow-cyan/20">
            Request Enterprise Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export { Industries, FinalCTA };
