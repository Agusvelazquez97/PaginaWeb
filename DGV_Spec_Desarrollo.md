# DGV Business Consulting — Especificación funcional para desarrollo web

**Documento de construcción. Autocontenido.** Todo lo necesario para construir el sitio sin volver a las presentaciones ni a documentos anteriores. Pensado para pasarse a Claude Code y desarrollar de a bloques.

> **Cómo usar este documento.** Construir en este orden: (1) leer secciones 1-4 completas antes de escribir código; (2) montar la base (stack, tokens, componentes) de la sección 3-4; (3) construir página por página con la sección 6, empezando por Inicio; (4) resolver formulario e integraciones con la sección 7; (5) SEO y cierre con las secciones 8-9. Todo lo marcado **[FALTA]** es contenido que el cliente debe entregar (fotos, casos, datos); usar un placeholder evidente y no inventar datos.

---

## 1. Resumen del proyecto

- **Cliente:** DGV Business Consulting — consultora argentina de finanzas, procesos y transformación organizacional.
- **Dos líneas de negocio:** (A) PyMEs; (B) Aviación & Logística.
- **Objetivo del sitio:** generar reuniones comerciales ("diagnóstico / conversación sin cargo") de ambos públicos, transmitiendo especialización y credibilidad.
- **Públicos:** dueños/gerentes de PyME (español, mayoría mobile) y CFOs/controllers del sector aéreo-logístico (español; inglés deseable a futuro).
- **Tono:** claro, seguro, concreto, sin jerga vacía. Cálido y pedagógico en la ruta PyME; técnico y ejecutivo en la ruta Aviación.
- **KPI del sitio:** tasa de contactos calificados (envíos de formulario + clicks a WhatsApp + reservas de agenda).
- **Modelo de arquitectura:** home-puente que segmenta rápido + dos rutas verticales completas + páginas de soporte compartidas.

## 2. Stack recomendado

- **Framework:** Astro (ideal por ser mayormente estático, SEO y velocidad) o Next.js si se prefiere React. Sitio estático desplegable en Vercel o Netlify.
- **Estilos:** Tailwind CSS con los tokens de la sección 3.
- **Contenido/blog (fase 2):** MDX o colección de contenido del framework.
- **Formulario:** servicio externo (Formspree / Web3Forms) — ver sección 7. Un sitio estático no procesa formularios por sí mismo.
- **Agenda:** enlace a Calendly (u otro). WhatsApp: enlace `wa.me`.
- **Analítica:** GA4 con eventos de conversión.
- **Hosting:** Vercel o Netlify (gratis o casi gratis para este volumen).

## 3. Design tokens

Paleta extraída de las presentaciones finales (es la identidad ya existente; respetarla).

```css
/* ---- Colores ---- */
--navy-900: #050D1C;   /* fondos de impacto, cierre */
--navy-800: #071B3E;
--navy-700: #0D2461;   /* color de marca / autoridad, hero */
--blue-700: #1755A8;   /* hover, secundarios, chips */
--blue-500: #3B82F6;   /* PRIMARIO de acción: botones, links, acentos */
--blue-200: #C5D8F2;
--blue-100: #DDE3F0;
--blue-50:  #EEF4FF;   /* fondos suaves de tarjeta */
--bg-tint:  #F8FAFF;   /* fondo claro alterno */
--slate-600:#334155;   /* texto de cuerpo */
--slate-500:#475569;
--slate-400:#64748B;   /* texto secundario */
--white:    #FFFFFF;
--success:  #22C55E;   /* solo métricas positivas, con moderación */

/* ---- Tipografía ---- */
--font-heading: "Sora", "Manrope" o "Plus Jakarta Sans", sans-serif;
--font-body: "Inter", sans-serif;
/* Escala: 48 / 36 / 28 / 22 / 18 / 16 / 14 */

/* ---- Radios y sombras ---- */
--radius-card: 12px;
--radius-btn: 8px;
--shadow-card: 0 4px 16px rgba(5,13,28,.08);
```

