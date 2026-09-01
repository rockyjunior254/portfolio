import type { Metadata } from 'next';
import './globals.css';
import './hero.css';

export const metadata: Metadata = {
  title: 'Rocky Junior | Software Developer & AI / Machine Learning Specialist',
  description: 'Portfolio of Rocky Junior, a Computer Science developer at Maseno University specializing in Artificial Intelligence, Multilingual Speech & NLP Platforms, Machine Learning, and high-performance Web Systems.',
  keywords: [
    'Rocky Junior',
    'Software Developer',
    'AI Engineer',
    'Machine Learning',
    'Maseno University',
    'Kenya Developer',
    'Universal AI Multilingual Communication Platform',
    'Nairobi LMS',
    'POS Business Systems',
    'Next.js',
    'TypeScript',
    'Python',
    'PyTorch'
  ],
  authors: [{ name: 'Rocky Junior' }],
  creator: 'Rocky Junior',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Rocky Junior | Software Developer & AI Specialist',
    description: 'Engineering intelligent AI systems, neural speech pipelines, and scalable digital products.',
    siteName: 'Rocky Junior Portfolio'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
