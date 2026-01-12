
import React from 'react';
import { motion as m } from 'framer-motion';
import { Send, MapPin, Phone, Clock } from 'lucide-react';
import { useTheme } from '../App';

const motion = m as any;

const Contact = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen pt-32 md:pt-40 pb-20 md:pb-32 transition-colors duration-500 ${theme === 'dark' ? 'bg-matteBlack text-white' : 'bg-white text-matteBlack'}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left: Branding & Info */}
          <div>
            <span className="font-syncopate text-finixRed text-[10px] tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold mb-4 md:mb-6 block">Ready for Ascent</span>
            <h1 className={`font-bebas text-6xl md:text-[10rem] leading-[0.9] md:leading-[0.85] mb-8 md:mb-12 uppercase font-black ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>
              JOIN THE <br /><span className="text-finixRed">ARCH</span>
            </h1>
            
            <div className="grid gap-6 md:gap-10">
              {[
                { icon: MapPin, title: 'The Arena', info: 'Indiranagar, Bangalore' },
                { icon: Phone, title: 'Hotline', info: '+91 82175 00205' },
                { icon: Clock, title: 'Hours', info: 'MON-SUN: 05:00 - 22:00' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 md:gap-6 items-center">
                  <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl text-finixRed shrink-0 ${theme === 'dark' ? 'bg-white/5' : 'bg-black/5'}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className={`font-bebas text-xl md:text-2xl tracking-widest uppercase ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>{item.title}</h4>
                    <p className={`font-jakarta text-[10px] md:text-sm uppercase tracking-wider font-bold ${theme === 'dark' ? 'text-white/40' : 'text-matteBlack/50'}`}>{item.info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Lead Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] border transition-colors ${
              theme === 'dark' ? 'bg-charcoal border-white/5' : 'bg-gray-50 border-black/10'
            }`}
          >
            <h3 className={`font-bebas text-4xl md:text-5xl mb-8 md:mb-12 uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>ENLIST NOW</h3>
            <form className="space-y-6 md:space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Lead Captured. Welcome to the Tribe.'); }}>
              <div className="space-y-3 md:space-y-4">
                <label className={`font-syncopate text-[7px] md:text-[8px] tracking-widest uppercase font-bold ${theme === 'dark' ? 'text-white/30' : 'text-matteBlack/40'}`}>Identity</label>
                <input 
                  type="text" 
                  placeholder="FULL NAME" 
                  className={`w-full bg-transparent border-b p-3 md:p-4 font-bebas text-xl md:text-2xl tracking-widest focus:border-finixRed outline-none transition-colors ${
                    theme === 'dark' ? 'border-white/10 text-white placeholder-white/20' : 'border-black/10 text-matteBlack placeholder-black/20'
                  }`} 
                  required 
                />
              </div>
              <div className="space-y-3 md:space-y-4">
                <label className={`font-syncopate text-[7px] md:text-[8px] tracking-widest uppercase font-bold ${theme === 'dark' ? 'text-white/30' : 'text-matteBlack/40'}`}>Comm-Link</label>
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className={`w-full bg-transparent border-b p-3 md:p-4 font-bebas text-xl md:text-2xl tracking-widest focus:border-finixRed outline-none transition-colors ${
                    theme === 'dark' ? 'border-white/10 text-white placeholder-white/20' : 'border-black/10 text-matteBlack placeholder-black/20'
                  }`} 
                  required 
                />
              </div>
              <div className="space-y-3 md:space-y-4">
                <label className={`font-syncopate text-[7px] md:text-[8px] tracking-widest uppercase font-bold ${theme === 'dark' ? 'text-white/30' : 'text-matteBlack/40'}`}>Protocol Interests</label>
                <select className={`w-full bg-transparent border-b p-3 md:p-4 font-bebas text-xl md:text-2xl tracking-widest focus:border-finixRed outline-none transition-colors uppercase ${
                  theme === 'dark' ? 'border-white/10 text-white' : 'border-black/10 text-matteBlack'
                }`}>
                  <option className="bg-matteBlack text-white">STRENGTH TRAINING</option>
                  <option className="bg-matteBlack text-white">WEIGHT LOSS</option>
                  <option className="bg-matteBlack text-white">PERSONAL COACHING</option>
                </select>
              </div>
              <button className="w-full py-5 md:py-6 bg-finixRed text-white font-bebas text-3xl md:text-4xl tracking-widest rounded-full hover:bg-black dark:hover:bg-white dark:hover:text-black transition-all flex items-center justify-center gap-4 shadow-xl shadow-finixRed/20">
                SEND PROTOCOL <Send size={20} className="md:size-6" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
