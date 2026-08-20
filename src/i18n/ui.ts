/**
 * Diccionario de textos de interfaz compartida (header, footer, WhatsApp,
 * skip link, selector de idioma) — feature experimental de i18n, ver
 * PENDIENTES.md. Solo cubre lo que aparece en las 4 páginas traducidas.
 */
export type Lang = 'es' | 'en';

export const ui = {
  es: {
    skipToContent: 'Saltar al contenido',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    navPrincipal: 'Principal',
    navPrincipalMobile: 'Principal (mobile)',
    soluciones: 'Soluciones',
    contacto: 'Contacto',
    footerNavHeading: 'Navegación',
    footerContactHeading: 'Contacto',
    footerRights: (year: number) => `© ${year} DGV Business Consulting. Todos los derechos reservados.`,
    footerTrayectorias:
      'Las trayectorias del equipo se comunican en texto, sin usar logos de terceros.',
    whatsappAriaLabel: (phone: string) => `Escribinos por WhatsApp: ${phone}`,
    inicio: 'Inicio',
    langSwitcherLabel: 'Idioma',
  },
  en: {
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    navPrincipal: 'Main',
    navPrincipalMobile: 'Main (mobile)',
    soluciones: 'Solutions',
    contacto: 'Contact',
    footerNavHeading: 'Navigation',
    footerContactHeading: 'Contact',
    footerRights: (year: number) => `© ${year} DGV Business Consulting. All rights reserved.`,
    footerTrayectorias:
      "The team's track record is communicated in text, without using third-party logos.",
    whatsappAriaLabel: (phone: string) => `Message us on WhatsApp: ${phone}`,
    inicio: 'Home',
    langSwitcherLabel: 'Language',
  },
} as const;
