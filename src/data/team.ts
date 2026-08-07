/**
 * Equipo — contenido exacto de la spec, sección 6.9. No inventar bios ni roles.
 * Fotos y LinkedIn: [FALTA] — ver PENDIENTES.md. Mientras tanto se usan
 * iniciales en círculo (spec, sección 8 — "plan de imágenes").
 */
export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  formation: string;
  bio: string;
  linkedIn?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Daniel G. Velázquez',
    initials: 'DV',
    role: 'Socio',
    formation: 'Contador Público · UBA · Matriculado CPCECABA',
    bio: 'Más de 20 años en aviación y logística (Air France / KLM, DHL Express Argentina) y 35+ de trayectoria total. Especialista en procesos financieros y eficiencia operativa.',
  },
  {
    name: 'Sonia B. Bóveda Paredes',
    initials: 'SB',
    role: 'Socia',
    formation: 'Contadora Pública · UBA · Matriculada CPCECABA',
    bio: 'Amplia trayectoria en multinacionales líderes como Western Union. Especialista en finanzas corporativas, contabilidad y gestión operativa.',
  },
  {
    name: 'Victoria Velázquez',
    initials: 'VV',
    role: 'Consultora Senior',
    formation: 'Lic. Negocios Globales · UADE',
    bio: 'Especialista en negocios internacionales, estrategia comercial y expansión regional.',
  },
  {
    name: 'Agustín Velázquez',
    initials: 'AV',
    role: 'Consultor Digital',
    formation: 'Lic. Negocios Digitales · UCEMA',
    bio: 'Especialista en transformación digital, digitalización de procesos, ERP, automatización y estrategia de negocios en entornos tecnológicos.',
  },
];
