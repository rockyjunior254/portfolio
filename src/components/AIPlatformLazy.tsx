'use client';

import dynamic from 'next/dynamic';
import styles from './AIPlatformLazy.module.css';

const AIPlatformMockup = dynamic(
  () => import('./AIPlatformMockup').then((module) => module.AIPlatformMockup),
  { ssr: false, loading: () => <div className={styles.skeleton} aria-label="Loading AI platform preview" /> },
);

export function AIPlatformLazy() {
  return <AIPlatformMockup />;
}
