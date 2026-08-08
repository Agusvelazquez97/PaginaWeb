/**
 * Contenido compartido entre Inicio y las páginas verticales, para no
 * duplicar el mismo texto [DECK] de la spec en más de un archivo.
 * Ver DGV_Spec_Desarrollo.md secciones 6.2, 6.3, 6.5 y 6.9.
 */
import {
  Workflow,
  Gauge,
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
  PiggyBank,
  Wrench,
  HandCoins,
  Gauge as GaugeIcon,
  Sparkles,
  Receipt,
  Calculator,
  UsersRound,
  Target as TargetIcon,
  Wallet,
  ShieldCheck,
  Cpu,
} from '@lucide/astro';

// --- Diagnóstico PyME (spec 6.2.2, también usado condensado en Inicio 6.1.4) ---
export const pymePains = [
  {
    icon: Workflow,
    title: 'Procesos desordenados',
    copy: 'Tareas duplicadas, flujos sin definir y sin estandarización.',
  },
  {
    icon: Gauge,
    title: 'Baja eficiencia operativa',
    copy: 'Recursos mal distribuidos que impactan en la rentabilidad.',
  },
  {
    icon: ChartColumn,
    title: 'Falta de indicadores',
    copy: 'Sin métricas claras para medir el desempeño del negocio.',
  },
  {
    icon: Compass,
    title: 'Decisiones intuitivas',
    copy: 'Decisiones basadas en suposiciones, no en datos objetivos.',
  },
  {
    icon: Globe,
    title: 'Entorno macro cambiante',
    copy: 'Nuevas regulaciones que exigen adaptación constante.',
  },
];

// --- Lo que resolvemos — PyME (spec 6.2.3) ---
export const pymeSolutions = [
  {
    icon: PiggyBank,
    title: 'Optimización de costos',
    copy: 'Identificamos gastos ocultos y oportunidades de ahorro sin afectar la calidad ni la productividad.',
  },
  {
    icon: Wrench,
    title: 'Mejora de procesos',
    copy: 'Rediseñamos flujos de trabajo para aumentar la eficiencia, reducir tiempos y minimizar errores.',
  },
  {
    icon: HandCoins,
    title: 'Asesoramiento en financiamiento',
    copy: 'Acompañamos en la búsqueda de créditos, subsidios y alternativas de inversión adaptadas a cada realidad.',
  },
  {
    icon: GaugeIcon,
    title: 'Resultados medibles',
    copy: 'Cada proyecto incluye indicadores claros de ahorro, eficiencia y retorno de inversión.',
  },
  {
    icon: Sparkles,
    title: 'Enfoque personalizado',
    copy: 'Soluciones adaptadas al tamaño, sector y contexto de cada cliente.',
  },
];

// --- Servicios PyME — grid con 6 servicios nombrados (spec 6.9) ---
export const pymeServices = [
  {
    icon: Receipt,
    title: 'Asesoría Tributaria',
    copy: 'Inscripciones, liquidaciones y declaraciones juradas. Cumplimiento y optimización impositiva.',
  },
  {
    icon: Calculator,
    title: 'Contabilidad & Tercerización',
    copy: 'Gestión contable completa externalizada con informes de gestión mensuales.',
  },
  {
    icon: UsersRound,
    title: 'Gestión Laboral & RRHH',
    copy: 'Liquidación de sueldos, cargas sociales y cumplimiento de la normativa laboral.',
  },
  {
    icon: ChartLine,
    title: 'Finanzas & Reporting Ejecutivo',
    copy: 'Análisis financiero y dashboards periódicos para decisiones basadas en datos.',
  },
  {
    icon: TargetIcon,
    title: 'Planificación Estratégica',
    copy: 'Acompañamiento en decisiones clave, expansión y posicionamiento competitivo.',
  },
  {
    icon: Globe,
    title: 'Expansión Nacional e Internacional',
    copy: 'Estrategia y estructuración para empresas que buscan crecer más allá de sus fronteras.',
  },
];

