'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  TrendingUpIcon, 
  ShieldCheckIcon, 
  ActivityIcon, 
  SlidersIcon, 
  ClockIcon, 
  ArrowRightIcon, 
  ArrowUpRightIcon, 
  CopyIcon, 
  CheckCircleIcon, 
  DatabaseIcon, 
  CodeIcon, 
  ServerIcon, 
  SparklesIcon,
  LayersIcon
} from './Icons';

type Tab = 'discovery' | 'markets' | 'architecture' | 'screens' | 'roadmap';

const MASTER_TRADERS = [
  {
    id: 'trd-maya',
    name: 'Maya Chen',
    handle: '@mayachen_quant',
    strategy: 'Quant Momentum Alpha',
    category: 'Equities & Indices',
    risk: 'Balanced',
    return30d: '+38.6%',
    return1y: '+114.2%',
    winRate: '72.4%',
    maxDrawdown: '8.2%',
    copiers: 1420,
    aum: '$24.5M',
    sparkline: [40, 48, 45, 58, 62, 68, 74, 88]
  },
  {
    id: 'trd-atlas',
    name: 'Atlas Capital',
    handle: '@atlas_macro',
    strategy: 'Global Macro Trend',
    category: 'Forex & Commodities',
    risk: 'Conservative',
    return30d: '+24.8%',
    return1y: '+82.6%',
    winRate: '78.1%',
    maxDrawdown: '5.4%',
    copiers: 2190,
    aum: '$38.2M',
    sparkline: [50, 52, 55, 59, 64, 70, 75, 82]
  },
  {
    id: 'trd-satoshi',
    name: 'Satoshi Wave',
    handle: '@satoshi_arb',
    strategy: 'Crypto Arbitrage & Momentum',
    category: 'Crypto Assets',
    risk: 'Aggressive',
    return30d: '+52.4%',
    return1y: '+148.9%',
    winRate: '68.8%',
    maxDrawdown: '11.5%',
    copiers: 980,
    aum: '$16.8M',
    sparkline: [35, 45, 40, 60, 55, 75, 70, 92]
  }
];

const REAL_MARKETS = [
  { symbol: 'BTC-USD', name: 'Bitcoin', category: 'Crypto', price: '$91,420.00', change: '+4.82%', up: true },
  { symbol: 'EUR-USD', name: 'Euro / US Dollar', category: 'Forex', price: '1.0845', change: '+0.24%', up: true },
  { symbol: 'NVDA', name: 'NVIDIA Corp.', category: 'Equities', price: '$128.50', change: '+3.15%', up: true },
  { symbol: 'XAU-USD', name: 'Gold Spot', category: 'Commodities', price: '$2,642.80', change: '+0.62%', up: true },
  { symbol: 'GBP-USD', name: 'British Pound / USD', category: 'Forex', price: '1.2982', change: '+0.38%', up: true },
  { symbol: 'ETH-USD', name: 'Ethereum', category: 'Crypto', price: '$3,340.50', change: '-1.12%', up: false },
];

