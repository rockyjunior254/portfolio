import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Reveal, Float } from '@/components/Motion';
import { ProjectCard } from '@/components/ProjectCard';
import { AIPlatformLazy } from '@/components/AIPlatformLazy';
import { projects, skillCategories } from '@/lib/projects';
import { 
  BrainIcon, 
  CpuIcon, 
  SparklesIcon, 
  CodeIcon, 
  DatabaseIcon, 
  TerminalIcon, 
  LayersIcon, 
  GlobeIcon, 
  ArrowRightIcon, 
  DownloadIcon, 
  CheckCircleIcon,
  MicIcon,
  VolumeIcon,
  LanguagesIcon,
  ZapIcon
} from '@/components/Icons';

export default function Home() {
  const featuredProjects = projects.filter(p => p.id !== 'universal-ai');

  return (
    <main>
      <Header />
      <div className="shell">
        
        {/* ===================== HERO SECTION ===================== */}
        <section className="home-hero-modern">
          <Reveal className="hero-copy-modern">
            <div className="hero-status-tag">
              <SparklesIcon size={14} />
              <span>Computer Science Student · AI & Full-Stack Developer</span>
            </div>

            <h1 className="hero-title-modern">
              Engineering <em>intelligent systems</em> & high-performance software.
            </h1>

            <p className="hero-subtitle-modern">
              I’m <b>Rocky Junior</b>, a Computer Science student at Maseno University specializing in Artificial Intelligence, Machine Learning, Speech Recognition, Multilingual NLP, and production-grade full-stack web applications.
            </p>

            {/* Quick Tech Highlights */}
            <div className="hero-quick-tags">
              <span className="hero-quick-tag"><BrainIcon size={14} /> Python & PyTorch</span>
              <span className="hero-quick-tag"><MicIcon size={14} /> Speech AI (Whisper)</span>
              <span className="hero-quick-tag"><LanguagesIcon size={14} /> Neural Translation (NMT)</span>
              <span className="hero-quick-tag"><CodeIcon size={14} /> Next.js & React</span>
              <span className="hero-quick-tag"><DatabaseIcon size={14} /> PostgreSQL & FastAPI</span>
            </div>

            {/* Hero Actions */}
            <div className="hero-actions-modern">
              <Link className="solid-button" href="/work">
                <span>Explore Projects & Work</span>
                <ArrowRightIcon size={16} />
              </Link>
              <a 
                className="outline-button" 
                href="/Rocky-Junior-CV.pdf" 
                download="Rocky-Junior-CV.pdf"
              >
                <DownloadIcon size={16} />
                <span>Download CV</span>
              </a>
              <Link className="text-button" href="/contact">
                <span>Start a conversation ↗</span>
              </Link>
            </div>
          </Reveal>

          <Float className="hero-profile-column">
            <aside className="profile-card-modern">
              <div className="profile-image-container">
                <Image
                  src="/images/junior.jpeg"
                  alt="Rocky Junior, Computer Science & AI Developer"
                  fill
                  priority
                  sizes="(max-width: 760px) 300px, 360px"
                />
                <div className="profile-floating-badge">
                  <span className="dot" />
                  <span>Available for Work</span>
                </div>
              </div>

              <div className="profile-card-footer">
                <div className="profile-info">
                  <strong>Rocky Junior</strong>
                  <small>Maseno University · Kenya</small>
                </div>
                <span className="profile-role-tag">CS Developer</span>
              </div>

              <div className="floating-chip-bottom">
                <BrainIcon size={16} />
                <span>AI & Full-Stack Engineer</span>
              </div>
            </aside>
          </Float>
        </section>

        {/* ===================== QUANTITATIVE METRICS ===================== */}
        <section className="numbers-grid">
          <Reveal delay={0.05}>
            <div className="metric-card">
              <div className="metric-card-top">
                <BrainIcon size={22} className="metric-icon" />
                <span className="eyebrow" style={{ margin: 0 }}>Specialization</span>
              </div>
              <b>AI / ML</b>
              <span>Intelligent Systems Focus</span>
              <small>Speech, NLP & Predictive Models</small>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="metric-card">
              <div className="metric-card-top">
                <LanguagesIcon size={22} className="metric-icon" />
                <span className="eyebrow" style={{ margin: 0 }}>Flagship</span>
              </div>
              <b>40+</b>
              <span>Supported Dialects</span>
              <small>Universal Multilingual Platform</small>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="metric-card">
              <div className="metric-card-top">
                <CodeIcon size={22} className="metric-icon" />
                <span className="eyebrow" style={{ margin: 0 }}>Production</span>
              </div>
              <b>5+</b>
              <span>Complete Major Systems</span>
              <small>LMS, POS, Travel, ML & AI</small>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="metric-card">
              <div className="metric-card-top">
                <TerminalIcon size={22} className="metric-icon" />
                <span className="eyebrow" style={{ margin: 0 }}>Academic</span>
              </div>
              <b>4th Year</b>
              <span>B.Sc. Computer Science</span>
              <small>Maseno University, Kenya</small>
            </div>
          </Reveal>
        </section>

        {/* ===================== FLAGSHIP PROJECT SPOTLIGHT ===================== */}
        <section className="flagship-section">
          <div className="flagship-grid">
            <Reveal className="flagship-content">
              <p className="eyebrow">Flagship AI Innovation</p>
              <h2 className="section-title">
                Universal AI Multilingual<br /><em>Communication Platform.</em>
              </h2>
              <p>
                An end-to-end artificial intelligence platform engineered to eliminate language barriers. It integrates real-time Automatic Speech Recognition (ASR), zero-shot language detection, Neural Machine Translation (NMT), and low-latency Text-to-Speech (TTS) voice generation.
              </p>

              <div className="flagship-highlights">
                <div className="flagship-highlight-item">
                  <MicIcon size={16} />
                  <span>Real-Time Whisper Speech-to-Text</span>
                </div>
                <div className="flagship-highlight-item">
                  <LanguagesIcon size={16} />
                  <span>Zero-Shot Detection (40+ Dialects)</span>
                </div>
                <div className="flagship-highlight-item">
                  <BrainIcon size={16} />
                  <span>Context-Aware Neural Translation</span>
                </div>
                <div className="flagship-highlight-item">
                  <VolumeIcon size={16} />
                  <span>Neural Text-to-Speech Voice Output</span>
                </div>
              </div>

              <div className="hero-actions-modern">
                <Link className="solid-button" href="/work#universal-ai">
                  <span>View Full AI Architecture Case Study</span>
                  <ArrowRightIcon size={14} />
                </Link>
                <Link className="outline-button" href="/contact">
                  <span>Discuss AI Integration</span>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <AIPlatformLazy />
            </Reveal>
          </div>
        </section>

        {/* ===================== MACHINE LEARNING & AI CAPABILITIES ===================== */}
        <section className="ml-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Machine Learning & Data Intelligence</p>
              <h2 className="section-title">
                Applied AI models from<br /><em>data to inference.</em>
              </h2>
            </div>
            <p>
              My work in Machine Learning spans beyond theoretical models. I build complete pipelines covering data preprocessing, feature engineering, model training, evaluation, and RESTful inference endpoints.
            </p>
          </div>

          <div className="ml-grid">
            <Reveal delay={0.05}>
              <div className="ml-card">
                <div className="ml-card-icon">
                  <MicIcon size={24} />
                </div>
                <h3>Speech Recognition & Audio AI</h3>
                <p>
                  Building acoustic transcription pipelines using Whisper and Web Audio streams. Handles noisy audio, regional accents, and low-latency chunking over WebSockets.
                </p>
                <div className="ml-tags-list">
                  <span className="ml-tag">Whisper ASR</span>
                  <span className="ml-tag">WebSockets</span>
                  <span className="ml-tag">16kHz Audio</span>
                  <span className="ml-tag">Noise Filtering</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="ml-card">
                <div className="ml-card-icon">
                  <LanguagesIcon size={24} />
                </div>
                <h3>Multilingual NLP & Translation</h3>
                <p>
                  Leveraging Transformer architectures, Hugging Face models, and fine-tuned embeddings for zero-shot language identification and contextual translation.
                </p>
                <div className="ml-tags-list">
                  <span className="ml-tag">Hugging Face</span>
                  <span className="ml-tag">NMT Models</span>
                  <span className="ml-tag">Tokenization</span>
                  <span className="ml-tag">Semantic Embeddings</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="ml-card">
                <div className="ml-card-icon">
                  <CpuIcon size={24} />
                </div>
                <h3>Predictive Modeling & Pipelines</h3>
                <p>
                  Constructing end-to-end classification, regression, and data forecasting models with Scikit-learn and PyTorch, served via lightweight FastAPI microservices.
                </p>
                <div className="ml-tags-list">
                  <span className="ml-tag">PyTorch</span>
                  <span className="ml-tag">Scikit-Learn</span>
                  <span className="ml-tag">Pandas / NumPy</span>
                  <span className="ml-tag">FastAPI</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== FEATURED COMPLETED WORKS ===================== */}
        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Featured Software Projects</p>
              <h2 className="section-title">
                Engineered for clarity,<br /><em>built for real-world impact.</em>
              </h2>
            </div>
            <p>
              From cloud learning platforms and business point-of-sale systems to interactive travel engines, each project is designed with performance, scalability, and clean UX.
            </p>
          </div>

          <div className="project-row">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <ProjectCard project={project} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== INTERACTIVE TECH STACK ===================== */}
        <section className="stack-section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Technical Capabilities</p>
              <h2 className="section-title">
                A modern, disciplined<br /><em>engineering toolkit.</em>
              </h2>
            </div>
            <p>
              A synthesis of computer science theory, machine learning workflows, modern frontend architectures, and robust backend engineering.
            </p>
          </div>

          <div className="stack-grid">
            {skillCategories.map((category, idx) => (
              <Reveal key={category.title} delay={idx * 0.08}>
                <div className="stack-card">
                  <div className="stack-card-header">
                    <div className="stack-icon">
                      {idx === 0 && <BrainIcon size={20} />}
                      {idx === 1 && <CodeIcon size={20} />}
                      {idx === 2 && <DatabaseIcon size={20} />}
                      {idx === 3 && <TerminalIcon size={20} />}
                    </div>
                    <div>
                      <h3>{category.title}</h3>
                    </div>
                  </div>
                  <p>{category.description}</p>
                  <div className="stack-pills">
                    {category.skills.map((skill) => (
                      <span key={skill} className="stack-pill">{skill}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== DARK ACCENT BAND: SERVICES & VALUE ===================== */}
        <section className="dark-band">
          <div className="shell">
            <div className="dark-band-grid">
              <div>
                <p className="eyebrow light">What I Deliver</p>
                <h2>
                  Technical depth.<br /><em>Product craftsmanship.</em>
                </h2>
                <p style={{ color: '#94a3b8', marginTop: '18px', fontSize: '15px', lineHeight: '1.7' }}>
                  I combine algorithmic rigor with clean UI execution to build products that solve real problems and provide seamless user experiences.
                </p>
              </div>

              <div className="dark-service-list">
                <div className="dark-service-item">
                  <span className="service-idx">01</span>
                  <div>
                    <h3>AI & Machine Learning Engineering</h3>
                    <p>Speech-to-text, NLP pipelines, neural translation, and predictive inference services.</p>
                  </div>
                </div>

                <div className="dark-service-item">
                  <span className="service-idx">02</span>
                  <div>
                    <h3>Full-Stack Web Applications</h3>
                    <p>Modern Next.js, React, and TypeScript applications with responsive, accessible UI.</p>
                  </div>
                </div>

                <div className="dark-service-item">
                  <span className="service-idx">03</span>
                  <div>
                    <h3>Enterprise POS & Management Systems</h3>
                    <p>Transactional database architectures, inventory controls, and real-time business reporting.</p>
                  </div>
                </div>

                <div className="dark-service-item">
                  <span className="service-idx">04</span>
                  <div>
                    <h3>API Design & Database Architecture</h3>
                    <p>High-throughput RESTful APIs, PostgreSQL schemas, and real-time WebSocket syncing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== WORKING METHOD / PROCESS ===================== */}
        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Engineering Methodology</p>
              <h2 className="section-title">
                Disciplined steps from<br /><em>concept to delivery.</em>
              </h2>
            </div>
            <p>
              How I approach software engineering: thorough problem formulation, solid system design, iterative development, and rigorous testing.
            </p>
          </div>

          <div className="process-grid-modern">
            {[
              {
                num: '01',
                title: 'Discover & Frame',
                desc: 'Analyze core user requirements, system constraints, and data specifications before writing code.'
              },
              {
                num: '02',
                title: 'Architect & Design',
                desc: 'Design modular schemas, API contracts, neural model pipelines, and intuitive UI wireframes.'
              },
              {
                num: '03',
                title: 'Build & Train',
                desc: 'Implement performant code with Next.js, Python, or PyTorch using strict typing and clean patterns.'
              },
              {
                num: '04',
                title: 'Test & Deploy',
                desc: 'Evaluate model metrics, optimize web vitals, write tests, and deploy to resilient cloud infrastructure.'
              }
            ].map((step, idx) => (
              <Reveal key={step.num} delay={idx * 0.08}>
                <article className="process-card-modern">
                  <span className="step-num">{step.num}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===================== LOCATION & CONTEXT ===================== */}
        <section className="tech-map-modern">
          <div>
            <p className="eyebrow">Based in Kenya · Available Globally</p>
            <h2 className="section-title">
              Strong foundations.<br /><em>Global perspective.</em>
            </h2>
            <p style={{ color: 'var(--muted)', marginTop: '16px', fontSize: '15px', lineHeight: '1.75' }}>
              Studying Computer Science at Maseno University while developing modern software for clients and global opportunities. Seamlessly collaborating across time zones with strong communication and version control practices.
            </p>
            <div style={{ marginTop: '24px' }}>
              <Link className="solid-button" href="/about">
                <span>Read My Full Story & Background</span>
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>

          <div className="map-card-modern">
            <div className="map-tag">Base Coordinates</div>
            <h3>Maseno · Kisumu, Kenya</h3>
            <p>East Africa Time (EAT) · UTC+3</p>
            <div className="map-coords-grid">
              <div className="coord-item">
                <small>Academic Hub</small>
                <b>Maseno University (CS)</b>
              </div>
              <div className="coord-item">
                <small>Availability</small>
                <b>Remote & Onsite</b>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FREQUENTLY ASKED QUESTIONS ===================== */}
        <section className="faq-section">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p className="eyebrow">Frequently Asked</p>
            <h2 className="section-title">
              Common questions & <em>answers.</em>
            </h2>
          </div>

          <details className="faq-card" open>
            <summary>What are your primary areas of technical specialization?</summary>
            <p>
              I specialize in Artificial Intelligence (speech-to-text, multilingual NLP, neural machine translation), Machine Learning model pipelines, and modern Full-Stack Web Development using Next.js, React, TypeScript, Python, and PostgreSQL.
            </p>
          </details>

          <details className="faq-card">
            <summary>Are you available for internships, developer roles, or freelance work?</summary>
            <p>
              Yes! As a 4th Year Computer Science student, I am actively seeking software engineering internships, AI/ML research roles, freelance product builds, and graduate opportunities where I can contribute to high-impact teams.
            </p>
          </details>

          <details className="faq-card">
            <summary>How can the Universal AI Multilingual Platform be integrated into existing apps?</summary>
            <p>
              The platform exposes low-latency WebSocket and RESTful API endpoints for audio streaming, real-time transcription, language detection, translation, and TTS audio synthesis, making it easy to embed into web apps, call centers, and communication tools.
            </p>
          </details>
        </section>

        {/* ===================== CALL TO ACTION BANNER ===================== */}
        <section className="contact-banner-modern">
          <div>
            <p className="eyebrow" style={{ color: '#059669' }}>Have a project or opportunity?</p>
            <h2>
              Let’s build something<br /><em>extraordinary together.</em>
            </h2>
          </div>
          <Link className="solid-button" href="/contact">
            <span>Start a Conversation ↗</span>
          </Link>
        </section>

      </div>
      <Footer />
    </main>
  );
}
