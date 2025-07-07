import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Eye } from 'lucide-react';
import IPhoneScreen from '../../pages/Iphone';

const DeviceShowcase = () => {
  const [activeView, setActiveView] = useState('mobile');

  const devices = [
    {
      id: 'mobile',
      name: 'iPhone Experience', 
      icon: Smartphone,
      description: 'Mobile-optimized interactive interface',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const renderActiveComponent = () => {
    return (
      <div className="w-full h-full flex justify-center items-center rounded-lg overflow-hidden">
        <div className="w-full h-full">
          <IPhoneScreen />
        </div>
      </div>
    );
  };

  return (
    <section id="showcase" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 via-indigo-50/30 to-purple-50/50 dark:from-slate-900/50 dark:via-indigo-900/20 dark:to-purple-900/30"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <Eye className="w-6 h-6 text-indigo-600" />
            <span className="text-sm font-medium text-indigo-600 uppercase tracking-wider">Interactive Showcase</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Mobile Portfolio
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Experience my mobile-optimized portfolio interface - designed for seamless touch interactions and responsive design
          </p>
        </motion.div>

        {/* Device Showcase Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl h-[90vh]">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                {renderActiveComponent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="text-center p-6 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/50">
            <Smartphone className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">Mobile Portfolio</h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Interactive mobile interface with touch-optimized navigation and responsive design elements
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeviceShowcase;
