
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion as m, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Instagram, Youtube, Facebook, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../App';
import { Logo } from '../constants';

// Cast motion to any to bypass environment-specific type checking issues
const motion = m as any;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/programs' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-[100]">
      {/* Top Utility Bar */}
      <div className={`py-1 hidden md:block border-b transition-colors duration-300 ${scrolled ? 'bg-white dark:bg-luxuryBlack border-black/5 dark:border-white/5' : 'bg-black/20 border-white/10'}`}>
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center text-[10px] font-jakarta">
          <div className="flex items-center gap-2">
            <Phone size={10} className="text-finixRed rotate-90" />
            <span className={`tracking-widest uppercase font-bold ${scrolled ? 'text-black/60 dark:text-white/60' : 'text-white/80'}`}>
              MAKE A CALL: <a href="tel:+918217500205" className="hover:text-finixRed">+91 82175 00205</a>
            </span>
          </div>
          <div className={`flex items-center gap-4 ${scrolled ? 'text-black/40 dark:text-white/40' : 'text-white/60'}`}>
            <Facebook size={12} className="hover:text-finixRed cursor-pointer" />
            <Youtube size={12} className="hover:text-finixRed cursor-pointer" />
            <Instagram size={12} className="hover:text-finixRed cursor-pointer" />
            <Search size={12} className="hover:text-finixRed cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-white/95 dark:bg-luxuryBlack/95 backdrop-blur-md shadow-sm' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="hover:opacity-90 transition-opacity">
              <Logo className="scale-100" theme={theme} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <div className="flex gap-8 lg:gap-12">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`font-jakarta text-[11px] font-bold tracking-[0.1em] transition-all relative group py-2 ${
                      isActive 
                        ? 'text-finixRed' 
                        : (scrolled ? 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white' : (theme === 'light' ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'))
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span 
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 h-[2px] bg-finixRed w-full"
                      />
                    )}
                  </Link>
                );
              })}
            </div>
            
            <div className="flex items-center gap-6 border-l border-black/10 dark:border-white/10 pl-8">
              {/* Theme Toggle Button */}
              <button 
                onClick={toggleTheme}
                className={`p-2.5 rounded-full border transition-all ${scrolled ? 'border-black/5 dark:border-white/10 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5' : (theme === 'light' ? 'border-black/10 text-black hover:bg-black/5' : 'border-white/10 text-white hover:bg-white/10')}`}
                aria-label="Toggle Theme"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  </motion.div>
                </AnimatePresence>
              </button>

              <Link to="/contact" className="px-10 py-3.5 bg-finixRed text-white font-bebas text-xl tracking-widest rounded-sm hover:brightness-110 transition-all uppercase shadow-lg shadow-finixRed/20">
                ENQUIRE
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full ${scrolled ? 'text-black dark:text-white' : (theme === 'light' ? 'text-black' : 'text-white')}`}
            >
              {theme === 'light' ? <Moon size={22} /> : <Sun size={22} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${scrolled ? 'text-black dark:text-white' : (theme === 'light' ? 'text-black' : 'text-white')}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 h-screen w-full bg-white dark:bg-luxuryBlack z-[120] flex flex-col justify-center items-center gap-10 p-6"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-10 right-10 text-black dark:text-white"><X size={32}/></button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-bebas text-6xl text-black dark:text-white hover:text-finixRed transition-colors uppercase"
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={toggleTheme}
              className="mt-8 px-12 py-5 border-2 border-finixRed text-finixRed font-bebas text-2xl tracking-widest rounded-full flex items-center gap-4 uppercase"
            >
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
