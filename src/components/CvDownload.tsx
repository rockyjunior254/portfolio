'use client';

import { useState } from 'react';

export function CvDownload({ url }: { url?: string }) {
  const [opening, setOpening] = useState(false);
  if (!url) return <span className="cv-pending" title="Add NEXT_PUBLIC_CV_URL to enable this action">CV link pending</span>;
  const isLocalFile = url.startsWith('/');
  return <a className={`solid-button cv-download ${opening ? 'opening' : ''}`} href={url} download={isLocalFile} target={isLocalFile ? undefined : '_blank'} rel={isLocalFile ? undefined : 'noreferrer'} onClick={() => { setOpening(true); window.setTimeout(() => setOpening(false), 750); }}>{opening ? 'Opening CV…' : 'Download CV ↓'}</a>;
}
