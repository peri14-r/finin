
import React from 'react';
import { motion as m } from 'framer-motion';
import { ShieldCheck, Globe, Star, Users, Trophy, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

// Cast motion to any to bypass environment-specific type checking issues
const motion = m as any;

const About = () => {
  return (
    <div className="pb-24 pt-40 px-6 bg-white dark:bg-luxuryBlack overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-syncopate text-finixRed text-xs tracking-widest mb-4 uppercase font-bold">About Us</p>
            <h1 className="font-bebas text-6xl md:text-8xl leading-none mb-8 text-black dark:text-white uppercase">
              WE ARE LEADING INTERNATIONAL <span className="text-finixRed">COMPANY IN THE WORLD</span>
            </h1>
            <p className="text-black/70 dark:text-white/60 mb-8 leading-relaxed font-jakarta text-lg font-medium">
              At Finix Fitness Gym, every morsel of feedback is a nugget of shiny gold because it gives us the opportunity to provide the best customer experience. We architect lineages of health and power.
            </p>
            <div className="space-y-8">
              {[
                { title: 'Hygienic Gym & Highly Spacious', desc: 'For your safety and health, a clean workout space and high-quality equipment.', icon: ShieldCheck },
                { title: 'Online & Offline Presence', desc: 'Reach out to us from anywhere and anytime with no compromise in service.', icon: Globe },
                { title: 'Happy Clients - 5 Star Google Rating', desc: 'Proven results with happy customer feedback which is our top priority.', icon: Star }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="p-4 bg-finixRed/5 dark:bg-white/5 rounded-lg text-finixRed group-hover:bg-finixRed group-hover:text-white transition-all shadow-sm">
                    <benefit.icon size={28} />
                  </div>
                  <div>
                    <h3 className="font-bebas text-2xl tracking-widest mb-1 uppercase text-black dark:text-white">{benefit.title}</h3>
                    <p className="text-sm text-black/50 dark:text-white/40 font-jakarta leading-relaxed font-medium">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/programs" className="mt-12 inline-block px-12 py-4 bg-finixRed text-white font-bebas text-2xl tracking-widest rounded hover:bg-black transition-all shadow-lg shadow-finixRed/20">OUR SERVICES</Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-finixRed/5 blur-[120px] rounded-full" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-softWhite dark:border-luxuryGray">
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" className="w-full grayscale hover:grayscale-0 transition-all duration-700" alt="About" />
            </div>
            {/* Stats Overlay */}
            <div className="absolute -bottom-10 -left-10 bg-white dark:bg-luxuryGray p-10 rounded-3xl shadow-2xl border border-black/5 dark:border-white/5 flex gap-10">
              <div className="text-center">
                <p className="font-bebas text-4xl text-finixRed">570+</p>
                <p className="text-[10px] font-syncopate uppercase tracking-widest text-black/40 dark:text-white/60 font-bold">Trainings</p>
              </div>
              <div className="text-center border-l border-black/10 dark:border-white/10 pl-10">
                <p className="font-bebas text-4xl text-finixRed">2000+</p>
                <p className="text-[10px] font-syncopate uppercase tracking-widest text-black/40 dark:text-white/60 font-bold">Clients</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Founders Section */}
        <section className="py-24 border-t border-black/5 dark:border-white/5">
          <div className="text-center mb-20">
            <h2 className="font-bebas text-6xl md:text-8xl text-black dark:text-white uppercase mb-4">ABOUT <span className="text-finixRed">FOUNDERS</span></h2>
            <div className="w-24 h-1 bg-finixRed mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Yashpal', role: 'Founder & Head Coach', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800' },
              { name: 'Aruna', role: 'Co-Founder & Nutrition', img: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800' },
              { name: 'Chetan', role: 'Strength Specialist', img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800' }
            ].map((founder, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-xl"
              >
                <img src={founder.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" alt={founder.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-all" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-bebas text-3xl text-white tracking-widest">{founder.name}</h3>
                  <p className="text-finixRed font-syncopate text-[9px] uppercase tracking-widest mb-4 font-bold">{founder.role}</p>
                  <p className="text-white/60 text-xs font-jakarta opacity-0 group-hover:opacity-100 transition-all duration-500 font-medium">
                    Dedicated to transforming lives through scientific methodology and elite performance coaching.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link to="/contact" className="px-12 py-4 border-2 border-finixRed text-finixRed font-bebas text-2xl tracking-widest rounded-full hover:bg-finixRed hover:text-white transition-all">JOIN THE TEAM</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