**Reglas de estilo (prohibiciones explícitas):**
- Sin líneas de acento debajo de títulos, sin franjas/stripes decorativas de borde, sin degradados chillones, sin fondos crema/beige.
- Sin stock genérico cliché (manos estrechándose, gente de traje señalando gráficos).
- Alternar fondos: blanco → `--bg-tint` → navy, para dar ritmo. Navy reservado para hero, franjas de autoridad y cierre.
- Un único CTA primario por vista.
- Fotos de distintas fuentes se unifican con tratamiento duotono azul.

### 3.1 Referencia visual (dirección estética)

El cliente tomó como referencia de estilo el sitio de **FeedGuru** (feedguru.net, hecho en Framer). Elementos a emular —adaptados a la paleta navy de DGV y a un negocio de consultoría, no audiovisual:
- **Hero de video a pantalla completa**, con overlay oscuro y un único CTA grande y claro.
- **Secciones minimalistas sobre fondo oscuro**, con mucho espacio en blanco, tipografía grande y **un solo mensaje por sección**.
- **Proceso mostrado en pasos con imagen por paso** (en DGV son 4: Diagnóstico → Estrategia → Implementación → Seguimiento).
- **Grid de servicios** tipo tarjetas con imagen.
- **Animaciones sutiles al hacer scroll** (fade/slide-in), sin recargar.
- FAQ en acordeón y blog al pie.

**Diferencia crítica a respetar:** FeedGuru vende video, por eso su home es una galería de clips y usa una franja de logos de "marcas que confían" (que fueron sus clientes reales). DGV **no** es un estudio audiovisual ni tiene esos casos: su prueba de valor es de credibilidad (trayectoria del equipo, método, KPIs), no una galería. Por eso se emula el *estilo y la estructura*, pero el bloque de "proyectos/casos" se reemplaza por el **CommitmentBlock** (6.7) y las credenciales van **en texto, no en logos** (8.1).

## 4. Componentes reutilizables

- **Header** — sticky, con nav + dropdown "Soluciones" + botón Contacto destacado. En mobile: hamburguesa + botón WhatsApp sticky.
- **Hero** — variantes: home (con video de fondo + imagen fallback) y vertical (imagen). Título, subtítulo, 2 CTAs, overlay navy.
- **RouteSelector** — dos tarjetas grandes (PyME / Aviación) con microcopy de dolor y enlace.
- **PainCards** — grid de tarjetas dolor + icono (para los diagnósticos).
- **ServiceCard / ServiceGrid** — icono, título, descripción, resultado.
- **MethodSteps** — 4 pasos (Diagnóstico → Estrategia → Implementación → Seguimiento), responsive.
- **PlansTable** — tabla comparativa de los 4 planes (PyME).
- **CyclesGrid** — O2C / P2P / R2R / SSC-GBS (Aviación).
- **StatsBand** — KPIs con contador animado (20+ / 3 / 100%).
- **AuthorityBand** — franja navy con credenciales **en texto** (nombres de las empresas, sin logos de terceros): "Nuestro equipo desarrolló su carrera en compañías como Air France/KLM, DHL Express Argentina y Western Union." Ver nota legal en 8.1.
- **DifferentiatorCards** — 3-4 diferenciadores con icono.
- **CommitmentBlock** — "Cómo trabajamos / Nuestro compromiso" (sustituto de casos hasta tener contenido).
- **TeamGrid / TeamMember** — foto, nombre, rol, formación, bio, LinkedIn.
- **TestimonialSlider / CaseCard** — módulos de prueba social (placeholder hasta tener contenido).
- **CTASection** — bloque de cierre repetible.
- **ContactForm** — formulario corto con validación + "qué pasa después".
- **FAQAccordion** — reutilizable en verticales y contacto.
- **Footer** — completo.
- **WhatsAppFloat** — botón flotante en mobile.
- **BlogList / BlogPost** — fase 2.

Los CSS y JS de cada componente van juntos por componente; sin librerías de estado del navegador (localStorage/sessionStorage no se usan).

---

## 5. Arquitectura y navegación

**Páginas y URLs:**

| Página | URL | Prioridad |
|---|---|---|
| Inicio | `/` | Imprescindible |
| Soluciones para PyMEs | `/soluciones-pymes` | Imprescindible |
| Aviación & Logística | `/aviacion-logistica` | Imprescindible |
| Servicios | `/servicios` | Recomendada |
| Metodología | `/metodologia` | Recomendada |
| Nosotros | `/nosotros` | Imprescindible |
| Casos de éxito | `/casos` | Al haber contenido |
| Contacto | `/contacto` | Imprescindible |
| Blog | `/blog` y `/blog/[slug]` | Fase 2 |

