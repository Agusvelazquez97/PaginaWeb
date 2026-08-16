# Pendientes — DGV Business Consulting

Todo lo que la spec marca como **[FALTA]** (o que hoy no existe como archivo real)
y que en el código quedó resuelto con un placeholder evidente. Nada de esto es
contenido inventado: son huecos explícitos a completar con material real del
cliente antes de lanzar. Ver también `DGV_Spec_Desarrollo.md` sección 9.2
(checklist de lanzamiento), que ya listaba varios de estos ítems.

## Etapa 6 (Historia, valores, entregables — contenido real del cliente)

Contenido recibido en `Pendientes_web.docx`. Se aplicó tal cual, sin agregar
datos ni cifras nuevas.

### ✅ Resuelto: Historia y Valores en `/nosotros`

- [x] **Historia** — reemplaza el placeholder por el texto real (narrativa en
      primera persona de Daniel G. Velázquez sobre el origen de DGV). Se armó
      como sección propia con tipografía de lectura (antes estaba forzada
      dentro de una tarjeta chica junto a Misión/Visión, que no alcanzaba
      para un texto largo). Cierra con una cita destacada (propósito de DGV)
      atribuida a Daniel.
- [x] **Valores** — reemplaza el placeholder por los 6 valores reales
      (Excelencia, Compromiso, Innovación, Integridad, Cercanía,
      Resultados), cada uno con su descripción tal cual la mandaron. Se armó
      como grilla de 6 tarjetas con ícono, sección propia (antes también
      forzado en la tarjeta chica).

### ✅ Resuelto: Entregables y duración por etapa en `/metodologia`

- [x] Las 4 tarjetas del método (`MethodStepsDetailed.astro`) ya muestran
      entregables y duración reales en vez de `[[PENDIENTE]]`.
      **Nota editorial:** el documento del cliente describe el proceso en 4
      fases con límites algo distintos a los del sitio ("Diagnóstico /
      Análisis / Estrategia / Implementación y seguimiento", esta última
      fase junta lo que el sitio muestra como dos pasos separados). Para no
      reestructurar la presentación pública (que ya usa Diagnóstico /
      Estrategia / Implementación / Seguimiento en Inicio, PyMEs, Aviación y
      Metodología), se repartió el contenido real en esos 4 pasos
      existentes: "Análisis" quedó absorbido en Diagnóstico (su entregable,
      "mapa de brechas y oportunidades", ya estaba incluido ahí) y
      "Implementación y seguimiento" se separó en los dos pasos ya
      existentes. Decisión confirmada con el cliente antes de aplicarla.

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

## Etapa 5 (Media real del cliente: fotos, video, logo)

Contenido con licencia confirmada por el cliente. Se procesaron y
cablearon en el sitio.

### ✅ Resuelto: video del Hero de Inicio

- [x] **`public/videos/hero.mp4` y `hero.webm`** — video real provisto por el
      cliente (avión despegando), confirmado con licencia. Se recodificó
      (sin audio, 1280px de ancho, `faststart`) para quedar liviano:
      ~710 KB el MP4 (H.264) y ~712 KB el WebM (VP9), ambos muy por debajo
      del límite de 3 MB de la spec 7.3. Duración original 7.3s (el archivo
      del cliente, no un stock elegido a medida — la spec sugería 8-12s como
      referencia para búsquedas de stock, no como límite estricto).

### ✅ Resuelto: fotografía de PyMEs

- [x] **`public/images/pymes/hero-taller.jpg`** (carpintero en su taller) —
      usada como Hero de `/soluciones-pymes` y como tarjeta "Soy una PyME"
      del `RouteSelector` (Inicio). De un lote de 16 fotos de Pexels que
      subió el cliente, revisadas una por una: se descartaron 3 por mostrar
      texto de fondo legible que delata otro país (dos con documentos en
      ruso, una con carteles en turco) y unas cuantas por ser demasiado
      genéricas/corporativas para el "registro cercano y local" que pide la
      spec. Esta fue la que mejor encajó: sin texto que la ubique en otro
      país, taller real, buena luz.
- [ ] **`public/images/pymes/panaderia.jpg`** y
      **`public/images/pymes/numeros.jpg`** — procesadas y disponibles,
      sin usar todavía (mismo caso que `finanzas.jpg` de Aviación: no hay
      un slot de imagen de apoyo armado en `/soluciones-pymes` todavía).

### ✅ Resuelto: fotografía de aviación/logística

- [x] **`public/images/aviacion/hero-avion.jpg`** (avión despegando) — usada
      como `poster` del video y fallback mobile del Hero de Inicio.
- [x] **`public/images/aviacion/terminal.jpg`** (aeropuerto/manga de
      embarque) — usada como imagen del Hero de `/aviacion-logistica`.
- [x] **`public/images/aviacion/carga.jpg`** (carga aérea) — usada en la
      tarjeta "Industria Aérea & Logística" de `RouteSelector` (Inicio).
- [ ] **`public/images/aviacion/finanzas.jpg`** (pantallas financieras) —
      procesada y disponible, pero **todavía sin usar**: ninguna sección
      existente tiene un slot de imagen natural para ella (CyclesGrid,
      AuthorityBand y StatsBand son grillas de texto/ícono, sin hueco de
      foto). Queda lista para una futura sección que la aproveche.

Las 4 fotos recibieron el tratamiento duotono navy que exige la spec
sección 3 (grises mapeados de `#050D1C` a `#DDE3F0`).

