import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, FileText, Zap } from 'lucide-react';

const PlatformDetails = () => {
  return (
    <div className="space-y-32 py-32">
      {/* Metocean Analysis Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan font-mono tracking-widest text-sm mb-4 block">MODULE 01</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Advanced Metocean Intelligence</h2>
            <p className="text-gray-400 text-lg mb-10">
              Go beyond basic statistics. Our platform provides high-fidelity analysis of metocean conditions, 
              from general distribution to extreme value analysis and cyclonic path modeling.
            </p>
            <ul className="space-y-4">
              {[
                'General Distribution & Statistics',
                'Cyclonic & Non-Cyclonic Path Analysis',
                'Extreme Value Analysis (EVA)',
                'Satellite & Model Data Fusion',
                'Downtime Statistics Generation'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/konfersi_metocean_analytics_1777658375172.png" alt="Metocean Analytics" className="w-full" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-xl border border-cyan/20 hidden md:block">
              <div className="text-cyan font-bold text-2xl mb-1">99.8%</div>
              <div className="text-gray-400 text-xs font-mono">DATA ACCURACY</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Planning Section */}
      <section className="bg-navy-light/20 py-32 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, order: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:order-2"
            >
              <span className="text-cyan font-mono tracking-widest text-sm mb-4 block">MODULE 02</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Mission Planning Hub</h2>
              <p className="text-gray-400 text-lg mb-10">
                Visualize and optimize multi-phase offshore operations. 
                Our simulation engine predicts downtime and identifies optimal weather windows for complex campaigns.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Zap, title: 'Workability', text: 'Real-time analysis' },
                  { icon: Cpu, title: 'Optimized', text: 'Scenario planning' },
                  { icon: FileText, title: 'Reports', text: 'PDF Generation' },
                  { icon: CheckCircle2, title: 'Precision', text: 'Downtime simulation' }
                ].map((item, i) => (
                  <div key={i} className="glass p-4 rounded-xl">
                    <item.icon className="w-6 h-6 text-cyan mb-2" />
                    <div className="font-bold text-white text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.text}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -40, order: 2 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:order-1"
            >
               {/* Workflow Visualization Mockup */}
               <div className="glass rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                 <div className="flex justify-between mb-12 relative z-10">
                   {['Operation', 'Phases', 'Window', 'Downtime'].map((step, i) => (
                     <div key={i} className="flex flex-col items-center gap-2">
                       <div className="w-10 h-10 rounded-full bg-cyan/10 border border-cyan/50 flex items-center justify-center text-cyan font-bold">
                         {i + 1}
                       </div>
                       <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter">{step}</span>
                     </div>
                   ))}
                 </div>
                 <div className="space-y-4">
                    <div className="h-4 w-full bg-cyan/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        className="h-full bg-cyan"
                      ></motion.div>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-gray-500">
                      <span>PLANNING ACCURACY</span>
                      <span>OPTIMIZED 75.4%</span>
                    </div>
                 </div>
                 {/* Background grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px] -z-10"></div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Risk Intelligence Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cyan font-mono tracking-widest text-sm mb-4 block">MODULE 03</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Marine Risk Intelligence</h2>
            <p className="text-gray-400 text-lg mb-10">
              Transform raw weather data into operational confidence. 
              Our Risk Matrix Engine maps probability against consequence to generate clear, actionable risk scores.
            </p>
            <div className="glass p-8 rounded-2xl border-l-4 border-cyan">
              <h4 className="text-xl font-bold text-white mb-4">"Expert-Supervised AI Interpretation"</h4>
              <p className="text-gray-400 italic">
                AI accelerates technical interpretation while maintaining expert engineering validation.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img src="/konfersi_risk_intelligence_1777658398915.png" alt="Risk Intelligence" className="w-full" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlatformDetails;
