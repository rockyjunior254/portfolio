import type { ReactNode } from 'react';

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={`reveal ${className}`} style={{ animationDelay: `${delay * 1000}ms` }}>{children}</div>;
}

export function Float({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`float ${className}`}>{children}</div>;
}
