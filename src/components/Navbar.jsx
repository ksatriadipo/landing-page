import React from 'react';
import { Anchor, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <motion.div 
              initial={{ rotate: -45 }}
              animate={{ rotate: 0 }}
              className="flex-shrink-0"
            >
              <Anchor className="h-8 w-8 text-cyan" />
            </motion.div>
            <span className="ml-2 text-2xl font-bold tracking-tight text-white uppercase tracking-widest">
              Konfersi<span className="text-cyan">.</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Solutions', 'Features', 'Pricing', 'Resources'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-cyan px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
              <button className="bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan hover:text-navy px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                Request Demo
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-t border-white/5"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Solutions', 'Features', 'Pricing', 'Resources'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan block px-3 py-2 rounded-md text-base font-medium"
              >
                {item}
              </a>
            ))}
            <button className="w-full mt-4 bg-cyan text-navy px-6 py-3 rounded-md text-base font-semibold">
              Request Demo
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
