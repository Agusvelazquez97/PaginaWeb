/**
 * Animación sutil al hacer scroll (fade + slide-in), sin recargar.
 * Respeta prefers-reduced-motion: si está activo, todo queda visible sin animar.
 */
function initScrollReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (targets.length === 0) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  // Recién acá activamos el ocultamiento inicial (ver global.css): si el
  // script no llega a correr, el contenido queda visible por defecto.
  document.documentElement.classList.add('js-reveal');

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}

// Script de módulo: Astro lo inyecta como `type="module"`, que ya se
// comporta como `defer` (corre con el DOM parseado). No depende de
// `astro:page-load`, que solo se dispara con ClientRouter/View Transitions.
initScrollReveal();
