
import React from 'react';
import { TeamMember, Program } from './types';

export const Logo = ({ className = "w-10 h-10", theme = "dark" }: { className?: string, theme?: 'light' | 'dark' }) => {
  // We'll use 'currentColor' for the primary elements so they inherit from the parent's text color.
  // The 'accentColor' remains constant (Finix Red).
  const accentColor = '#ff0000'; 

  return (
    <div className={`flex items-center gap-3 ${className} transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-luxuryBlack'}`}>
      <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield Outline (Thick Red) */}
          <path 
            d="M60 110 C60 110 10 90 10 50 V20 L60 5 L110 20 V50 C110 90 60 110 60 110Z" 
            stroke={accentColor} 
            strokeWidth="6" 
            strokeLinejoin="round"
          />
          
          {/* Barbell Passing Through Middle */}
          <line x1="0" y1="70" x2="120" y2="70" stroke="currentColor" strokeWidth="4" />
          <rect x="0" y="60" width="6" height="20" rx="1" fill="currentColor" />
          <rect x="7" y="62" width="3" height="16" rx="1" fill="currentColor" />
          <rect x="114" y="60" width="6" height="20" rx="1" fill="currentColor" />
          <rect x="110" y="62" width="3" height="16" rx="1" fill="currentColor" />

          {/* Silhouettes (Top Part) */}
          <g transform="translate(40, 25) scale(0.7)">
            {/* Male Figure */}
            <circle cx="10" cy="10" r="8" fill="currentColor" />
            <path d="M0 25 Q10 18 20 25 L20 45 L0 45 Z" fill="currentColor" />
            {/* Female Figure */}
            <circle cx="45" cy="10" r="8" fill="currentColor" />
            <path d="M35 25 Q45 18 55 25 L55 45 L35 45 Z" fill="currentColor" />
            {/* Small dumbbells */}
            <rect x="-4" y="25" width="6" height="3" fill="currentColor" />
            <rect x="58" y="25" width="6" height="3" fill="currentColor" />
          </g>

          {/* Text integrated in Logo */}
          <text x="60" y="66" textAnchor="middle" fill="currentColor" className="font-bebas font-bold" style={{ fontSize: '20px', letterSpacing: '1px' }}>FINIX</text>
          <text x="60" y="76" textAnchor="middle" fill="currentColor" className="font-syncopate font-bold uppercase" style={{ fontSize: '6px', letterSpacing: '1px' }}>Fitness</text>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-bebas text-2xl tracking-tight">
          FINIX <span className="text-finixRed">FITNESS</span>
        </span>
        <span className={`text-[7px] font-syncopate tracking-[0.2em] opacity-50`}>BUILD WITH FINIX</span>
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