### ✅ Resuelto: logo real de DGV (fondo oscuro y fondo claro)

- [x] **Footer** — reemplaza el texto "DGV. Business Consulting" por el
      logo real (`public/images/brand/dgv-logo.png`, fondo transparente).
- [x] **`public/favicon.svg`** — el ícono de barras del logo real,
      reemplaza el monograma "D" genérico.
- [x] **`public/og-image.png`** — el logo real reemplaza el texto del
      wordmark en la pieza que se comparte en WhatsApp/LinkedIn.
- [x] **Header** (`src/components/layout/Header.astro`) — resuelto con una
      **variante clara generada a partir del mismo archivo** (no un asset
      nuevo del cliente): `public/images/brand/dgv-logo-light.png`. Se
      recoloreó el "DGV" y la barra más alta (antes blancos, invisibles
      sobre fondo claro) a navy `#0D2461`, y el subtítulo "BUSINESS
      CONSULTING" a `#475569` (contraste verificado ≥ 4.5:1 sobre blanco,
      WCAG AA). Las otras dos barras quedaron igual, ya tenían contraste
      propio. No es un SVG vectorial real — es un PNG recoloreado a partir
      del archivo que mandó el cliente —, así que si en algún momento
      aparece el logo vectorial original, conviene reemplazar los 4 usos
      (header, footer, favicon, OG) por ese.

### Nota sobre imágenes descartadas (no un pendiente, aclaración)

Se recibieron dos lotes distintos de imágenes para la vertical PyME, con
motivos de descarte distintos:

- **`Imagenes_pymes.docx`** (8 imágenes) — **no se usó ninguna**: los
  metadatos incrustados en el documento mostraban evidencia de que las
  imágenes venían de resultados de búsqueda de Google Images / bancos de
  stock / notas de prensa, sin licencia verificable.
- **Lote de 16 fotos de Pexels** (licencia libre, sin problema de
  derechos) — de estas se usaron 3 (ver arriba) y se descartaron el resto
  por no encajar con el "registro cercano y local" que pide la spec
  (demasiado genéricas/corporativas) o por mostrar texto de fondo legible
  que ubica la foto en otro país (documentos en ruso, carteles en turco).

Con esto, `/soluciones-pymes` y la tarjeta PyME de `RouteSelector` ya
tienen foto real (ver Etapa 5 arriba).

## Etapa 1 (Setup + componentes base + Inicio)

### Video y fotografía

- [ ] **Imagen fallback del hero para lectores/crawlers sin JS** — el
      `poster`/fallback mobile del Hero de Inicio ya usa una foto real
      (`hero-avion.jpg`, ver Etapa 5). Este ítem queda cerrado.
- [x] **Imagen de RouteSelector — tarjeta PyME** — resuelto en Etapa 5:
      `hero-taller.jpg` (carpintero en su taller), la misma que el Hero de
      `/soluciones-pymes`.
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
- [x] **Dominio del sitio** — confirmado por el cliente: `dgvbusiness.com`.
      No hizo falta tocar nada más allá del comentario en
      `astro.config.mjs`: ya estaba configurado con ese dominio desde el
      arranque del proyecto.

### Contenido reservado (no ficticio)

- [ ] **Testimonios / casos de éxito** — el `CommitmentBlock` de Inicio
      incluye un módulo reservado, marcado `[[PENDIENTE: testimonios y casos
      reales]]`, listo para poblarse. Spec 6.7: "No publicar casos ficticios."

### Marca

- [x] **Logo de DGV en el Header** — resuelto en Etapa 5 con una variante
      clara generada a partir del logo del cliente (recoloreada, no un
      archivo nuevo). Sigue pendiente el **SVG vectorial original** (spec
      9.2) si el cliente lo tiene — hoy los 4 usos (header, footer,
      favicon, OG) son PNG procesados a partir de un solo archivo.

## Etapa 2 (Soluciones para PyMEs + Aviación & Logística)

### Fotografía

- [x] **Imagen hero de `/soluciones-pymes`** — resuelto en Etapa 5:
      `hero-taller.jpg` (carpintero en su taller), con tratamiento duotono,
      registro cercano y local.
- [x] **Imagen hero de `/aviacion-logistica`** — resuelto en Etapa 5:
      `terminal.jpg`, con tratamiento duotono, registro premium/técnico.
- [x] Imágenes de apoyo para Aviación (carga, pantallas financieras) —
      resuelto en Etapa 5: `carga.jpg` en uso (RouteSelector), `finanzas.jpg`
      procesada y disponible sin usar todavía (sin slot de imagen en las
      secciones existentes).
- [x] Imágenes de apoyo para PyMEs (panadería/taller, revisar números) —
      resuelto en Etapa 5: `panaderia.jpg` y `numeros.jpg` procesadas y
      disponibles, sin usar todavía (mismo motivo que `finanzas.jpg`).

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

- [x] **Entregables y duración típica por etapa** en `/metodologia` —
      resuelto en Etapa 6, con contenido real del cliente.
- [ ] **Respuestas del mini-FAQ** en `/contacto` — las 3 preguntas están
      (cómo cobran, duración típica, modalidad remoto/presencial) pero las
      respuestas son `[[PENDIENTE: respuesta]]` (spec 6.8, [FALTA
      respuestas]).
- [x] **Historia y valores de la empresa** en `/nosotros` — resuelto en
      Etapa 6, con contenido real del cliente.
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
