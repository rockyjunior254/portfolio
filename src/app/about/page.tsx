import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Reveal, Float } from '@/components/Motion';
import { 
  BrainIcon, 
  CodeIcon, 
  DatabaseIcon, 
  SparklesIcon, 
  GraduationCapIcon, 
  TerminalIcon, 
  ArrowRightIcon, 
  DownloadIcon,
  CheckCircleIcon,
  GlobeIcon
} from '@/components/Icons';

export default function About() {
  return (
    <main>
      <Header />
      <div className="shell">
        
        {/* Intro */}
        <section className="page-intro">
          <p className="eyebrow">About Rocky Junior</p>
          <h1>
            Driven by curiosity.<br /><em>Anchored by discipline.</em>
          </h1>
          <p>
            I am a Computer Science student at Maseno University and an active software developer with a dedicated focus on Artificial Intelligence, Machine Learning, and high-performance full-stack web applications.
          </p>
        </section>

        {/* Narrative Grid */}
        <section className="about-grid" style={{ padding: '40px 0 80px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
          <Reveal>
            <div>
              <p className="eyebrow">The Background</p>
              <h2 className="section-title" style={{ fontSize: '38px', marginBottom: '24px' }}>
                Bridging computer science theory with <em>practical software craft.</em>
              </h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--muted)', marginBottom: '18px' }}>
                My journey through Computer Science is grounded in a central question: <b>How can intelligent computing make human tasks faster, more natural, and more accessible?</b>
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--muted)', marginBottom: '18px' }}>
                Rather than treating AI and software development as separate silos, I combine machine learning pipelines—such as speech-to-text, multilingual neural translation, and predictive modeling—with modern web architectures (Next.js, TypeScript, PostgreSQL, and FastAPI).
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: 'var(--muted)', marginBottom: '32px' }}>
                Whether designing a real-time multilingual communication engine, architecting a cloud-based learning management system for SMEs, or streamlining business operations with point-of-sale platforms, I aim for software that is robust under the hood and effortless to use.
              </p>

              <div className="hero-actions-modern">
                <Link className="solid-button" href="/work">
                  <span>Explore Completed Projects</span>
                  <ArrowRightIcon size={14} />
                </Link>
                <a className="outline-button" href="/Rocky-Junior-CV.pdf" download="Rocky-Junior-CV.pdf">
                  <DownloadIcon size={14} />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </Reveal>

          <Float>
            <div className="profile-card-modern" style={{ margin: '0 auto' }}>
              <div className="profile-image-container">
                <Image
                  src="/images/junior.jpeg"
                  alt="Rocky Junior - Developer & Computer Science Student"
                  fill
                  priority
                  sizes="340px"
                />
                <div className="profile-floating-badge">
                  <span className="dot" />
                  <span>Kisumu, Kenya</span>
                </div>
              </div>
              <div className="profile-card-footer">
                <div>
                  <strong>Rocky Junior</strong>
                  <small>Maseno University · Third Year</small>
                </div>
                <span className="profile-role-tag">CS Developer</span>
              </div>
            </div>
          </Float>
        </section>

        {/* 4 Pillars of Expertise */}
        <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
          <div className="section-head">
            <div>
              <p className="eyebrow">Core Pillars</p>
              <h2 className="section-title">
                Technical strengths & <em>focus areas.</em>
              </h2>
            </div>
            <p>
              A balanced foundation blending computational fundamentals, modern frameworks, and machine intelligence.
            </p>
          </div>

          <div className="stack-grid">
            <Reveal delay={0.05}>
              <div className="stack-card">
                <div className="stack-card-header">
                  <div className="stack-icon"><BrainIcon size={22} /></div>
                  <div><h3>AI, Speech & Multilingual NLP</h3></div>
                </div>
                <p>
                  Specializing in automatic speech recognition (Whisper), acoustic modeling, multilingual neural translation, and low-latency voice synthesis across 40+ languages.
                </p>
                <div className="stack-pills">
                  <span className="stack-pill">Whisper ASR</span>
                  <span className="stack-pill">Transformer Models</span>
                  <span className="stack-pill">Neural Machine Translation</span>
                  <span className="stack-pill">Text-to-Speech (TTS)</span>
                  <span className="stack-pill">WebSockets Audio</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="stack-card">
                <div className="stack-card-header">
                  <div className="stack-icon"><CodeIcon size={22} /></div>
                  <div><h3>Full-Stack & UI Architecture</h3></div>
                </div>
                <p>
                  Crafting accessible, highly responsive web experiences with Next.js App Router, React, TypeScript, and clean modular CSS.
                </p>
                <div className="stack-pills">
                  <span className="stack-pill">Next.js 14+</span>
                  <span className="stack-pill">React 18</span>
                  <span className="stack-pill">TypeScript</span>
                  <span className="stack-pill">Tailwind CSS</span>
                  <span className="stack-pill">Framer Motion</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="stack-card">
                <div className="stack-card-header">
                  <div className="stack-icon"><DatabaseIcon size={22} /></div>
                  <div><h3>Databases & Backend Systems</h3></div>
                </div>
                <p>
                  Architecting secure, transactional backends, RESTful endpoints, and database schemas with PostgreSQL, FastAPI, Node.js, and Supabase.
                </p>
                <div className="stack-pills">
                  <span className="stack-pill">PostgreSQL</span>
                  <span className="stack-pill">FastAPI</span>
                  <span className="stack-pill">Node.js</span>
                  <span className="stack-pill">Supabase / Firebase</span>
                  <span className="stack-pill">RESTful APIs</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="stack-card">
                <div className="stack-card-header">
                  <div className="stack-icon"><TerminalIcon size={22} /></div>
                  <div><h3>Computer Science Fundamentals</h3></div>
                </div>
                <p>
                  Rigorous foundation in data structures, algorithmic complexity, object-oriented design, system architecture, and collaborative Git version control.
                </p>
                <div className="stack-pills">
                  <span className="stack-pill">Data Structures</span>
                  <span className="stack-pill">Algorithms</span>
                  <span className="stack-pill">System Design</span>
                  <span className="stack-pill">Git / GitHub</span>
                  <span className="stack-pill">Linux & CI/CD</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Timeline & Milestones */}
        <section className="dark-band" style={{ borderRadius: 'var(--radius-xl)', padding: '80px 48px' }}>
          <p className="eyebrow light">Academic & Professional Journey</p>
          <h2 style={{ fontSize: '40px', letterSpacing: '-1.5px', marginBottom: '40px' }}>
            Milestones along the <em>pathway.</em>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <article style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '20px' }}>
              <span style={{ color: '#34d399', fontFamily: 'ui-monospace, monospace', fontSize: '12px', fontWeight: '700' }}>
                2024 – PRESENT
              </span>
              <h3 style={{ fontSize: '18px', color: '#ffffff', margin: '8px 0' }}>
                B.Sc. Computer Science
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                Maseno University, Kenya. Deepening theoretical computing, discrete mathematics, algorithm design, operating systems, and intelligent agent systems.
              </p>
            </article>

            <article style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '20px' }}>
              <span style={{ color: '#34d399', fontFamily: 'ui-monospace, monospace', fontSize: '12px', fontWeight: '700' }}>
                PRACTICAL BUILDS
              </span>
              <h3 style={{ fontSize: '18px', color: '#ffffff', margin: '8px 0' }}>
                Software & Platform Engineering
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                Architected and deployed Nairobi LMS for SMEs, SafariGo Travel, and POS business systems, solving inventory, course delivery, and transaction challenges.
              </p>
            </article>

            <article style={{ borderTop: '1px solid rgba(255, 255, 255, 0.15)', paddingTop: '20px' }}>
              <span style={{ color: '#34d399', fontFamily: 'ui-monospace, monospace', fontSize: '12px', fontWeight: '700' }}>
                FLAGSHIP AI INNOVATION
              </span>
              <h3 style={{ fontSize: '18px', color: '#ffffff', margin: '8px 0' }}>
                Universal Multilingual AI Platform
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6' }}>
                Engineered real-time speech recognition, neural translation, and voice synthesis pipelines, connecting cross-lingual communication seamlessly.
              </p>
            </article>
          </div>
        </section>

        {/* Guiding Principles */}
        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Engineering Philosophy</p>
              <h2 className="section-title">
                Principles that guide <em>my work.</em>
              </h2>
            </div>
            <p>
              Code should not only function correctly; it should be maintainable, legible, performant, and empathetic to the end user.
            </p>
          </div>

          <div className="process-grid-modern">
            {[
              { num: '01', title: 'Clarity Over Complexity', desc: 'Write straightforward, understandable code. Prefer clean architectures to clever hacks.' },
              { num: '02', title: 'User-Centric AI', desc: 'AI is most powerful when it seamlessly assists people rather than getting in their way.' },
              { num: '03', title: 'Relentless Craft', desc: 'From millisecond latency reduction to responsive layout refinement, sweat the fine details.' },
              { num: '04', title: 'Continuous Growth', desc: 'Stay curious, embrace feedback, adopt emerging technologies, and build with purpose.' }
            ].map((principle, idx) => (
              <Reveal key={principle.num} delay={idx * 0.08}>
                <article className="process-card-modern">
                  <span className="step-num">{principle.num}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="contact-banner-modern">
          <div>
            <p className="eyebrow" style={{ color: '#059669' }}>Looking for a motivated developer?</p>
            <h2>
              Let’s discuss internships,<br /><em>projects, or collaborations.</em>
            </h2>
          </div>
          <Link className="solid-button" href="/contact">
            <span>Get in Touch ↗</span>
          </Link>
        </section>

      </div>
      <Footer />
    </main>
  );
}
