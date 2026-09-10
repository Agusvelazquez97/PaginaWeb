/**
 * Equipo — contenido exacto de la spec, sección 6.9. No inventar bios ni roles.
 * Fotos individuales reales, subidas por el cliente y procesadas con fondo
 * navy (spec sección 3) — ver PENDIENTES.md. LinkedIn de cada integrante:
 * [FALTA].
 */
export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  formation: string;
  bio: string;
  photo: string;
  linkedIn?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Daniel G. Velázquez',
    initials: 'DV',
    role: 'Fundador',
    formation: 'Contador Público · UBA · Matriculado CPCECABA · Posgrado en Dirección Estratégica, Universidad de Belgrano',
    bio: 'Más de 20 años en aviación y logística (Air France / KLM, DHL Express Argentina) y 35+ de trayectoria total. Especialista en procesos financieros y eficiencia operativa.',
    photo: '/images/team/daniel.jpg',
  },
  {
    name: 'Sonia B. Bóveda Paredes',
    initials: 'SB',
    role: 'Fundadora',
    formation: 'Contadora Pública · UBA · Matriculada CPCECABA · Posgrado en Dirección Estratégica, Universidad de Belgrano',
    bio: 'Amplia trayectoria en multinacionales líderes como Western Union. Especialista en finanzas corporativas, contabilidad y gestión operativa.',
    photo: '/images/team/sonia.jpg',
  },
  {
    name: 'Victoria Velázquez',
    initials: 'VV',
    role: 'Consultora Senior',
    formation: 'Lic. Negocios Globales · UADE',
    bio: 'Especialista en negocios internacionales, estrategia comercial y expansión regional.',
    photo: '/images/team/victoria.jpg',
  },
  {
    name: 'Agustín Velázquez',
    initials: 'AV',
    role: 'Consultor Digital',
    formation: 'Lic. Negocios Digitales · UCEMA',
    bio: 'Especialista en transformación digital, digitalización de procesos, ERP, automatización y estrategia de negocios en entornos tecnológicos.',
    photo: '/images/team/agustin.jpg',
  },
];