**Header:** `Inicio` · `Soluciones ▾` (PyMEs / Aviación & Logística) · `Servicios` · `Metodología` · `Nosotros` · `Casos` · **`Contacto` (botón relleno destacado)**. Blog se suma al lanzarse.

**Mobile:** hamburguesa con las mismas entradas + botón Contacto/WhatsApp sticky siempre visible.

**Footer (global):** logo + tagline ("Impulsamos tu negocio, potenciamos tu futuro") · navegación resumida · email `contacto@dgvbusiness.com` · WhatsApp `+54 9 11 6094-1379` · ubicación "Buenos Aires, Argentina" · LinkedIn **[FALTA URL]** · nota legal + año.

---

## 6. Contenido exacto por página

Leyenda de fuente: **[DECK]** = existe en las presentaciones, usar casi literal · **[FALTA]** = no existe, requiere dato real del cliente · **[DERIVADO]** = propuesto en la planificación, a validar.

### 6.1 Inicio — `/`

**Objetivo:** ubicar al visitante en <5s y bifurcarlo a su ruta o al contacto.

**Secciones en orden:**

1. **Hero** — video de fondo (aviación) + imagen fallback + overlay navy.
   - Titular [DERIVADO]: eje común (finanzas + procesos + tecnología, equipo integrado, resultados medibles).
   - Subtítulo [DERIVADO]: equipo que se integra en tu empresa y se mide por impacto, con trayectoria en compañías líderes globales.
   - Tagline de marca [DECK]: "Impulsamos tu negocio, potenciamos tu futuro."
   - CTA primario: "Agendá un diagnóstico sin cargo". CTA secundario: "Ver soluciones".

2. **RouteSelector** [DERIVADO] — dos tarjetas:
   - "Soy una PyME" → `/soluciones-pymes`. Microcopy: desorden, falta de métricas, decisiones intuitivas.
   - "Industria Aérea & Logística" → `/aviacion-logistica`. Microcopy: márgenes, FX/BCRA, procesos multi-país.

3. **AuthorityBand** [DECK] — credenciales en texto (sin logos): "Nuestro equipo desarrolló su carrera en compañías como Air France/KLM, DHL Express Argentina y Western Union." + "20+ años de experiencia". (Ver nota legal 8.1.)

4. **PainCards transversal** [DECK] — 4-5 dolores comunes con icono (versión condensada de los diagnósticos).

5. **MethodSteps** [DECK] — Diagnóstico → Estrategia → Implementación → Seguimiento (resumido).

6. **DifferentiatorCards** [DECK] — equipo integrado · especialización de industria · resultados medibles · finanzas+procesos+tecnología.

7. **CommitmentBlock** [DERIVADO] — "Cómo trabajamos / Nuestro compromiso" (sustituye casos; ver 6.7). Módulo de testimonios reservado [FALTA].

8. **Team teaser** [DECK] — foto/nombre de los 4 + enlace a `/nosotros`.

9. **CTASection** [DECK] — "Hablemos. Sin compromiso, sin burocracia — una conversación sobre cómo impulsar tu empresa." + formulario corto o botón a `/contacto`.

10. **Footer.**

### 6.2 Soluciones para PyMEs — `/soluciones-pymes`

**Objetivo:** convertir al dueño/gerente que se identifica con el desorden operativo.

1. **Hero vertical** [DERIVADO] — "Ordená, medí y hacé rentable tu PyME." + CTA diagnóstico.
2. **El diagnóstico (5 dolores)** [DECK] — con sus microtextos exactos:
   - Procesos desordenados — "Tareas duplicadas, flujos sin definir y sin estandarización."
   - Baja eficiencia operativa — "Recursos mal distribuidos que impactan en la rentabilidad."
   - Falta de indicadores — "Sin métricas claras para medir el desempeño del negocio."
   - Decisiones intuitivas — "Decisiones basadas en suposiciones, no en datos objetivos."
   - Entorno macro cambiante — "Nuevas regulaciones que exigen adaptación constante."
