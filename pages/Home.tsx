
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useInView } from 'framer-motion';
import { ArrowRight, Trophy, Users, Star, Timer, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

/**
 * Sub-component for animated numerical count-up
 */
const AnimatedNumber = ({ value }: { value: string }) => {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');
  const isFloat = value.includes('.');
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 40, stiffness: 80 });
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, motionValue, numericValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(isFloat ? latest.toFixed(1) : Math.floor(latest).toLocaleString());
    });
  }, [springValue, isFloat]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const CounterCard = ({ value, label, icon: Icon }: { value: string, label: string, icon: LucideIcon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center p-8 glass rounded-3xl group hover:border-finixRed/40 transition-colors"
    >
      <div className="p-4 bg-finixRed/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
        <Icon className="text-finixRed" size={32} />
      </div>
      <h3 className="font-bebas text-5xl mb-2">
        <AnimatedNumber value={value} />
      </h3>
      <p className="font-syncopate text-[10px] text-white/50 tracking-widest text-center">{label}</p>
    </motion.div>
  );
};

const Home = () => {
  const [heroOpacity, setHeroOpacity] = useState(0.5);
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 200]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[95vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
            alt="Premium Gym Interior"
            className="w-full h-[120%] object-cover scale-110"
            loading="eager"
          />
        </motion.div>

        {/* Dynamic Atmosphere Overlay */}
        <div
          className="absolute inset-0 z-10 bg-black transition-opacity duration-500 pointer-events-none"
          style={{ opacity: 1 - heroOpacity }}
        />
        
        {/* Subtle Gradient Shadow */}
        <div className="absolute inset-0 z-15 bg-gradient-to-b from-luxuryBlack/40 via-transparent to-luxuryBlack pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0px' }}
            animate={{ opacity: 1, letterSpacing: '8px' }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-syncopate text-finixRed text-xs md:text-sm uppercase mb-6"
          >
            15+ Years of Excellence | 10,000+ Transformations
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="font-bebas text-7xl md:text-[8rem] lg:text-[10rem] leading-[0.9] mb-8 text-glow select-none"
          >
            BUILD YOUR <br />
            <span className="text-finixRed italic">DREAM SUCCESS</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/contact"
              className="px-10 py-5 bg-finixRed text-white font-bebas text-xl tracking-widest rounded-full hover:bg-white hover:text-luxuryBlack transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-finixRed/20"
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

        {/* Atmosphere Intensity Controller */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-full max-w-[280px] px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="glass p-4 rounded-2xl flex flex-col gap-2 shadow-2xl"
          >
            <div className="flex justify-between font-syncopate text-[8px] uppercase tracking-wider text-white/50">
              <span>ATMOSPHERE INTENSITY</span>
              <span className="text-finixRed">{Math.round(heroOpacity * 100)}%</span>
            </div>
            <input
              type="range"
              min="0.2"
              max="1"
              step="0.01"
              value={heroOpacity}
              onChange={(e) => setHeroOpacity(parseFloat(e.target.value))}
              aria-label="Adjust hero background intensity"
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-finixRed hover:accent-finixRed/80 transition-all"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <CounterCard icon={Timer} value="15+" label="YEARS EXPERIENCE" />
          <CounterCard icon={Users} value="10k+" label="MEMBERS TRANSFORMED" />
          <CounterCard icon={Trophy} value="50+" label="EXPERT TRAINERS" />
          <CounterCard icon={Star} value="5.0" label="STARS RATING" />
        </div>
      </section>

      {/* Kinetic Text Banner */}
      <section className="py-16 bg-finixRed overflow-hidden relative shadow-[0_0_50px_rgba(255,0,60,0.3)]">
        <motion.div
          animate={{ x: [-1000, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="font-bebas text-8xl text-white/15 italic select-none">
              UNLEASH THE BEAST • NO EXCUSES • FINIX PERFORMANCE • ELITE LEVEL •
            </span>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
