
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap } from 'lucide-react';
import { PROGRAMS_DATA } from '../constants';

const Programs = () => {
  return (
    <div className="pb-24">
      <section className="py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-bebas text-8xl md:text-[12rem] mb-6 leading-none"
        >
          ELITE <span className="text-finixRed italic">PROGRAMS</span>
        </motion.h1>
        <p className="font-syncopate text-[10px] tracking-[0.4em] text-white/50">PRECISION ENGINEERED FOR HUMAN PERFORMANCE</p>
      </section>

      <div className="space-y-32 mt-12">
        {PROGRAMS_DATA.map((program, idx) => (
          <section
            key={program.id}
            className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 max-w-7xl mx-auto px-6`}
          >
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-[60%] h-[500px] relative rounded-[3rem] overflow-hidden"
            >
              <img
                src={program.image}
                alt={program.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-luxuryBlack/20 group-hover:bg-transparent transition-all" />
              <div className="absolute top-8 left-8 glass px-4 py-2 rounded-full flex items-center gap-2">
                <Zap size={16} className="text-finixRed" />
                <span className="font-syncopate text-[10px] tracking-widest">{program.intensity} Intensity</span>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full md:w-[40%] space-y-8"
            >
              <div>
                <h2 className="font-bebas text-7xl leading-tight mb-4">{program.name}</h2>
                <p className="text-white/60 text-lg leading-relaxed">{program.description}</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-syncopate text-[10px] tracking-widest text-finixRed">KEY BENEFITS</h4>
                <div className="grid grid-cols-1 gap-3">
                  {program.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-finixRed shrink-0" size={20} />
                      <span className="text-white/80">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-white/10">
                <div className="flex flex-col">
                  <span className="font-syncopate text-[8px] text-white/40 tracking-widest uppercase">Duration</span>
                  <span className="font-bebas text-2xl tracking-widest">{program.duration}</span>
                </div>
                <button className="px-8 py-4 bg-white text-luxuryBlack font-bebas text-xl tracking-widest rounded-full hover:bg-finixRed hover:text-white transition-all duration-300">
                  Enroll Now
                </button>
              </div>
            </motion.div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Programs;