3. **Lo que resolvemos (5 áreas)** [DECK]:
   - Optimización de costos — "Identificamos gastos ocultos y oportunidades de ahorro sin afectar la calidad ni la productividad."
   - Mejora de procesos — "Rediseñamos flujos de trabajo para aumentar la eficiencia, reducir tiempos y minimizar errores."
   - Asesoramiento en financiamiento — "Acompañamos en la búsqueda de créditos, subsidios y alternativas de inversión adaptadas a cada realidad."
   - Resultados medibles — "Cada proyecto incluye indicadores claros de ahorro, eficiencia y retorno de inversión."
   - Enfoque personalizado — "Soluciones adaptadas al tamaño, sector y contexto de cada cliente."
4. **PlansTable** [DECK] — contenido exacto en 6.9.
5. **ServiceGrid** [DECK] — Asesoría Tributaria · Contabilidad & Tercerización · Gestión Laboral & RRHH · Finanzas & Reporting Ejecutivo · Planificación Estratégica · Expansión Nacional e Internacional (textos en 6.9).
6. **MethodSteps** [DECK].
7. **Prueba social PyME** [FALTA] — módulo reservado.
8. **CTASection** — "Agendá tu diagnóstico sin cargo."

### 6.3 Aviación & Logística — `/aviacion-logistica`

**Objetivo:** que un CFO/controller perciba especialización real y pida una conversación.

1. **Hero vertical** [DECK] — "De la turbulencia financiera a la performance sostenida." Subtítulo: "Convertimos la compleja realidad financiera del sector aéreo en ventaja competitiva." Verticales: Airlines · Cargo · Handling · Airport Operators. CTA ejecutivo.
2. **Los 5 problemas del sector** [DECK]:
   - 01 Márgenes bajo presión — "Combustible, tasas aeroportuarias y tipo de cambio erosionan la rentabilidad operativa."
   - 02 Complejidad regulatoria — "BCRA, IATA, ANAC y restricciones cambiarias exigen compliance permanente y actualizado."
   - 03 Pagos internacionales — "Proveedores globales y ciclos de cobro extendidos presionan el capital de trabajo."
   - 04 Procesos fragmentados — "Operaciones multi-país con sistemas desintegrados generan ineficiencia y riesgo."
   - 05 Visibilidad financiera nula — "Sin KPIs en tiempo real, las decisiones estratégicas se toman sin datos confiables."
3. **Propuesta + 4 pilares** [DECK]:
   - Consultoría Financiera — "CFO Advisory · Cash Flow · Capital de Trabajo · Forecast · Rentabilidad por unidad."
   - Optimización de Procesos — "Order to Cash · Procure to Pay · Record to Report · SSC / GBS · Control de Costos."
   - Compliance & Gobierno — "BCRA · Regulatorio Cambiario · Controles Internos · Riesgos · Gobierno Corporativo."
   - Tecnología Aplicada — "SAP · ERP · Business Intelligence · Automatización · Digitalización · Reporting Ejecutivo."
4. **CyclesGrid** [DECK] — contenido exacto en 6.9.
5. **AuthorityBand** [DECK] — Air France/KLM + DHL + 20+ años + 3 países.
6. **MethodSteps** [DECK] — versión con SAP/ERP.
7. **DifferentiatorCards** [DECK]:
   - Industria, no consultoría genérica — "Conocemos los ciclos financieros del sector aéreo, sus métricas clave y los desafíos regulatorios reales. No hay curva de aprendizaje."
   - Equipo dentro de tu organización — "Trabajamos integrados en tu estructura. Acceso directo a decisores clave y equipos operativos desde el día 1."
   - Impacto medible en cada etapa — "Cada proyecto incluye KPIs de impacto y reporting ejecutivo. Los resultados no son subjetivos: se miden, se comunican y se mejoran."
8. **StatsBand** [DECK] — 20+ años de experiencia financiera y operativa en el sector · 3 países de contraloría de operaciones financieras · 100% de atención desde el inicio de cada proyecto.
9. **Prueba social del sector** [FALTA] — módulo reservado.
10. **CTASection** — "Solicitá una conversación."

### 6.4 Servicios — `/servicios`

