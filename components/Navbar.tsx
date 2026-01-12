
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, Sun, Moon } from 'lucide-react';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Logo } from '../constants';
import { useTheme } from '../App';

const motion = m as any;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/programs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const ThemeToggle = () => (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`p-2 md:p-2.5 rounded-full transition-all duration-300 border flex items-center justify-center ${
        theme === 'dark' 
          ? 'bg-white/5 border-white/10 text-white hover:bg-white/10' 
          : 'bg-black/5 border-black/10 text-black hover:bg-black/10'
      }`}
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -5, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );

  return (
    <>
      <header className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 dark:bg-matteBlack/90 backdrop-blur-md py-3 md:py-4 shadow-xl' 
          : 'bg-transparent py-5 md:py-8'
      }`}>
        <nav className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Logo theme={theme} className="scale-75 sm:scale-90 md:scale-110 origin-left" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-12">
            <div className="flex gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-syncopate text-[9px] font-bold tracking-[0.2em] transition-all relative ${
                    location.pathname === link.path 
                      ? 'text-finixRed' 
                      : (theme === 'dark' ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black')
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center gap-6 pl-8 border-l border-black/10 dark:border-white/10">
              <ThemeToggle />
              <Link to="/contact" className="px-8 py-3 bg-finixRed text-white font-bebas text-2xl tracking-widest rounded-full hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all shadow-xl shadow-finixRed/20">
                JOIN NOW
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-3">
            <ThemeToggle />
            <button 
              className={`p-2 rounded-lg transition-colors ${theme === 'dark' ? 'bg-white/5 text-white' : 'bg-black/5 text-black'}`} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className={`fixed inset-0 h-screen z-[120] flex flex-col p-6 md:p-10 ${
                theme === 'dark' ? 'bg-matteBlack' : 'bg-white'
              }`}
            >
              <div className="flex justify-between items-center mb-12">
                <Logo theme={theme} className="scale-90" />
                <button 
                  className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} 
                  onClick={() => setIsOpen(false)}
                >
                  <X size={32} />
                </button>
              </div>
              <div className="flex flex-col gap-8 mt-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    onClick={() => setIsOpen(false)} 
                    className={`font-bebas text-5xl md:text-7xl hover:text-finixRed tracking-tighter uppercase transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mt-auto pb-10">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full py-5 bg-finixRed text-white font-bebas text-3xl text-center rounded-full shadow-lg shadow-finixRed/20">
                  JOIN THE ARENA
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating WhatsApp Lead Gen - Fixed for mobile visibility */}
      <a 
        href="https://wa.me/918217500205" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 right-6 md:bottom-10 md:right-10 z-[200] bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center gap-3 group"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-jakarta text-[10px] uppercase font-black tracking-widest whitespace-nowrap">
          Chat with a Coach
        </span>
        <MessageCircle size={28} className="md:size-8" />
      </a>
    </>
  );
};

export default Navbar;
