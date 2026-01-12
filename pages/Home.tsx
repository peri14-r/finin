
import React from 'react';
import { motion as m } from 'framer-motion';
import { ArrowRight, Zap, Target, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';

const motion = m as any;

const performanceArchive = [
  { id: 1, title: "STRENGTH TRAINING", sub: "POWER PROTOCOL", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" },
  { id: 2, title: "WEIGHT LOSS", sub: "METABOLIC INCINERATOR", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800" },
  { id: 3, title: "FUNCTIONAL FLOW", sub: "CORE DOMINANCE", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" }
];

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`overflow-x-hidden ${theme === 'dark' ? 'bg-matteBlack' : 'bg-white'}`}>
      {/* 1. CINEMATIC HERO */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-20 dark:opacity-30 scale-105">
            <source src="https://player.vimeo.com/external/494163966.sd.mp4?s=3401777a8b30107769ef79c50009c91350a58e69&profile_id=165" type="video/mp4" />
          </video>
          <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-matteBlack/60 to-matteBlack' : 'bg-gradient-to-b from-transparent via-white/40 to-white'}`} />
        </div>

        <div className="relative z-10 text-center px-4 md:px-6 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-syncopate text-finixRed text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[0.8em] uppercase font-bold mb-4 md:mb-6 block">
              Finix Fitness Bangalore
            </span>
            <h1 className={`font-bebas text-[clamp(3.5rem,14vw,9rem)] leading-[0.85] mb-6 md:mb-8 font-black uppercase ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>
              BUILD STRENGTH <br />
              THAT <span className="text-finixRed text-glow italic">SHOWS</span>
            </h1>
            <p className={`font-jakarta ${theme === 'dark' ? 'text-white/50' : 'text-matteBlack/60'} text-xs md:text-lg max-w-2xl mx-auto mb-10 md:mb-12 uppercase tracking-widest font-semibold px-4`}>
              No shortcuts. No excuses. Just elite biological results for the modern athlete.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <Link to="/contact" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-finixRed text-white font-bebas text-2xl md:text-3xl tracking-widest hover:bg-black transition-all shadow-2xl shadow-finixRed/20">
                JOIN FINIX
              </Link>
              <Link to="/contact" className={`w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 border ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white hover:text-black' : 'border-matteBlack/20 text-matteBlack hover:bg-matteBlack hover:text-white'} font-bebas text-2xl md:text-3xl tracking-widest transition-all`}>
                FREE TRIAL
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR */}
      <section className={`py-12 md:py-20 border-y ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {[
            { label: 'EXPERIENCE', val: '5+ YRS' },
            { label: 'TRANSFORMS', val: '1000+' },
            { label: 'COACHES', val: 'ELITE' },
            { label: 'FACILITIES', val: 'MODERN' }
          ].map((s, i) => (
            <div key={i}>
              <div className={`font-bebas text-4xl md:text-7xl ${theme === 'dark' ? 'text-white' : 'text-matteBlack'} mb-1`}>{s.val}</div>
              <div className={`font-syncopate text-[7px] md:text-[8px] ${theme === 'dark' ? 'text-white/30' : 'text-matteBlack/40'} tracking-[0.2em] md:tracking-[0.3em] font-bold uppercase`}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROGRAMS PREVIEW */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div>
            <span className="font-syncopate text-finixRed text-[10px] tracking-widest font-bold uppercase block mb-2">The Protocol</span>
            <h2 className={`font-bebas text-5xl md:text-9xl uppercase leading-none ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>ELITE ARCHIVES</h2>
          </div>
          <Link to="/programs" className={`flex items-center gap-4 font-bebas text-xl md:text-2xl tracking-widest hover:text-finixRed transition-colors ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>
            VIEW ALL <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {performanceArchive.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden ${theme === 'dark' ? 'bg-charcoal' : 'bg-gray-100'} rounded-[2rem] md:rounded-[2.5rem]`}
            >
              <div className="scanner-line" />
              <img src={p.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-110 group-hover:grayscale-0 transition-all duration-700" alt={p.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-x-6 md:inset-x-8 bottom-6 md:bottom-8">
                <span className="font-syncopate text-[7px] md:text-[8px] text-finixRed tracking-[0.3em] font-bold block mb-2 uppercase">{p.sub}</span>
                <h3 className="font-bebas text-3xl md:text-4xl text-white tracking-widest mb-3 md:mb-4">{p.title}</h3>
                <Link to="/contact" className="inline-flex items-center gap-2 font-syncopate text-[7px] md:text-[8px] tracking-widest font-bold text-white/70 hover:text-finixRed transition-colors uppercase">
                  SECURE ACCESS <ArrowRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. WHY FINIX */}
      <section className={`py-20 md:py-32 ${theme === 'dark' ? 'bg-charcoal' : 'bg-gray-50'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden order-2 lg:order-1">
               <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover grayscale" alt="Gym" />
               <div className="absolute inset-0 bg-finixRed/10 mix-blend-overlay" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className={`font-bebas text-5xl md:text-8xl mb-8 md:mb-12 uppercase leading-none ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>THE <span className="text-finixRed">FINIX</span> EDGE</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">
                {[
                  { title: "ELITE COACHES", desc: "Certified specialists in biomechanical dominance.", icon: Star },
                  { title: "STRUCTURED PLANS", desc: "Data-driven methodology for measurable progress.", icon: Target },
                  { title: "MODERN EQUIPMENT", desc: "High-spec industrial machines for peak resistance.", icon: Zap },
                  { title: "RESULTS CULTURE", desc: "An arena of high-impact discipline and focus.", icon: Shield }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 items-start">
                    <div className="p-3 md:p-4 bg-finixRed rounded-xl md:rounded-2xl text-white shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className={`font-bebas text-2xl md:text-3xl tracking-widest mb-1 ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>{item.title}</h4>
                      <p className={`font-jakarta ${theme === 'dark' ? 'text-white/40' : 'text-matteBlack/50'} text-[10px] md:text-sm uppercase tracking-wider font-bold`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS */}
      <section className="py-20 md:py-32 container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className={`font-bebas text-6xl md:text-9xl uppercase ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>LEGACIES</h2>
          <div className="w-16 md:w-20 h-1 bg-finixRed mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className={`p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-black/5 border-black/5'}`}>
              <div className="flex gap-1 text-finixRed mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
              </div>
              <p className={`font-jakarta text-base md:text-lg italic mb-8 leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-matteBlack/70'}`}>
                "Finix isn't just a gym; it's where I rebuilt my entire lifestyle. The discipline here is infectious. Down 15kg of fat, up 100% in confidence."
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
                <div>
                  <h4 className={`font-bebas text-lg md:text-xl tracking-widest uppercase ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>Member {i+1}</h4>
                  <span className="text-[9px] font-syncopate text-finixRed font-bold uppercase tracking-widest">Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-20 md:py-40 text-center px-4 md:px-6">
        <h2 className={`font-bebas text-5xl md:text-[10rem] mb-8 md:mb-12 uppercase leading-[0.9] md:leading-[0.8] ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>STOP WAITING. <br /><span className="text-finixRed">START RISING.</span></h2>
        <Link to="/contact" className="inline-block px-10 md:px-20 py-6 md:py-10 bg-finixRed text-white font-bebas text-3xl md:text-5xl tracking-widest rounded-full hover:scale-105 transition-transform shadow-2xl shadow-finixRed/30">
          SECURE YOUR SPOT
        </Link>
      </section>
    </div>
  );
};

export default Home;