Intro [DERIVADO] + ServiceGrid agrupado por familia [DECK]: Finanzas & Contabilidad · Procesos & Operaciones · Estrategia & Crecimiento · Tecnología · Compliance & Gobierno · Laboral & RRHH. Cada servicio: para quién, qué incluye, qué resultado. Anclas por servicio (SEO + deep links). Enlaces cruzados a las dos verticales. CTA: "¿No sabés por dónde empezar? Agendá un diagnóstico."

### 6.5 Metodología — `/metodologia`

Hero "Un método claro, resultados medibles" [DECK] + los 4 pasos en detalle [DECK]:
- Diagnóstico — "Relevamiento de procesos y estructura financiera. Identificación de brechas y KPIs baseline."
- Estrategia — "Plan de acción y hoja de ruta priorizada. Alineación con alta dirección."
- Implementación — "Ejecución con acompañamiento DGV, SAP y ERP."
- Seguimiento — "Reporting ejecutivo y dashboards. KPIs de impacto y mejora continua."

Agregar: entregables por etapa [FALTA] · duración típica por etapa [FALTA] · herramientas (SAP, ERP, BI, dashboards) [DECK parcial] · cómo se mide el impacto [DECK]. CTA: "Empecemos por el diagnóstico."

### 6.6 Nosotros — `/nosotros`

Hero con propósito · **Historia** [FALTA] · **Misión** [DECK]: "Acompañar a las PyMEs en su proceso de transformación y crecimiento, brindando consultoría especializada en gestión de procesos, finanzas e innovación digital para mejorar su rentabilidad y competitividad." (ampliar para incluir aviación) · **Visión** [DECK]: "Ser la consultora de referencia para PyMEs en Argentina, reconocida por transformar organizaciones a través de metodologías prácticas, resultados medibles y un acompañamiento real y personalizado." (ampliar alcance) · **Valores** [FALTA] · **TeamGrid** [DECK, ver 6.9; fotos y LinkedIn FALTA] · "Por qué DGV" [DECK] · CTA a contacto.

### 6.7 CommitmentBlock — "Cómo trabajamos / Nuestro compromiso"

Sustituye la sección de casos hasta que existan casos reales. Contenido [DECK/DERIVADO]:
- El método de 4 pasos (previsibilidad).
- Compromiso de resultados medibles desde el día 1 (KPIs, reporting).
- Acceso directo al equipo, sin intermediarios ni burocracia.
- Trayectoria en multinacionales líderes (Air France/KLM, DHL, Western Union).

Dejar el módulo de testimonios/casos construido y "listo para poblar". No publicar casos ficticios.

### 6.8 Contacto — `/contacto`

Titular de cierre [DECK] · **ContactForm** (campos en 7.1) · canales directos [DECK]: WhatsApp `+54 9 11 6094-1379`, email `contacto@dgvbusiness.com`, "Buenos Aires, Argentina" · **agenda** (Calendly) [FALTA URL] · "qué pasa después" [FALTA SLA — sugerido: "Te respondemos en 24 h y coordinamos una llamada de 30 min sin cargo"] · Mini-FAQ [FALTA respuestas]: cómo cobran, duración, modalidad remoto/presencial.

### 6.9 Tablas de contenido exacto (listas para desarrollar)

**Planes (PyMEs) — [DECK]**

| | BASE | IMPULSO | EXPANSIÓN | PERSONALIZADO |
|---|---|---|---|---|
| **Para quién** | Ordenar el negocio. Ideal para micro y pequeñas empresas. | Gestionar el crecimiento. Todo lo de Base, más: | Transformar la empresa. Todo lo de Impulso, más: | Dirección estratégica externa a medida. Todo lo de Expansión, más: |
| **Incluye** | Contabilidad y cierres mensuales · Planificación tributaria básica · Organización administrativa y KPIs · Informe ejecutivo mensual | Flujo de caja y presupuesto anual · Análisis de costos y rentabilidad · Diagnóstico y optimización de procesos · Dashboard ejecutivo con KPIs | Transformación digital y automatización · Inteligencia artificial aplicada · Planeamiento estratégico y OKRs · Optimización comercial y RR.HH. | Solución 100% diseñada para tu empresa · CFO externo · Asesor de negocios · Gobierno corporativo y tecnología |

