/**
 * Traducción al inglés del contenido usado por las 4 páginas traducidas
 * (feature experimental de i18n, ver PENDIENTES.md). Traducción fiel de
 * src/data/content.ts — no se agregan afirmaciones ni datos nuevos.
 */
import {
  Workflow,
  ChartColumn,
  Compass,
  Globe,
  ClipboardList,
  Target,
  Rocket,
  ChartLine,
  Users,
  Award,
  CircleCheckBig,
  Layers,
  Fuel,
  ScrollText,
  Landmark,
  Network,
  EyeOff,
  Wrench,
  Gauge as GaugeIcon,
  Receipt,
  Calculator,
  UsersRound,
  Target as TargetIcon,
  Wallet,
  ShieldCheck,
  Cpu,
  Building2,
  Plane,
  PiggyBank,
  HandCoins,
  Sparkles,
} from '@lucide/astro';

// --- Diagnóstico PyME condensado — Inicio (EN) ---
export const pymePainsEn = [
  {
    icon: Workflow,
    title: 'Disorganized processes',
    copy: 'Duplicated tasks, undefined workflows and no standardization.',
  },
  {
    icon: GaugeIcon,
    title: 'Low operational efficiency',
    copy: 'Poorly allocated resources that hurt profitability.',
  },
  {
    icon: ChartColumn,
    title: 'Lack of indicators',
    copy: 'No clear metrics to measure business performance.',
  },
  {
    icon: Compass,
    title: 'Intuitive decisions',
    copy: 'Decisions based on assumptions, not objective data.',
  },
  {
    icon: Globe,
    title: 'Shifting macro environment',
    copy: 'New regulations that demand constant adaptation.',
  },
];

// --- What we solve — SMEs (EN) ---
export const pymeSolutionsEn = [
  {
    icon: PiggyBank,
    title: 'Cost optimization',
    copy: 'We identify hidden costs and savings opportunities without affecting quality or productivity.',
  },
  {
    icon: Wrench,
    title: 'Process improvement',
    copy: 'We redesign workflows to boost efficiency, cut turnaround times and minimize errors.',
  },
  {
    icon: HandCoins,
    title: 'Financing advisory',
    copy: 'We help you navigate credit, subsidies and investment alternatives tailored to your situation.',
  },
  {
    icon: GaugeIcon,
    title: 'Measurable results',
    copy: 'Every project includes clear savings, efficiency and ROI indicators.',
  },
  {
    icon: Sparkles,
    title: 'Tailored approach',
    copy: 'Solutions adapted to each client’s size, industry and context.',
  },
];

// --- SME services grid (EN) ---
export const pymeServicesEn = [
  {
    icon: Receipt,
    title: 'Tax Advisory',
    copy: 'Registrations, filings and tax returns. Compliance and tax optimization.',
  },
  {
    icon: Calculator,
    title: 'Accounting & Outsourcing',
    copy: 'Fully outsourced accounting management with monthly management reports.',
  },
  {
    icon: UsersRound,
    title: 'HR & Payroll Management',
    copy: 'Payroll processing, social security contributions and labor law compliance.',
  },
  {
    icon: ChartLine,
    title: 'Finance & Executive Reporting',
    copy: 'Financial analysis and periodic dashboards for data-driven decisions.',
  },
  {
    icon: TargetIcon,
    title: 'Strategic Planning',
    copy: 'Support on key decisions, expansion and competitive positioning.',
  },
  {
    icon: Globe,
    title: 'National & International Expansion',
    copy: 'Strategy and structuring for companies looking to grow beyond their borders.',
  },
];

// --- SME plans (EN) ---
export const pymePlansEn = [
  {
    name: 'BASE',
    forWhom: 'Get your business in order. Ideal for micro and small companies.',
    includes: [
      'Monthly bookkeeping and closings',
      'Basic tax planning',
      'Administrative organization and KPIs',
      'Monthly executive report',
    ],
  },
  {
    name: 'MOMENTUM',
    forWhom: 'Manage growth. Everything in Base, plus:',
    includes: [
      'Cash flow and annual budget',
      'Cost and profitability analysis',
      'Process diagnostics and optimization',
      'Executive dashboard with KPIs',
    ],
  },
  {
    name: 'EXPANSION',
    forWhom: 'Transform the company. Everything in Momentum, plus:',
    includes: [
      'Digital transformation and automation',
      'Applied artificial intelligence',
      'Strategic planning and OKRs',
      'Commercial and HR optimization',
    ],
  },
  {
    name: 'STRATEGIC',
    forWhom: 'Tailored external strategic leadership. Everything in Expansion, plus:',
    includes: [
      '100% custom-designed solution for your company',
      'External CFO',
      'Business advisor',
      'Corporate governance and technology',
    ],
  },
];

