/**
 * Datos de contacto y navegación — spec, secciones 5 y 7.2.
 */
export const siteConfig = {
  name: 'DGV Business Consulting',
  tagline: 'Impulsamos tu negocio, potenciamos tu futuro.',
  email: 'contacto@dgvbusiness.com',
  phoneDisplay: '+54 9 11 6094-1379',
  whatsappNumber: '5491160941379',
  whatsappMessage: 'Hola, quiero coordinar una conversación con DGV',
  location: 'Buenos Aires, Argentina',
  linkedInUrl: 'https://www.linkedin.com/company/dgv-business-consulting/',
  calendlyUrl: 'https://calendly.com/daniel-v-dgvbusiness/30min',
  // Formspree — spec 7.1. Envía a daniel.v@dgvbusiness.com (verificado en Formspree).
  formEndpoint: 'https://formspree.io/f/mzepewle',
  contactSla: 'Te respondemos en 24 h y coordinamos una llamada de 30 min sin cargo.',
  ga4MeasurementId: 'G-X46GF8BR3M',
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Metodología', href: '/metodologia' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Casos', href: '/casos' },
];

export const solucionesDropdown: NavLink[] = [
  { label: 'Soluciones para PyMEs', href: '/soluciones-pymes' },
  { label: 'Aviación & Logística', href: '/aviacion-logistica' },
];

export const footerNav: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones para PyMEs', href: '/soluciones-pymes' },
  { label: 'Aviación & Logística', href: '/aviacion-logistica' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Metodología', href: '/metodologia' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];