**Servicios PyMEs (grid) — [DECK]**
- Asesoría Tributaria — "Inscripciones, liquidaciones y declaraciones juradas. Cumplimiento y optimización impositiva."
- Contabilidad & Tercerización — "Gestión contable completa externalizada con informes de gestión mensuales."
- Gestión Laboral & RRHH — "Liquidación de sueldos, cargas sociales y cumplimiento de la normativa laboral."
- Finanzas & Reporting Ejecutivo — "Análisis financiero y dashboards periódicos para decisiones basadas en datos."
- Planificación Estratégica — "Acompañamiento en decisiones clave, expansión y posicionamiento competitivo."
- Expansión Nacional e Internacional — "Estrategia y estructuración para empresas que buscan crecer más allá de sus fronteras."

**Ciclos financieros (Aviación) — [DECK]**

| Ciclo | Alcance |
|---|---|
| **O2C — Order to Cash** | Gestión de clientes y crédito · Facturación y cobranzas · Conciliación de cuentas · Reportes de aging y DSO · Cobros internacionales y FX |
| **P2P — Procure to Pay** | Gestión de proveedores estratégicos · Aprobación y control de facturas · Pagos locales e internacionales · Regulaciones BCRA y envío de remesas a casa matriz · DPO y capital de trabajo |
| **R2R — Record to Report** | Cierre contable y conciliaciones · Reporting financiero ejecutivo · KPIs y dashboards de gestión · Presupuesto y forecast · Compliance y controles internos |
| **SSC / GBS** | Experiencia en modelos de Shared Services (SSC) y Global Business Services (GBS) a nivel internacional |

**Equipo — [DECK] (fotos y LinkedIn [FALTA])**

| Persona | Rol | Formación | Bio |
|---|---|---|---|
| Daniel G. Velázquez | Socio | Contador Público · UBA · Matriculado CPCECABA | Más de 20 años en aviación y logística (Air France / KLM, DHL Express Argentina) y 35+ de trayectoria total. Especialista en procesos financieros y eficiencia operativa. |
| Sonia B. Bóveda Paredes | Socia | Contadora Pública · UBA · Matriculada CPCECABA | Amplia trayectoria en multinacionales líderes como Western Union. Especialista en finanzas corporativas, contabilidad y gestión operativa. |
| Victoria Velázquez | Consultora Senior | Lic. Negocios Globales · UADE | Especialista en negocios internacionales, estrategia comercial y expansión regional. |
| Agustín Velázquez | Consultor Digital | Lic. Negocios Digitales · UCEMA | Especialista en transformación digital, digitalización de procesos, ERP, automatización y estrategia de negocios en entornos tecnológicos. |

---

## 7. Formulario, integraciones y video

### 7.1 Formulario de contacto

**Campos:** Nombre* · Empresa* · Email* · Teléfono · **Tipo** (select: PyME / Aviación-Logística / Otro)* · Mensaje.
**Procesamiento:** un sitio estático no envía mails por sí mismo. Usar **Formspree** o **Web3Forms** (endpoint gratuito): el form hace POST al servicio y este reenvía al email de DGV. Configurar el email destino y un mensaje de éxito.
**Validación:** cliente + servidor del servicio; anti-spam (honeypot o captcha invisible).
**Al enviar:** mensaje de éxito + expectativa ("Te respondemos en [SLA]"). Disparar evento GA4 de conversión.
**Nota técnica:** si se construye como componente React/Astro, no usar `<form>` con submit nativo hacia uno mismo; apuntar el `action` al endpoint del servicio, o manejar el POST con fetch.

### 7.2 WhatsApp y agenda

- **WhatsApp:** enlace `https://wa.me/5491160941379` con mensaje pre-cargado ("Hola, quiero coordinar una conversación con DGV"). Botón en header, en cierres y flotante en mobile.
- **Agenda:** enlace a Calendly u similar [FALTA URL] en Contacto y en los CTA principales. Complementa (no reemplaza) al formulario.

### 7.3 Video de fondo del hero (Inicio)

- **Video** en desktop, corto (8-12s), en loop, sin sonido, autoplay; MP4 + WebM; comprimido a **< 3 MB** (Handbrake o similar).
- **Imagen fallback** (un frame del propio video, WebP): visible mientras carga, en mobile, y si el autoplay se bloquea. `video: desktop; imagen: mobile + fallback`.
- **Overlay navy** encima para legibilidad del texto, con video o con imagen.
- Respetar `prefers-reduced-motion` (si está activo, mostrar imagen fija).
- Fuentes de video sugeridas: Pexels Video, Coverr, Mixkit. Búsquedas: "airplane takeoff slow motion", "air cargo loading", "airport runway", "aerial airport".

