
export interface TeamMember {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export interface Program {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  duration: string;
  intensity: string;
  image: string;
}

export type Theme = 'light' | 'dark';
