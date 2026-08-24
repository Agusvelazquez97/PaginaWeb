# Pendientes — DGV Business Consulting

Todo lo que la spec marca como **[FALTA]** (o que hoy no existe como archivo real)
y que en el código quedó resuelto con un placeholder evidente. Nada de esto es
contenido inventado: son huecos explícitos a completar con material real del
cliente antes de lanzar. Ver también `DGV_Spec_Desarrollo.md` sección 9.2
(checklist de lanzamiento), que ya listaba varios de estos ítems.

## Etapa 14 (Ajustes de feedback: fondo foto grupal + brillo del Hero)

Feedback del cliente sobre la Etapa 13 y sobre el Hero en general:

### ✅ Resuelto: fondo de la foto grupal

- [x] La foto grupal original mostraba de fondo un aparador de madera y
      una lámpara de pie (mobiliario doméstico reconocible), y el cliente
      pidió que se pareciera más a una oficina. En vez de reemplazar el
      fondo por uno falso (iría en contra de la regla de no inventar
      contenido), se aplicó un desenfoque de profundidad de campo real:
      segmentación de las 4 personas (`rembg`, modelo de personas) +
      blur + oscurecido leve del fondo, manteniendo a las personas
      nítidas. El mueble y la lámpara ya no se reconocen, queda como un
      fondo desenfocado genérico tipo oficina, sin fabricar nada que no
      esté en la foto real.

### ✅ Resuelto: Hero más claro en desktop

- [x] El cliente notó que las imágenes del Hero se veían más oscuras en
      computadora que en el celular. Causa: `Hero.astro` usa un overlay
      de degradé en mobile (más claro arriba, sólido abajo donde está el
      texto) pero en desktop lo reemplazaba por un navy plano al 65% de
      opacidad sobre toda la imagen. Se bajó a 50% (`md:bg-navy-900/50`)
      — afecta a las 6 páginas con Hero de imagen/video por igual, ya
      que es un solo componente compartido. Verificado que el contraste
      del texto blanco sigue pasando axe-core en las 6 páginas.

## Etapa 13 (Fotos reales del equipo: grupal + individuales)

El cliente subió 47 fotos reales del equipo a Drive (una sesión con
tomas grupales en la mesa de trabajo y retratos individuales de cada
integrante contra fondo blanco). Se pidió elegir las mejores según
criterio propio y, para las individuales, ponerles un fondo acorde a
los colores del sitio.

### ✅ Resuelto

- [x] **Foto grupal** (`public/images/team/equipo-nosotros.jpg`) — de las
      ~30 tomas grupales, se eligió la que muestra a los 4 juntos mirando
      hacia la pantalla con mejor composición y expresión (los otros
      candidatos, o bien no tenían a los 4 presentes, o mostraban a cada
      uno trabajando por separado). Tratamiento duotono navy, igual que
      el resto de las fotos del sitio (spec sección 3). Reemplaza el
      placeholder del Hero de `/nosotros`.
- [x] **Fotos individuales** (`public/images/team/{daniel,sonia,agustin,victoria}.jpg`)
      — se eligió el mejor retrato de cada integrante (de 2 a 6 tomas
      candidatas cada uno, foco en nitidez y expresión natural). Fondo
      original (pared) reemplazado por segmentación (`rembg`) + color
      sólido navy-700 (`#0D2461`, el mismo azul de los círculos con
      iniciales que reemplazan), para que quede acorde al diseño del
      sitio sin depender del entorno real de la foto.
- [x] Reemplazados los círculos con iniciales por las fotos reales en
      `TeamGrid` (`/nosotros`) y `TeamTeaser` (Inicio, ES y EN).
      `src/data/team.ts` ahora tiene un campo `photo` por integrante.
- [x] Agregado `image` al schema.org `Person` de cada integrante (antes
      no se incluía porque no había foto real).
- [x] Verificado: `astro check` (0 errores), build (12 páginas), 0
      violaciones de axe-core en `/nosotros`, `/` y `/en/`.

