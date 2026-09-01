import Link from 'next/link';
import { Brand } from './Header';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  GithubIcon, 
  SparklesIcon, 
  DownloadIcon,
  ArrowRightIcon
} from './Icons';

export function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-top-grid">
        {/* Col 1: Brand & Philosophy */}
        <div className="footer-brand-col">
          <Brand />
          <p className="footer-bio">
            Computer Science student at Maseno University & Software Developer specializing in Artificial Intelligence, Machine Learning, and high-performance Web Systems.
          </p>
          <div className="footer-location-tag">
            <MapPinIcon size={14} />
            <span>Kisumu, Kenya · EAT (UTC+3) · Available Worldwide</span>
          </div>
        </div>

        {/* Col 2: Navigation Links */}
        <div className="footer-links-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-nav-list">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/work">Projects & Case Studies</Link></li>
            <li><Link href="/about">About & Background</Link></li>
            <li><Link href="/resume">Resume & Skills</Link></li>
            <li><Link href="/contact">Contact & Inquiry</Link></li>
          </ul>
        </div>

        {/* Col 3: Key Focus Areas */}
        <div className="footer-focus-col">
          <h4 className="footer-col-title">Technical Domains</h4>
          <ul className="footer-focus-list">
            <li><span>✦</span> Speech AI & Multilingual NLP</li>
            <li><span>✦</span> Machine Learning & Predictive Models</li>
            <li><span>✦</span> Next.js & React Architecture</li>
            <li><span>✦</span> Scalable APIs & Relational DBs</li>
            <li><span>✦</span> Enterprise POS & EdTech Systems</li>
          </ul>
        </div>

        {/* Col 4: Direct Connect */}
        <div className="footer-contact-col">
          <h4 className="footer-col-title">Direct Connect</h4>
          <a href="mailto:rockyjunior254@gmail.com" className="footer-contact-link">
            <MailIcon size={16} />
            <span>rockyjunior254@gmail.com</span>
          </a>
          <a href="tel:0729465262" className="footer-contact-link">
            <PhoneIcon size={16} />
            <span>+254 729 465 262</span>
          </a>
          <a href="/Rocky-Junior-CV.pdf" download className="footer-cv-btn">
            <DownloadIcon size={14} />
            <span>Download Curriculum Vitae</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-copy">
          <p>© {new Date().getFullYear()} Rocky Junior. Built with precision, Next.js & TypeScript.</p>
        </div>
        <div className="footer-badges">
          <span className="live-status-pill">
            <span className="dot" />
            Open for Internships & Collaborations
          </span>
        </div>
      </div>
    </footer>
  );
}
