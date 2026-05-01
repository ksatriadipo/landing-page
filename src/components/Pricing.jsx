import React from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Zap, Target, Globe, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Lite',
    price: '25 Million',
    subtitle: 'For preliminary marine environmental studies and basic operational assessments.',
    capacity: '1 Single Point Project Workspace',
    features: [
      'Basic Data Intelligence',
      'General Distribution Analysis',
      'Basic Statistics',
      'Satellite & Model Observation',
      'AI-Assisted Summary',
      'Standard Metocean Report',
      'Exportable PDF Report'
    ],
    cta: 'Get Started',
    highlight: false,
    icon: Target
  },
  {
    name: 'Professional',
    price: '75 Million',
    subtitle: 'Advanced metocean intelligence for operational marine projects.',
    capacity: '2 Single Point OR 1 Route-Based Workspace',
    features: [
      'Everything in Lite',
      'Cyclonic Analysis',
      'Non-Cyclonic Analysis',
      'Extreme Value Analysis (EVA)',
      'Downtime Analysis',
      'Operational Weather Window',
      'Full Technical Reporting',
      'AI-Assisted Operational Interpretation',
      'Route-Based Analysis Support',
      '1 Expert Technical Consultation Session'
    ],
    cta: 'Request Demo',
    highlight: false,
    icon: Globe
  },
  {
    name: 'Mission Planning',
    price: '125 Million',
    badge: 'MOST POPULAR',
    subtitle: 'Operational planning and mission optimization powered by environmental intelligence.',
    capacity: '3 Single Point OR 1 Route-Based Workspace',
    features: [
      'Everything in Professional',
      'Mission Planning Hub',
      'Workability Analysis',
      'Multi-Phase Operational Planning',
      'Mission Downtime Simulation',
      'Operational Window Optimization',
      'Scenario-Based Planning',
      'AI-Assisted Mission Recommendations',
      'Priority Processing',
      '2 Expert Technical Consultation Sessions'
    ],
    cta: 'Request Demo',
    highlight: true,
    icon: Zap
  },
  {
    name: 'Operational Intelligence Suite',
    price: '175 Million',
    subtitle: 'Strategic operational decision support for high-risk marine operations.',
    capacity: '4 Single Point OR 1 Route-Based Workspace',
    features: [
      'Everything in Mission Planning',
      'Risk Matrix Engine',
      'Operational Risk Scoring',
      'Probability vs Consequence Analysis',
      'Critical Weather Threshold Mapping',
      'Executive Decision Support Dashboard',
      'AI-Assisted Risk Interpretation',
      'Full Risk Assessment Reporting',
      'Priority Technical Support',
      '4 Expert Technical Consultation Sessions'
    ],
    cta: 'Contact Sales',
    highlight: false,
    icon: Shield
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-navy">
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan/5 blur-[120px] rounded-full"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Flexible Operational <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-blue-400">Intelligence Plans</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
              Integrated marine operational intelligence designed for offshore and marine projects.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-500 group ${
                plan.highlight 
                ? 'bg-cyan/10 border-cyan/50 shadow-2xl shadow-cyan/20 z-10 ring-1 ring-cyan/50' 
                : 'glass border-white/5 hover:border-white/20'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan text-navy text-[10px] font-black px-6 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg shadow-cyan/20">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${plan.highlight ? 'bg-cyan/20 text-cyan' : 'bg-white/5 text-gray-400'}`}>
                  <plan.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">{plan.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 h-12">
                  {plan.subtitle}
                </p>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Annual Subscription</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm font-bold text-white">Rp</span>
                    <span className="text-3xl font-black text-white">{plan.price}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-1">Billed annually</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-8">
                <div className="text-[10px] font-bold text-cyan uppercase tracking-widest mb-2">Included Capacity</div>
                <div className="text-sm font-medium text-white leading-snug">
                  {plan.capacity}
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feat, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-cyan' : 'text-gray-600'}`} />
                    <span className="text-xs text-gray-400 leading-tight">{feat}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                plan.highlight 
                ? 'bg-cyan text-navy hover:bg-white' 
                : 'bg-white/5 text-white border border-white/10 hover:bg-white hover:text-navy'
              }`}>
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom Enterprise Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center glass p-12 rounded-[2.5rem] border-white/5 max-w-4xl mx-auto relative overflow-hidden group hover:border-cyan/20 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">Need larger operational capacity?</h4>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Contact our team for tailored marine intelligence solutions, enterprise-wide deployments, 
              or specialized operational requirements.
            </p>
            <button className="bg-white text-navy hover:bg-cyan transition-all px-10 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 mx-auto group/ent">
              Contact Enterprise Team
              <ArrowRight className="w-5 h-5 group-hover/ent:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
