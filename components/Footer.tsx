
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Send, ArrowUp } from 'lucide-react';
import { Logo } from '../constants';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-luxuryGray pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-finixRed/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <Logo className="w-12 h-12" />
              <span className="font-bebas text-4xl tracking-wider text-white">FINIX <span className="text-finixRed">FITNESS</span></span>
            </Link>
            <p className="text-white/40 leading-relaxed">
              The gold standard of high-performance fitness in Bangalore. Elevate your potential with science-backed training and elite aesthetics.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="p-3 glass rounded-full hover:bg-finixRed transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-syncopate text-xs tracking-widest text-white mb-8">QUICK NAVIGATION</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Programs', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/50 hover:text-finixRed transition-colors font-jakarta"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-syncopate text-xs tracking-widest text-white mb-8">CONNECT</h4>
            <ul className="space-y-4 text-white/50">
              <li>123 MG Road, Bangalore</li>
              <li>+91 98765 43210</li>
              <li>transform@finixfitness.in</li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-syncopate text-xs tracking-widest text-white mb-8">GET PERFORMANCE UPDATES</h4>
            <div className="relative group">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:border-finixRed focus:bg-white/10 transition-all outline-none"
              />
              <button className="absolute right-2 top-2 p-2 bg-finixRed rounded-full hover:bg-white hover:text-luxuryBlack transition-all">
                <Send size={18} />
              </button>
            </div>
            <p className="mt-4 text-[10px] text-white/30 uppercase tracking-widest">JOIN THE 10,000+ ELITE MEMBERSHIP</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <p className="text-white/30 text-xs font-jakarta">© 2025 FINIX FITNESS. ALL RIGHTS RESERVED. DESIGNED FOR PERFORMANCE.</p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-white/30 hover:text-white transition-colors"
          >
            <span className="font-syncopate text-[10px] tracking-widest">BACK TO TOP</span>
            <div className="p-2 glass rounded-full group-hover:bg-finixRed transition-colors">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
