'use client';

import React, { useState, useEffect } from 'react';
import { 
  MicIcon, 
  VolumeIcon, 
  LanguagesIcon, 
  SparklesIcon, 
  BrainIcon, 
  ZapIcon, 
  CheckCircleIcon,
  ArrowRightIcon
} from './Icons';

export function AIPlatformMockup() {
  const [activeTab, setActiveTab] = useState<'demo' | 'pipeline' | 'languages'>('demo');
  const [selectedPair, setSelectedPair] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [waveformBars, setWaveformBars] = useState<number[]>([40, 65, 30, 85, 95, 60, 45, 80, 55, 90, 70, 40]);

  const conversationDemos = [
    {
      sourceLang: 'Swahili (Kiswahili)',
      sourceFlag: '🇰🇪',
      sourceText: 'Habari za asubuhi! Jukwaa hili la akili bandia linatuwezesha kuwasiliana bila vizuizi vya lugha.',
      targetLang: 'English (US)',
      targetFlag: '🌐',
      targetText: 'Good morning! This AI platform enables us to communicate seamlessly across language barriers.',
      confidence: '99.2%',
      latency: '340ms'
    },
    {
      sourceLang: 'French (Français)',
      sourceFlag: '🇫🇷',
      sourceText: 'La reconnaissance vocale neuronale et la traduction en temps réel transforment la collaboration.',
      targetLang: 'Swahili (Kiswahili)',
      targetFlag: '🇰🇪',
      targetText: 'Utambuzi wa sauti wa kinuroni na tafsiri ya papo hapo inabadilisha ushirikiano wetu.',
      confidence: '98.7%',
      latency: '380ms'
    },
    {
      sourceLang: 'English (UK)',
      sourceFlag: '🇬🇧',
      sourceText: 'Integrating automated speech recognition with zero-shot neural translation creates instant voice output.',
      targetLang: 'Spanish (Español)',
      targetFlag: '🇪🇸',
      targetText: 'Integrar el reconocimiento de voz automatizado con traducción neuronal crea una salida de voz instantánea.',
      confidence: '99.5%',
      latency: '310ms'
    }
  ];

  // Animate waveform subtly
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveformBars(prev => prev.map(() => Math.floor(Math.random() * 65) + 25));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  const currentDemo = conversationDemos[selectedPair];

  return (
    <div className="ai-mockup-card">
      <div className="ai-mockup-header">
        <div className="ai-mockup-badge">
          <SparklesIcon size={14} />
          <span>Universal AI Platform · Live Preview</span>
        </div>
        <div className="ai-tabs">
          <button 
            type="button"
            className={activeTab === 'demo' ? 'active' : ''} 
            onClick={() => setActiveTab('demo')}
          >
            Live Translation
          </button>
          <button 
            type="button"
            className={activeTab === 'pipeline' ? 'active' : ''} 
            onClick={() => setActiveTab('pipeline')}
          >
            AI Architecture
          </button>
          <button 
            type="button"
            className={activeTab === 'languages' ? 'active' : ''} 
            onClick={() => setActiveTab('languages')}
          >
            Language Matrix
          </button>
        </div>
      </div>

      {activeTab === 'demo' && (
        <div className="ai-demo-body">
          <div className="pair-selector">
            {conversationDemos.map((demo, idx) => (
              <button
                key={idx}
                type="button"
                className={`pair-btn ${selectedPair === idx ? 'active' : ''}`}
                onClick={() => { setSelectedPair(idx); setIsPlaying(false); }}
              >
                <span>{demo.sourceFlag} {demo.sourceLang.split(' ')[0]}</span>
                <ArrowRightIcon size={12} />
                <span>{demo.targetFlag} {demo.targetLang.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          <div className="ai-panels-grid">
            {/* Input Speech Panel */}
            <div className="ai-panel source-panel">
              <div className="panel-top">
                <span className="lang-tag">
                  <MicIcon size={13} />
                  {currentDemo.sourceLang}
                </span>
                <span className="ai-status-pill">
                  <span className="dot pulse" />
                  Live ASR Detected
                </span>
              </div>
              <p className="panel-text">"{currentDemo.sourceText}"</p>
              
              {/* Waveform indicator */}
              <div className="audio-visualizer">
                <div className="mic-chip">
                  <MicIcon size={15} />
                </div>
                <div className="bars">
                  {waveformBars.map((h, i) => (
                    <span 
                      key={i} 
                      style={{ height: `${h}%` }} 
                      className="waveform-bar"
                    />
                  ))}
                </div>
                <span className="viz-label">Speech Ingestion · 16kHz</span>
              </div>
            </div>

            {/* Neural Translation & Output Panel */}
            <div className="ai-panel target-panel">
              <div className="panel-top">
                <span className="lang-tag target">
                  <LanguagesIcon size={13} />
                  {currentDemo.targetLang}
                </span>
                <span className="ai-metric-pill">
                  <ZapIcon size={12} />
                  {currentDemo.latency} latency
                </span>
              </div>
              <p className="panel-text translated">"{currentDemo.targetText}"</p>
              
              {/* TTS Voice Output Action */}
              <div className="tts-output-bar">
                <button 
                  type="button"
                  className={`tts-play-btn ${isPlaying ? 'playing' : ''}`}
                  onClick={() => setIsPlaying(!isPlaying)}
                  title="Synthesize Neural Speech"
                >
                  <VolumeIcon size={16} />
                  <span>{isPlaying ? 'Synthesizing Audio…' : 'Play Neural Voice'}</span>
                </button>
                <div className="ai-specs">
                  <small>Confidence: <b>{currentDemo.confidence}</b></small>
                  <small>Model: <b>NMT-Transformer</b></small>
                </div>
              </div>
            </div>
          </div>

          <div className="ai-demo-footer">
            <div className="feature-chip">
              <CheckCircleIcon size={13} />
              <span>Whisper Speech-to-Text</span>
            </div>
            <div className="feature-chip">
              <CheckCircleIcon size={13} />
              <span>Zero-Shot Detection</span>
            </div>
            <div className="feature-chip">
              <CheckCircleIcon size={13} />
              <span>Contextual Neural NMT</span>
            </div>
            <div className="feature-chip">
              <CheckCircleIcon size={13} />
              <span>Low-Latency TTS Engine</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pipeline' && (
        <div className="ai-pipeline-view">
          <div className="pipeline-steps">
            <div className="pipe-step">
              <div className="pipe-icon"><MicIcon size={18} /></div>
              <b>1. Audio Capture</b>
              <p>16kHz Web Audio stream chunking over bidirectional WebSockets.</p>
            </div>
            <div className="pipe-arrow">→</div>
            <div className="pipe-step">
              <div className="pipe-icon"><BrainIcon size={18} /></div>
              <b>2. Whisper ASR</b>
              <p>Noise-resistant acoustic modeling generating raw tokens.</p>
            </div>
            <div className="pipe-arrow">→</div>
            <div className="pipe-step">
              <div className="pipe-icon"><LanguagesIcon size={18} /></div>
              <b>3. NMT Translation</b>
              <p>Multilingual transformer mapping semantic embeddings across 40+ dialects.</p>
            </div>
            <div className="pipe-arrow">→</div>
            <div className="pipe-step">
              <div className="pipe-icon"><VolumeIcon size={18} /></div>
              <b>4. Neural TTS</b>
              <p>Mel-spectrogram synthesis yielding lifelike voice delivery.</p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'languages' && (
        <div className="ai-languages-view">
          <div className="lang-grid">
            {[
              { name: 'Swahili', code: 'SW', region: 'East Africa / Kenya', dialect: 'Coastal & Standard' },
              { name: 'English', code: 'EN', region: 'Global / US / UK', dialect: 'General & Colloquial' },
              { name: 'French', code: 'FR', region: 'Francophone Africa & Europe', dialect: 'Standard' },
              { name: 'Spanish', code: 'ES', region: 'Latin America & Spain', dialect: 'Universal' },
              { name: 'German', code: 'DE', region: 'Central Europe', dialect: 'Standard' },
              { name: 'Arabic', code: 'AR', region: 'MENA Region', dialect: 'Modern Standard' },
              { name: 'Mandarin', code: 'ZH', region: 'East Asia', dialect: 'Simplified' },
              { name: 'Portuguese', code: 'PT', region: 'Lusophone Nations', dialect: 'Global' }
            ].map(lang => (
              <div key={lang.code} className="lang-card">
                <div className="lang-code">{lang.code}</div>
                <div>
                  <strong>{lang.name}</strong>
                  <small>{lang.region}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