### ✅ Confirmado con el cliente

- [x] La asignación de fotos individuales (Agustín / Victoria) fue
      confirmada correcta por el cliente.

## Etapa 12 (i18n experimental: versión en inglés de 4 páginas)

El cliente preguntó si convenía traducir el sitio para visitantes del
exterior. Se acordó un alcance acotado para poder evaluarlo antes de
comprometerse: **solo inglés** (no varios idiomas) y **solo las 4 páginas
más relevantes** para un lead extranjero — Inicio, Servicios, Aviación &
Logística y Contacto —, no las 8. Queda explícitamente como algo a
revisar: si el resultado no convence, se puede revertir sin tocar el
resto del sitio (las páginas en español no cambiaron de contenido).

### ✅ Resuelto: infraestructura de i18n + 4 páginas traducidas

- [x] Ruteo con el `i18n` nativo de Astro (`astro.config.mjs`): español
      sin prefijo (default) e inglés bajo `/en/...`. Slugs traducidos:
      `/en`, `/en/services`, `/en/aviation-logistics`, `/en/contact`.
- [x] `src/i18n/routes.ts` — mapa de rutas traducidas + helper para el
      selector de idioma (si una página no tiene traducción, el link a
      "EN" cae al inicio en inglés en vez de un 404).
- [x] `src/i18n/ui.ts` — diccionario de textos de interfaz compartida
      (menú, footer, WhatsApp, skip link).
- [x] Selector de idioma "ES / EN" en el header (desktop y mobile),
      visible en las 8 páginas — es la "solapa" que pidió el cliente.
      Etiqueta `hreflang` (es/en/x-default) agregada solo en las páginas
      que sí tienen ambas versiones.
- [x] Traducción fiel de todo el copy usado en las 4 páginas (Hero, cards
      de dolor, método, diferenciadores, FAQ de Contacto, formulario,
      footer, ciclos financieros de Aviación, etc.) — sin agregar datos,
      cifras ni afirmaciones nuevas, solo traducción del contenido ya
      aprobado en español. Ver `src/data/content.en.ts`.
- [x] Los nombres del equipo no se traducen (son nombres propios); solo
      el cargo (`Socio` → `Partner`, etc.) en la vista resumida de Inicio.
- [x] Verificado: `npx astro check` (0 errores), `npm run build` (12
      páginas), 0 violaciones de axe-core en las 4 páginas EN + las 2
      páginas ES más tocadas (Inicio, Aviación & Logística).

### Fuera de alcance (a propósito, por ahora)

- [ ] El resto de las páginas (Metodología, Nosotros, Casos, Soluciones
      para PyMEs) sigue solo en español. Los links del header/footer en
      inglés que apuntan a esas páginas lo hacen en español (no hay
      traducción todavía) — es un compromiso aceptado del alcance
      acotado, no un bug.
- [ ] Si el cliente confirma que le gusta el resultado, evaluar sumar las
      4 páginas restantes.

## Etapa 10 (ImageBand: una imagen de apoyo por vertical)