export const homeDifferentiatorsEn = [
  {
    icon: Users,
    title: 'Integrated team',
    copy: 'We work inside your organization, with direct access to teams and decision-makers.',
  },
  {
    icon: Award,
    title: 'Industry specialization',
    copy: 'We know the real challenges and metrics of each industry — no learning curve.',
  },
  {
    icon: CircleCheckBig,
    title: 'Measurable results',
    copy: 'Every project includes impact KPIs and executive reporting: measured, communicated and improved.',
  },
  {
    icon: Layers,
    title: 'Finance + processes + technology',
    copy: 'We combine financial expertise, process improvement and applied technology in one team.',
  },
];

export const methodStepsCondensedEn = [
  {
    icon: ClipboardList,
    title: 'Diagnosis',
    copy: 'Assessment of processes and financial structure.',
  },
  { icon: Target, title: 'Strategy', copy: 'Action plan and prioritized roadmap.' },
  {
    icon: Rocket,
    title: 'Implementation',
    copy: "Execution with DGV's hands-on support.",
  },
  { icon: ChartLine, title: 'Follow-up', copy: 'Executive reporting and continuous improvement.' },
];

export const methodStepsFullEn = [
  {
    icon: ClipboardList,
    title: 'Diagnosis',
    copy: 'Assessment of processes and financial structure. Identification of gaps and baseline KPIs.',
  },
  {
    icon: Target,
    title: 'Strategy',
    copy: 'Action plan and prioritized roadmap. Alignment with senior leadership.',
  },
  {
    icon: Rocket,
    title: 'Implementation',
    copy: "Execution with DGV's hands-on support.",
  },
  {
    icon: ChartLine,
    title: 'Follow-up',
    copy: 'Executive reporting and dashboards. Impact KPIs and continuous improvement.',
  },
];

export const methodStepsAviacionEn = [
  methodStepsFullEn[0],
  methodStepsFullEn[1],
  {
    icon: Rocket,
    title: 'Implementation',
    copy: 'Execution with DGV support, SAP and ERP.',
  },
  methodStepsFullEn[3],
];

// --- Aviación & Logística (EN) ---
export const aviacionProblemsEn = [
  {
    icon: Fuel,
    title: 'Margins under pressure',
    copy: 'Fuel, airport fees and exchange rates erode operating profitability.',
  },
  {
    icon: ScrollText,
    title: 'Regulatory complexity',
    copy: 'Central Bank (BCRA), IATA, ANAC and FX restrictions demand ongoing, up-to-date compliance.',
  },
  {
    icon: Landmark,
    title: 'International payments',
    copy: 'Global suppliers and extended collection cycles strain working capital.',
  },
  {
    icon: Network,
    title: 'Fragmented processes',
    copy: 'Multi-country operations with disconnected systems create inefficiency and risk.',
  },
  {
    icon: EyeOff,
    title: 'Zero financial visibility',
    copy: 'Without real-time KPIs, strategic decisions are made without reliable data.',
  },
];

export const aviacionPillarsEn = [
  {
    icon: Wallet,
    title: 'Financial Consulting',
    copy: 'CFO Advisory · Cash Flow · Working Capital · Forecasting · Unit Profitability.',
  },
  {
    icon: Workflow,
    title: 'Process Optimization',
    copy: 'Order to Cash · Procure to Pay · Record to Report · SSC / GBS · Cost Control.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Governance',
    copy: 'Central Bank (BCRA) · FX Regulation · Internal Controls · Risk · Corporate Governance.',
  },
  {
    icon: Cpu,
    title: 'Applied Technology',
    copy: 'SAP · ERP · Business Intelligence · Automation · Digitalization · Executive Reporting.',
  },
];

export const aviacionCyclesEn = [
  {
    code: 'O2C',
    name: 'Order to Cash',
    items: [
      'Customer and credit management',
      'Invoicing and collections',
      'Account reconciliation',
      'Aging and DSO reporting',
      'International collections and FX',
    ],
  },
  {
    code: 'P2P',
    name: 'Procure to Pay',
    items: [
      'Strategic supplier management',
      'Invoice approval and control',
      'Local and international payments',
      'Central Bank (BCRA) regulations and remittances to headquarters',
      'DPO and working capital',
    ],
  },
  {
    code: 'R2R',
    name: 'Record to Report',
    items: [
      'Accounting close and reconciliations',
      'Executive financial reporting',
      'Management KPIs and dashboards',
      'Budgeting and forecasting',
      'Compliance and internal controls',
    ],
  },
  {
    code: 'SSC/GBS',
    name: 'Shared Services · Global Business',
    items: [
      'International experience with Shared Services (SSC) and Global Business Services (GBS) models',
    ],
  },
];

