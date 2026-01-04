
import React from 'react';

export const Logo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5L15 25V55C15 75 50 95 50 95C50 95 85 75 85 55V25L50 5Z" stroke="#ff003c" strokeWidth="4" />
    <rect x="35" y="45" width="30" height="4" fill="#ff003c" rx="2" />
    <circle cx="30" cy="47" r="6" fill="#ff003c" />
    <circle cx="70" cy="47" r="6" fill="#ff003c" />
    <path d="M40 30L60 30M50 20V40" stroke="#ff003c" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const PROGRAMS_DATA = [
  {
    id: 'pt',
    name: 'Personal Training',
    description: 'Transform your physique with one-on-one custom programs tailored specifically to your genetic profile and goals.',
    benefits: ['Bespoke Nutrition Plans', 'Biweekly Body Composition Analysis', '1-on-1 Dedicated Coaching', 'VIP Schedule Priority'],
    duration: '60-90 Min',
    intensity: 'High',
    image: 'https://picsum.photos/seed/pt/1200/800'
  },
  {
    id: 'cb',
    name: 'Cardio Blast',
    description: 'A high-intensity interval training session designed to torch calories and improve cardiovascular endurance.',
    benefits: ['Maximum Calorie Burn', 'Improved Heart Health', 'Metabolic Boost', 'Dynamic Group Environment'],
    duration: '45 Min',
    intensity: 'Extreme',
    image: 'https://picsum.photos/seed/cardio/1200/800'
  },
  {
    id: 'zf',
    name: 'Zumba Fitness',
    description: 'Dance your way to fitness with energetic Latin beats and world rhythms. It\'s exercise in disguise!',
    benefits: ['Full Body Workout', 'Coordination Improvement', 'Stress Relief', 'Community Fun'],
    duration: '60 Min',
    intensity: 'Moderate',
    image: 'https://picsum.photos/seed/zumba/1200/800'
  },
  {
    id: 'kb',
    name: 'Kickboxing',
    description: 'Combat training for strength, agility, and self-defense. Master the art of the strike.',
    benefits: ['Full Body Conditioning', 'Self-Defense Skills', 'Reflex Training', 'Core Power'],
    duration: '60 Min',
    intensity: 'High',
    image: 'https://picsum.photos/seed/boxing/1200/800'
  },
  {
    id: 'cw',
    name: 'Corporate Wellness',
    description: 'Elevate your team\'s productivity and health with our customized group wellness programs for companies.',
    benefits: ['Team Building', 'Reduced Absenteeism', 'Mental Health Support', 'On-site Consultations'],
    duration: 'Varies',
    intensity: 'Low to Moderate',
    image: 'https://picsum.photos/seed/corp/1200/800'
  }
];

export const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Yashpal",
    title: "Head Coach & Founder",
    bio: "With over 20 years in the elite fitness industry, Yashpal has architected thousands of transformations.",
    image: "https://picsum.photos/seed/coach1/600/800"
  },
  {
    id: 2,
    name: "Aruna",
    title: "Nutrition Director",
    bio: "A certified dietitian specializing in performance nutrition and metabolic health for high-performers.",
    image: "https://picsum.photos/seed/coach2/600/800"
  },
  {
    id: 3,
    name: "Chetan",
    title: "Conditioning Specialist",
    bio: "Former professional athlete focused on functional strength and injury prevention through science-based methods.",
    image: "https://picsum.photos/seed/coach3/600/800"
  }
];