// --- Planes PyME (spec 6.9) ---
export const pymePlans = [
  {
    name: 'BASE',
    forWhom: 'Ordenar el negocio. Ideal para micro y pequeñas empresas.',
    includes: [
      'Contabilidad y cierres mensuales',
      'Planificación tributaria básica',
      'Organización administrativa y KPIs',
      'Informe ejecutivo mensual',
    ],
  },
  {
    name: 'IMPULSO',
    forWhom: 'Gestionar el crecimiento. Todo lo de Base, más:',
    includes: [
      'Flujo de caja y presupuesto anual',
      'Análisis de costos y rentabilidad',
      'Diagnóstico y optimización de procesos',
      'Dashboard ejecutivo con KPIs',
    ],
  },
  {
    name: 'EXPANSIÓN',
    forWhom: 'Transformar la empresa. Todo lo de Impulso, más:',
    includes: [
      'Transformación digital y automatización',
      'Inteligencia artificial aplicada',
      'Planeamiento estratégico y OKRs',
      'Optimización comercial y RR.HH.',
    ],
  },
  {
    name: 'PERSONALIZADO',
    forWhom: 'Dirección estratégica externa a medida. Todo lo de Expansión, más:',
    includes: [
      'Solución 100% diseñada para tu empresa',
      'CFO externo',
      'Asesor de negocios',
      'Gobierno corporativo y tecnología',
    ],
  },
];

// --- Los 5 problemas del sector — Aviación (spec 6.3.2) ---
export const aviacionProblems = [
  {
    icon: Fuel,
    title: 'Márgenes bajo presión',
    copy: 'Combustible, tasas aeroportuarias y tipo de cambio erosionan la rentabilidad operativa.',
  },
  {
    icon: ScrollText,
    title: 'Complejidad regulatoria',
    copy: 'BCRA, IATA, ANAC y restricciones cambiarias exigen compliance permanente y actualizado.',
  },
  {
    icon: Landmark,
    title: 'Pagos internacionales',
    copy: 'Proveedores globales y ciclos de cobro extendidos presionan el capital de trabajo.',
  },
  {
    icon: Network,
    title: 'Procesos fragmentados',
    copy: 'Operaciones multi-país con sistemas desintegrados generan ineficiencia y riesgo.',
  },
  {
    icon: EyeOff,
    title: 'Visibilidad financiera nula',
    copy: 'Sin KPIs en tiempo real, las decisiones estratégicas se toman sin datos confiables.',
  },
];

// --- Propuesta + 4 pilares — Aviación (spec 6.3.3) ---
export const aviacionPillars = [
  {
    icon: Wallet,
    title: 'Consultoría Financiera',
    copy: 'CFO Advisory · Cash Flow · Capital de Trabajo · Forecast · Rentabilidad por unidad.',
  },
  {
    icon: Workflow,
    title: 'Optimización de Procesos',
    copy: 'Order to Cash · Procure to Pay · Record to Report · SSC / GBS · Control de Costos.',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Gobierno',
    copy: 'BCRA · Regulatorio Cambiario · Controles Internos · Riesgos · Gobierno Corporativo.',
  },
  {
    icon: Cpu,
    title: 'Tecnología Aplicada',
    copy: 'SAP · ERP · Business Intelligence · Automatización · Digitalización · Reporting Ejecutivo.',
  },
];

// --- Ciclos financieros — Aviación (spec 6.9) ---
export const aviacionCycles = [
  {
    code: 'O2C',
    name: 'Order to Cash',
    items: [
      'Gestión de clientes y crédito',
      'Facturación y cobranzas',
      'Conciliación de cuentas',
      'Reportes de aging y DSO',
      'Cobros internacionales y FX',
    ],
  },
  {
    code: 'P2P',
    name: 'Procure to Pay',
    items: [
      'Gestión de proveedores estratégicos',
      'Aprobación y control de facturas',
      'Pagos locales e internacionales',
      'Regulaciones BCRA y envío de remesas a casa matriz',
      'DPO y capital de trabajo',
    ],
  },
  {
    code: 'R2R',
    name: 'Record to Report',
    items: [
      'Cierre contable y conciliaciones',
      'Reporting financiero ejecutivo',
      'KPIs y dashboards de gestión',
      'Presupuesto y forecast',
      'Compliance y controles internos',
    ],
  },
  {
    code: 'SSC/GBS',
    name: 'Shared Services · Global Business',
    items: [
      'Experiencia en modelos de Shared Services (SSC) y Global Business Services (GBS) a nivel internacional',
    ],
  },
];

