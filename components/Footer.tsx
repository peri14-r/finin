
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from '../constants';
import { useTheme } from '../App';

const Footer = () => {
  const { theme } = useTheme();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white dark:bg-luxuryBlack pt-40 pb-20 px-8 border-t border-black/5 dark:border-white/5 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-finixRed/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Column 1: Brand Power */}
          <div className="lg:col-span-5 space-y-12">
            <Link to="/">
              <Logo theme={theme} className="scale-110" />
            </Link>
            <p className="font-jakarta text-xl text-black/40 dark:text-white/40 leading-relaxed max-w-md">
              The gold standard of high-performance human evolution in Bangalore. We don't just train bodies; we architect lineages of power.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="p-5 bg-softWhite dark:bg-luxuryGray rounded-2xl hover:bg-finixRed hover:text-white transition-all group shadow-sm border border-black/5 dark:border-white/5">
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className="font-syncopate text-[10px] tracking-[0.4em] text-black dark:text-white uppercase font-bold">Navigation</h4>
            <ul className="space-y-6">
              {['Home', 'About', 'Services', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className="text-black/40 dark:text-white/40 hover:text-finixRed transition-colors font-bebas text-2xl uppercase tracking-tighter"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className="font-syncopate text-[10px] tracking-[0.4em] text-black dark:text-white uppercase font-bold">Branches</h4>
            <ul className="space-y-6 text-black/40 dark:text-white/40 font-bebas text-2xl uppercase tracking-tighter">
              <li className="hover:text-finixRed cursor-pointer transition-colors">Indiranagar</li>
              <li className="hover:text-finixRed cursor-pointer transition-colors">Basavangudi</li>
              <li className="hover:text-finixRed cursor-pointer transition-colors">Global (Online)</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className="font-syncopate text-[10px] tracking-[0.4em] text-black dark:text-white uppercase font-bold">Connect</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                 <Phone size={18} className="text-finixRed mt-1 group-hover:scale-110 transition-transform" />
                 <a href="tel:+918217500205" className="font-bebas text-2xl text-black dark:text-white hover:text-finixRed transition-colors">+91 82175 00205</a>
              </div>
              <div className="flex items-start gap-4 group">
                 <Mail size={18} className="text-finixRed mt-1 group-hover:scale-110 transition-transform" />
                 <span className="font-bebas text-2xl text-black dark:text-white">transform@finixfitness.in</span>
              </div>
              <div className="flex items-start gap-4 group">
                 <MapPin size={18} className="text-finixRed mt-1 group-hover:scale-110 transition-transform" />
                 <span className="font-bebas text-2xl text-black/60 dark:text-white/40">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-black/5 dark:border-white/5 gap-8">
          <p className="text-black/10 dark:text-white/10 text-[9px] font-syncopate tracking-[0.3em] uppercase">
            © 2025 FINIX FITNESS LABORATORY. ENGINEERED FOR HIGH IMPACT.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-6 text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white transition-all"
          >
            <span className="font-syncopate text-[9px] tracking-[0.5em] uppercase">Return to Peak</span>
            <div className="p-4 bg-softWhite dark:bg-luxuryGray rounded-full group-hover:bg-finixRed group-hover:text-white transition-all shadow-sm border border-black/5 dark:border-white/5">
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
