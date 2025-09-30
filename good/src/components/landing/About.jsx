import React from 'react';
import { motion } from 'framer-motion';
import { User, Heart, Coffee, Code2, Trophy, Target, GraduationCap, Award } from 'lucide-react';

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
                <span>AI Powered</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center"
          >
            {/* Main Profile Container */}
            <div className="relative group perspective-1000">
              {/* Floating Background Elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Flip Card Container */}
              <div className="relative w-96 h-[480px]" style={{ transformStyle: 'preserve-3d' }}>
                <div 
                  className="absolute inset-0 transition-transform duration-700 ease-in-out group-hover:[transform:rotateY(180deg)]"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  
                  {/* Front Side */}
                  <div 
                    className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/20 dark:border-slate-700/50"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Avatar Container */}
                    <div className="relative mb-6">
                      <motion.div
                        className="relative w-56 h-56 mx-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        {/* Avatar Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
                        
                        {/* Avatar Image */}
                        <div className="relative w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-1">
                          <div className="w-full h-full bg-white dark:bg-slate-800 rounded-[calc(1.5rem-4px)] overflow-hidden">
                            <img
                              src="/anurag.png"
                              alt="Anurag"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Status Indicator */}
                        <motion.div
                          className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white dark:border-slate-800 shadow-lg flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Profile Info */}
                    <div className="text-center space-y-2">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                        Anurag Khobragade
                      </h3>
                      
                      <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
                        Full Stack Developer
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-xs text-green-600 dark:text-green-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        <span>Available for opportunities</span>
                      </div>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50 [transform:rotateY(180deg)]"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className="h-full flex flex-col justify-center space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-2">
                          Quick Stats
                        </h3>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-white/60 dark:bg-slate-700/60 rounded-xl hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                              <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Codeforces</span>
                          </div>
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Specialist</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-white/60 dark:bg-slate-700/60 rounded-xl hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                              <Target className="w-4 h-4 text-green-600 dark:text-green-400" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">LeetCode</span>
                          </div>
                          <span className="text-sm font-bold text-green-600 dark:text-green-400">600+ Solved</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-white/60 dark:bg-slate-700/60 rounded-xl hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                              <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">College</span>
                          </div>
                          <span className="text-sm font-bold text-purple-600 dark:text-purple-400">IIIT Nagpur</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-4 bg-white/60 dark:bg-slate-700/60 rounded-xl hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all duration-200">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center">
                              <Award className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                            </div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CGPA</span>
                          </div>
                          <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">8.3/10</span>
                        </div>
                      </div>
                      
                      <div className="text-center pt-4">
                        <p className="text-xs text-slate-500 dark:text-slate-400 italic">
                          "Code is poetry written in logic"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorative Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl rotate-12 opacity-80"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [12, 18, 12]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl -rotate-12 opacity-70"
                animate={{ 
                  x: [-5, 5, -5],
                  rotate: [-12, -18, -12]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute top-1/2 -left-12 w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-60"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Sparkle Effects */}
              <motion.div
                className="absolute top-8 right-12 w-2 h-2 bg-white rounded-full opacity-80"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: 0
                }}
              />
              
              <motion.div
                className="absolute bottom-12 right-8 w-1.5 h-1.5 bg-yellow-300 rounded-full"
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