// --- Diferenciadores — Aviación (spec 6.3.7) ---
export const aviacionDifferentiators = [
  {
    icon: Award,
    title: 'Industria, no consultoría genérica',
    copy: 'Conocemos los ciclos financieros del sector aéreo, sus métricas clave y los desafíos regulatorios reales. No hay curva de aprendizaje.',
  },
  {
    icon: Users,
    title: 'Equipo dentro de tu organización',
    copy: 'Trabajamos integrados en tu estructura. Acceso directo a decisores clave y equipos operativos desde el día 1.',
  },
  {
    icon: CircleCheckBig,
    title: 'Impacto medible en cada etapa',
    copy: 'Cada proyecto incluye KPIs de impacto y reporting ejecutivo. Los resultados no son subjetivos: se miden, se comunican y se mejoran.',
  },
];

// --- Diferenciadores — Inicio (spec 6.1.6) ---
export const homeDifferentiators = [
  {
    icon: Users,
    title: 'Equipo integrado',
    copy: 'Trabajamos dentro de tu organización, con acceso directo a los equipos y a quienes deciden.',
  },
  {
    icon: Award,
    title: 'Especialización de industria',
    copy: 'Conocemos los desafíos y métricas reales de cada industria: no partimos de una curva de aprendizaje.',
  },
  {
    icon: CircleCheckBig,
    title: 'Resultados medibles',
    copy: 'Cada proyecto incluye KPIs de impacto y reporting ejecutivo: se miden, se comunican y se mejoran.',
  },
  {
    icon: Layers,
    title: 'Finanzas + procesos + tecnología',
    copy: 'Combinamos expertise financiero, mejora de procesos y tecnología aplicada en un mismo equipo.',
  },
];

// --- MethodSteps: versión resumida (Inicio, 6.1.5) ---
export const methodStepsCondensed = [
  {
    icon: ClipboardList,
    title: 'Diagnóstico',
    copy: 'Relevamiento de procesos y estructura financiera.',
  },
  { icon: Target, title: 'Estrategia', copy: 'Plan de acción y hoja de ruta priorizada.' },
  {
    icon: Rocket,
    title: 'Implementación',
    copy: 'Ejecución con acompañamiento de DGV.',
  },
  { icon: ChartLine, title: 'Seguimiento', copy: 'Reporting ejecutivo y mejora continua.' },
];

// --- MethodSteps: versión completa genérica (PyMEs, 6.2.6 / spec 6.5) ---
export const methodStepsFull = [
  {
    icon: ClipboardList,
    title: 'Diagnóstico',
    copy: 'Relevamiento de procesos y estructura financiera. Identificación de brechas y KPIs baseline.',
  },
  {
    icon: Target,
    title: 'Estrategia',
    copy: 'Plan de acción y hoja de ruta priorizada. Alineación con alta dirección.',
  },
  {
    icon: Rocket,
    title: 'Implementación',
    copy: 'Ejecución con acompañamiento de DGV.',
  },
  {
    icon: ChartLine,
    title: 'Seguimiento',
    copy: 'Reporting ejecutivo y dashboards. KPIs de impacto y mejora continua.',
  },
];

// --- MethodSteps: versión completa con SAP/ERP (Aviación, 6.3.6 / spec 6.5) ---
export const methodStepsAviacion = [
  methodStepsFull[0],
  methodStepsFull[1],
  {
    icon: Rocket,
    title: 'Implementación',
    copy: 'Ejecución con acompañamiento DGV, SAP y ERP.',
  },
  methodStepsFull[3],
];
