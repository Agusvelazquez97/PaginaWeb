# Pendientes — DGV Business Consulting

Todo lo que la spec marca como **[FALTA]** (o que hoy no existe como archivo real)
y que en el código quedó resuelto con un placeholder evidente. Nada de esto es
contenido inventado: son huecos explícitos a completar con material real del
cliente antes de lanzar. Ver también `DGV_Spec_Desarrollo.md` sección 9.2
(checklist de lanzamiento), que ya listaba varios de estos ítems.

## Etapa 4 (SEO técnico, Schema.org, analítica)

Spec sección 10, paso 8. Con esto el sitio tiene: `robots.txt`, sitemap
verificado (8 páginas), JSON-LD (Organization/ProfessionalService en todas
las páginas, Person por cada integrante en `/nosotros`, BreadcrumbList en
las 7 páginas que no son Inicio), imagen Open Graph propia, y el
scaffolding de GA4 listo para activar. Auditoría de accesibilidad (axe-core)
y de links internos: **0 violaciones, 0 links rotos** en las 8 páginas.

### Pendiente: activar GA4

- [ ] **Measurement ID de GA4** (`siteConfig.ga4MeasurementId` en
      `src/data/site.ts`, vacío). El loader de `gtag.js` y los eventos de
      conversión (`form_submit` en el envío exitoso del formulario,
      `whatsapp_click` en cualquier link a `wa.me`) ya están cableados en
      `BaseLayout.astro` y `src/scripts/analytics.ts` — con el ID vacío
      simplemente no se cargan (no rompen nada, no ensucian la consola).
      Pasame el ID (`G-XXXXXXXXXX`) y lo activo.
- [ ] Evento de click en agenda (Calendly): no se cableó todavía porque el
      link real de agenda tampoco existe (mismo pendiente de etapas
      anteriores). Se agrega junto con la URL de Calendly.

### No se agregó FAQPage (Schema.org)

La spec pide FAQPage entre los tipos de Schema.org, pero las respuestas del
mini-FAQ de `/contacto` siguen siendo `[[PENDIENTE: respuesta]]` — marcarlas
como datos estructurados reales sería mostrarle a Google contenido falso.
Se agrega en cuanto haya respuestas reales.

### Placeholder a reemplazar

- [ ] **`public/og-image.png`** — imagen genérica generada con la paleta de
      la marca (navy + texto), para que los links del sitio se vean bien al
      compartir en WhatsApp/LinkedIn. Reemplazar por una pieza de marca real
      cuando exista el logo vectorial (mismo pendiente que el favicon).

## Etapa 1 (Setup + componentes base + Inicio)

### Video y fotografía

- [ ] **`public/videos/hero.mp4`** (y opcionalmente `.webm`) — el `<video>` del
      Hero de Inicio ya está cableado (autoplay/loop/muted/playsinline,
      overlay navy, oculto en mobile) apuntando a este archivo, que **no
      existe todavía**. Spec 7.3: 8-12s, loop, sin sonido, < 3 MB, MP4+WebM.
      Búsquedas sugeridas por la spec: "airplane takeoff slow motion",
      "air cargo loading", "airport runway", "aerial airport" (Pexels
      Video / Coverr / Mixkit).
- [ ] **Imagen fallback del hero** (`public/images/placeholders/hero-fallback.svg`
      hoy es un placeholder navy generado, no una foto). Reemplazar por un
      frame real del video (WebP), que se usa como `poster` del `<video>` y
      como imagen completa en mobile.
- [ ] **Imágenes de RouteSelector** (2): una PyME argentina, una
      aviación/logística, con tratamiento duotono navy (spec sección 8).
      Hoy son placeholders (componente `PlaceholderImage`, no fotos de stock).
- [ ] **Fotos de equipo** (4 individuales + 1 grupal). Hoy el Team teaser usa
      **iniciales en círculo** como estado intermedio, tal como indica la
      spec sección 8 ("Reemplazan las iniciales en círculo").

