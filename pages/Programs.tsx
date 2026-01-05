
import React from 'react';
import { motion as m } from 'framer-motion';
import { Heart, Zap, Dumbbell, Music, ShieldCheck, Apple, BookOpen, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Cast motion to any to bypass environment-specific type checking issues
const motion = m as any;

const SERVICE_ITEMS = [
  { name: 'Aerobics', icon: Zap, img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800' },
  { name: 'High Intensity Workouts', icon: Dumbbell, img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800' },
  { name: 'Dance', icon: Music, img: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800' },
  { name: 'Kick-boxing', icon: ShieldCheck, img: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800' },
];

const SIDEBAR_ITEMS = [
  { name: 'Zumba', icon: Music, img: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Diet', icon: Apple, img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400' },
  { name: 'Kick-boxing', icon: ShieldCheck, img: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=400' },
  { name: 'Counseling', icon: BookOpen, img: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=400' },
  { name: 'Corporate Wellness', icon: Users, img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400' },
];

const Programs = () => {
  return (
    <div className="bg-white dark:bg-luxuryBlack text-luxuryBlack dark:text-white min-h-screen pt-32 md:pt-40 pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* HERO HEADER */}
        <section className="text-center mb-16 md:mb-24">
          <h1 className="font-bebas text-6xl sm:text-8xl md:text-[10rem] leading-none mb-6 text-black dark:text-white">SERVICES</h1>
          <p className="font-syncopate text-finixRed text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold">A One Stop Solution to all HEALTH & HOBBY needs!</p>
        </section>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT CONTENT: SERVICE GRID */}
          <div className="lg:col-span-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {SERVICE_ITEMS.map((item, i) => (
                <motion.div 
                  key={item.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative overflow-hidden group rounded-2xl shadow-lg h-[300px] md:h-[350px] border border-black/5 dark:border-white/5"
                >
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={item.name} />
                  <div className="absolute top-0 left-0 right-0 p-4 flex justify-center">
                    <div className="bg-white/95 dark:bg-luxuryGray/95 backdrop-blur-sm px-6 md:px-8 py-2 rounded-full border border-gray-100 dark:border-white/10 shadow-sm flex items-center gap-2 md:gap-3">
                      <item.icon size={16} className="text-finixRed" />
                      <span className="font-bebas text-xl md:text-2xl tracking-widest uppercase text-black dark:text-white">{item.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:col-span-4 space-y-8 md:space-y-10">
            <div className="bg-softWhite dark:bg-luxuryGray text-black dark:text-white p-8 md:p-12 rounded-[2rem] space-y-6 md:space-y-8 flex flex-col items-center text-center border border-black/5 dark:border-white/5 shadow-sm">
              <p className="font-syncopate text-[8px] md:text-[9px] tracking-widest text-finixRed uppercase font-bold">A one stop solution to all HEALTH & HOBBY needs!</p>
              <Link to="/contact" className="w-full py-4 md:py-5 bg-[#609677] text-white font-bebas text-2xl md:text-3xl tracking-widest rounded hover:brightness-110 transition-all uppercase shadow-lg shadow-[#609677]/20">
                CONTACT
              </Link>
              
              <div className="w-full space-y-4">
                {SIDEBAR_ITEMS.map((item, i) => (
                  <div key={i} className="flex gap-4 items-center bg-black/5 dark:bg-white/5 p-2 md:p-3 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors group cursor-pointer border border-transparent hover:border-finixRed/30">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg overflow-hidden shrink-0">
                      <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt={item.name} />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bebas text-lg md:text-xl uppercase tracking-wider text-black dark:text-white">{item.name}</h4>
                      <p className="text-[7px] md:text-[8px] font-syncopate opacity-40 dark:opacity-30 uppercase tracking-widest font-bold">Premium Program</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* "WORK FOR IT" SECTION */}
            <div className="bg-gradient-to-br from-finixRed to-luxuryBlack text-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group border border-finixRed/20 shadow-2xl">
              <div className="absolute top-0 right-0 p-6 opacity-10 rotate-12 group-hover:rotate-0 transition-transform text-white hidden md:block">
                <Users size={150} />
              </div>
              <h2 className="font-bebas text-5xl md:text-6xl mb-8 md:mb-10 leading-none">WORK FOR IT</h2>
              <ul className="space-y-4 md:space-y-6 relative z-10">
                {[
                  'A to Z of best health practices under one roof',
                  'Sophisticated and International standard equipments',
                  'Planned and structured approach to Fitness',
                  'Well-qualified trainers, nutritionists and counselors',
                  'Special attention to each member',
                  'Friendly and inspiring environment'
                ].map((point, i) => (
                  <li key={i} className="flex gap-3 md:gap-4 text-xs md:text-sm font-jakarta items-start leading-relaxed font-medium">
                    <div className="w-2 h-2 rounded-full bg-white mt-1.5 shrink-0 shadow-lg" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
