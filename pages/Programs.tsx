
import React from 'react';
import { motion as m } from 'framer-motion';
import { Dumbbell, Activity, Target, Zap, Heart, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../App';

const motion = m as any;

const services = [
  { title: "STRENGTH TRAINING", icon: Dumbbell, desc: "Master the iron. Focused on progressive overload and bio-mechanical dominance." },
  { title: "PERSONAL TRAINING", icon: Target, desc: "1-on-1 biological architecture with certified elite performance coaches." },
  { title: "WEIGHT LOSS", icon: Activity, desc: "Advanced metabolic conditioning designed to incinerate body fat." },
  { title: "FUNCTIONAL FLOW", icon: Zap, desc: "Agility, core, and explosive power for real-world dominance." },
  { title: "CARDIO SESSIONS", icon: Heart, desc: "High-oxygen efficiency training for peak cardiovascular resilience." },
  { title: "NUTRITION LAB", icon: Apple, desc: "Precision fueling protocols for high-impact physical output." }
];

const Programs = () => {
  const { theme } = useTheme();

  return (
    <div className={`pt-32 md:pt-40 pb-20 md:pb-32 transition-colors duration-500 min-h-screen ${theme === 'dark' ? 'bg-matteBlack' : 'bg-white'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h1 className={`font-bebas text-6xl md:text-[10rem] uppercase mb-4 leading-none ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>
            THE <span className="text-finixRed">ARCHIVES</span>
          </h1>
          <p className={`font-syncopate text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] font-bold uppercase ${theme === 'dark' ? 'text-white/30' : 'text-matteBlack/40'}`}>
            Choose your protocol. Start your evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border transition-all ${
                theme === 'dark' 
                  ? 'bg-charcoal border-white/5 hover:border-finixRed' 
                  : 'bg-gray-50 border-black/5 hover:border-finixRed'
              }`}
            >
              <div className="text-finixRed mb-6 md:mb-8"><s.icon size={36} /></div>
              <h3 className={`font-bebas text-3xl md:text-4xl mb-3 md:mb-4 tracking-widest ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>{s.title}</h3>
              <p className={`font-jakarta text-[10px] md:text-[11px] uppercase tracking-widest font-black leading-relaxed mb-8 md:mb-10 ${theme === 'dark' ? 'text-white/40' : 'text-matteBlack/50'}`}>
                {s.desc}
              </p>
              <Link to="/contact" className={`inline-block w-full text-center px-8 py-4 font-bebas text-xl md:text-2xl tracking-widest transition-all rounded-full ${
                theme === 'dark' ? 'bg-white text-black hover:bg-finixRed hover:text-white' : 'bg-matteBlack text-white hover:bg-finixRed'
              }`}>
                ENROLL NOW
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
