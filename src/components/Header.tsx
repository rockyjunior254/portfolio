'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { MenuIcon, XIcon, ArrowRightIcon, SparklesIcon } from './Icons';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Projects & Work' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export function Brand() {
  return (
    <Link href="/" className={styles.brand} aria-label="Rocky Junior Home">
      <div className={styles.brandIcon}>
        <span>RJ</span>
      </div>
      <div className={styles.brandText}>
        <b>Rocky Junior</b>
        <small>CS & AI Developer</small>
      </div>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className={styles.headerWrapper}>
      <div className={`shell ${styles.headerInner}`}>
        <Brand />

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${isActive(link.href) ? styles.activeLink : ''}`}
            >
              {link.label}
              {isActive(link.href) && <span className={styles.activeDot} />}
            </Link>
          ))}
        </nav>

        {/* Header Right Actions */}
        <div className={styles.headerActions}>
          <div className={styles.statusChip}>
            <span className={styles.pulseDot} />
            <span>Open for Work</span>
          </div>

          <Link className={styles.ctaButton} href="/contact">
            <span>Let's Talk</span>
            <ArrowRightIcon size={14} />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileMenuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <div className={styles.mobileDrawerBackdrop} onClick={() => setMobileMenuOpen(false)} />
          <div className={styles.mobileDrawerContent}>
            <div className={styles.drawerHeader}>
              <Brand />
              <button
                type="button"
                className={styles.drawerCloseBtn}
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <XIcon size={20} />
              </button>
            </div>

            <nav className={styles.mobileNavLinks}>
              {links.map((link, idx) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.mobileActiveLink : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={styles.mobileNavIdx}>0{idx + 1}</span>
                  <span className={styles.mobileNavLabel}>{link.label}</span>
                  {isActive(link.href) && <span className={styles.activeIndicator}>●</span>}
                </Link>
              ))}
            </nav>

            <div className={styles.mobileDrawerFooter}>
              <div className={styles.mobileStatusBadge}>
                <SparklesIcon size={14} />
                <span>Maseno University · CS Student & Developer</span>
              </div>
              <Link 
                href="/contact" 
                className={styles.mobileCtaBtn}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Start a Conversation</span>
                <ArrowRightIcon size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
