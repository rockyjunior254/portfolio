import React from 'react';
import Link from 'next/link';
import { ProjectGallery } from './ProjectGallery';
import type { Project } from '@/lib/projects';
import { 
  ArrowRightIcon, 
  ExternalLinkIcon, 
  BrainIcon, 
  CodeIcon, 
  DatabaseIcon, 
  LayersIcon,
  SparklesIcon
} from './Icons';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'ai-ml': return <BrainIcon size={14} />;
      case 'fullstack': return <CodeIcon size={14} />;
      case 'enterprise': return <DatabaseIcon size={14} />;
      default: return <LayersIcon size={14} />;
    }
  };

  const getAccentClass = (accent: string) => {
    switch (accent) {
      case 'violet': return 'accent-violet';
      case 'emerald': return 'accent-emerald';
      case 'amber': return 'accent-amber';
      case 'cyan': return 'accent-cyan';
      default: return 'accent-blue';
    }
  };

  return (
    <article className={`project-tile-modern ${getAccentClass(project.accent)}`}>
      <div className="tile-top-bar">
        <div className="tile-category-badge">
          {getCategoryIcon(project.category)}
          <span>{project.eyebrow}</span>
        </div>
        <span className="tile-index-pill">0{index + 1}</span>
      </div>

      <div className="tile-preview-container">
        <ProjectGallery project={project.id} />
      </div>

      <div className="tile-content-modern">
        <div className="tile-header-area">
          <h3 className="tile-project-title">
            <Link href={`/work#${project.id}`}>
              {project.name}
            </Link>
          </h3>
          <p className="tile-tagline">{project.tagline}</p>
        </div>

        <p className="tile-description-modern">{project.description}</p>

        {/* Metrics Grid */}
        <div className="tile-metrics-grid">
          {project.metrics.slice(0, 3).map((m, idx) => (
            <div key={idx} className="tile-metric-item">
              <b>{m.value}</b>
              <span>{m.label}</span>
            </div>
          ))}
        </div>

        {/* Technology Pills */}
        <div className="tile-tech-pills">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
          {project.technologies.length > 5 && (
            <span className="tech-pill more">+{project.technologies.length - 5}</span>
          )}
        </div>

        {/* Actions Bar */}
        <div className="tile-actions-modern">
          <Link href={`/work#${project.id}`} className="tile-cta-primary">
            <span>Case Study</span>
            <ArrowRightIcon size={14} />
          </Link>

          {project.url && (
            <a 
              href={project.url} 
              target="_blank" 
              rel="noreferrer" 
              className="tile-cta-secondary"
              aria-label={`Open live site for ${project.name}`}
            >
              <span>Live Product</span>
              <ExternalLinkIcon size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
