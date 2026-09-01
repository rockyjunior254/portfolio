import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { 
  MailIcon, 
  PhoneIcon, 
  MapPinIcon, 
  GlobeIcon, 
  SparklesIcon, 
  CheckCircleIcon,
  DownloadIcon 
} from '@/components/Icons';

export default function Contact() {
  return (
    <main>
      <Header />
      <div className="shell">
        
        {/* Intro */}
        <section className="page-intro">
          <p className="eyebrow">Get in Touch</p>
          <h1>
            A great project begins<br />with a <em>meaningful hello.</em>
          </h1>
          <p>
            Whether you are looking for an AI/ML developer, need a high-performance web application, or want to discuss internship and collaborative opportunities, I’d love to hear from you.
          </p>
        </section>

        {/* Contact Layout */}
        <section style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.75fr', gap: '50px', padding: '20px 0 80px', borderTop: '1px solid var(--line)' }}>
          
          {/* Main Form Column */}
          <div>
            <ContactForm />
          </div>

          {/* Direct Sidebar Column */}
          <aside style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Direct Connect Box */}
            <div style={{ background: '#ffffff', padding: '30px', borderRadius: 'var(--radius-md)', border: '1px solid var(--line)', boxShadow: 'var(--shadow-sm)' }}>
              <p className="eyebrow">Direct Line</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', margin: '20px 0 24px' }}>
                <a 
                  href="mailto:rockyjunior254@gmail.com" 
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--ink)', fontWeight: '650', fontSize: '15px' }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--violet-subtle)', color: 'var(--violet)', display: 'grid', placeItems: 'center' }}>
                    <MailIcon size={18} />
                  </div>
                  <span>rockyjunior254@gmail.com</span>
                </a>

                <a 
                  href="https://wa.me/254729465262" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--ink)', fontWeight: '650', fontSize: '15px' }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#dcfce7', color: '#16a34a', display: 'grid', placeItems: 'center' }}>
                    <PhoneIcon size={18} />
                  </div>
                  <span>+254 729 465 262 (WhatsApp)</span>
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--muted)', fontSize: '14px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#f1f3ee', color: 'var(--ink)', display: 'grid', placeItems: 'center' }}>
                    <MapPinIcon size={18} />
                  </div>
                  <span>Maseno / Kisumu, Kenya (EAT / UTC+3)</span>
                </div>
              </div>

              <div style={{ paddingTop: '20px', borderTop: '1px solid var(--line-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#16a34a' }} />
                  <strong style={{ fontSize: '13px', color: 'var(--ink)' }}>Response Commitment</strong>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: '1.6' }}>
                  I typically respond to inquiries and project requests within 24 hours on business days.
                </p>
              </div>
            </div>

            {/* Quick Resume Download Card */}
            <div style={{ background: 'linear-gradient(135deg, #f0ecff 0%, #ffffff 100%)', padding: '24px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(99, 68, 231, 0.2)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SparklesIcon size={16} style={{ color: 'var(--violet)' }} />
                <h4 style={{ fontSize: '15px', fontWeight: '750' }}>Looking for a Quick Resume?</h4>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                Download a clean PDF overview of my skills, education at Maseno University, and project highlights.
              </p>
              <a 
                className="solid-button" 
                href="/Rocky-Junior-CV.pdf" 
                download="Rocky-Junior-CV.pdf"
                style={{ width: '100%', padding: '11px 18px', fontSize: '13px' }}
              >
                <DownloadIcon size={14} />
                <span>Download Official CV (PDF)</span>
              </a>
            </div>

          </aside>
        </section>

        {/* FAQs */}
        <section className="faq-section" style={{ borderTop: '1px solid var(--line)' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p className="eyebrow">Collaboration Details</p>
            <h2 className="section-title">
              Frequently asked <em>questions.</em>
            </h2>
          </div>

          <details className="faq-card" open>
            <summary>What types of projects and roles are you looking for?</summary>
            <p>
              I am open to Software Engineering Internships, AI / Machine Learning research opportunities, Full-Stack Developer roles, and freelance development projects for businesses requiring intelligent web platforms or management systems.
            </p>
          </details>

          <details className="faq-card">
            <summary>How do you approach remote collaboration?</summary>
            <p>
              I work comfortably in remote environments using Git/GitHub for version control, proactive async communication, structured milestones, clean documentation, and scheduled video check-ins to ensure rapid and aligned delivery.
            </p>
          </details>

          <details className="faq-card">
            <summary>Can you customize the Universal AI Platform for specific organizational dialects?</summary>
            <p>
              Yes! The AI platform's acoustic models (Whisper) and neural machine translation (NMT) pipelines can be fine-tuned on custom domain datasets and regional dialect corpora for high-precision institutional use cases.
            </p>
          </details>
        </section>

      </div>
      <Footer />
    </main>
  );
}
