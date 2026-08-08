# Pendientes — DGV Business Consulting

Todo lo que la spec marca como **[FALTA]** (o que hoy no existe como archivo real)
y que en el código quedó resuelto con un placeholder evidente. Nada de esto es
contenido inventado: son huecos explícitos a completar con material real del
cliente antes de lanzar. Ver también `DGV_Spec_Desarrollo.md` sección 9.2
(checklist de lanzamiento), que ya listaba varios de estos ítems.

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

## Fuera de alcance de esta etapa (ya identificado por la spec, no resuelto aún)

Estos ítems corresponden a páginas/secciones que **no se construyeron**
todavía (Servicios, Metodología, Nosotros, Casos, Contacto). Se dejan
anotados para no perderlos:

- Historia y valores de la empresa (`/nosotros`, [FALTA] en spec 6.6).
- Entregables y duración típica por etapa del método (spec 6.5).
- Mini-FAQ de Contacto (spec 6.8): cómo cobran, duración, modalidad.
- SLA de respuesta del formulario (spec sugiere "24 h" a confirmar).

## Nota sobre contenido ya incluido (no es un pendiente, es una aclaración)

- Los textos de PainCards, MethodSteps, AuthorityBand, CommitmentBlock,
  ServiceGrid, PlansTable, CyclesGrid, StatsBand y DifferentiatorCards son
  copy exacto o paráfrasis directa de la spec (secciones 6.1, 6.2, 6.3, 6.5,
  6.7, 6.9), sin datos, cifras ni afirmaciones nuevas.
- El titular y subtítulo del Hero de Inicio son copy **[DERIVADO]**: la spec
  (6.1.1) da el eje temático a comunicar, no una frase literal; se redactó
  siguiendo ese eje sin agregar hechos nuevos.
