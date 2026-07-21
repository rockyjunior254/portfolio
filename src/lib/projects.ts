export type Project = {
  name: string;
  eyebrow: string;
  url: string;
  description: string;
  technologies: string[];
  features: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    name: 'Nairobi LMS',
    eyebrow: 'Learning platform',
    url: 'https://lms-rosy-pi.vercel.app/',
    description: 'A focused learning management system that gives educators and learners one clear place to organize, deliver, and follow coursework.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    features: ['Course discovery', 'Structured learning paths', 'Responsive dashboard'],
    accent: 'blue',
  },
  {
    name: 'SafariGo',
    eyebrow: 'Tours & travel management',
    url: 'https://safarigo.vercel.app/',
    description: 'A polished travel management experience designed to help people explore destinations, plan trips, and move from inspiration to booking.',
    technologies: ['Next.js', 'React', 'Modern UI'],
    features: ['Destination exploration', 'Trip planning', 'Mobile-first experience'],
    accent: 'gold',
  },
  {
    name: 'POS Business Systems',
    eyebrow: 'Business operations platform',
    url: '',
    description: 'Point-of-sale systems designed for hardware stores, bars, restaurants, and retail shops—bringing everyday operations into one reliable business view.',
    technologies: ['React', 'Node.js', 'Database Design'],
    features: ['Inventory control', 'Sales tracking', 'Reporting & analytics'],
    accent: 'violet',
  },
];
