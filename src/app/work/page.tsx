'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import { ProjectGallery, ProjectId } from '@/components/ProjectGallery';
import { projects, ProjectCategory } from '@/lib/projects';
import { 
  ArrowRightIcon, 
  ExternalLinkIcon, 
  BrainIcon, 
  CodeIcon, 
  DatabaseIcon, 
  LayersIcon, 
  CheckCircleIcon,
  SparklesIcon
} from '@/components/Icons';

export default function Work() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'ai-ml': return <BrainIcon size={14} />;
      case 'fullstack': return <CodeIcon size={14} />;
      case 'enterprise': return <DatabaseIcon size={14} />;
      default: return <LayersIcon size={14} />;
    }
  };

  return (
    <main>
      <Header />
      <div className="shell">
        
        {/* Page Introduction */}
        <section className="page-intro">
          <p className="eyebrow">Portfolio Case Studies</p>
          <h1>
            Engineered systems for<br /><em>real-world momentum.</em>
          </h1>
          <p>
            Detailed technical breakdowns of my completed artificial intelligence platforms, machine learning systems, enterprise point-of-sale solutions, and full-stack web applications.
          </p>
        </section>

        {/* Category Filter Bar */}
        <div className="category-filter-bar">
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            <LayersIcon size={14} />
            <span>All Projects ({projects.length})</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'ai-ml' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('ai-ml')}
          >
            <BrainIcon size={14} />
            <span>AI & Machine Learning ({projects.filter(p => p.category === 'ai-ml').length})</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'fullstack' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('fullstack')}
          >
            <CodeIcon size={14} />
            <span>Full-Stack Web ({projects.filter(p => p.category === 'fullstack').length})</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'enterprise' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('enterprise')}
          >
            <DatabaseIcon size={14} />
            <span>Enterprise & POS ({projects.filter(p => p.category === 'enterprise').length})</span>
          </button>
        </div>

        {/* Projects List */}
        <div className="projects-container">
          {filteredProjects.map((project, index) => (
            <article className="case-study-modern" id={project.id} key={project.id}>
              <Reveal>
                <div className="case-hero-grid">
                  <div className="case-info-col">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <p className="eyebrow" style={{ margin: 0 }}>
                        0{index + 1} · {project.eyebrow}
                      </p>
                      {project.status === 'in-progress' && (
                        <span className="tile-status-badge in-progress">
                          <span className="dot pulse" />
                          <span>In Progress</span>
                        </span>
                      )}
                    </div>
                    <h2>{project.name}</h2>
                    <p className="tagline">{project.tagline}</p>
                    <p className="desc">{project.description}</p>

                    <div className="case-actions-group">
                      {project.id === 'copy-trading' ? (
                        <Link className="solid-button" href="/work/copy-trading">
                          <span>Dedicated Case Study</span>
                          <ArrowRightIcon size={14} />
                        </Link>
                      ) : project.url ? (
                        <a
                          className="solid-button"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Launch Live Platform</span>
                          <ExternalLinkIcon size={14} />
                        </a>
                      ) : (
                        <Link className="solid-button" href="/contact">
                          <span>Inquire About This Solution</span>
                          <ArrowRightIcon size={14} />
                        </Link>
                      )}
                      
                      <div className="tile-category-badge" style={{ padding: '8px 14px', background: '#f1f3ee', borderRadius: '999px' }}>
                        {getCategoryIcon(project.category)}
                        <span>Role: {project.role}</span>
                      </div>
                    </div>
                  </div>

                  <div className="case-media-col">
                    <ProjectGallery project={project.id as ProjectId} />
                  </div>
                </div>
              </Reveal>

              {/* Gallery Screenshots for LMS, POS, SafariGo */}
              {['lms', 'pos', 'ttms'].includes(project.id) && (
                <ProjectGallery project={project.id as ProjectId} gallery />
              )}

              {/* Full Interactive Suite for Copy Trading Platform */}
              {project.id === 'copy-trading' && (
                <div style={{ marginTop: '24px' }}>
                  <ProjectGallery project={project.id as ProjectId} gallery />
                </div>
              )}

              {/* Detailed Breakdown Quad Grid */}
              <div className="case-quad-grid">
                <article className="case-quad-card">
                  <p className="eyebrow">Core Problem & Context</p>
                  <h3>Challenge Addressed</h3>
                  <p>{project.challenge}</p>
                </article>

                <article className="case-quad-card">
                  <p className="eyebrow">System Capabilities</p>
                  <h3>Key Features & Workflow</h3>
                  <ul>
                    {project.features.map((feat) => (
                      <li key={feat}>
                        <CheckCircleIcon size={14} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="case-quad-card">
                  <p className="eyebrow">Engineering Foundation</p>
                  <h3>Technical Architecture</h3>
                  <ul>
                    {project.architecture.map((arch) => (
                      <li key={arch}>
                        <CheckCircleIcon size={14} />
                        <span>{arch}</span>
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="case-quad-card">
                  <p className="eyebrow">Real-World Outcome</p>
                  <h3>Business & Practical Impact</h3>
                  <p>{project.impact}</p>
                  <div className="tile-metrics-grid" style={{ marginTop: '16px', background: '#ffffff' }}>
                    {project.metrics.map((m, i) => (
                      <div key={i} className="tile-metric-item">
                        <b>{m.value}</b>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              {/* In-Progress Callout Banner for Copy Trading */}
              {project.id === 'copy-trading' && (
                <div style={{ 
                  marginTop: '28px', 
                  padding: '24px', 
                  background: '#fdfbf7', 
                  border: '1px solid #fde68a', 
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '16px'
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <span className="dot pulse" style={{ background: '#d97706' }} />
                      <strong style={{ fontSize: '14px', color: '#92400e', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Active Development Note
                      </strong>
                    </div>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--muted)', maxWidth: '720px', lineHeight: '1.6' }}>
                      NexusTrade’s database schemas, trader profiles, market catalogs, and administration consoles are fully operational. Current development is focused on high-frequency WebSocket child execution and MetaTrader/FIX broker bridge APIs.
                    </p>
                  </div>
                  <Link href="/work/copy-trading" className="solid-button" style={{ background: '#111413' }}>
                    <span>View Engineering Case Study</span>
                    <ArrowRightIcon size={14} />
                  </Link>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <section className="contact-banner-modern">
          <div>
            <p className="eyebrow" style={{ color: '#059669' }}>Have a project in mind?</p>
            <h2>
              Let’s turn your vision<br />into an <em>exceptional product.</em>
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
