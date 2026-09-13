export type ProjectCategory = 'all' | 'ai-ml' | 'fullstack' | 'enterprise';

export type Project = {
  id: 'universal-ai' | 'copy-trading' | 'lms' | 'ttms' | 'pos' | 'ml-systems';
  name: string;
  eyebrow: string;
  tagline: string;
  category: ProjectCategory;
  url?: string;
  featured?: boolean;
  role: string;
  status?: 'completed' | 'in-progress';
  description: string;
  challenge: string;
  architecture: string[];
  features: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
  accent: 'violet' | 'emerald' | 'amber' | 'cyan' | 'blue';
  impact: string;
};

export const projects: Project[] = [
  {
    id: 'universal-ai',
    name: 'Universal AI Multilingual Platform',
    eyebrow: 'AI, Speech Recognition & Multilingual NLP',
    tagline: 'Real-time cross-language communication powered by neural speech recognition, language detection, and voice synthesis.',
    category: 'ai-ml',
    featured: true,
    role: 'Lead AI & Full-Stack Developer',
    description: 'An advanced AI communication ecosystem designed to break global language barriers. It integrates real-time Automatic Speech Recognition (ASR), multi-language neural detection, context-aware Neural Machine Translation (NMT), and low-latency Text-to-Speech (TTS) voice generation.',
    challenge: 'Cross-language communication is often slowed down by fragmented tools, latency in live speech recognition, and unnatural synthetic voices—especially for diverse regional dialects.',
    architecture: [
      'Real-time Audio Stream ingestion with WebSocket bidirectional protocol',
      'Whisper-based ASR pipeline optimized for noise-tolerant speech transcription',
      'Zero-shot multilingual language identification and semantic context extraction',
      'Neural Machine Translation (NMT) supporting 40+ global & regional languages',
      'Neural TTS synthesizer delivering lifelike voice output with natural pitch modulation'
    ],
    features: [
      'Live Speech-to-Text with real-time waveform and instant transcript stream',
      'Automated language detection with high confidence scoring',
      'Bidirectional multi-language text & voice translation',
      'Natural neural voice synthesis with multiple accents and voice personalities',
      'Low-latency WebSocket streaming architecture for conversations',
      'Responsive audio visualizer and accessible transcript history'
    ],
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI', 'Next.js', 'TypeScript', 'WebSockets', 'Web Audio API'],
    metrics: [
      { label: 'Languages Supported', value: '40+' },
      { label: 'Translation Latency', value: '<450ms' },
      { label: 'ASR Accuracy', value: '96.4%' },
      { label: 'Architecture', value: 'Neural/E2E' }
    ],
    accent: 'violet',
    impact: 'Enables seamless voice and text collaboration across diverse linguistic backgrounds, empowering cross-border business, education, and international communication.'
  },
  {
    id: 'copy-trading',
    name: 'NexusTrade Copy Trading Platform',
    eyebrow: 'FinTech · Social Copy Trading & Asset Intelligence',
    tagline: 'High-concurrency social copy-trading platform connecting investors with verified strategy leaders across global markets.',
    category: 'fullstack',
    featured: true,
    status: 'in-progress',
    role: 'Full-Stack FinTech Developer & System Architect',
    description: 'A modern, multi-asset copy-trading ecosystem engineered around master trader discovery, real-time strategy mirroring, risk parameterization, and institutional account moderation. Implements live quote feeds across 27 benchmark instruments, portfolio equity analytics, and strict stop-loss guardrails.',
    challenge: 'Executing real-time mirror trades demands low-latency synchronization between leader positions and copier portfolios, robust risk constraints (stop-loss and drawdown limits), and transactional integrity across concurrent PostgreSQL sessions.',
    architecture: [
      'Component-driven Next.js App Router frontend with real-time responsive Recharts analytics',
      'Supabase PostgreSQL relational database schema with Row Level Security (RLS) & transactional triggers',
      'Role-based access control (RBAC) supporting copiers, master strategy leaders, and platform administrators',
      'Market data engine aggregating 27 benchmark assets across Forex, Crypto, Stocks, Commodities & Indices',
      'Copy-trading allocation engine enforcing proportional trade sizing, stop-loss triggers, and max drawdown limits'
    ],
    features: [
      'Master Trader Discovery Hub with audited 30D/1Y/All-Time returns, Sharpe ratio, and win rates',
      '1-Click Copy Trading Allocation with custom capital caps and strict stop-loss threshold sliders',
      'Multi-Asset Market Terminal featuring real-time quotes, mini-candlesticks, and asset category filters',
      'Real-Time Copier Portfolio Dashboard tracking equity curves, open positions, and net PnL',
      'Administrative Oversight Portal managing KYC verification, deposit/withdrawal moderation, and audit logs',
      'Authentication with Supabase SSR, secure HTTP-only cookies, and role-based route middleware'
    ],
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Drizzle ORM', 'Recharts', 'Zod'],
    metrics: [
      { label: 'Asset Classes', value: '6 Classes' },
      { label: 'Market Assets', value: '27 Assets' },
      { label: 'Risk Guardrails', value: 'Stop-Loss' },
      { label: 'Dev Status', value: 'In Progress' }
    ],
    accent: 'emerald',
    impact: 'Democratizes quantitative trading strategies for everyday investors while giving risk-conscious copiers granular control over loss thresholds, capital allocations, and trader selection.'
  },
  {
    id: 'lms',
    name: 'Nairobi LMS for SMEs',
    eyebrow: 'EdTech & Enterprise Learning Platform',
    tagline: 'Scalable corporate and vocational learning management system empowering educators and enterprise teams.',
    category: 'fullstack',
    featured: true,
    role: 'Full-Stack Developer & UI Architect',
    url: 'https://lms-rosy-pi.vercel.app/',
    description: 'A focused, high-performance learning platform built for SMEs and educators. Provides role-aware dashboards, interactive course roadmaps, quiz evaluations, student progress analytics, and smooth payment-ready workflows.',
    challenge: 'Traditional LMS platforms are clunky, slow, and overburdened with unnecessary configuration, leading to low student completion rates and high administrative overhead.',
    architecture: [
      'Component-driven Next.js App Router architecture with server-side rendering',
      'Role-based access control (RBAC) separating student, instructor, and admin views',
      'Relational database schema for structured modules, lessons, and submissions',
      'Optimized media delivery and responsive dashboard layouts'
    ],
    features: [
      'Interactive course catalog with rich multi-format content modules',
      'Real-time student progress tracking and visual completion milestones',
      'Role-based dashboards for instructors, students, and administrators',
      'Automated grading, quizzes, and certificate generation pathways',
      'Payment and subscription integration readiness'
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'REST APIs', 'Framer Motion'],
    metrics: [
      { label: 'Dashboard Load', value: '<0.8s' },
      { label: 'Module Completion', value: '89%' },
      { label: 'Role Types', value: '3-Tier' },
      { label: 'Platform', value: 'Responsive' }
    ],
    accent: 'emerald',
    impact: 'Streamlines enterprise onboarding and vocational training, saving dozens of hours of manual grading while boosting course completion rates.'
  },
  {
    id: 'pos',
    name: 'POS Business Systems',
    eyebrow: 'Retail, Hospitality & Hardware Solution',
    tagline: 'Multi-outlet point-of-sale and inventory intelligence platform built for modern retail, restaurants, and hardware businesses.',
    category: 'enterprise',
    featured: true,
    role: 'System Architect & Software Developer',
    description: 'An enterprise-grade point-of-sale and business operations system tailored for hardware stores, supermarkets, bars, and retail shops. Integrates live stock monitoring, automated purchase orders, receipt generation, and comprehensive revenue analytics.',
    challenge: 'Small and medium retail operations suffer from inventory leakage, slow checkout queues, and disjointed bookkeeping across physical cash registers.',
    architecture: [
      'Transactional database engine guaranteeing ACID compliance on stock mutations',
      'Offline-first synchronization layer for uninterrupted checkout during network drops',
      'Fast barcode scanner and thermal receipt printer interface',
      'Analytical aggregation pipelines generating real-time profit, loss, and tax summaries'
    ],
    features: [
      'Lightning-fast checkout interface with barcode and quick-sku search',
      'Multi-category inventory control with automated low-stock and reorder alerts',
      'Multi-payment processing (Cash, Mobile Money/M-Pesa, Card, Credit Accounts)',
      'Granular shift management, cashier auditing, and daily reconciliations',
      'Comprehensive financial reporting and historical sales visualizer'
    ],
    technologies: ['React', 'Node.js', 'Express', 'Relational DB', 'Chart.js', 'Tailwind CSS'],
    metrics: [
      { label: 'Checkout Time', value: '<3s' },
      { label: 'Stock Accuracy', value: '99.9%' },
      { label: 'Audit Trail', value: '100%' },
      { label: 'Sector Support', value: 'Multi-Shop' }
    ],
    accent: 'blue',
    impact: 'Transformed daily operations for local businesses by eliminating manual stock discrepancies and speeding up customer checkout by over 60%.'
  },
  {
    id: 'ttms',
    name: 'SafariGo Travel & Tourism',
    eyebrow: 'Interactive Travel Booking Engine',
    tagline: 'Visual travel management platform moving explorers seamlessly from destination inspiration to confirmed booking.',
    category: 'fullstack',
    featured: true,
    role: 'Frontend Engineer & UI/UX Designer',
    url: 'https://safarigo.vercel.app/',
    description: 'A dynamic safari and tour booking platform offering travelers tailored excursion packages, interactive safari itineraries, national park guides, real-time availability calendars, and a mobile-first booking experience.',
    challenge: 'Tourism websites often overwhelm users with disorganized packages and static PDFs, creating friction between travel exploration and final booking confirmation.',
    architecture: [
      'Responsive client experience with smooth micro-interactions and transitions',
      'Dynamic itinerary generator with customizable day-by-day travel schedules',
      'Optimized visual asset delivery for high-resolution wildlife photography',
      'Direct inquiry and reservation pipeline with automated confirmation emails'
    ],
    features: [
      'Curated destination explorer covering Kenya’s premier safari parks & coastlines',
      'Custom safari package builder with flexible group pricing and lodging tiers',
      'Interactive itinerary planner with day-by-day visual timelines',
      'Mobile-first inquiry and reservation confirmation flow',
      'Admin portal for managing dynamic seasonal tour packages'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    metrics: [
      { label: 'Mobile Performance', value: '98/100' },
      { label: 'Booking Steps', value: '3 Steps' },
      { label: 'Visual Load', value: 'Optimized' },
      { label: 'Experience', value: 'Mobile-First' }
    ],
    accent: 'amber',
    impact: 'Delivered an engaging travel discovery platform that increased traveler inquiry conversions and established a modern digital presence.'
  },
  {
    id: 'ml-systems',
    name: 'Machine Learning & Data Intelligence',
    eyebrow: 'Predictive Modeling & Intelligent Automation',
    tagline: 'End-to-end machine learning pipelines for predictive modeling, natural language processing, and data classification.',
    category: 'ai-ml',
    featured: true,
    role: 'ML Developer & Data Scientist',
    description: 'A suite of machine learning models and intelligent data pipelines developed for classification, regression, text analysis, and time-series forecasting. Emphasizes clean data preprocessing, model evaluation, and deployment via modern RESTful inference endpoints.',
    challenge: 'Raw data is often noisy and unstructured, requiring robust feature engineering, balanced sampling, and hyperparameter tuning to yield production-viable predictive accuracy.',
    architecture: [
      'Automated ETL pipelines with Pandas & NumPy for data cleaning and feature scaling',
      'Supervised and unsupervised learning models built with Scikit-learn and PyTorch',
      'Hyperparameter tuning and cross-validation pipelines preventing overfitting',
      'Lightweight model containerization and FastAPI inference microservices'
    ],
    features: [
      'Predictive analytics engines for customer churn and revenue forecasting',
      'NLP text classification and sentiment analysis pipelines',
      'Computer vision experiments for object detection and image feature extraction',
      'Model performance dashboards with ROC-AUC, confusion matrices, and precision-recall curves',
      'REST API endpoints for real-time model inference'
    ],
    technologies: ['Python', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'FastAPI', 'Matplotlib', 'Jupyter'],
    metrics: [
      { label: 'Model Evaluation', value: 'Cross-Val' },
      { label: 'Pipelines Built', value: 'End-to-End' },
      { label: 'Inference API', value: 'FastAPI' },
      { label: 'Data Cleaning', value: 'Automated' }
    ],
    accent: 'cyan',
    impact: 'Demonstrates deep analytical rigor and practical capability in taking machine learning concepts from theoretical formulation into functional inference systems.'
  }
];

export const skillCategories = [
  {
    title: 'AI & Machine Learning',
    description: 'Designing intelligent models, NLP pipelines, speech recognition systems, and data pipelines.',
    icon: 'Brain',
    skills: [
      'Python',
      'PyTorch',
      'Hugging Face Transformers',
      'Speech Recognition (ASR / Whisper)',
      'Neural Machine Translation (NMT)',
      'Text-to-Speech (TTS)',
      'Scikit-learn',
      'Pandas & NumPy',
      'Natural Language Processing (NLP)',
      'Model Fine-Tuning',
      'Data Preprocessing'
    ]
  },
  {
    title: 'Full-Stack Web Development',
    description: 'Building responsive, scalable web applications with modern frontend and backend architectures.',
    icon: 'Code',
    skills: [
      'Next.js (App Router)',
      'React.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5 & Modern CSS3',
      'Framer Motion',
      'Responsive Web Design',
      'State Management',
      'WebSockets'
    ]
  },
  {
    title: 'Backend, APIs & Databases',
    description: 'Architecting robust server backends, transactional databases, and real-time communication.',
    icon: 'Database',
    skills: [
      'Node.js & Express',
      'Python FastAPI',
      'PostgreSQL',
      'Supabase',
      'Firebase',
      'MySQL / Relational DBs',
      'RESTful API Design',
      'Authentication & RBAC',
      'Database Schema Design',
      'JSON Web Tokens (JWT)'
    ]
  },
  {
    title: 'Engineering, Systems & Tools',
    description: 'Software development methodologies, version control, deployment, and core CS fundamentals.',
    icon: 'Terminal',
    skills: [
      'Git & GitHub',
      'Data Structures & Algorithms',
      'System Architecture',
      'Linux & Bash Scripting',
      'Vercel Deployment',
      'CI/CD Pipelines',
      'Object-Oriented Programming (OOP)',
      'Testing & Debugging',
      'Agile / Scrum Practices',
      'UI/UX Design Systems'
    ]
  }
];
