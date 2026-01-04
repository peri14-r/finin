
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Trophy, Users, Star, Timer } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counter = ({ value, label, icon: Icon }: { value: string, label: string, icon: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center p-8 glass rounded-3xl"
    >
      <div className="p-4 bg-finixRed/10 rounded-2xl mb-4">
        <Icon className="text-finixRed" size={32} />
      </div>
      <h3 className="font-bebas text-5xl mb-2">{value}</h3>
      <p className="font-syncopate text-[10px] text-white/50 tracking-widest text-center">{label}</p>
    </motion.div>
  );
};

const Home = () => {
  const [heroOpacity, setHeroOpacity] = useState(0.4);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: y1 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
            alt="Gym Hero"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>

        {/* Overlay Overlay */}
        <div
          className="absolute inset-0 z-10 bg-black transition-opacity duration-300 pointer-events-none"
          style={{ opacity: 1 - heroOpacity }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-luxuryBlack via-transparent to-transparent pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0px' }}
            animate={{ opacity: 1, letterSpacing: '8px' }}
            transition={{ duration: 1 }}
            className="font-syncopate text-finixRed text-xs md:text-sm uppercase mb-6"
          >
            15+ Years of Excellence | 10,000+ Transformations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-bebas text-7xl md:text-[9rem] leading-none mb-8 text-glow"
          >
            BUILD YOUR <span className="text-finixRed">DREAM SUCCESS</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/contact"
              className="px-10 py-5 bg-finixRed text-white font-bebas text-xl tracking-widest rounded-full hover:bg-white hover:text-luxuryBlack transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Join The Legacy <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link
              to="/programs"
              className="px-10 py-5 glass text-white font-bebas text-xl tracking-widest rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
            >
              Explore Programs
            </Link>
          </motion.div>
        </div>

        {/* Opacity Slider */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-full max-w-xs px-6">
          <div className="glass p-4 rounded-2xl flex flex-col gap-2">
            <div className="flex justify-between font-syncopate text-[8px] uppercase tracking-tighter text-white/50">
              <span>ATMOSPHERE INTENSITY</span>
              <span>{Math.round(heroOpacity * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="1"
              step="0.01"
              value={heroOpacity}
              onChange={(e) => setHeroOpacity(parseFloat(e.target.value))}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-finixRed"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter icon={Timer} value="15+" label="YEARS EXPERIENCE" />
          <Counter icon={Users} value="10k+" label="MEMBERS TRANSFORMED" />
          <Counter icon={Trophy} value="50+" label="EXPERT TRAINERS" />
          <Counter icon={Star} value="5.0" label="STARS RATING" />
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="py-20 bg-finixRed overflow-hidden relative">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-bebas text-8xl text-white/20 italic">UNLEASH THE BEAST • NO EXCUSES • FINIX PERFORMANCE • ELITE LEVEL •</span>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
