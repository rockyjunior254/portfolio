'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import styles from './Header.module.css';

const links = [{ href: '/', label: 'Home' }, { href: '/work', label: 'Case studies' }, { href: '/about', label: 'About' }, { href: '/resume', label: 'Resume' }, { href: '/contact', label: 'Contact' }];

export function Brand() { return <Link href="/" className="brand" aria-label="Rocky Junior home"><span>RJ</span><b>Rocky Junior</b></Link>; }

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => href === '/' ? pathname === href : pathname.startsWith(href);
  return <header className="topbar"><Brand /><nav className="desktop-nav" aria-label="Primary navigation">{links.map(link => <Link className={isActive(link.href) ? styles.active : ''} href={link.href} key={link.href}>{link.label}</Link>)}</nav><Link className="topbar-cta" href="/contact">Start a project <i>↗</i></Link><button className={styles.menuTrigger} type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation"><span /><span /></button><AnimatePresence>{open && <motion.nav id="mobile-navigation" className={styles.mobileNav} initial={{ opacity: 0, y: -12, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -12, scale: .98 }} transition={{ duration: .22, ease: 'easeOut' }}>{links.map((link, index) => <motion.div key={link.href} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .035 }}><Link className={isActive(link.href) ? styles.active : ''} href={link.href} onClick={() => setOpen(false)}>{link.label}<span>↗</span></Link></motion.div>)}<Link className={styles.mobileProjectLink} href="/contact" onClick={() => setOpen(false)}>Start a project <span>↗</span></Link></motion.nav>}</AnimatePresence></header>;
}
