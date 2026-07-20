import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rocky | Software Developer',
  description: 'Portfolio of Rocky, a software developer creating clear, useful digital products.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
