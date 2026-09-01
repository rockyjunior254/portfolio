import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CvDownload } from '@/components/CvDownload';
import { 
  GraduationCapIcon, 
  BriefcaseIcon, 
  BrainIcon, 
  CodeIcon, 
  DatabaseIcon, 
  TerminalIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  DownloadIcon
} from '@/components/Icons';

export default function Resume() {
  const cvUrl = '/Rocky-Junior-CV.pdf';

  return (
    <main>
      <Header />
      <div className="shell">
        
        {/* Intro */}
        <section className="page-intro">
          <p className="eyebrow">Curriculum Vitae & Profile</p>
          <h1>
            Academic rigor.<br /><em>Engineering execution.</em>
          </h1>
          <p>
            A comprehensive overview of my education at Maseno University, AI and machine learning specializations, full-stack software development experience, and technical skill set.
          </p>
          <div style={{ marginTop: '24px' }}>
            <CvDownload url={cvUrl} />
          </div>
        </section>

        {/* Resume Content Layout */}
        <div className="resume-grid-wrapper" style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '60px', padding: '40px 0 80px', borderTop: '1px solid var(--line)' }}>
          
          {/* Left Sidebar: Skills & Quick Info */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            
            {/* Availability Box */}
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }}>
              <p className="eyebrow">Status & Availability</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#16a34a' }} />
                <strong style={{ fontSize: '15px' }}>Open for Opportunities</strong>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '18px' }}>
                Seeking software engineering internships, AI/ML research roles, and freelance collaborations.
              </p>
              <Link className="solid-button" href="/contact" style={{ width: '100%', padding: '10px 18px', fontSize: '13px' }}>
                <span>Contact Rocky ↗</span>
              </Link>
            </div>

            {/* AI & ML Skills */}
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <BrainIcon size={18} style={{ color: 'var(--violet)' }} />
                <h3 style={{ fontSize: '16px', fontWeight: '750' }}>AI & Machine Learning</h3>
              </div>
              <div className="stack-pills">
                {['Python', 'PyTorch', 'Hugging Face', 'Whisper ASR', 'Speech AI', 'Neural NMT', 'Text-to-Speech', 'Scikit-Learn', 'Pandas', 'NumPy', 'FastAPI'].map(s => (
                  <span key={s} className="stack-pill">{s}</span>
                ))}
              </div>
            </div>

            {/* Web & Full-Stack Skills */}
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <CodeIcon size={18} style={{ color: 'var(--emerald)' }} />
                <h3 style={{ fontSize: '16px', fontWeight: '750' }}>Web & Full-Stack</h3>
              </div>
              <div className="stack-pills">
                {['Next.js (App Router)', 'React 18', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5 & CSS3', 'Framer Motion', 'WebSockets', 'Responsive UI'].map(s => (
                  <span key={s} className="stack-pill">{s}</span>
                ))}
              </div>
            </div>

            {/* Backend & Databases */}
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <DatabaseIcon size={18} style={{ color: 'var(--cyan)' }} />
                <h3 style={{ fontSize: '16px', fontWeight: '750' }}>Backend & Data Systems</h3>
              </div>
              <div className="stack-pills">
                {['PostgreSQL', 'Node.js', 'Express', 'Supabase', 'Firebase', 'REST APIs', 'RBAC Security', 'ACID Transactions'].map(s => (
                  <span key={s} className="stack-pill">{s}</span>
                ))}
              </div>
            </div>

            {/* Tools & Core CS */}
            <div style={{ background: '#ffffff', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <TerminalIcon size={18} style={{ color: 'var(--ink)' }} />
                <h3 style={{ fontSize: '16px', fontWeight: '750' }}>Tools & CS Core</h3>
              </div>
              <div className="stack-pills">
                {['Git & GitHub', 'Data Structures', 'Algorithms', 'Linux / Bash', 'CI/CD Pipelines', 'System Design', 'Agile / Scrum'].map(s => (
                  <span key={s} className="stack-pill">{s}</span>
                ))}
              </div>
            </div>

          </aside>

          {/* Right Main Content: Education & Experience */}
          <div className="resume-main-column" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            
            {/* Education Section */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <GraduationCapIcon size={24} style={{ color: 'var(--violet)' }} />
                <h2 style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.8px' }}>Education</h2>
              </div>

              <div style={{ background: '#ffffff', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '19px', fontWeight: '750', color: 'var(--ink)' }}>
                    Bachelor of Science in Computer Science
                  </h3>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--violet)', background: 'var(--violet-subtle)', padding: '4px 10px', borderRadius: '999px' }}>
                    4th Year (Expected 2026/2027)
                  </span>
                </div>
                <h4 style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: '600', marginBottom: '16px' }}>
                  Maseno University · Kisumu, Kenya
                </h4>
                <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--muted)', marginBottom: '16px' }}>
                  Rigorous academic curriculum covering core computational theory, system architecture, advanced programming methodologies, and machine intelligence.
                </p>
                <div style={{ paddingTop: '14px', borderTop: '1px solid var(--line-subtle)' }}>
                  <strong style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--ink-secondary)', display: 'block', marginBottom: '8px' }}>
                    Relevant Coursework:
                  </strong>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {[
                      'Data Structures & Algorithms',
                      'Artificial Intelligence & Expert Systems',
                      'Database Management Systems',
                      'Software Engineering Methodologies',
                      'Computer Networks & Protocols',
                      'Operating Systems',
                      'Object-Oriented Programming (OOP)',
                      'Web Applications & Distributed Systems'
                    ].map(course => (
                      <span key={course} style={{ fontSize: '11px', background: '#f8faf8', border: '1px solid var(--line)', padding: '4px 8px', borderRadius: '6px', color: 'var(--muted)' }}>
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Practical Project Experience */}
            <section>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <BriefcaseIcon size={24} style={{ color: 'var(--emerald)' }} />
                <h2 style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '-0.8px' }}>Practical Project Experience</h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Job 1: Universal AI */}
                <div style={{ background: '#ffffff', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '750', color: 'var(--ink)' }}>
                      Lead AI & Full-Stack Developer
                    </h3>
                    <span style={{ fontSize: '11px', fontFamily: 'ui-monospace, monospace', color: 'var(--muted)', background: '#f1f3ee', padding: '3px 8px', borderRadius: '4px' }}>
                      Flagship Innovation
                    </span>
                  </div>
                  <h4 style={{ fontSize: '13px', color: 'var(--violet)', fontWeight: '600', marginBottom: '14px' }}>
                    Universal AI Multilingual Communication Platform
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--violet)' }}>✦</span>
                      <span>Engineered a complete speech-to-speech AI platform integrating Whisper ASR, neural translation (NMT), and voice synthesis for 40+ global and African dialects.</span>
                    </li>
                    <li style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--violet)' }}>✦</span>
                      <span>Constructed a bidirectional WebSocket streaming audio pipeline achieving low end-to-end latency (&lt;450ms).</span>
                    </li>
                    <li style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--violet)' }}>✦</span>
                      <span>Designed an interactive, responsive Next.js frontend with live audio visualizer and instant confidence scoring.</span>
                    </li>
                  </ul>
                </div>

                {/* Job 2: Nairobi LMS */}
                <div style={{ background: '#ffffff', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '750', color: 'var(--ink)' }}>
                      Full-Stack Engineer & UI Architect
                    </h3>
                    <span style={{ fontSize: '11px', fontFamily: 'ui-monospace, monospace', color: 'var(--muted)', background: '#f1f3ee', padding: '3px 8px', borderRadius: '4px' }}>
                      Production Deployment
                    </span>
                  </div>
                  <h4 style={{ fontSize: '13px', color: 'var(--emerald)', fontWeight: '600', marginBottom: '14px' }}>
                    Nairobi LMS for SMEs
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--emerald)' }}>✦</span>
                      <span>Developed a modular learning management platform supporting role-based authentication (Student, Instructor, Admin) and dynamic course roadmaps.</span>
                    </li>
                    <li style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--emerald)' }}>✦</span>
                      <span>Implemented interactive student progress tracking, assessment quizzes, and analytics dashboards with Next.js App Router and TypeScript.</span>
                    </li>
                  </ul>
                </div>

                {/* Job 3: POS Business Systems */}
                <div style={{ background: '#ffffff', padding: '28px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '750', color: 'var(--ink)' }}>
                      System Architect & Software Developer
                    </h3>
                    <span style={{ fontSize: '11px', fontFamily: 'ui-monospace, monospace', color: 'var(--muted)', background: '#f1f3ee', padding: '3px 8px', borderRadius: '4px' }}>
                      Enterprise Systems
                    </span>
                  </div>
                  <h4 style={{ fontSize: '13px', color: 'var(--blue)', fontWeight: '600', marginBottom: '14px' }}>
                    POS Business Systems & SafariGo
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>✦</span>
                      <span>Engineered transactional point-of-sale systems with low-stock alerts, sales audits, barcode support, and revenue reporting for retail and hospitality venues.</span>
                    </li>
                    <li style={{ fontSize: '13px', lineHeight: '1.6', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--blue)' }}>✦</span>
                      <span>Built SafariGo travel booking engine featuring responsive package exploration, customized safari itineraries, and direct customer reservation workflows.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </section>

          </div>
        </div>

        {/* CTA */}
        <section className="contact-banner-modern">
          <div>
            <p className="eyebrow" style={{ color: '#059669' }}>Want to review the PDF version?</p>
            <h2>
              Download the complete<br /><em>Curriculum Vitae.</em>
            </h2>
          </div>
          <a className="solid-button" href={cvUrl} download="Rocky-Junior-CV.pdf">
            <DownloadIcon size={16} />
            <span>Download Official CV (PDF)</span>
          </a>
        </section>

      </div>
      <Footer />
    </main>
  );
}