---

### 8.1 Nota legal — credenciales del equipo (importante)

Las trayectorias en Air France/KLM, DHL Express Argentina y Western Union se comunican **en texto, nombrando las empresas**, nunca reproduciendo sus logos. Razones:
- Nombrar una empresa para afirmar algo verdadero (el equipo trabajó ahí) es uso legítimo y estándar (igual que un CV o LinkedIn).
- Reproducir el logo de un tercero puede infringir su marca registrada aunque la afirmación sea cierta, y esas compañías tienen guías de marca estrictas.
- Encuadre correcto: **"Nuestro equipo desarrolló su carrera en…"**. Nunca "clientes" ni "confían en nosotros" (sería una afirmación falsa: no fueron clientes de DGV).

Regla para todo el sitio: no usar logos de terceros como prueba social hasta que existan clientes reales que lo autoricen.

## 8. Plan de imágenes (asignación por ubicación)

Leyenda: **[PROPIA]** = la produce el cliente (no stock) · **[STOCK]** = banco gratuito con duotono navy · **[ICON]** = set de íconos. (No se usan logos de terceros — ver 8.1.)

**Propias (prioridad máxima — el cliente las entrega):**
- Retratos de equipo: 4 individuales + 1 grupal [PROPIA] → `/nosotros`, team teaser en home. Reemplazan las iniciales en círculo.
- Contexto de trabajo real: 3-4 [PROPIA] → Metodología, CommitmentBlock, apoyo en verticales.

> **Decisión del cliente:** NO usar capturas de dashboards con datos ficticios. Coherente con la política de no mostrar nada que no exista. En su lugar, apoyar Metodología y la vertical de Aviación con **diagramas propios del método y de los ciclos** (representan el proceso real, no simulan resultados). Cuando exista un proyecto real, se podrá sumar una captura real (con permiso / datos anonimizados).

**Home:**
- Hero: 1 video [STOCK video] + 1 imagen fallback [STOCK] (aviación con overlay navy).
- RouteSelector: 2 imágenes [STOCK] — una PyME argentina, una aviación/logística; mismo duotono.
- AuthorityBand: **sin imágenes** — credenciales en texto (nombres de las empresas). No usar logos de terceros (ver nota legal 8.1).

**Vertical PyMEs:** 3-4 imágenes [STOCK/PROPIA] — hero (PyME argentina real) + apoyo (revisar números, comercio/taller local). Registro cercano y local.

**Vertical Aviación:** 4-5 imágenes [STOCK] — hero (avión/aeropuerto duotono) + apoyo (carga, torre/aeropuerto, pantallas financieras). Registro premium/técnico.

**Íconos:** ~25-30 [ICON] — set único, lineal, un solo grosor. **Lucide** (recomendado) o Phosphor. Para dolores, servicios, método y diferenciales.

**Logos:** solo el logo propio de DGV en vectorial (SVG). NO se usan logos de terceros (Air France/KLM, DHL, Western Union) — esas credenciales van en texto.
**Bancos:** Unsplash y Pexels (stock); lucide.dev (íconos). Búsquedas en inglés rinden más. Formato WebP, horizontal, ≥1920px de ancho, comprimidas.

**Total aproximado:** ~14-18 fotos (de las cuales 7-9 propias: equipo + contexto) + 1 video + logo SVG propio + set de íconos.

---

## 9. SEO técnico y checklist de lanzamiento

### 9.1 SEO — checklist
- [ ] Un H1 por página; jerarquía H1→H2→H3 semántica.
- [ ] Title + meta description por página (borradores abajo).
- [ ] URLs limpias (sección 5).
- [ ] Schema.org: Organization, ProfessionalService, Person (equipo), FAQPage, Article (blog), BreadcrumbList.
- [ ] sitemap.xml, robots.txt, canonical.
- [ ] Open Graph + Twitter Cards (imagen de marca) para compartir en LinkedIn/WhatsApp.
- [ ] Imágenes WebP + lazy-load + alt descriptivos.
- [ ] Core Web Vitals: buen LCP (cuidado con el peso del video), CLS estable.
- [ ] hreflang si a futuro se hace versión EN de aviación.
- [ ] GA4 + eventos de conversión (envío form, click WhatsApp, click agenda).

