
import React from 'react';
import { motion as m } from 'framer-motion';
import { Shield, Zap, Target, Users } from 'lucide-react';
import { useTheme } from '../App';

const motion = m as any;

const About = () => {
  const { theme } = useTheme();

  return (
    <div className={`pt-40 pb-20 transition-colors duration-500 ${theme === 'dark' ? 'bg-matteBlack' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        {/* Story */}
        <section className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="font-syncopate text-finixRed text-[10px] tracking-[0.5em] uppercase font-bold mb-6 block">Our Heritage</span>
            <h1 className={`font-bebas text-7xl md:text-9xl mb-10 leading-none uppercase ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>
              BUILT FOR THE <br /><span className="text-finixRed">RELENTLESS</span>
            </h1>
            <p className={`font-jakarta text-lg uppercase tracking-widest leading-relaxed mb-10 font-bold ${theme === 'dark' ? 'text-white/40' : 'text-matteBlack/50'}`}>
              FINIX FITNESS was built for people who take training seriously. We don't do trends. We don't do soft. We focus on discipline, consistency, and measurable progress.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className={`p-8 rounded-[2rem] ${theme === 'dark' ? 'bg-charcoal' : 'bg-gray-100'}`}>
                 <h4 className="font-bebas text-4xl text-finixRed mb-2">MISSION</h4>
                 <p className={`font-jakarta text-[10px] uppercase font-black leading-tight ${theme === 'dark' ? 'text-white/50' : 'text-matteBlack/60'}`}>
                  Strong bodies. Strong habits. Strong confidence.
                 </p>
              </div>
              <div className={`p-8 rounded-[2rem] ${theme === 'dark' ? 'bg-charcoal' : 'bg-gray-100'}`}>
                 <h4 className="font-bebas text-4xl text-finixRed mb-2">VISION</h4>
                 <p className={`font-jakarta text-[10px] uppercase font-black leading-tight ${theme === 'dark' ? 'text-white/50' : 'text-matteBlack/60'}`}>
                  The international standard for human evolution.
                 </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-[3rem] grayscale" alt="Training" />
            <div className="absolute inset-0 scanner-line" />
          </div>
        </section>

        {/* Values */}
        <section className={`py-20 border-t ${theme === 'dark' ? 'border-white/5' : 'border-black/5'}`}>
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'DISCIPLINE', icon: Shield },
              { label: 'CONSISTENCY', icon: Target },
              { label: 'ACCOUNTABILITY', icon: Users },
              { label: 'PROGRESS', icon: Zap }
            ].map((v, i) => (
              <div key={i}>
                <div className="flex justify-center mb-6 text-finixRed"><v.icon size={48} /></div>
                <h4 className={`font-bebas text-4xl tracking-widest ${theme === 'dark' ? 'text-white' : 'text-matteBlack'}`}>{v.label}</h4>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