export function CopyTradingMockup({ previewMode = false }: { previewMode?: boolean }) {
  const [activeTab, setActiveTab] = useState<Tab>('discovery');
  const [selectedTraderIndex, setSelectedTraderIndex] = useState<number>(0);
  const [copyModalOpen, setCopyModalOpen] = useState<boolean>(false);
  const [allocationAmount, setAllocationAmount] = useState<number>(2500);
  const [stopLossPercent, setStopLossPercent] = useState<number>(15);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const [marketFilter, setMarketFilter] = useState<'All' | 'Crypto' | 'Forex' | 'Equities'>('All');
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(1);

  const activeTrader = MASTER_TRADERS[selectedTraderIndex];

  const filteredMarkets = marketFilter === 'All' 
    ? REAL_MARKETS 
    : REAL_MARKETS.filter(m => m.category === marketFilter);

  // If used as compact preview inside a project card
  if (previewMode) {
    return (
      <div className="fintech-preview-container">
        {/* Top Mini Header */}
        <div className="fintech-mini-header">
          <div className="fintech-brand-tag">
            <span className="fintech-logo-icon">
              <TrendingUpIcon size={13} />
            </span>
            <span>NexusTrade Engine</span>
          </div>
          <span className="fintech-status-chip">
            <span className="dot pulse" />
            Active Mirroring
          </span>
        </div>

        {/* Featured Master Trader Card */}
        <div className="fintech-preview-card">
          <div className="trader-hero-row">
            <div className="trader-avatar-box">
              <span className="avatar-initials">MC</span>
              <span className="verified-badge">✓</span>
            </div>
            <div className="trader-id-meta">
              <div className="trader-name-row">
                <h4>Maya Chen</h4>
                <span className="strategy-tag">Quant Alpha</span>
              </div>
              <p className="trader-handle">@mayachen_quant · Multi-Asset</p>
            </div>
            <div className="trader-return-badge">
              <small>30D Return</small>
              <strong>+38.6%</strong>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="fintech-metrics-strip">
            <div className="metric-strip-item">
              <span>Win Rate</span>
              <b>72.4%</b>
            </div>
            <div className="metric-strip-item">
              <span>Max DD</span>
              <b className="metric-green">8.2%</b>
            </div>
            <div className="metric-strip-item">
              <span>AUM</span>
              <b>$24.5M</b>
            </div>
            <div className="metric-strip-item">
              <span>Copiers</span>
              <b>1,420</b>
            </div>
          </div>

          {/* Simulated Equity Curve */}
          <div className="mini-chart-container">
            <svg viewBox="0 0 400 90" className="mini-equity-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="equityGradPreview" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path 
                d="M0 75 C40 70 80 60 120 50 S180 55 220 40 S300 25 350 15 L400 8 L400 90 L0 90 Z" 
                fill="url(#equityGradPreview)" 
              />
              <path 
                d="M0 75 C40 70 80 60 120 50 S180 55 220 40 S300 25 350 15 L400 8" 
                fill="none" 
                stroke="#059669" 
                strokeWidth="2.5" 
              />
            </svg>
            <div className="chart-legend-overlay">
              <span>30D Trajectory</span>
              <span className="live-pill"><ActivityIcon size={10} /> Real-Time Feed</span>
            </div>
          </div>

          {/* Action Simulation Footer */}
          <div className="fintech-preview-footer">
            <div className="guardrail-note">
              <ShieldCheckIcon size={13} />
              <span>Auto Stop-Loss & Max Drawdown Guard</span>
            </div>
            <span className="copy-action-btn-sm">
              <CopyIcon size={12} />
              <span>Mirror Trader</span>
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Full interactive mode (for Works page and dedicated Case Study page)
  return (
    <div className="fintech-interactive-card">
      {/* Header with Navigation Tabs */}
      <div className="fintech-main-header">
        <div className="fintech-header-meta">
          <div className="fintech-brand-tag">
            <span className="fintech-logo-icon">
              <TrendingUpIcon size={15} />
            </span>
            <span className="brand-title">NexusTrade Platform</span>
          </div>
          <span className="ongoing-tag">
            <span className="dot pulse" />
            Ongoing Development
          </span>
        </div>

        <div className="fintech-tab-list">
          <button 
            type="button"
            className={`fintech-tab ${activeTab === 'discovery' ? 'active' : ''}`}
            onClick={() => setActiveTab('discovery')}
          >
            <CopyIcon size={14} />
            <span>Trader Discovery</span>
          </button>
          <button 
            type="button"
            className={`fintech-tab ${activeTab === 'markets' ? 'active' : ''}`}
            onClick={() => setActiveTab('markets')}
          >
            <ActivityIcon size={14} />
            <span>Market Ticker</span>
          </button>
          <button 
            type="button"
            className={`fintech-tab ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            <LayersIcon size={14} />
            <span>Visual Architecture</span>
          </button>
          <button 
            type="button"
            className={`fintech-tab ${activeTab === 'screens' ? 'active' : ''}`}
            onClick={() => setActiveTab('screens')}
          >
            <SparklesIcon size={14} />
            <span>Platform Screens (4)</span>
          </button>
          <button 
            type="button"
            className={`fintech-tab ${activeTab === 'roadmap' ? 'active' : ''}`}
            onClick={() => setActiveTab('roadmap')}
          >
            <ClockIcon size={14} />
            <span>Progress & Roadmap</span>
          </button>
        </div>
      </div>

      {/* ==================== TAB 1: TRADER DISCOVERY & COPY MODAL ==================== */}
      {activeTab === 'discovery' && (
        <div className="fintech-content-body">
          <div className="trader-selection-row">
            <span className="selection-label">Select Strategy Leader to Inspect:</span>
            <div className="trader-pills">
              {MASTER_TRADERS.map((trader, idx) => (
                <button
                  key={trader.id}
                  type="button"
                  className={`trader-select-pill ${selectedTraderIndex === idx ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedTraderIndex(idx);
                    setIsCopied(false);
                  }}
                >
                  <span className="pill-avatar">{trader.name[0]}</span>
                  <span>{trader.name}</span>
                  <span className="pill-return">{trader.return30d}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="trader-spotlight-grid">
            {/* Left: Leader Detail Card */}
            <div className="leader-detail-card">
              <div className="leader-top-header">
                <div className="leader-bio-block">
                  <div className="leader-avatar-lg">
                    <span>{activeTrader.name.split(' ').map(n => n[0]).join('')}</span>
                    <span className="badge-check">✓</span>
                  </div>
                  <div>
                    <h3>{activeTrader.name}</h3>
                    <p className="strategy-sub">{activeTrader.strategy} · {activeTrader.category}</p>
                    <span className={`risk-pill ${activeTrader.risk.toLowerCase()}`}>
                      <ShieldCheckIcon size={12} />
                      Risk: {activeTrader.risk}
                    </span>
                  </div>
                </div>

                <div className="return-card-block">
                  <span className="return-label">30-Day Return</span>
                  <strong className="return-value">{activeTrader.return30d}</strong>
                  <small>1Y: {activeTrader.return1y}</small>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="leader-stats-grid">
                <div className="stat-box">
                  <span>Win Rate</span>
                  <b>{activeTrader.winRate}</b>
                </div>
                <div className="stat-box">
                  <span>Max Drawdown</span>
                  <b className="green-text">{activeTrader.maxDrawdown}</b>
                </div>
                <div className="stat-box">
                  <span>Copiers Count</span>
                  <b>{activeTrader.copiers.toLocaleString()}</b>
                </div>
                <div className="stat-box">
                  <span>Assets Under Mirror</span>
                  <b>{activeTrader.aum}</b>
                </div>
              </div>

              {/* Chart Visualizer */}
              <div className="equity-curve-container">
                <div className="curve-header">
                  <span>Performance Curve (Systematic Return vs Drawdown)</span>
                  <span className="verified-audited">
                    <CheckCircleIcon size={12} /> Audited Historicals
                  </span>
                </div>
                <div className="svg-chart-box">
                  <svg viewBox="0 0 500 120" className="interactive-equity-svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="activeTraderGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#059669" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M0 95 C60 90 110 75 160 80 S240 60 300 45 S400 35 450 20 L500 10 L500 120 L0 120 Z" 
                      fill="url(#activeTraderGrad)" 
                    />
                    <path 
                      d="M0 95 C60 90 110 75 160 80 S240 60 300 45 S400 35 450 20 L500 10" 
                      fill="none" 
                      stroke="#059669" 
                      strokeWidth="3" 
                    />
                  </svg>
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="leader-action-bar">
                <button
                  type="button"
                  className={`mirror-trigger-btn ${isCopied ? 'copied' : ''}`}
                  onClick={() => setCopyModalOpen(!copyModalOpen)}
                >
                  <CopyIcon size={15} />
                  <span>{isCopied ? `Mirroring ${activeTrader.name} ($${allocationAmount.toLocaleString()})` : `Configure Mirror Settings for ${activeTrader.name}`}</span>
                </button>
              </div>
            </div>

            {/* Right: Interactive Copy Allocation & Risk Control Dialog */}
            <div className="allocation-simulator-card">
              <div className="sim-header">
                <div className="sim-title">
                  <SlidersIcon size={16} />
                  <h4>Copy Allocation & Risk Controls</h4>
                </div>
                <span className="guardrail-badge">Active Risk Gate</span>
              </div>

              <p className="sim-desc">
                Adjust simulated capital allocation and automatic stop-loss rules. The execution engine halts mirroring if drawdown violates constraints.
              </p>

              {/* Capital Allocation Input */}
              <div className="sim-field-group">
                <div className="field-label-row">
                  <label>Simulated Capital Allocation:</label>
                  <strong>${allocationAmount.toLocaleString()} USD</strong>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="10000" 
                  step="250"
                  value={allocationAmount} 
                  onChange={(e) => {
                    setAllocationAmount(Number(e.target.value));
                    setIsCopied(false);
                  }}
                  className="sim-slider"
                />
                <div className="range-bounds">
                  <span>Min: $500</span>
                  <span>Max: $10,000</span>
                </div>
              </div>

              {/* Stop Loss Threshold */}
              <div className="sim-field-group">
                <div className="field-label-row">
                  <label>Safety Stop-Loss Threshold:</label>
                  <strong className="amber-text">-{stopLossPercent}% Drawdown</strong>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="30" 
                  step="1"
                  value={stopLossPercent} 
                  onChange={(e) => {
                    setStopLossPercent(Number(e.target.value));
                    setIsCopied(false);
                  }}
                  className="sim-slider"
                />
                <div className="range-bounds">
                  <span>Conservative: 5%</span>
                  <span>Aggressive: 30%</span>
                </div>
              </div>

              {/* Real-time Math Breakdown */}
              <div className="risk-calculation-box">
                <div className="calc-row">
                  <span>Protected Capital Floor:</span>
                  <b>${((allocationAmount * (100 - stopLossPercent)) / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}</b>
                </div>
                <div className="calc-row">
                  <span>Max Capital at Risk:</span>
                  <span className="amber-text">${((allocationAmount * stopLossPercent) / 100).toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="calc-row">
                  <span>Execution Mode:</span>
                  <b>Proportional Position Mirroring</b>
                </div>
              </div>

              {/* Apply / Confirm Simulation */}
              <button
                type="button"
                className={`confirm-allocation-btn ${isCopied ? 'success' : ''}`}
                onClick={() => setIsCopied(true)}
              >
                {isCopied ? (
                  <>
                    <CheckCircleIcon size={16} />
                    <span>Allocation Guardrails Active</span>
                  </>
                ) : (
                  <>
                    <span>Apply Copy Parameters</span>
                    <ArrowRightIcon size={14} />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB 2: MULTI-ASSET MARKET TICKER ==================== */}
      {activeTab === 'markets' && (
        <div className="fintech-content-body">
          <div className="markets-toolbar">
            <div>
              <h4>Real-Time Multi-Asset Catalog</h4>
              <p>Live benchmark quotes spanning 27 instruments across 6 key global asset classes.</p>
            </div>
            <div className="market-filter-chips">
              {(['All', 'Crypto', 'Forex', 'Equities'] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`market-chip ${marketFilter === cat ? 'active' : ''}`}
                  onClick={() => setMarketFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="markets-cards-grid">
            {filteredMarkets.map((asset) => (
              <div key={asset.symbol} className="market-instrument-tile">
                <div className="instrument-top">
                  <div>
                    <span className="instrument-symbol">{asset.symbol}</span>
                    <p className="instrument-name">{asset.name}</p>
                  </div>
                  <span className={`instrument-change ${asset.up ? 'up' : 'down'}`}>
                    {asset.change}
                  </span>
                </div>

                <div className="instrument-bottom">
                  <div className="price-tag">{asset.price}</div>
                  <span className="asset-category-pill">{asset.category}</span>
                </div>

                {/* Decorative Mini Sparkline */}
                <div className="instrument-sparkline">
                  <svg viewBox="0 0 160 30" className="sparkline-svg" preserveAspectRatio="none">
                    <path 
                      d={asset.up 
                        ? "M0 24 Q40 20 80 14 T160 6" 
                        : "M0 8 Q40 12 80 18 T160 25"
                      }
                      fill="none" 
                      stroke={asset.up ? '#059669' : '#dc2626'} 
                      strokeWidth="2" 
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          <div className="market-architecture-callout">
            <div className="callout-icon">
              <ActivityIcon size={18} />
            </div>
            <div className="callout-text">
              <strong>Sub-Second Price Feed Aggregation</strong>
              <p>Integrated with Supabase database triggers to maintain live quotes, high/low limits, and instant PnL evaluation for all active copier contracts.</p>
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB 3: VISUAL ARCHITECTURE FLOW ==================== */}
      {activeTab === 'architecture' && (
        <div className="fintech-content-body">
          <div className="architecture-header">
            <h4>End-to-End System Architecture</h4>
            <p>Interactive data flow visualizer: Click each tier to inspect implementation specifics and security guardrails.</p>
          </div>

          {/* 4-Node Visual Architecture Pipeline */}
          <div className="visual-pipeline-flow">
            {[
              {
                step: '01',
                title: 'User / Client',
                subtitle: 'Next.js 16 & React 19 UI',
                description: 'Responsive desktop & mobile client with Recharts equity analytics, WebSocket live tickers, and accessible form controls.',
                tech: ['Next.js 16', 'React 19', 'Tailwind CSS', 'Recharts'],
                status: 'Production Ready'
              },
              {
                step: '02',
                title: 'API & Middleware',
                subtitle: 'Supabase SSR & Edge Routing',
                description: 'Secure HTTP-only session cookies, role-based access control (RBAC), and middleware routing separating copiers from administrators.',
                tech: ['Supabase SSR', 'Next Middleware', 'Zod Validation'],
                status: 'Production Ready'
              },
              {
                step: '03',
                title: 'Backend & Database',
                subtitle: 'PostgreSQL Relational Core',
                description: 'Comprehensive schema with Row Level Security (RLS), atomic wallet ledger transactions, and automated trigger functions.',
                tech: ['PostgreSQL', 'Drizzle ORM', 'Row Level Security'],
                status: 'Schema & RLS Complete'
              },
              {
                step: '04',
                title: 'Trading & Copy Engine',
                subtitle: 'Proportional Mirror Worker',
                description: 'Calculates proportional lot sizes, evaluates stop-loss ceilings in real-time, and dispatches mirror orders to broker interfaces.',
                tech: ['Async Worker', 'Risk Calculations', 'Broker Bridge'],
                status: 'Active Development'
              }
            ].map((layer, idx) => (
              <div 
                key={layer.step}
                className={`pipeline-tier-card ${activeLayerIndex === idx ? 'active-layer' : ''}`}
                onClick={() => setActiveLayerIndex(idx)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => { if (e.key === 'Enter') setActiveLayerIndex(idx); }}
              >
                <div className="tier-badge-row">
                  <span className="tier-step-chip">Tier {layer.step}</span>
                  <span className={`tier-status-pill ${idx === 3 ? 'in-progress' : 'complete'}`}>
                    {layer.status}
                  </span>
                </div>

                <h5>{layer.title}</h5>
                <small className="tier-subtitle">{layer.subtitle}</small>
                <p className="tier-desc">{layer.description}</p>

                <div className="tier-tech-pills">
                  {layer.tech.map(t => (
                    <span key={t} className="tier-pill">{t}</span>
                  ))}
                </div>

                {idx < 3 && (
                  <div className="connector-arrow">
                    <ArrowRightIcon size={14} />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Detailed Selected Layer Inspector */}
          <div className="layer-inspection-drawer">
            <div className="drawer-header">
              <span className="drawer-eyebrow">Tier Deep Dive:</span>
              <h5>
                {activeLayerIndex === 0 && 'Client Tier: Modular Component Architecture'}
                {activeLayerIndex === 1 && 'Gateway Tier: Secure Authentication & Middleware'}
                {activeLayerIndex === 2 && 'Data Tier: Financial Schema & Atomic Transactions'}
                {activeLayerIndex === 3 && 'Execution Tier: Copy Logic & Risk Management'}
              </h5>
            </div>
            <div className="drawer-content">
              {activeLayerIndex === 0 && (
                <p>Built with Next.js 16 App Router using React 19 server and client components. Features dedicated hub views for Leader Discovery, Market Trading View, Copier Dashboard, Wallet Operations, and Administrative controls—all styled with a dark/light fintech design system.</p>
              )}
              {activeLayerIndex === 1 && (
                <p>Leverages `@supabase/ssr` to ensure user sessions are authenticated server-side with secure HTTP-only cookies. Next.js middleware enforces strict role guards: ordinary users cannot access `/admin/*`, and unauthenticated visitors are redirected to authentication flows.</p>
              )}
              {activeLayerIndex === 2 && (
                <p>Designed around 12 normalized PostgreSQL tables (`profiles`, `wallets`, `wallet_transactions`, `master_traders`, `copy_relationships`, `user_trades`, `user_orders`, etc.). Implements strict check constraints preventing negative wallet balances and RLS policies ensuring users can only read their own financial assets.</p>
              )}
              {activeLayerIndex === 3 && (
                <p>The core engine calculates copier lot sizes as a proportion of master trader equity: <code>Copier Size = Leader Size × (Copier Allocated / Leader Equity)</code>. Continuously monitors market ticks to trigger automated stop-loss exits before drawdown limits are breached.</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB 4: DEVELOPMENT STATUS & ROADMAP ==================== */}
      {activeTab === 'roadmap' && (
        <div className="fintech-content-body">
          <div className="roadmap-header">
            <h4>Engineering Progress & Development Journey</h4>
            <p>Transparent progress ledger detailing what has been implemented and what is actively in development.</p>
          </div>

          <div className="roadmap-progress-columns">
            {/* Completed Column */}
            <div className="roadmap-column completed">
              <div className="column-header">
                <span className="col-status-tag completed">
                  <CheckCircleIcon size={13} /> Completed & Functional (100%)
                </span>
                <h5>Implemented Foundations</h5>
              </div>
              <ul className="roadmap-list">
                <li>
                  <CheckCircleIcon size={14} />
                  <div>
                    <strong>Master Trader Discovery & Analytics</strong>
                    <p>Filtering by 30D/1Y return, risk level, win rate, and copier metrics.</p>
                  </div>
                </li>
                <li>
                  <CheckCircleIcon size={14} />
                  <div>
                    <strong>Multi-Asset Market Catalog (27 Instruments)</strong>
                    <p>Quotes across Forex, Equities, Crypto, Commodities & Indices.</p>
                  </div>
                </li>
                <li>
                  <CheckCircleIcon size={14} />
                  <div>
                    <strong>Supabase PostgreSQL Relational Schema</strong>
                    <p>12 tables, RLS policies, check constraints, and migration scripts.</p>
                  </div>
                </li>
                <li>
                  <CheckCircleIcon size={14} />
                  <div>
                    <strong>Role-Based User & Admin Dashboards</strong>
                    <p>Copier portfolio tracking, admin verification, and transaction oversight.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* In Progress Column */}
            <div className="roadmap-column ongoing">
              <div className="column-header">
                <span className="col-status-tag ongoing">
                  <ClockIcon size={13} /> Under Active Development
                </span>
                <h5>Current Engineering Focus</h5>
              </div>
              <ul className="roadmap-list">
                <li>
                  <ActivityIcon size={14} className="amber-icon" />
                  <div>
                    <strong>Automated High-Frequency Mirror Worker</strong>
                    <p>Background daemon executing sub-second child order replication via WebSockets.</p>
                  </div>
                </li>
                <li>
                  <SlidersIcon size={14} className="amber-icon" />
                  <div>
                    <strong>Dynamic Margin Call & Liquidation Engine</strong>
                    <p>Instant safety trigger cutting positions when market volatility exceeds thresholds.</p>
                  </div>
                </li>
                <li>
                  <ServerIcon size={14} className="amber-icon" />
                  <div>
                    <strong>Live Broker API Execution Bridge</strong>
                    <p>Bridging synthetic paper-trading orders with real FIX / MetaTrader gateway accounts.</p>
                  </div>
                </li>
                <li>
                  <ShieldCheckIcon size={14} className="amber-icon" />
                  <div>
                    <strong>Production Custom SMTP Verification</strong>
                    <p>Transactional email setup (Amazon SES / Resend) for real user onboarding.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* ==================== TAB 5: PLATFORM SCREENSHOTS VIEWER ==================== */}
      {activeTab === 'screens' && (
        <div className="fintech-content-body">
          <div className="markets-toolbar">
            <div>
              <h4>High-Resolution Platform Interfaces</h4>
              <p>Authentic views of implemented trader discovery, trading terminal, portfolio, and admin modules.</p>
            </div>
            <div className="market-filter-chips">
              {[
                { id: 1, title: 'Leader Discovery' },
                { id: 2, title: 'Trading Terminal' },
                { id: 3, title: 'Copier Portfolio' },
                { id: 4, title: 'Admin Console' }
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className={`market-chip ${activeScreenIndex === s.id ? 'active' : ''}`}
                  onClick={() => setActiveScreenIndex(s.id)}
                >
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--line)', background: '#090d10' }}>
            <Image
              src={`/projects/copy-trading/screen-${activeScreenIndex}.jpeg`}
              alt={`NexusTrade Platform Screen ${activeScreenIndex}`}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              style={{ objectFit: 'contain' }}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginTop: '16px' }}>
            {[
              { id: 1, label: 'Leader Discovery', desc: 'Strategy rankings & returns' },
              { id: 2, label: 'Trading Terminal', desc: 'Multi-asset quotes & chart' },
              { id: 3, label: 'Portfolio Dashboard', desc: 'Active mirrors & equity' },
              { id: 4, label: 'Admin Governance', desc: 'KYC & compliance audit' }
            ].map((thumb) => (
              <button
                key={thumb.id}
                type="button"
                onClick={() => setActiveScreenIndex(thumb.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: activeScreenIndex === thumb.id ? '2px solid #059669' : '1px solid var(--line)',
                  background: activeScreenIndex === thumb.id ? '#ecfdf5' : '#ffffff',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <strong style={{ fontSize: '12px', color: 'var(--ink)' }}>{thumb.label}</strong>
                <small style={{ fontSize: '10px', color: 'var(--muted)' }}>{thumb.desc}</small>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
