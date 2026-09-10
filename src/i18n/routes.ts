/**
 * Mapa de rutas traducidas — todas las páginas del sitio tienen versión
 * en inglés (feature experimental de i18n, ver PENDIENTES.md).
 */
export const translatedRoutes: Record<string, string> = {
  '/': '/en',
  '/soluciones-pymes': '/en/solutions-for-smes',
  '/servicios': '/en/services',
  '/aviacion-logistica': '/en/aviation-logistics',
  '/contacto': '/en/contact',
  '/nosotros': '/en/about',
  '/politica-privacidad': '/en/privacy-policy',
  '/politica-cookies': '/en/cookie-policy',
  '/terminos-condiciones': '/en/terms-and-conditions',
  '/metodologia': '/en/methodology',
  '/casos': '/en/case-studies',
};

const reverseRoutes: Record<string, string> = Object.fromEntries(
  Object.entries(translatedRoutes).map(([es, en]) => [en, es])
);

/** Ruta equivalente en el idioma pedido. Si no existe traducción, cae al inicio de ese idioma. */
export function getLocalizedPath(pathname: string, targetLang: 'es' | 'en'): string {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  const isEn = clean === '/en' || clean.startsWith('/en/');
  // Normalizamos siempre a la ruta en español, sin importar en qué idioma estemos parados.
  const esPath = isEn ? (reverseRoutes[clean] ?? '/') : clean;

  if (targetLang === 'es') return esPath;

  if (esPath in translatedRoutes) return translatedRoutes[esPath];
  return '/en';
}

export function hasTranslation(pathname: string): boolean {
  const clean = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
  return clean in translatedRoutes || clean in reverseRoutes;
}
