'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const links = [{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/work', label: 'Work' }, { href: '/resume', label: 'Resume' }, { href: '/contact', label: 'Contact' }];

export function Brand() { return <Link href="/" className="brand" aria-label="Rocky Junior home"><span>RJ</span><b>Rocky Junior</b></Link>; }

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => href === '/' ? pathname === href : pathname.startsWith(href);
  return <header className={`topbar ${styles.header}`}><Brand /><nav className="desktop-nav" aria-label="Primary navigation">{links.map(link => <Link className={isActive(link.href) ? styles.active : ''} href={link.href} key={link.href}>{link.label}</Link>)}</nav><Link className="topbar-cta" href="/contact">Start a project <i>↗</i></Link></header>;
}
