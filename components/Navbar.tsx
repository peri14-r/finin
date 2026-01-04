
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Logo } from '../constants';
import { useTheme } from '../App';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
        scrolled 
          ? 'py-3 backdrop-blur-xl border-b border-white/10 bg-luxuryBlack/60' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group relative z-[70]">
          <Logo className="w-10 h-10 group-hover:rotate-12 transition-transform duration-500" />
          <span className="font-bebas text-3xl tracking-wider text-white">
            FINIX <span className="text-finixRed">FITNESS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-syncopate text-[9px] uppercase tracking-[0.25em] transition-all relative group ${
                  isActive ? 'text-finixRed' : 'text-white/60 hover:text-white'
                }`}
              >
                {link.name}
                <motion.span 
                  initial={false}
                  animate={{ width: isActive ? '100%' : '0%' }}
                  className="absolute -bottom-1 left-0 h-[1.5px] bg-finixRed transition-all duration-300 group-hover:w-full"
                />
              </Link>
            );
          })}
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            aria-label="Toggle light/dark theme"
            className="p-2.5 rounded-full glass hover:bg-finixRed/10 transition-colors ml-4"
          >
            {theme === 'dark' ? (
              <Sun size={18} className="text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
            ) : (
              <Moon size={18} className="text-luxuryBlack" />
            )}
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center gap-4 relative z-[70]">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 glass rounded-lg"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="fixed inset-0 h-screen w-full bg-luxuryBlack/98 z-[50] md:hidden flex flex-col justify-center items-center gap-12 p-6"
          >
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <Link
                  to={link.path}
                  className="font-bebas text-6xl hover:text-finixRed transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={toggleTheme}
              className="mt-8 flex items-center gap-4 font-syncopate text-[10px] tracking-widest text-white/50 border border-white/10 px-6 py-3 rounded-full"
            >
              SWITCH TO {theme === 'dark' ? 'LIGHT' : 'DARK'} MODE
              {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
