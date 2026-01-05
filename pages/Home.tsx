
import React from 'react';
import { motion as m } from 'framer-motion';
import { ArrowRight, MapPin, Video, Monitor, Dumbbell, Apple, LayoutGrid, Zap, Target, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Cast motion to any to bypass environment-specific type checking issues
const motion = m as any;

const Home = () => {
  return (
    <div className="overflow-hidden bg-white dark:bg-luxuryBlack">
      {/* 1. HERO SECTION - Refined for production stability */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black pt-28 pb-20 lg:py-0">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1920"
            alt="Elite Gym Interior"
            className="w-full h-full object-cover brightness-[0.9] dark:brightness-[0.4]"
          />
          <div className="absolute inset-0 bg-white/40 dark:bg-black/60" />
        </div>
        
        {/* Decorative thin border frame */}
        <div className="absolute inset-0 z-10 hidden md:flex items-center justify-center pointer-events-none p-8 lg:p-12">
          <div className="w-full h-full max-w-[1500px] border border-black/10 dark:border-white/10 rounded-sm"></div>
        </div>

        <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 lg:px-16 flex flex-col lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left w-full"
          >
            <p className="font-syncopate text-finixRed text-[10px] md:text-xs tracking-[0.4em] uppercase mb-6 font-bold">Build Your Dream Success</p>
            <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] leading-[0.9] lg:leading-[0.82] mb-8 lg:mb-12 font-bold uppercase tracking-tight">
              <span className="text-luxuryBlack dark:text-white drop-shadow-sm">BUILD YOUR</span> <br />
              <span className="text-finixRed drop-shadow-lg">DREAM SUCCESS</span>
            </h1>
            <p className="font-jakarta text-black/80 dark:text-white/70 text-sm md:text-base lg:text-lg max-w-lg mb-10 lg:mb-14 uppercase tracking-[0.1em] leading-relaxed font-semibold">
              When you have a clear vision you're less likely to take the first step toward it. Let us be your catalyst for evolution.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-10">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 lg:px-14 py-5 lg:py-6 bg-finixRed text-white font-bebas text-2xl lg:text-3xl tracking-widest rounded-sm hover:brightness-110 transition-all flex items-center justify-center gap-4 group uppercase shadow-2xl shadow-finixRed/40"
              >
                JOIN US <ArrowRight size={24} className="group-hover:translate-x-3 transition-transform" />
              </Link>
              <Link
                to="/programs"
                className="font-bebas text-xl lg:text-2xl tracking-widest text-black/80 dark:text-white/80 hover:text-finixRed transition-colors uppercase border-b-2 border-transparent hover:border-finixRed"
              >
                VIEW PROGRAMS
              </Link>
            </div>
          </motion.div>

          {/* Promotional Cards */}
          <div className="lg:col-span-5 hidden md:flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-8 relative w-full">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="bg-black/90 p-1 rounded-3xl group overflow-hidden shadow-2xl border border-white/5 flex-1"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0" 
                  alt="Protocol" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-6 lg:p-10 flex flex-col justify-end">
                  <h3 className="font-bebas text-3xl lg:text-4xl text-white tracking-widest leading-none mb-2 uppercase">DON'T JUST DREAM, DO IT</h3>
                  <p className="text-[10px] font-syncopate text-finixRed tracking-[0.3em] font-bold uppercase">TRANSFORMATION PROTOCOLS</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="bg-black/90 p-1 rounded-3xl group overflow-hidden shadow-2xl border border-finixRed/20 flex-1"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110" 
                  alt="Personal Training" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-finixRed/90 via-transparent to-transparent p-6 lg:p-10 flex flex-col justify-end">
                  <h3 className="font-bebas text-3xl lg:text-4xl text-white tracking-widest leading-none mb-2 uppercase">PERSONAL TRAINING</h3>
                  <p className="text-[10px] font-syncopate text-white tracking-[0.3em] font-bold uppercase opacity-80">OFFER VALID TILL 10TH AUG</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. LEGACY SECTION */}
      <section className="bg-finixRed py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-black/5 -skew-x-12 translate-x-32 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="font-syncopate text-[10px] tracking-[0.5em] uppercase opacity-70 mb-4 block">Build Your Dream</span>
            <h2 className="font-bebas text-6xl md:text-8xl leading-none mb-8">10+ YEARS OF <br />UNDEFEATED SUCCESS</h2>
            <p className="font-jakarta text-lg mb-10 opacity-90 leading-relaxed max-w-lg mx-auto lg:mx-0">
              It's the time to cut down your calories by taking a step to reach us. Exercising indeed makes you feel fresh and boosts your enthusiasm. Our legacy is built on thousands of transformations.
            </p>
            <Link to="/contact" className="px-10 py-4 bg-white text-finixRed font-bebas text-xl tracking-widest hover:bg-black hover:text-white transition-all inline-block uppercase">JOIN US</Link>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { label: 'Personal Trainings', val: '570+', icon: Target },
              { label: 'Years Experience', val: '10+', icon: Star },
              { label: 'Online Sessions', val: '1020+', icon: Video },
              { label: 'Happy Customers', val: '2000+', icon: Zap }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-luxuryGray p-8 rounded-2xl flex flex-col items-center justify-center text-center group hover:shadow-2xl transition-all border border-black/5 dark:border-white/5"
              >
                <stat.icon className="text-finixRed mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="font-bebas text-5xl text-black dark:text-white mb-1">{stat.val}</h3>
                <p className="font-syncopate text-[8px] text-black/40 dark:text-white/40 uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LOCATIONS SECTION */}
      <section className="py-24 bg-white dark:bg-luxuryBlack px-6 red-mesh">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-bebas text-6xl md:text-8xl mb-4 text-black dark:text-white uppercase"
          >
            WE ARE <span className="text-finixRed">LOCATED IN</span>
          </motion.h2>
          <p className="text-black/50 dark:text-white/40 font-jakarta italic mb-16 max-w-2xl mx-auto font-medium">
            We are here to support you in that first step. We want you to live a fit and healthy lifestyle!
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Indiranagar', type: 'Physical Lab', icon: MapPin },
              { name: 'Online', type: 'Global Training', icon: Video },
              { name: 'Basavangudi', type: 'Physical Lab', icon: MapPin }
            ].map((loc, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-luxuryGray p-12 rounded-[2rem] flex flex-col items-center gap-6 group border border-black/10 dark:border-white/5 hover:border-finixRed dark:hover:border-finixRed transition-all shadow-sm hover:shadow-xl"
              >
                <div className="p-6 bg-finixRed/5 rounded-full group-hover:bg-finixRed transition-colors">
                  <loc.icon className="text-finixRed group-hover:text-white" size={32} />
                </div>
                <h3 className="font-bebas text-3xl text-black dark:text-white tracking-widest uppercase">{loc.name}</h3>
                <p className="font-syncopate text-[9px] text-black/40 dark:text-white/30 tracking-[0.3em] uppercase font-bold">{loc.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
