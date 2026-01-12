
import React from 'react';
import { TeamMember, Program } from './types';

export const Logo = ({ className = "w-auto h-12", theme = "dark" }: { className?: string, theme?: 'light' | 'dark' }) => {
  const logoUrl = "https://res.cloudinary.com/dbgurk9kg/image/upload/v1768221269/1-1-300x231_lnlav2.jpg";

  return (
    <div className={`flex items-center gap-3 ${className} transition-all duration-500`}>
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={logoUrl} 
          alt="FINIX FITNESS" 
          className={`h-10 w-auto lg:h-12 object-contain transition-all duration-500 ${
            theme === 'dark' 
              ? 'brightness-110 contrast-110 shadow-[0_0_15px_rgba(255,255,255,0.1)]' 
              : 'brightness-100 contrast-125'
          }`}
        />
      </div>
      <div className="flex flex-col leading-[1] pt-0.5 text-left">
        <div className="flex items-baseline gap-1">
          <span className={`font-bebas text-2xl lg:text-3xl tracking-tighter uppercase transition-colors duration-500 ${
            theme === 'dark' ? 'text-white' : 'text-matteBlack'
          }`}>FINIX</span>
          <span className="font-bebas text-2xl lg:text-3xl tracking-tighter uppercase text-finixRed">FITNESS</span>
        </div>
        <span className={`text-[7px] lg:text-[8px] font-syncopate tracking-[0.4em] uppercase font-bold transition-opacity duration-500 ${
          theme === 'dark' ? 'opacity-50 text-white' : 'opacity-60 text-matteBlack'
        }`}>EST. 2014</span>
      </div>
    </div>
  );
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Yashpal",
    title: "Chief Performance Architect",
    bio: "Pioneering the landscape of elite fitness for over 15 years. Specialized in high-performance metabolic conditioning.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Aruna",
    title: "Nutritional Strategy Director",
    bio: "Optimizing physiological output through data-driven nutritional protocols for high-impact executives.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Chetan",
    title: "Elite Strength Coach",
    bio: "Focused on bio-mechanical efficiency and advanced hypertrophy for competitive performance.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'aerobics',
    name: 'Aerobics Lab',
    description: 'Dynamic oxygen-efficiency training utilizing rhythmic movement for peak cardiovascular output.',
    benefits: ['Endurance', 'Flexibility', 'V02 Max'],
    duration: '60 mins',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1518611012118-2960520ee4ea?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hiit',
    name: 'Metabolic HIIT',
    description: 'Scientifically sequenced intervals designed to maximize post-exercise caloric expenditure.',
    benefits: ['Fat Incineration', 'Power', 'Focus'],
    duration: '45 mins',
    intensity: 'Extreme',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
  }
];