**Titles (borradores):**
- Inicio: `DGV Business Consulting | Consultoría financiera y de gestión`
- PyMEs: `Consultoría para PyMEs en Argentina | Procesos, finanzas y rentabilidad — DGV`
- Aviación: `Consultoría financiera para aviación y logística | O2C, P2P, compliance BCRA — DGV`
- Nosotros: `Quiénes somos | Equipo con trayectoria en Air France/KLM y DHL — DGV`
- Contacto: `Contacto | Agendá un diagnóstico sin cargo — DGV Business Consulting`

**Palabras clave:** consultoría para PyMEs Argentina · CFO externo · optimización de procesos · tercerización contable · reducción de costos · transformación digital PyMEs · consultoría financiera aviación · Order to Cash / Procure to Pay · compliance BCRA aerolíneas · SAP finanzas aviación.

### 9.2 Checklist de lanzamiento (go-live)

**Bloqueantes:**
- [ ] Datos de contacto reales en todo el sitio (ya definidos: WhatsApp, email, ubicación).
- [ ] Bios del equipo (ya definidas, sección 6.9).
- [ ] Misión/visión/valores unificados (valores [FALTA]).
- [ ] Logo vectorial (SVG) en todas sus variantes [FALTA].
- [ ] Formulario conectado y probado (llega el mail).
- [ ] Video comprimido < 3 MB + imagen fallback.

**Muy recomendados antes de lanzar:**
- [ ] Fotos reales del equipo [FALTA].
- [ ] 1-3 testimonios reales (aunque anonimizados) [FALTA].
- [ ] Entregables y duración por etapa/plan [FALTA].
- [ ] URL de agenda (Calendly) y de LinkedIn [FALTA].

**Fase 2:**
- [ ] Blog con 3-5 artículos.
- [ ] Versión EN de aviación.
- [ ] Lead magnet (checklist/guía).
- [ ] Casos de éxito reales.

### 9.3 Instrucciones para el desarrollo (para Claude Code)
1. **No inventar contenido.** Donde diga [FALTA], usar placeholder explícito (ej. `[[PENDIENTE: foto equipo]]`) y listarlo en un archivo de pendientes; nunca datos falsos.
2. **Respetar design tokens y prohibiciones de estilo** (sección 3).
3. **Mobile-first** y accesible (contraste, focus visible, `prefers-reduced-motion`, tamaños táctiles ≥44px).
4. **Reutilizar componentes** (sección 4); el sitio es muy modular.
5. **Performance y SEO desde el inicio** (sección 9.1), no como parche final.
6. **Dos registros de tono:** cálido en `/soluciones-pymes`, ejecutivo en `/aviacion-logistica`.
7. **Un CTA primario por vista**, siempre hacia "diagnóstico/conversación sin cargo".
8. **Módulos de prueba social construidos aunque vacíos**, para poblarlos apenas exista contenido.
9. **Construir de a bloques:** primero base (tokens + componentes), luego Inicio, luego las dos verticales, luego el resto.

---

## 10. Orden de construcción sugerido

1. Setup del proyecto (framework, Tailwind, tokens, fuentes).
2. Componentes base (Header, Footer, Hero, CTASection, botones, tarjetas).
3. **Inicio** completa (con video hero + fallback).
4. **Soluciones para PyMEs** y **Aviación & Logística**.
5. **Nosotros**, **Servicios**, **Metodología**.
6. **Contacto** + formulario conectado + WhatsApp + agenda.
7. **Casos** (plantilla, sin publicar hasta tener contenido).
8. SEO técnico, analítica, optimización de performance.
9. Fase 2: Blog, lead magnet, versión EN.

**Lo que depende del cliente antes/durante:** fotos del equipo, testimonios/casos, logo vectorial propio (SVG), valores, entregables y plazos por etapa, URLs de agenda y LinkedIn, y las imágenes de stock elegidas (el video del hero ya está resuelto). El sitio puede construirse con placeholders y poblarse a medida que llega este material.
