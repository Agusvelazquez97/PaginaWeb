/**
 * Datos de contacto y navegación — spec, secciones 5 y 7.2.
 */
export const siteConfig = {
  name: 'DGV Business Consulting',
  tagline: 'Impulsamos tu negocio, potenciamos tu futuro.',
  taglineEn: 'We drive your business, empower your future.',
  email: 'contacto@dgvbusiness.com',
  phoneDisplay: '+54 9 11 6094-1379',
  whatsappNumber: '5491160941379',
  whatsappMessage: 'Hola, quiero coordinar una conversación con DGV',
  whatsappMessageEn: "Hi, I'd like to arrange a conversation with DGV",
  location: 'Buenos Aires, Argentina',
  linkedInUrl: 'https://www.linkedin.com/company/dgv-business-consulting/',
  calendlyUrl: 'https://calendly.com/daniel-v-dgvbusiness/30min',
  // Formspree — spec 7.1. Envía a daniel.v@dgvbusiness.com (verificado en Formspree).
  formEndpoint: 'https://formspree.io/f/mzepewle',
  contactSla: 'Te respondemos en 24 h y coordinamos una llamada de 30 min sin cargo.',
  contactSlaEn: "We'll reply within 24 h and set up a free 30-minute call.",
  ga4MeasurementId: 'G-X46GF8BR3M',
};

export const whatsappHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

export const whatsappHrefEn = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessageEn
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
  { label: 'Industria Aérea & Logística', href: '/aviacion-logistica' },
];

export const footerNav: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Soluciones para PyMEs', href: '/soluciones-pymes' },
  { label: 'Industria Aérea & Logística', href: '/aviacion-logistica' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Metodología', href: '/metodologia' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Contacto', href: '/contacto' },
];

// --- Versión en inglés: solo las páginas traducidas (ver src/i18n/routes.ts) ---
export const mainNavEn: NavLink[] = [
  { label: 'Home', href: '/en' },
  { label: 'Services', href: '/en/services' },
  { label: 'Aviation & Logistics', href: '/en/aviation-logistics' },
  { label: 'About', href: '/en/about' },
];

export const footerNavEn: NavLink[] = [
  { label: 'Home', href: '/en' },
  { label: 'Aviation & Logistics', href: '/en/aviation-logistics' },
  { label: 'Services', href: '/en/services' },
  { label: 'About', href: '/en/about' },
  { label: 'Contact', href: '/en/contact' },
];