Ya con el sitio en vivo, se evaluó si convenía sumar fotos a lo largo de
todo el contenido (no solo en el Hero). Decisión: **no** — el resto del
sitio usa un lenguaje de íconos + tarjetas (spec 3.1, "secciones
minimalistas") y llenarlo de fotos rompería esa consistencia, además de
multiplicar el trabajo de buscar/filtrar imágenes reales para cada
sección. En cambio, se sumó **una sola franja de imagen por página**, en
las dos verticales que ya tenían fotos duotono procesadas y sin usar —
cero costo de búsqueda nueva.

### ✅ Resuelto: `ImageBand.astro`

- [x] Componente nuevo (`src/components/sections/ImageBand.astro`): franja
      de imagen + texto corto, distinta visualmente de las tarjetas
      (para no competir con el lenguaje de íconos del resto del sitio).
- [x] **`/aviacion-logistica`** — entre `CyclesGrid` y `AuthorityBand`, con
      `finanzas.jpg` (pantallas financieras). Copy ("Cada ciclo, bajo
      control" / O2C, P2P, R2R) reutiliza los términos ya establecidos en
      `CyclesGrid`, sin agregar datos nuevos.
- [x] **`/soluciones-pymes`** — entre `PainCards` y el `ServiceGrid` de "Lo
      que resolvemos", con `numeros.jpg` (revisando planillas). Copy ("Tus
      números, por fin ordenados") reutiliza la promesa central de la
      página (título del Hero) y el pain point "Falta de indicadores" ya
      existente, sin agregar datos nuevos.

Quedan sin usar: `panaderia.jpg` (PyMEs) y la foto de equipo real de
`/nosotros`, todavía pendiente (ver Etapa 11).

## Etapa 11 (Hero real de Servicios y Metodología)

### ✅ Resuelto: fotografía de Servicios y Metodología

- [x] **`public/images/general/servicios-equipo.jpg`** — usada en el Hero
      de `/servicios`. De un lote de 6 fotos de Pexels, se descartaron 4:
      dos con maquetas de "reporte financiero" falsas y marca de tercero
      (`CFI`) visible, una con carteles armados tipo "ANALYSIS/TRENDS"
      pegados en la mesa (muy artificial), y una con una composición 3
      contra 1 que se leía más a entrevista/panel que a reunión de equipo.
- [x] **`public/images/general/metodologia-equipo.jpg`** — usada en el Hero
      de `/metodologia`. Mismo lote, elegida por mostrar al equipo
      revisando gráficos/planillas juntos — encaja con la idea de método y
      proceso.

Ambas con el mismo tratamiento duotono navy del resto del sitio (spec
sección 3).

### ✅ Resuelto: foto real de equipo para `/nosotros` (ver Etapa 13)

## Etapa 9 (Copy de lanzamiento para testimonios/casos)

DGV recién está lanzando la consultora: no hay testimonios ni casos reales
todavía, y no los va a haber hasta tener los primeros clientes. Eso **no es
un pendiente que bloquee el sitio** — es simplemente el estado actual del
negocio. Lo único que hacía falta corregir era el texto: los 3 módulos
reservados (`CommitmentBlock` en Inicio/Casos, `SocialProofReserved` en
PyMEs/Aviación, y la página `/casos`) mostraban el marcador
`[[PENDIENTE: ...]]` con corchetes — una convención de uso interno para
señalar huecos *durante la construcción*, no copy pensado para un visitante
real de un sitio ya lanzado.

### ✅ Resuelto: copy honesto para un sitio recién lanzado

- [x] **`CommitmentBlock.astro`** — el recuadro reservado ahora dice:
      *"Estamos recién lanzando DGV Business Consulting, así que todavía no
      tenemos casos para mostrar. A medida que sumemos los primeros
      clientes, vas a encontrar acá sus resultados reales, con su
      autorización."*
- [x] **`SocialProofReserved.astro`** (usado en `/soluciones-pymes` y
      `/aviacion-logistica`) — mismo criterio, con el detalle de la
      vertical (ej. "testimonios y casos reales de PyMEs").
- [x] **`/casos`** — el recuadro interno pasa de
      `[[PENDIENTE: casos y resultados reales]]` a *"Sé parte de los
      primeros casos"* + texto explicando que se publican en cuanto haya
      proyectos autorizados. El resto de la página (el H1 "Esta sección se
      está construyendo" y su bajada) ya estaba bien redactado, no se tocó.

Sigue sin haber testimonios ni casos ficticios en ningún lado — nada de
esto inventa contenido, solo reemplaza el marcador de desarrollo por una
frase terminada. Se resuelve solo, sin ninguna acción de tu parte, en
cuanto tengas el primer cliente que autorice publicar su caso.

## Etapa 8 (GA4 y mini-FAQ de Contacto)

### ✅ Resuelto: GA4 activo

- [x] **Measurement ID de GA4** (`G-X46GF8BR3M`) cargado en
      `siteConfig.ga4MeasurementId`. El loader de `gtag.js` y los eventos de
      conversión (`form_submit`, `whatsapp_click`, `calendly_click`) quedan
      activos. Verificado en navegador: `window.dataLayer` recibe los
      eventos y `window.gtag` queda definido correctamente.

### ✅ Resuelto: respuestas reales del mini-FAQ

- [x] **¿Cómo cobran los servicios?** — "El diagnóstico inicial tiene un
      valor cerrado, así sabés el costo antes de arrancar. A partir de ahí,
      según el alcance de la implementación, trabajamos por proyecto o con
      un abono mensual." (modelo mixto, consistente con la estructura de 4
      etapas ya publicada en `/metodologia`: diagnóstico acotado con precio
      cerrado, implementación más larga con abono o por proyecto).
- [x] **¿Cuánto dura un proyecto típico?** — reutiliza las duraciones reales
      ya cargadas en Etapa 6 (2-3 semanas de diagnóstico, 3-6 meses de
      implementación y seguimiento).
- [x] **¿Trabajan de forma remota o presencial?** — "Somos presenciales en
      Buenos Aires, pero la modalidad se adapta a cada proyecto: con
      empresas del interior del país trabajamos de forma remota,
      coordinando encuentros presenciales puntuales cuando el proyecto lo
      requiere. Y en Buenos Aires también trabajamos de forma remota cuando
      la presencialidad no es necesaria."

Con las 3 respuestas reales, se agregó también el `FAQSchema.astro`
(FAQPage de Schema.org) en `/contacto`, que se había dejado afuera a
propósito en la Etapa 4 mientras las respuestas eran `[[PENDIENTE]]`.

## Etapa 7 (LinkedIn, dominio, Calendly)

### ✅ Resuelto: dominio, LinkedIn y agenda (Calendly)

- [x] **Dominio confirmado**: `dgvbusiness.com`. Ya lo tenía bien
      configurado `astro.config.mjs` desde el arranque del proyecto.
- [x] **LinkedIn**: `siteConfig.linkedInUrl` cargado con la página real de
      empresa. Aparece en el footer (antes no estaba armado pese a lo que
      decía el comentario del código) y en el `sameAs` del Schema.org.
- [x] **Calendly**: `siteConfig.calendlyUrl` cargado con el link real
      (`calendly.com/daniel-v-dgvbusiness/30min`). En `/contacto` reemplaza
      el bloque reservado por un botón real "Agendar en Calendly", que
      complementa al formulario sin reemplazarlo (spec 7.2). Se agregó
      también el evento de tracking `calendly_click` en
      `src/scripts/analytics.ts` (mismo criterio que `whatsapp_click`: no
      hace nada hasta que haya Measurement ID de GA4).

Nota sobre el dominio: `dgvbusiness.com` ya está registrado (Squarespace
Domains) y hoy muestra una página placeholder de Squarespace ("Próximamente").
El sitio construido acá todavía no está desplegado en ningún hosting — quedó
pausado a pedido del cliente hasta terminar el resto de contenido pendiente.
Cuando se retome: desplegar en Vercel desde la rama
`claude/mcp-21st-dev-connection-5745jj` (el repo no tiene una rama `main`
con el sitio) y apuntar el DNS de Squarespace ahí.

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

- [x] **Measurement ID de GA4** — cargado en `siteConfig.ga4MeasurementId`
      (`G-X46GF8BR3M`). El loader de `gtag.js` y los eventos de conversión
      (`form_submit`, `whatsapp_click`, `calendly_click`) ya están activos.
      Verificado: `window.dataLayer` recibe los eventos y `window.gtag`
      queda definido correctamente.
- [x] Evento de click en agenda (Calendly) — cableado en
      `src/scripts/analytics.ts` (`calendly_click` en cualquier link a
      `calendly.com`). Igual que el resto de los eventos, no hace nada
      hasta que haya Measurement ID de GA4.

### ✅ Resuelto: FAQPage (Schema.org)

- [x] Con las 3 respuestas reales del mini-FAQ cargadas (ver Etapa 8), se
      agregó `FAQSchema.astro` (`/contacto`) — el tipo `FAQPage` que la spec
      pedía en sección 9.1 y que se había dejado afuera a propósito mientras
      las respuestas eran `[[PENDIENTE]]`.

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
- [x] **`public/images/pymes/numeros.jpg`** — resuelto en Etapa 10: usada en
      el `ImageBand` de `/soluciones-pymes` (entre El diagnóstico y Lo que
      resolvemos).
- [ ] **`public/images/pymes/panaderia.jpg`** — procesada y disponible, sin
      usar todavía (no hay un segundo slot de apoyo armado en la página).

### ✅ Resuelto: fotografía de aviación/logística

- [x] **`public/images/aviacion/hero-avion.jpg`** (avión despegando) — usada
      como `poster` del video y fallback mobile del Hero de Inicio.
- [x] **`public/images/aviacion/terminal.jpg`** (aeropuerto/manga de
      embarque) — usada como imagen del Hero de `/aviacion-logistica`.
- [x] **`public/images/aviacion/carga.jpg`** (carga aérea) — usada en la
      tarjeta "Industria Aérea & Logística" de `RouteSelector` (Inicio).
- [x] **`public/images/aviacion/finanzas.jpg`** (pantallas financieras) —
      resuelto en Etapa 10: usada en el `ImageBand` de
      `/aviacion-logistica` (entre CyclesGrid y AuthorityBand).

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

- [x] **URL de LinkedIn de DGV** — cargada en `siteConfig.linkedInUrl`
      (`linkedin.com/company/dgv-business-consulting`). Aparece en el
      footer y en el `sameAs` del Schema.org (`OrganizationSchema.astro`).
- [x] **URL de agenda (Calendly u otro)** — cargada en
      `siteConfig.calendlyUrl`. Ver Etapa 7 para el detalle de dónde quedó
      cableada.
- [x] **Dominio del sitio** — confirmado por el cliente: `dgvbusiness.com`.
      No hizo falta tocar nada más allá del comentario en
      `astro.config.mjs`: ya estaba configurado con ese dominio desde el
      arranque del proyecto.

### No bloqueante: testimonios / casos de éxito

- [~] **Testimonios / casos de éxito** — el `CommitmentBlock` de Inicio
      incluye un módulo reservado. **No bloquea el lanzamiento**: DGV recién
      está arrancando, así que no hay clientes que autoricen casos todavía
      (spec 6.7: "No publicar casos ficticios" — no hay nada que inventar
      acá, es un hecho de la etapa actual del negocio, no un dato faltante).
      En Etapa 9 se reemplazó el copy `[[PENDIENTE]]` (de uso interno,
      pensado para señalar huecos durante la construcción) por texto
      honesto y terminado para un sitio ya lanzado. Se completa solo,
      naturalmente, cuando haya primeros clientes que autoricen publicar su
      caso — no requiere ninguna acción de tu parte por ahora.

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

### No bloqueante: prueba social por vertical

- [~] **Prueba social PyME** (`/soluciones-pymes`, spec 6.2.7) y **prueba
      social Aviación** (`/aviacion-logistica`, spec 6.3.9) — mismo caso que
      los testimonios de Inicio (ver Etapa 1): no bloquea el lanzamiento, se
      completa solo cuando haya clientes que autoricen su caso. Copy
      actualizado en Etapa 9.

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
- [x] **Respuestas del mini-FAQ** en `/contacto` — resuelto en Etapa 8, con
      contenido real confirmado por el cliente.
- [x] **Historia y valores de la empresa** en `/nosotros` — resuelto en
      Etapa 6, con contenido real del cliente.
- [~] **Página `/casos`** — no bloqueante (spec sección 10, paso 7). Copy
      actualizado en Etapa 9; se puebla con casos reales cuando existan y
      estén autorizados.

### Datos de contacto y enlaces

- [x] **Link de agenda (Calendly)** en `/contacto` — resuelto en Etapa 7.

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
