import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Coffee, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <User className="w-6 h-6 text-blue-600" />
            <span className="text-sm font-medium text-blue-600 uppercase tracking-wider">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Passionate Developer & Problem Solver
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Hi! I'm Anurag, a passionate full-stack developer with a love for creating digital experiences 
              that matter. My journey in tech started with curiosity and has evolved into a deep passion for 
              building scalable, user-centric applications.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I specialize in modern web technologies and enjoy working across the entire development stack. 
              From crafting pixel-perfect frontends to architecting robust backend systems, I bring ideas to life 
              with clean, efficient code.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Code2 className="w-4 h-4 text-blue-500" />
                <span>Clean Code Enthusiast</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Open Source Contributor</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                <Coffee className="w-4 h-4 text-yellow-600" />
                <span>Coffee Powered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <img
                      src="anurag.png" // Replace with your actual image path
                      alt="Anurag"
                      className="w-80 h-80 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Anurag</h3>
                    <p className="text-slate-600 dark:text-slate-300">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
