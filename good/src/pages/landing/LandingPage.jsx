import React from 'react';
import Header from '../../components/landing/Header';
import Hero from '../../components/landing/Hero';
import About from '../../components/landing/About';
import Skills from '../../components/landing/Skills';
import FeaturedProjects from '../../components/landing/FeaturedProjects';
import AllProjects from '../../components/landing/AllProjects';
import Contact from '../../components/landing/Contact';
import FloatingElements from '../../components/landing/FloatingElements';

const LandingPage = ({ theme, toggleTheme }) => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-purple-900 text-slate-800 dark:text-slate-200 transition-colors duration-300 relative overflow-hidden">
      <FloatingElements />
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Skills />
        <FeaturedProjects />
        <AllProjects />
        <Contact />
      </main>
      <footer className="text-center py-8 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          &copy; 2025 Anurag. Crafted with passion and creativity.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
