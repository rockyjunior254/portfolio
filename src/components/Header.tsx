import Link from 'next/link';

export function Brand() { return <Link href="/" className="brand" aria-label="Rocky Junior home"><span>RJ</span><b>Rocky Junior</b></Link>; }
export function Header(){return <header className="topbar"><Brand/><nav><Link href="/">Home</Link><Link href="/work">Case studies</Link><Link href="/about">Profile</Link><Link href="/resume">Resume</Link><Link href="/contact">Contact</Link></nav><Link className="topbar-cta" href="/contact">Start a project <i>↗</i></Link></header>}
