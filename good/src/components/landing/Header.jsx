import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon, Smartphone, Menu, X, Download, User, Zap, FolderOpen, Mail, ArrowUpRight, FileText } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Header = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const headerRef = useRef(null);

  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'About', icon: User },
    { href: '#skills', label: 'Skills', icon: Zap },
    { href: '#projects', label: 'Projects', icon: FolderOpen },
    // { href: '/notes', label: 'Notes', icon: FileText },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <>
      <motion.header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-black/80 border-b border-white/10'
              : 'bg-white/80 border-b border-black/10'
            : 'bg-transparent'
        }`}
        style={{
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Link to="/">
                <motion.div
                  className={`text-2xl font-bold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-black'}`}
                  whileHover={{
                    textShadow: theme === 'dark' ? '0 0 20px rgba(255,255,255,0.3)' : '0 0 20px rgba(0,0,0,0.3)',
                  }}
                >
                  Portfolio
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12 lg:space-x-16">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  onMouseEnter={() => setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item.href.startsWith('#') ? (
                    <motion.a
                      href={item.href}
                      className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                        theme === 'dark' 
                          ? 'text-white/70 hover:text-white' 
                          : 'text-black/70 hover:text-black'
                      }`}
                      whileHover={{ y: -1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <item.icon className="w-4 h-4" />
                        {item.label}
                      </span>

                      {/* Hover underline */}
                      <motion.div
                        className={`absolute bottom-0 left-0 h-px ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
                        initial={{ width: 0 }}
                        animate={{ width: hoveredItem === item.label ? '100%' : 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </motion.a>
                  ) : (
                    <Link
                      to={item.href}
                      className={`relative text-sm font-medium tracking-wide transition-colors duration-300 ${
                        theme === 'dark' 
                          ? 'text-white/70 hover:text-white' 
                          : 'text-black/70 hover:text-black'
                      }`}
                    >
                      <motion.div whileHover={{ y: -1 }} transition={{ duration: 0.2 }}>
                        <span className="relative z-10 flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.label}
                        </span>

                        {/* Hover underline */}
                        <motion.div
                          className={`absolute bottom-0 left-0 h-px ${theme === 'dark' ? 'bg-white' : 'bg-black'}`}
                          initial={{ width: 0 }}
                          animate={{ width: hoveredItem === item.label ? '100%' : 0 }}
                          transition={{ duration: 0.3, ease: 'easeOut' }}
                        />
                      </motion.div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* Resume Button */}
              {/* <motion.a
                href="/resume.pdf"
                download="Anurag_Resume.pdf"
                className={`flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-white/20 hover:border-white/40 text-white/70 hover:text-white'
                    : 'border-black/20 hover:border-black/40 text-black/70 hover:text-black'
                }`}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Download className="w-4 h-4" />
                <span className="text-sm font-medium">Resume</span>
              </motion.a> */}

              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-white/20 hover:border-white/40 text-white/70 hover:text-white'
                    : 'border-black/20 hover:border-black/40 text-black/70 hover:text-black'
                }`}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
              </motion.button>

              {/* iPhone Demo Button */}
              <motion.button
                onClick={() => {
                  // Try multiple possible demo section IDs
                  const iphoneSection = document.getElementById('iphone-demo') || 
                                      document.getElementById('demo') || 
                                      document.getElementById('iphone') ||
                                      document.querySelector('[id*="iphone"]') ||
                                      document.querySelector('[id*="demo"]');
                  
                  if (iphoneSection) {
                    iphoneSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    // Fallback: navigate to iphone demo route if section doesn't exist
                    window.location.href = '/iphone-demo';
                  }
                }}
                className="flex relative group overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="relative z-10 flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <Smartphone className="w-4 h-4" />
                  Demo
                  <motion.div className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.div>
                </span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-white/20 hover:border-white/40 text-white/70 hover:text-white'
                    : 'border-black/20 hover:border-black/40 text-black/70 hover:text-black'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.div 
                  animate={{ rotate: isMenuOpen ? 90 : 0 }} 
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`fixed inset-0 z-40 md:hidden ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col justify-center items-center h-full space-y-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              {navItems.map((item, index) => (
                item.href.startsWith('#') ? (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-4xl font-bold tracking-tight transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-white/70 hover:text-white' 
                        : 'text-black/70 hover:text-black'
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                  >
                    <span className="flex items-center gap-4">
                      <item.icon className="w-8 h-8" />
                      {item.label}
                    </span>
                  </motion.a>
                ) : (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-4xl font-bold tracking-tight transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-white/70 hover:text-white' 
                        : 'text-black/70 hover:text-black'
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      whileHover={{ scale: 1.05, x: 10 }}
                    >
                      <span className="flex items-center gap-4">
                        <item.icon className="w-8 h-8" />
                        {item.label}
                      </span>
                    </motion.div>
                  </Link>
                )
              ))}

              {/* Mobile Actions */}
              <div className="flex flex-col items-center space-y-4 mt-8">
                <motion.a
                  href="/resume.pdf"
                  download="Anurag_Resume.pdf"
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-3 px-6 py-3 border rounded-full transition-all duration-300 ${
                    theme === 'dark'
                      ? 'border-white/20 text-white/70 hover:text-white'
                      : 'border-black/20 text-black/70 hover:text-black'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span className="text-lg font-medium">Download Resume</span>
                </motion.a>

                <motion.button
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Try multiple possible demo section IDs
                    const iphoneSection = document.getElementById('iphone-demo') || 
                                        document.getElementById('demo') || 
                                        document.getElementById('iphone') ||
                                        document.querySelector('[id*="iphone"]') ||
                                        document.querySelector('[id*="demo"]');
                    
                    if (iphoneSection) {
                      iphoneSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      // Fallback: navigate to iphone demo route if section doesn't exist
                      window.location.href = '/iphone-demo';
                    }
                  }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-full"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    <Smartphone className="w-5 h-5" />
                    Try Demo
                    <ArrowUpRight className="w-5 h-5" />
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