### Datos de contacto y enlaces

- [ ] **URL de LinkedIn de DGV** — footer preparado (`siteConfig.linkedInUrl`
      en `src/data/site.ts`) pero vacío; no se muestra el link hasta tener
      la URL real.
- [ ] **URL de agenda (Calendly u otro)** — `siteConfig.calendlyUrl` vacío.
      Spec 7.2: debe complementar (no reemplazar) al formulario de contacto.
      Se resuelve en la etapa de Contacto.
- [ ] **Dominio del sitio** — `astro.config.mjs` asume `https://www.dgvbusiness.com`
      a partir del email de contacto (`contacto@dgvbusiness.com`). Confirmar
      con el cliente antes de lanzar (afecta sitemap y OG/canonical URLs).

### Contenido reservado (no ficticio)

- [ ] **Testimonios / casos de éxito** — el `CommitmentBlock` de Inicio
      incluye un módulo reservado, marcado `[[PENDIENTE: testimonios y casos
      reales]]`, listo para poblarse. Spec 6.7: "No publicar casos ficticios."

### Marca

- [ ] **Logo vectorial (SVG) de DGV** — hoy el header/footer usan texto
      ("DGV. Business Consulting") y `public/favicon.svg` es un monograma
      genérico de placeholder (fondo navy + "D"). Reemplazar por el logo
      real en cuanto exista (spec 9.2, bloqueante de lanzamiento).

## Etapa 2 (Soluciones para PyMEs + Aviación & Logística)

### Fotografía

- [ ] **Imagen hero de `/soluciones-pymes`** — PyME argentina real, registro
      cercano/local (spec sección 8). Hoy es un `PlaceholderImage`.
- [ ] **Imagen hero de `/aviacion-logistica`** — avión/aeropuerto con
      tratamiento duotono, registro premium/técnico (spec sección 8). Hoy es
      un `PlaceholderImage`.
- [ ] 3-4 imágenes de apoyo por vertical que la spec sugiere en la sección 8
      (revisar números, comercio/taller local para PyMEs; carga, torre de
      control, pantallas financieras para Aviación) — no se agregaron en
      esta etapa porque ninguna sección del orden exacto de 6.2/6.3 pedía una
      imagen de apoyo adicional a la del hero.

### Contenido reservado (no ficticio)

- [ ] **Prueba social PyME** — módulo reservado en `/soluciones-pymes`,
      marcado `[[PENDIENTE: testimonios y casos reales de PyMEs]]` (spec
      6.2.7).
- [ ] **Prueba social Aviación** — módulo reservado en `/aviacion-logistica`,
      marcado `[[PENDIENTE: testimonios y casos reales del sector
      aéreo/logístico]]` (spec 6.3.9).

### Copy [DERIVADO] agregado en esta etapa

