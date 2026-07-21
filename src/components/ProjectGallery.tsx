import Image from 'next/image';
import styles from './ProjectGallery.module.css';

const counts = { lms: 8, pos: 6, ttms: 9 } as const;
export type ProjectId = keyof typeof counts;

export function ProjectGallery({ project, gallery = false }: { project: ProjectId; gallery?: boolean }) {
  const label = project === 'lms' ? 'Nairobi LMS interface' : project === 'pos' ? 'POS business system interface' : 'SafariGo travel system interface';
  if (!gallery) return <div className={styles.feature}><Image src={`/projects/${project}/screen-1.jpeg`} alt={label} fill sizes="(max-width: 760px) 90vw, 44vw" /></div>;
  const screens = Array.from({ length: Math.min(counts[project], 5) }, (_, index) => index + 1);
  return <div className={styles.gallery}>{screens.map((number) => <div className={styles.tile} key={number}><Image src={`/projects/${project}/screen-${number}.jpeg`} alt={`${label}, screen ${number}`} fill sizes="(max-width: 760px) 45vw, 30vw" /></div>)}</div>;
}
