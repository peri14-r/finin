
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, ArrowUp, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from '../constants';
import { useTheme } from '../App';

const Footer = () => {
  const { theme } = useTheme();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={`pt-40 pb-20 px-8 border-t relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-matteBlack border-white/5 text-white' 
        : 'bg-gray-50 border-black/5 text-matteBlack'
    }`}>
      {/* Subtle Glow effect */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-finixRed/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
          {/* Column 1: Brand Power */}
          <div className="lg:col-span-5 space-y-12">
            <Link to="/">
              <Logo theme={theme} className="scale-110" />
            </Link>
            <p className={`font-jakarta text-xl leading-relaxed max-w-md ${
              theme === 'dark' ? 'text-white/40' : 'text-matteBlack/40'
            }`}>
              The gold standard of high-performance human evolution in Bangalore. We don't just train bodies; we architect lineages of power.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className={`p-5 rounded-2xl transition-all group shadow-sm border ${
                    theme === 'dark' 
                      ? 'bg-white/5 border-white/5 text-white hover:bg-finixRed hover:border-finixRed' 
                      : 'bg-black/5 border-black/5 text-matteBlack hover:bg-finixRed hover:text-white hover:border-finixRed'
                  }`}
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className={`font-syncopate text-[10px] tracking-[0.4em] uppercase font-bold ${
              theme === 'dark' ? 'text-white' : 'text-matteBlack'
            }`}>Navigation</h4>
            <ul className="space-y-6">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`}
                    className={`transition-colors font-bebas text-2xl uppercase tracking-tighter ${
                      theme === 'dark' ? 'text-white/40 hover:text-finixRed' : 'text-matteBlack/40 hover:text-finixRed'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Locations */}
          <div className="lg:col-span-2 space-y-10">
            <h4 className={`font-syncopate text-[10px] tracking-[0.4em] uppercase font-bold ${
              theme === 'dark' ? 'text-white' : 'text-matteBlack'
            }`}>Branches</h4>
            <ul className={`space-y-6 font-bebas text-2xl uppercase tracking-tighter ${
              theme === 'dark' ? 'text-white/40' : 'text-matteBlack/40'
            }`}>
              <li className="hover:text-finixRed cursor-pointer transition-colors">Indiranagar</li>
              <li className="hover:text-finixRed cursor-pointer transition-colors">Basavangudi</li>
              <li className="hover:text-finixRed cursor-pointer transition-colors">Global (Online)</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-10">
            <h4 className={`font-syncopate text-[10px] tracking-[0.4em] uppercase font-bold ${
              theme === 'dark' ? 'text-white' : 'text-matteBlack'
            }`}>Connect</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                 <Phone size={18} className="text-finixRed mt-1 group-hover:scale-110 transition-transform" />
                 <a href="tel:+918217500205" className={`font-bebas text-2xl hover:text-finixRed transition-colors ${
                   theme === 'dark' ? 'text-white' : 'text-matteBlack'
                 }`}>+91 82175 00205</a>
              </div>
              <div className="flex items-start gap-4 group">
                 <Mail size={18} className="text-finixRed mt-1 group-hover:scale-110 transition-transform" />
                 <span className={`font-bebas text-2xl ${
                   theme === 'dark' ? 'text-white' : 'text-matteBlack'
                 }`}>transform@finixfitness.in</span>
              </div>
              <div className="flex items-start gap-4 group">
                 <MapPin size={18} className="text-finixRed mt-1 group-hover:scale-110 transition-transform" />
                 <span className={`font-bebas text-2xl ${
                   theme === 'dark' ? 'text-white/40' : 'text-matteBlack/40'
                 }`}>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`flex flex-col md:flex-row justify-between items-center pt-12 border-t gap-8 ${
          theme === 'dark' ? 'border-white/5' : 'border-black/5'
        }`}>
          <p className={`text-[9px] font-syncopate tracking-[0.3em] uppercase ${
            theme === 'dark' ? 'text-white/10' : 'text-matteBlack/20'
          }`}>
            © 2025 FINIX FITNESS LABORATORY. ENGINEERED FOR HIGH IMPACT.
          </p>
          <button
            onClick={scrollToTop}
            className={`group flex items-center gap-6 transition-all ${
              theme === 'dark' ? 'text-white/20 hover:text-white' : 'text-matteBlack/20 hover:text-matteBlack'
            }`}
          >
            <span className="font-syncopate text-[9px] tracking-[0.5em] uppercase">Return to Peak</span>
            <div className={`p-4 rounded-full group-hover:bg-finixRed group-hover:text-white transition-all shadow-sm border ${
              theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'
            }`}>
              <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
