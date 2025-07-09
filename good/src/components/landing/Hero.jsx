import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Monitor, Sparkles, Zap } from 'lucide-react';
import IPhoneScreen from '../../pages/Iphone';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const floatingVariants = {
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const Hero = ({ theme = 'dark' }) => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-16 w-48 h-48 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - iPhone Component */}
          <div className="hidden lg:flex order-2 lg:order-1 justify-center lg:justify-start">
            <div className="relative w-full max-w-sm h-[600px] lg:h-[650px] xl:h-[700px]">
              <IPhoneScreen theme={theme} />
            </div>
          </div>

          {/* Right Side - Hero Content */}
          <motion.div 
            className="text-center lg:text-left lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="flex justify-center lg:justify-start items-center gap-2 mb-6"
              variants={itemVariants}
            >
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
                Full Stack Developer
              </span>
              <Sparkles className="w-6 h-6 text-yellow-500" />
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Creative
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                Developer
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              I craft beautiful, performant web applications with modern technologies. 
              From concept to deployment, I bring digital experiences to life.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center flex-wrap"
              variants={itemVariants}
            >
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="w-5 h-5" />
              View My Work 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            {/* <motion.a
              href="#showcase"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Monitor className="w-5 h-5" />
              Live Showcase
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a> */}
            
            <motion.a
              href="/resume.pdf"
              download="Anurag_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </motion.a>
            
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto lg:mx-0"
            variants={itemVariants}
          >
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">3+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Years</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">50+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
            </div>
          </motion.div>
        </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
