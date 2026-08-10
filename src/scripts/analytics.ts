/**
 * Eventos de conversión GA4 — spec 9.1 ("envío form, click WhatsApp, click
 * agenda"). Si no hay Measurement ID configurado (siteConfig.ga4MeasurementId
 * vacío), gtag nunca se carga y trackEvent() no hace nada — no falla, no
 * ensucia la consola.
 */
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params: Record<string, unknown> = {}): void {
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params);
  }
}

function initWhatsAppTracking(): void {
  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest('a[href*="wa.me"]')) {
      trackEvent('whatsapp_click');
    }
  });
}

initWhatsAppTracking();
