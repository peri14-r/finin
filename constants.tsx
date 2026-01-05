
import React from 'react';
import { TeamMember, Program } from './types';

export const Logo = ({ className = "w-auto h-12", theme = "dark" }: { className?: string, theme?: 'light' | 'dark' }) => {
  const accentColor = '#ff0000'; 

  return (
    <div className={`flex items-center gap-3 ${className} transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-luxuryBlack'}`}>
      <div className="relative w-12 h-12 shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Minimalist Professional Shield */}
          <path 
            d="M50 90 C50 90 15 75 15 45 V25 L50 10 L85 25 V45 C85 75 50 90 50 90Z" 
            stroke={accentColor} 
            strokeWidth="5" 
            strokeLinejoin="round"
          />
          
          {/* Dynamic "F" and barbell hybrid icon */}
          <rect x="35" y="30" width="30" height="4" fill="currentColor" rx="1" />
          <rect x="35" y="45" width="20" height="4" fill="currentColor" rx="1" />
          <rect x="35" y="30" width="6" height="40" fill="currentColor" rx="1" />
          
          {/* Barbell ends */}
          <rect x="30" y="65" width="16" height="6" fill="currentColor" rx="1" />
          <rect x="54" y="65" width="16" height="6" fill="currentColor" rx="1" />
          <line x1="46" y1="68" x2="54" y2="68" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
      <div className="flex flex-col leading-[1.1] pt-1">
        <div className="flex items-baseline gap-1">
          <span className="font-bebas text-3xl tracking-tight uppercase">FINIX</span>
          <span className="font-bebas text-3xl tracking-tight uppercase text-finixRed">FITNESS</span>
        </div>
        <span className="text-[8px] font-syncopate tracking-[0.3em] opacity-60 uppercase font-bold">BUILD WITH FINIX</span>
      </div>
    </div>
  );
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Yashpal",
    title: "Founder & Head Coach",
    bio: "Pioneering the landscape of elite fitness for over 15 years. Yashpal blends architectural precision with physiological excellence.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Aruna",
    title: "Co-Founder & Nutrition Director",
    bio: "Architecting sustainable health systems for corporate leadership and high-impact lifestyles.",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Chetan",
    title: "Strength & Conditioning Specialist",
    bio: "Specializing in advanced hypertrophy and body recomposition protocols for the modern athlete.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=800"
  }
];

export const PROGRAMS: Program[] = [
  {
    id: 'aerobics',
    name: 'Aerobics',
    description: 'Coordinated movement sessions focused on oxygen efficiency and fluid agility.',
    benefits: ['Flexibility', 'Coordination', 'Fun'],
    duration: '60 mins',
    intensity: 'Medium',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hiit',
    name: 'High Intensity HIIT',
    description: 'The gold standard for force production and post-exercise oxygen consumption.',
    benefits: ['Muscle Gain', 'Fat Burn', 'Efficiency'],
    duration: '30 mins',
    intensity: 'Maximum',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dance',
    name: 'Dance',
    description: 'Rhythmic movement and choreographed sessions for cardiovascular health and expression.',
    benefits: ['Rhythm', 'Weight Loss', 'Agility'],
    duration: '60 mins',
    intensity: 'Medium',
    image: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'kickboxing',
    name: 'Kick-boxing',
    description: 'Martial arts inspired high-energy workout that improves strength and stamina.',
    benefits: ['Self-Defense', 'Conditioning', 'Power'],
    duration: '45 mins',
    intensity: 'High',
    image: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?auto=format&fit=crop&q=80&w=800'
  }
];
