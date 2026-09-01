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
            <span>AI & Machine Learning (2)</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'fullstack' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('fullstack')}
          >
            <CodeIcon size={14} />
            <span>Full-Stack Web (2)</span>
          </button>
          <button
            type="button"
            className={`filter-btn ${selectedCategory === 'enterprise' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('enterprise')}
          >
            <DatabaseIcon size={14} />
            <span>Enterprise & POS (1)</span>
          </button>
        </div>

        {/* Projects List */}
        <div className="projects-container">
          {filteredProjects.map((project, index) => (
            <article className="case-study-modern" id={project.id} key={project.id}>
              <Reveal>
                <div className="case-hero-grid">
                  <div className="case-info-col">
                    <p className="eyebrow">
                      0{index + 1} · {project.eyebrow}
                    </p>
                    <h2>{project.name}</h2>
                    <p className="tagline">{project.tagline}</p>
                    <p className="desc">{project.description}</p>

                    <div className="case-actions-group">
                      {project.url ? (
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
