'use client';

import { useState } from 'react';
import { DownloadIcon, CheckIcon } from './Icons';

export function CvDownload({ url = '/Rocky-Junior-CV.pdf' }: { url?: string }) {
  const [downloading, setDownloading] = useState(false);

  const handleClick = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <a
      className={`solid-button cv-download-btn ${downloading ? 'downloading' : ''}`}
      href={url}
      download="Rocky-Junior-CV.pdf"
      onClick={handleClick}
      aria-label="Download Rocky Junior's Curriculum Vitae"
    >
      {downloading ? <CheckIcon size={16} /> : <DownloadIcon size={16} />}
      <span>{downloading ? 'Downloading CV…' : 'Download Full CV (PDF)'}</span>
    </a>
  );
}
