import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Map } from 'lucide-react';

const features = [
  {
    title: 'Metocean Analysis',
    desc: 'Advanced statistical analysis of wind, wave, and current conditions for precise operational modeling.',
    icon: Activity,
    color: 'cyan'
  },
  {
    title: 'Mission Planning Hub',
    desc: 'Multi-phase operation breakdown with integrated weather windows and downtime simulations.',
    icon: Map,
    color: 'blue'
  },
  {
    title: 'Marine Risk Intelligence',
    desc: 'Automated risk scoring and decision support based on critical weather thresholds and probability modeling.',
    icon: ShieldCheck,
    color: 'purple'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-navy-light/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Built for Offshore <br />
            <span className="text-cyan">Operational Decision-Making</span>
          </h2>
          <div className="w-20 h-1 bg-cyan mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-cyan/30 transition-all duration-500 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-${f.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-8 h-8 text-cyan" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{f.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {f.desc}
              </p>
              <div className="mt-8 flex items-center text-cyan text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                LEARN MORE <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
