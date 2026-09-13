'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './ProjectGallery.module.css';
import { AIPlatformMockup } from './AIPlatformMockup';
import { CopyTradingMockup } from './CopyTradingMockup';
import { BrainIcon, CpuIcon, DatabaseIcon, SparklesIcon, CheckCircleIcon } from './Icons';

export type ProjectId = 'universal-ai' | 'copy-trading' | 'lms' | 'pos' | 'ttms' | 'ml-systems';

const imageCounts: Record<string, number> = {
  lms: 8,
  pos: 6,
  ttms: 9,
};

export function ProjectGallery({ project, gallery = false }: { project: ProjectId; gallery?: boolean }) {
  const [activeImageIndex, setActiveImageIndex] = useState(1);

  if (project === 'universal-ai') {
    return <AIPlatformMockup />;
  }

  if (project === 'copy-trading') {
    return <CopyTradingMockup previewMode={!gallery} />;
  }

  if (project === 'ml-systems') {
    return (
      <div className="ml-visual-card">
        <div className="ml-visual-header">
          <div className="ml-badge">
            <BrainIcon size={14} />
            <span>ML Pipeline & Predictive Model Architecture</span>
          </div>
          <span className="ml-badge-sub">Python · PyTorch · Scikit-Learn · FastAPI</span>
        </div>
        
        <div className="ml-pipeline-grid">
          <div className="ml-pipe-card">
            <div className="ml-pipe-icon"><DatabaseIcon size={16} /></div>
            <h4>Data Engineering</h4>
            <p>Data cleaning, outlier detection, scaling, and automated feature selection pipelines.</p>
            <div className="ml-metric-badge">Pandas & NumPy ETL</div>
          </div>
          <div className="ml-pipe-card">
            <div className="ml-pipe-icon"><CpuIcon size={16} /></div>
            <h4>Model Development</h4>
            <p>Classification, regression, and deep learning architectures with cross-validation.</p>
            <div className="ml-metric-badge">PyTorch & Scikit-Learn</div>
          </div>
          <div className="ml-pipe-card">
            <div className="ml-pipe-icon"><SparklesIcon size={16} /></div>
            <h4>Evaluation & Tuning</h4>
            <p>ROC-AUC, Precision-Recall tuning, confusion matrices, and hyperparameter search.</p>
            <div className="ml-metric-badge">94.8% F1-Score Baseline</div>
          </div>
          <div className="ml-pipe-card">
            <div className="ml-pipe-icon"><CheckCircleIcon size={16} /></div>
            <h4>Production Inference</h4>
            <p>High-throughput REST API microservices with containerized deployment.</p>
            <div className="ml-metric-badge">FastAPI & Docker</div>
          </div>
        </div>
      </div>
    );
  }

  const count = imageCounts[project] || 1;
  const label = project === 'lms' 
    ? 'Nairobi LMS enterprise interface' 
    : project === 'pos' 
    ? 'POS business system operations interface' 
    : 'SafariGo travel and booking interface';

  if (!gallery) {
    return (
      <div className={styles.feature}>
        <Image 
          src={`/projects/${project}/screen-1.jpeg`} 
          alt={label} 
          fill 
          priority={project === 'lms'}
          sizes="(max-width: 760px) 95vw, 48vw" 
        />
      </div>
    );
  }

  const screens = Array.from({ length: Math.min(count, 6) }, (_, index) => index + 1);

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.mainPreview}>
        <div className={styles.featureImageContainer}>
          <Image 
            src={`/projects/${project}/screen-${activeImageIndex}.jpeg`} 
            alt={`${label}, screen view ${activeImageIndex}`} 
            fill 
            sizes="(max-width: 760px) 95vw, 60vw" 
          />
        </div>
        <div className={styles.previewCaption}>
          <span>Screen {activeImageIndex} of {screens.length}</span>
          <small>{label}</small>
        </div>
      </div>

      <div className={styles.thumbnailStrip}>
        {screens.map((number) => (
          <button
            key={number}
            type="button"
            className={`${styles.thumbButton} ${activeImageIndex === number ? styles.activeThumb : ''}`}
            onClick={() => setActiveImageIndex(number)}
            aria-label={`View screenshot ${number}`}
          >
            <Image 
              src={`/projects/${project}/screen-${number}.jpeg`} 
              alt={`Thumbnail ${number}`} 
              fill 
              sizes="80px" 
            />
          </button>
        ))}
      </div>
    </div>
  );
}
