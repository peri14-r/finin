
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM_MEMBERS } from '../constants';
import { Linkedin, Instagram, Twitter } from 'lucide-react';

const About = () => {
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="py-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-bebas text-8xl md:text-[10rem] mb-6"
        >
          15 YEARS OF <span className="text-finixRed">EXCELLENCE</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-white/60 text-lg"
        >
          From a small basement studio in Bangalore to the city's most prestigious fitness sanctuary, our journey has been fueled by one obsession: results.
        </motion.p>
      </section>

      {/* Legacy Story */}
      <section className="max-w-4xl mx-auto px-6 py-20 space-y-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-bebas text-5xl mb-6">THE LEGACY</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Founded in 2010 by Yashpal, Finix Fitness was born out of a frustration with the cookie-cutter approach to fitness. We believed that elite-level training shouldn't just be for pro athletes.
            </p>
            <p className="text-white/70 leading-relaxed">
              Today, we stand as Bangalore's premier performance hub, combining world-class equipment with a scientific approach to wellness that respects the individuality of every member.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-finixRed/20 blur-3xl group-hover:bg-finixRed/30 transition-all duration-500 rounded-full" />
            <img src="https://picsum.photos/seed/legacy/600/600" alt="Legacy" className="relative rounded-3xl grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ y: -10 }}
          className="glass p-12 rounded-[3rem]"
        >
          <h3 className="font-bebas text-4xl text-finixRed mb-4 tracking-wider uppercase">Our Mission</h3>
          <p className="text-white/70 text-lg">To provide the most sophisticated training environment in Bangalore, empowering our community through education, technology, and unyielding support.</p>
        </motion.div>
        <motion.div
          whileHover={{ y: -10 }}
          className="glass p-12 rounded-[3rem] border-finixRed/30"
        >
          <h3 className="font-bebas text-4xl text-finixRed mb-4 tracking-wider uppercase">Our Vision</h3>
          <p className="text-white/70 text-lg">To redefine the fitness landscape in India, creating a global standard for human performance and longevity.</p>
        </motion.div>
      </section>

      {/* Team - The Architects */}
      <section className="py-24 px-6 bg-luxuryGray/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-syncopate text-xs tracking-[0.5em] text-finixRed mb-4">THE ARCHITECTS</h2>
            <h3 className="font-bebas text-7xl uppercase">Meet Our Elite Team</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group relative"
              >
                <div className="relative h-[500px] overflow-hidden rounded-[2rem]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxuryBlack via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="font-bebas text-4xl text-white mb-1">{member.name}</h4>
                    <p className="font-syncopate text-[10px] text-finixRed tracking-widest uppercase mb-4">{member.title}</p>
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Instagram size={18} className="cursor-pointer hover:text-finixRed" />
                      <Linkedin size={18} className="cursor-pointer hover:text-finixRed" />
                      <Twitter size={18} className="cursor-pointer hover:text-finixRed" />
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-4">
                  <p className="text-white/50 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
