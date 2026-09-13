import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Reveal } from '@/components/Motion';
import { CopyTradingMockup } from '@/components/CopyTradingMockup';
import { 
  ArrowRightIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  TrendingUpIcon, 
  DatabaseIcon, 
  CodeIcon, 
  ServerIcon, 
  ActivityIcon, 
  SlidersIcon, 
  LayersIcon, 
  CpuIcon,
  ZapIcon
} from '@/components/Icons';

export const metadata = {
  title: 'NexusTrade Copy Trading Platform — Case Study | Rocky Junior',
  description: 'Technical case study and ongoing development journey of NexusTrade: a full-stack social copy-trading platform engineered with Next.js, Supabase, PostgreSQL, and institutional risk management.',
};

export default function CopyTradingCaseStudy() {
  return (
    <main>
      <Header />
      <div className="shell">

        {/* Breadcrumb Navigation */}
        <div style={{ paddingTop: '32px' }}>
          <nav className="case-study-breadcrumb" aria-label="Breadcrumb">
            <Link href="/work">← Back to All Projects</Link>
            <span>/</span>
            <span>FinTech & Copy Trading</span>
            <span>/</span>
            <span style={{ color: 'var(--ink)' }}>NexusTrade Case Study</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="case-study-hero">
          <Reveal>
            <div className="case-study-status-banner">
              <span className="dot pulse" />
              <span>In Progress · Ongoing Engineering Development</span>
            </div>

            <h1>
              NexusTrade: Institutional-Grade<br />
              <em>Social Copy-Trading Platform.</em>
            </h1>

            <p className="case-study-lead">
              An ongoing, production-grade social copy-trading ecosystem engineered around master trader discovery, real-time strategy mirroring, multi-asset market intelligence, and automated risk guardrails. Built with Next.js App Router, TypeScript, Tailwind CSS, Supabase SSR, and a relational PostgreSQL database schema.
            </p>

            {/* Quick Project Meta Grid */}
            <div className="case-study-meta-grid">
              <div className="meta-item">
                <span>Engineering Role</span>
                <strong>Full-Stack FinTech Developer & Architect</strong>
              </div>
              <div className="meta-item">
                <span>Development State</span>
                <strong style={{ color: '#b45309' }}>In Progress (Active Sprint)</strong>
              </div>
              <div className="meta-item">
                <span>Asset Scope</span>
                <strong>6 Classes · 27 Benchmark Assets</strong>
              </div>
              <div className="meta-item">
                <span>Core Stack</span>
                <strong>Next.js 16 · Supabase · PostgreSQL</strong>
              </div>
            </div>

            {/* Jump Actions */}
            <div className="hero-actions-modern" style={{ marginBottom: '40px' }}>
              <a className="solid-button" href="#interactive-preview">
                <span>Explore Interactive Demo</span>
                <ArrowRightIcon size={14} />
              </a>
              <a className="outline-button" href="#architecture">
                <span>Visual Architecture Flow</span>
              </a>
              <a className="outline-button" href="#roadmap">
                <span>Development Roadmap</span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* ===================== SECTION 1: INTERACTIVE LIVE PREVIEW ===================== */}
        <section id="interactive-preview" style={{ marginBottom: '60px' }}>
          <Reveal>
            <div className="case-section-head">
              <p className="eyebrow" style={{ color: '#059669' }}>Interactive Platform Walkthrough</p>
              <h2>Simulated Platform Environment</h2>
              <p>
                Explore live interactive modules directly from the codebase: switch between Leader Discovery with dynamic risk calculation, real-time multi-asset market quotes, the visual architecture pipeline, and the transparent development roadmap.
              </p>
            </div>
            
            <CopyTradingMockup previewMode={false} />
          </Reveal>
        </section>

        {/* ===================== SECTION 2: EXECUTIVE OVERVIEW & PROBLEM ===================== */}
        <section className="case-section">
          <div className="section-head">
            <div>
              <p className="eyebrow" style={{ color: '#059669' }}>The Problem & Context</p>
              <h2 className="section-title">
                Democratizing algorithmic trading<br /><em>with transparent risk control.</em>
              </h2>
            </div>
            <p>
              Retail investors often encounter severe friction when navigating complex financial markets. Traditional platforms either hoard professional algorithmic strategies behind high hedge-fund fee walls or offer social trading without adequate drawdown and stop-loss guardrails.
            </p>
          </div>

          <div className="journey-steps-grid">
            <Reveal delay={0.05}>
              <div className="journey-step-card">
                <span className="step-badge">Challenge 01</span>
                <h3>Information Asymmetry</h3>
                <p>
                  Retail traders lack access to verified track records. Unregulated platforms often display vanity returns without disclosing maximum drawdowns, Sharpe ratios, or trade histories.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="journey-step-card">
                <span className="step-badge">Challenge 02</span>
                <h3>Unsynchronized Execution</h3>
                <p>
                  Copy trading requires real-time mirror replication: when a strategy leader opens or closes a lot, copier positions must adjust instantaneously with precise proportional sizing.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="journey-step-card">
                <span className="step-badge">Challenge 03</span>
                <h3>Absence of Capital Guardrails</h3>
                <p>
                  Without mandatory stop-loss floors and max-drawdown triggers, a single volatile leader trade can wipe out copier balances. NexusTrade enforces automated capital preservation at the database level.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== SECTION 3: MY ROLE & RESPONSIBILITY ===================== */}
        <section className="case-section">
          <div className="section-head">
            <div>
              <p className="eyebrow" style={{ color: '#059669' }}>Engineering Ownership</p>
              <h2 className="section-title">
                My Role & Technical Scope
              </h2>
            </div>
            <p>
              As the sole developer and UI/UX engineer of NexusTrade, I designed and implemented the entire project from data modeling and PostgreSQL schema design to the frontend trading dashboard and authentication layers.
            </p>
          </div>

          <div className="case-quad-grid">
            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>Architecture & Schemas</p>
              <h3>Database Architecture</h3>
              <p>
                Architected 12 relational PostgreSQL tables (`profiles`, `wallets`, `wallet_transactions`, `master_traders`, `copy_relationships`, `user_trades`, `user_orders`, etc.) with strict check constraints, automated triggers, and Row Level Security (RLS) policies.
              </p>
            </article>

            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>Frontend Engineering</p>
              <h3>Modular UI & Dashboard Design</h3>
              <p>
                Developed a responsive Next.js 16 application with React 19, incorporating real-time price tickers, Recharts equity visualizers, trader discovery cards, and an administrative moderation panel.
              </p>
            </article>

            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>Security & State</p>
              <h3>Authentication & RBAC Middleware</h3>
              <p>
                Integrated `@supabase/ssr` with secure HTTP-only cookies and Next.js middleware to separate standard copier accounts, master strategy leaders, and administrative gatekeepers with strict route isolation.
              </p>
            </article>

            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>FinTech Logic</p>
              <h3>Copy Engine & Math Modeling</h3>
              <p>
                Engineered proportional lot-size calculation algorithms, simulated market order placement, and automated stop-loss threshold validation to safeguard user capital.
              </p>
            </article>
          </div>
        </section>

        {/* ===================== SECTION 4: VISUAL ARCHITECTURE ===================== */}
        <section id="architecture" className="case-section">
          <div className="section-head">
            <div>
              <p className="eyebrow" style={{ color: '#059669' }}>Visual Architecture</p>
              <h2 className="section-title">
                User → Frontend → Database → <em>Copy Engine</em>
              </h2>
            </div>
            <p>
              The system is structured as a resilient, decoupled data pipeline designed to guarantee data integrity, sub-second updates, and strict asset isolation.
            </p>
          </div>

          {/* Architecture Visualizer Banner */}
          <div className="visual-pipeline-flow" style={{ marginBottom: '32px' }}>
            <div className="pipeline-tier-card active-layer">
              <div className="tier-badge-row">
                <span className="tier-step-chip">Layer 01</span>
                <span className="tier-status-pill complete">Client Layer</span>
              </div>
              <h5>User / Client</h5>
              <small className="tier-subtitle">Next.js 16 & React 19</small>
              <p className="tier-desc">
                Responsive web client with interactive Recharts analytics, SVG sparklines, accessible parameter sliders, and mobile-first trading views.
              </p>
              <div className="tier-tech-pills">
                <span className="tier-pill">Next.js App Router</span>
                <span className="tier-pill">Tailwind CSS</span>
                <span className="tier-pill">Recharts</span>
              </div>
              <div className="connector-arrow">
                <ArrowRightIcon size={14} />
              </div>
            </div>

            <div className="pipeline-tier-card active-layer">
              <div className="tier-badge-row">
                <span className="tier-step-chip">Layer 02</span>
                <span className="tier-status-pill complete">Gateway Layer</span>
              </div>
              <h5>Frontend API & Auth</h5>
              <small className="tier-subtitle">Supabase SSR & Edge Middleware</small>
              <p className="tier-desc">
                Enforces server-side authentication, HTTP-only session tokens, route guards for administrative users, and input validation schemas.
              </p>
              <div className="tier-tech-pills">
                <span className="tier-pill">@supabase/ssr</span>
                <span className="tier-pill">Next Middleware</span>
                <span className="tier-pill">Zod</span>
              </div>
              <div className="connector-arrow">
                <ArrowRightIcon size={14} />
              </div>
            </div>

            <div className="pipeline-tier-card active-layer">
              <div className="tier-badge-row">
                <span className="tier-step-chip">Layer 03</span>
                <span className="tier-status-pill complete">Data Layer</span>
              </div>
              <h5>Backend / Database</h5>
              <small className="tier-subtitle">PostgreSQL Relational Core</small>
              <p className="tier-desc">
                12 relational tables with Row Level Security (RLS) guaranteeing data segregation, transactional wallet ledgers, and audit trails.
              </p>
              <div className="tier-tech-pills">
                <span className="tier-pill">PostgreSQL</span>
                <span className="tier-pill">RLS Security</span>
                <span className="tier-pill">Drizzle ORM</span>
              </div>
              <div className="connector-arrow">
                <ArrowRightIcon size={14} />
              </div>
            </div>

            <div className="pipeline-tier-card active-layer">
              <div className="tier-badge-row">
                <span className="tier-step-chip">Layer 04</span>
                <span className="tier-status-pill in-progress">Execution Layer</span>
              </div>
              <h5>Trading / Copy Engine</h5>
              <small className="tier-subtitle">Proportional Mirror & Risk Engine</small>
              <p className="tier-desc">
                Calculates proportional lot sizing, monitors market ticks, validates stop-loss thresholds, and coordinates mirror trade replication.
              </p>
              <div className="tier-tech-pills">
                <span className="tier-pill">Async Worker</span>
                <span className="tier-pill">Risk Controls</span>
                <span className="tier-pill">Broker Bridge</span>
              </div>
            </div>
          </div>

          <div className="layer-inspection-drawer">
            <div className="drawer-header">
              <span className="drawer-eyebrow">Key Technical Characteristic:</span>
              <h5>Data Flow & Financial Consistency</h5>
            </div>
            <div className="drawer-content">
              <p>
                To prevent financial discrepancies, the database utilizes PostgreSQL check constraints (such as `available_balance &gt;= 0`) and atomic transaction blocks. When a copier allocates capital to a strategy leader, funds are transferred into a dedicated allocation ledger within a single database transaction, ensuring no funds can be double-spent or lost in transit.
              </p>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 5: IMPLEMENTED KEY FEATURES ===================== */}
        <section className="case-section">
          <div className="section-head">
            <div>
              <p className="eyebrow" style={{ color: '#059669' }}>System Capabilities</p>
              <h2 className="section-title">
                Implemented Features & Real Workflows
              </h2>
            </div>
            <p>
              Every feature below is implemented in the platform codebase and operational in local development.
            </p>
          </div>

          <div className="case-quad-grid">
            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>Feature 01</p>
              <h3>Master Trader Discovery</h3>
              <p>
                Comprehensive leader directory allowing users to sort and filter verified investors by 30-day return, 1-year yield, risk score, max historical drawdown, and active copier count.
              </p>
            </article>

            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>Feature 02</p>
              <h3>1-Click Copy Allocation</h3>
              <p>
                Streamlined modal permitting copiers to set exact dollar allocations, safety stop-loss percentages, and maximum drawdown caps with automated proportional order scaling.
              </p>
            </article>

            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>Feature 03</p>
              <h3>Multi-Asset Market Terminal</h3>
              <p>
                Live benchmark catalog featuring 27 instruments across Forex, Equities, Crypto, Commodities, and Indices with 24-hour highs, lows, price changes, and interactive charts.
              </p>
            </article>

            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>Feature 04</p>
              <h3>Copier Portfolio Dashboard</h3>
              <p>
                Detailed overview of total equity, available wallet balance, active copy relationships, unrealized and realized PnL, and historical trade execution logs.
              </p>
            </article>

            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>Feature 05</p>
              <h3>Administrative Oversight Console</h3>
              <p>
                Dedicated `/admin` management hub allowing administrators to review user accounts, approve KYC verification documents, moderate deposits/withdrawals, and inspect system audit logs.
              </p>
            </article>

            <article className="case-quad-card">
              <p className="eyebrow" style={{ color: '#059669' }}>Feature 06</p>
              <h3>Supabase SSR Authentication</h3>
              <p>
                Full server-side authentication with secure HTTP-only cookies, password recovery flows, and role-based redirect middleware ensuring robust route security.
              </p>
            </article>
          </div>
        </section>

        {/* ===================== SECTION 6: DEVELOPMENT JOURNEY ===================== */}
        <section className="case-section">
          <div className="section-head">
            <div>
              <p className="eyebrow" style={{ color: '#059669' }}>Engineering Decisions</p>
              <h2 className="section-title">
                Development Journey & Technical Choices
              </h2>
            </div>
            <p>
              Designing a financial platform presents unique software engineering challenges that require strict discipline in precision, security, and schema design.
            </p>
          </div>

          <div className="journey-steps-grid">
            <Reveal delay={0.05}>
              <div className="journey-step-card">
                <span className="step-badge">Decision 01</span>
                <h3>Schema-First Relational Architecture</h3>
                <p>
                  Rather than relying on unconstrained NoSQL documents, I chose PostgreSQL with strict data typing (`numeric(18,2)` for financial balances, avoiding floating-point rounding errors) and foreign key cascades.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="journey-step-card">
                <span className="step-badge">Decision 02</span>
                <h3>Next.js 16 App Router & SSR</h3>
                <p>
                  Adopted Next.js App Router for hybrid server-rendered pages and client components. Server rendering secures database credentials and authentication tokens, preventing exposure of sensitive keys in client bundles.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="journey-step-card">
                <span className="step-badge">Decision 03</span>
                <h3>Row Level Security (RLS)</h3>
                <p>
                  Every database table implements granular RLS policies: copiers can only inspect their own wallets and trades, while platform administrators have elevated permissions strictly through verified role claims.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===================== SECTION 7: WHAT REMAINS / ROADMAP ===================== */}
        <section id="roadmap" className="case-section">
          <div className="section-head">
            <div>
              <p className="eyebrow" style={{ color: '#b45309' }}>Honest Status Ledger</p>
              <h2 className="section-title">
                Current Progress & What Remains
              </h2>
            </div>
            <p>
              NexusTrade is actively evolving. Here is a transparent breakdown of what has been thoroughly completed and what is currently under active development.
            </p>
          </div>

          <div className="roadmap-progress-columns">
            {/* Completed */}
            <div className="roadmap-column completed">
              <div className="column-header">
                <span className="col-status-tag completed">
                  <CheckCircleIcon size={12} /> Completed & Functional
                </span>
                <h5>Implemented Foundations</h5>
              </div>
              <ul className="roadmap-list">
                <li>
                  <CheckCircleIcon size={14} />
                  <div>
                    <strong>PostgreSQL Relational Schema & Migrations</strong>
                    <p>12 normalized tables with check constraints and RLS policies.</p>
                  </div>
                </li>
                <li>
                  <CheckCircleIcon size={14} />
                  <div>
                    <strong>Master Trader Discovery & Strategy Profiles</strong>
                    <p>Audited performance metrics, return calculations, and risk categorization.</p>
                  </div>
                </li>
                <li>
                  <CheckCircleIcon size={14} />
                  <div>
                    <strong>Multi-Asset Market Terminal (27 Instruments)</strong>
                    <p>Quotes and interactive charts across 6 distinct asset classes.</p>
                  </div>
                </li>
                <li>
                  <CheckCircleIcon size={14} />
                  <div>
                    <strong>User Portfolio Dashboard & Analytics</strong>
                    <p>Asset allocation breakdowns, equity tracking, and open trade views.</p>
                  </div>
                </li>
                <li>
                  <CheckCircleIcon size={14} />
                  <div>
                    <strong>Administrative Oversight & KYC Verification</strong>
                    <p>Dedicated admin portal for trader verification, deposit moderation, and logs.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* In Progress */}
            <div className="roadmap-column ongoing">
              <div className="column-header">
                <span className="col-status-tag ongoing">
                  <ClockIcon size={12} /> Currently In Progress
                </span>
                <h5>Active Development Workstreams</h5>
              </div>
              <ul className="roadmap-list">
                <li>
                  <ActivityIcon size={14} className="amber-icon" />
                  <div>
                    <strong>Automated High-Frequency Order Mirror Worker</strong>
                    <p>Developing the background worker daemon to synchronize child orders in under 300ms.</p>
                  </div>
                </li>
                <li>
                  <SlidersIcon size={14} className="amber-icon" />
                  <div>
                    <strong>Dynamic Margin Call & Liquidation Engine</strong>
                    <p>Implementing automated safety triggers to cut positions before maximum drawdown breach.</p>
                  </div>
                </li>
                <li>
                  <ServerIcon size={14} className="amber-icon" />
                  <div>
                    <strong>Live Broker Execution Bridge</strong>
                    <p>Connecting paper-trading accounts to real MetaTrader 5 / FIX protocol gateways.</p>
                  </div>
                </li>
                <li>
                  <ShieldCheckIcon size={14} className="amber-icon" />
                  <div>
                    <strong>Production Custom SMTP Configuration</strong>
                    <p>Configuring dedicated transactional email sending (Amazon SES / Resend) for real onboarding.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ===================== BOTTOM CTA BANNER ===================== */}
        <section className="contact-banner-modern">
          <div>
            <p className="eyebrow" style={{ color: '#059669' }}>Interested in FinTech & Trading Systems?</p>
            <h2>
              Let’s discuss system architecture,<br />
              <em>fintech engineering, and full-stack software.</em>
            </h2>
          </div>
          <Link className="solid-button" href="/contact">
            <span>Get in Touch ↗</span>
          </Link>
        </section>

      </div>
      <Footer />
    </main>
  );
}