- Subtítulo del hero de `/soluciones-pymes` ("Te acompañamos a poner en
  orden..."): la spec solo da el titular literal (6.2.1); el subtítulo se
  redactó en el mismo eje sin agregar hechos nuevos.
- Heading de "Nuestra propuesta" en `/aviacion-logistica` ("Cuatro pilares
  para tu operación financiera."): la spec no da un heading literal para esa
  sección, solo el contenido de los 4 pilares (6.3.3).

## Etapa 3 (Servicios, Metodología, Nosotros, Contacto, Casos)

Con esta etapa quedan construidas **todas** las páginas de prioridad
"Imprescindible" y "Recomendada" de la spec (sección 5). Falta solo Blog
(Fase 2, fuera de alcance por diseño).

### ✅ Resuelto: formulario conectado a Formspree

- [x] **Endpoint de Formspree** (`siteConfig.formEndpoint` en
      `src/data/site.ts`) conectado a `https://formspree.io/f/mzepewle`,
      que envía a `daniel.v@dgvbusiness.com`. Probado end-to-end (POST real
      contra el endpoint → `{"ok":true}`, HTTP 200). Spec 9.2: bloqueante de
      lanzamiento cerrado.
      Pendiente menor: si Formspree pide un captcha/verificación adicional
      en producción (dominio real en vez de localhost), revisar la config
      del formulario en Formspree.

### Contenido reservado (no ficticio)

- [ ] **Entregables y duración típica por etapa** en `/metodologia` — cada
      uno de los 4 pasos tiene `[[PENDIENTE: entregables]]` y
      `[[PENDIENTE: duración]]` (spec 6.5, ambos [FALTA]).
- [ ] **Respuestas del mini-FAQ** en `/contacto` — las 3 preguntas están
      (cómo cobran, duración típica, modalidad remoto/presencial) pero las
      respuestas son `[[PENDIENTE: respuesta]]` (spec 6.8, [FALTA
      respuestas]).
- [ ] **Historia y valores de la empresa** en `/nosotros` — dos tarjetas
      con borde punteado, `[[PENDIENTE: historia de DGV]]` y
      `[[PENDIENTE: valores de la empresa]]` (spec 6.6, ambos [FALTA]).
- [ ] **Página `/casos`** — construida como "sección en construcción",
      sin casos ficticios (spec sección 10, paso 7). Reemplazar por casos
      reales cuando existan y estén autorizados.

### Datos de contacto y enlaces

- [ ] **Link de agenda (Calendly)** en `/contacto` — mismo pendiente que en
      Etapa 1 (`siteConfig.calendlyUrl`), ahora con su propio bloque
      reservado visible en la página en vez de solo en CTAs.

### Decisión editorial a revisar: agrupación de `/servicios` por familia

La spec (6.4) pide agrupar los servicios en 6 familias (Finanzas &
Contabilidad · Procesos & Operaciones · Estrategia & Crecimiento ·
Tecnología · Compliance & Gobierno · Laboral & RRHH) pero no especifica qué
servicio va en cuál. Se armó la agrupación reusando texto ya existente en
otras secciones (6.2.5, 6.3.3, 6.9) — **ningún servicio ni descripción es
nueva**, solo se reorganizó. Vale la pena que lo revises (`src/data/content.ts`,
`serviceFamilies`) para confirmar que la agrupación tiene sentido comercial.

### Copy [DERIVADO] agregado en esta etapa

- Hero de `/nosotros` (título y subtítulo): la spec pide "Hero con
  propósito" sin dar frase literal.
- Misión y Visión en `/nosotros`: texto [DECK] ampliado para incluir
  aviación/logística, tal como indica la spec ("ampliar para incluir
  aviación" / "ampliar alcance") — sin agregar hechos nuevos, solo
  extendiendo el alcance ya establecido en la sección 1.
- Intro de `/servicios` y heading de la franja de enlaces cruzados: la spec
  solo pide "Intro [DERIVADO]" sin frase literal.
- Subtítulo de `/metodologia`: la spec da el titular ("Un método claro,
  resultados medibles") pero no el subtítulo.

## Nota sobre contenido ya incluido (no es un pendiente, es una aclaración)

- Los textos de PainCards, MethodSteps, AuthorityBand, CommitmentBlock,
  ServiceGrid, PlansTable, CyclesGrid, StatsBand, DifferentiatorCards y
  TeamGrid son copy exacto o paráfrasis directa de la spec (secciones 6.1,
  6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.9), sin datos, cifras ni afirmaciones
  nuevas.
- El titular y subtítulo del Hero de Inicio son copy **[DERIVADO]**: la spec
  (6.1.1) da el eje temático a comunicar, no una frase literal; se redactó
  siguiendo ese eje sin agregar hechos nuevos.
- "Transformación Digital" y "Optimización comercial y RR.HH." en
  `/servicios` (familia Tecnología y Laboral & RRHH) reusan textualmente dos
  bullets del plan EXPANSIÓN (spec 6.9) como título+copy de un servicio
  independiente — no son datos nuevos, es la misma frase ya existente.