export const aviacionDifferentiatorsEn = [
  {
    icon: Award,
    title: 'Industry expertise, not generic consulting',
    copy: "We know the aviation sector's financial cycles, key metrics and real regulatory challenges. No learning curve.",
  },
  {
    icon: Users,
    title: 'A team inside your organization',
    copy: 'We work integrated into your structure, with direct access to key decision-makers and operating teams from day 1.',
  },
  {
    icon: CircleCheckBig,
    title: 'Measurable impact at every stage',
    copy: "Every project includes impact KPIs and executive reporting. Results aren't subjective: they're measured, communicated and improved.",
  },
];

export const aviacionStatsEn = [
  { value: 20, suffix: '+', label: 'years of financial and operational experience in the industry.' },
  { value: 3, suffix: '', label: 'countries of financial operations oversight.' },
  { value: 100, suffix: '%', label: 'attention from the start of every project.' },
];

// --- Servicios agrupados por familia (EN) — mismas 6 familias, traducción fiel ---
export const serviceFamiliesEn = [
  {
    slug: 'finance-accounting',
    name: 'Finance & Accounting',
    items: [
      {
        icon: Receipt,
        title: 'Tax Advisory',
        copy: 'Registrations, tax filings and returns. Compliance and tax optimization.',
      },
      {
        icon: Calculator,
        title: 'Accounting & Outsourcing',
        copy: 'Fully outsourced accounting management with monthly management reports.',
      },
      {
        icon: ChartLine,
        title: 'Finance & Executive Reporting',
        copy: 'Financial analysis and periodic dashboards for data-driven decisions.',
      },
      { icon: Wallet, title: 'Financial Consulting', copy: aviacionPillarsEn[0].copy },
    ],
  },
  {
    slug: 'processes-operations',
    name: 'Processes & Operations',
    items: [
      {
        icon: Wrench,
        title: 'Process improvement',
        copy: 'We redesign workflows to increase efficiency, reduce turnaround times and minimize errors.',
      },
      { icon: Workflow, title: 'Financial Cycle Optimization', copy: aviacionPillarsEn[1].copy },
    ],
  },
  {
    slug: 'strategy-growth',
    name: 'Strategy & Growth',
    items: [
      {
        icon: TargetIcon,
        title: 'Strategic Planning',
        copy: 'Support for key decisions, expansion and competitive positioning.',
      },
      {
        icon: Globe,
        title: 'National & International Expansion',
        copy: 'Strategy and structuring for companies looking to grow beyond their borders.',
      },
    ],
  },
  {
    slug: 'technology',
    name: 'Technology',
    items: [
      { icon: Cpu, title: 'Applied Technology', copy: aviacionPillarsEn[3].copy },
      { icon: Rocket, title: 'Digital Transformation', copy: 'Digital transformation and automation.' },
    ],
  },
  {
    slug: 'compliance-governance',
    name: 'Compliance & Governance',
    items: [{ icon: ShieldCheck, title: 'Compliance & Governance', copy: aviacionPillarsEn[2].copy }],
  },
  {
    slug: 'labor-hr',
    name: 'Labor & HR',
    items: [
      {
        icon: UsersRound,
        title: 'Labor & HR Management',
        copy: 'Payroll, social security contributions and compliance with labor regulations.',
      },
      {
        icon: Users,
        title: 'Commercial and HR optimization',
        copy: 'Commercial and HR optimization.',
      },
    ],
  },
];

// --- Inicio: RouteSelector (EN) ---
export const routesEn = [
  {
    icon: Building2,
    label: "I'm an SME",
    href: '/en/solutions-for-smes',
    copy: 'Operational disarray, lack of metrics and decisions made by gut feel. We help you organize and measure your business.',
    imageLabel: 'Argentine SME image',
    imageSrc: '/images/pymes/hero-taller.jpg',
  },
  {
    icon: Plane,
    label: 'Aviation & Logistics Industry',
    href: '/en/aviation-logistics',
    copy: 'Tight margins, FX regulation (BCRA) and multi-country operations. We turn financial complexity into an advantage.',
    imageLabel: 'aviation / logistics image',
    imageSrc: '/images/aviacion/carga.jpg',
  },
];
