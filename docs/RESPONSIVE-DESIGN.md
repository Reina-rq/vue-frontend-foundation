# Diseño responsive

## Breakpoints

Definidos en `abstracts/_breakpoints.scss`. Son **mobile-first**: cada uno aplica **desde** ese ancho.

| Nombre | Desde | Dispositivo típico |
|---|---|---|
| — | 0 | Móvil |
| `sm` | 576px | Móvil grande |
| `md` | 768px | Tablet |
| `lg` | 992px | Escritorio |
| `xl` | 1200px | Escritorio grande |
| `xxl` | 1400px | Muy grande |

En SCSS:

```scss
.mi-componente {
  flex-direction: column;
  @include bp(md) { flex-direction: row; }
}
```

## Contenedores

| Clase | Comportamiento |
|---|---|
| `.container` | Ancho máximo centrado: 540 · 720 · 960 · 1140 · 1320px (sm → xxl) |
| `.container-fluid` | 100% del ancho |
| `.container-{bp}` | 100% hasta ese breakpoint; desde ahí, ancho máximo |

## Grid de 12 columnas

```html
<div class="row g-3">
  <div class="col-12 col-md-6 col-lg-4">…</div>
  <div class="col-12 col-md-6 col-lg-4">…</div>
  <div class="col-12 col-lg-4">…</div>
</div>
```

| Clase | Efecto |
|---|---|
| `.row` | Fila flex con `flex-wrap` |
| `.col` | Reparte el espacio sobrante a partes iguales |
| `.col-auto` | Ancho según su contenido |
| `.col-1` … `.col-12` | Fracción de 12 en todos los anchos |
| `.col-{bp}-{n}` | Fracción de 12 desde ese breakpoint |
| `.offset-{n}` / `.offset-{bp}-{n}` | Desplaza `n` columnas |

### Gutters

Separación entre columnas, con variables `--gutter-x` y `--gutter-y`. El valor por defecto es `1rem` horizontal.

| Clase | Valor |
|---|---|
| `.g-0` … `.g-5` | 0 · 0.25 · 0.5 · 1 · 1.5 · 3 rem (horizontal y vertical) |
| `.gx-*` / `.gy-*` | solo horizontal / solo vertical |

### Rejilla automática

Cuando el número de columnas debe depender del ancho disponible (galerías, tarjetas, iconos):

```html
<div class="grid-auto">…</div>          <!-- columnas de al menos 150px -->
<div class="grid-auto grid-auto-sm">…</div>  <!-- 92px -->
<div class="grid-auto grid-auto-lg">…</div>  <!-- 220px -->
```

## Utilidades responsive

| Utilidad | Responsive |
|---|---|
| Display | `d-{bp}-none`, `d-{bp}-flex`, `d-{bp}-block`… |
| Float | `float-{bp}-start`, `float-{bp}-end`, `float-{bp}-none` |
| Columnas y offsets | `col-{bp}-*`, `offset-{bp}-*` |

```html
<div class="d-none d-md-block">Solo desde tablet</div>
<div class="d-md-none">Solo en móvil</div>
```

## Adaptaciones automáticas

En `base/_responsive.scss`, que se carga al final:

| Ancho | Adaptación |
|---|---|
| ≤ 768px | `.card` con padding de 12px |
| ≤ 768px | Las tablas hacen scroll horizontal en vez de desbordar |
| ≤ 768px | Los modales ocupan el 96% del ancho (anulan `sm/lg/xl`) |
| ≤ 768px (legacy) | El navbar de aplicación envuelve sus filas, las pestañas `.tabs` se deslizan, `.fbar` envuelve y `.kpis` pasa a 2 columnas |
| ≤ 480px (legacy) | `.kpis` pasa a 1 columna |

En los propios componentes:

| Componente | Adaptación |
|---|---|
| `.sidebar-layout` (≤ 900px) | El índice lateral deja de ser sticky y pasa arriba como lista horizontal |
| `.calendar` (≤ 576px) | Celdas compactas; los eventos se muestran como barras de color |
| `DateInput`, `SearchSelect`, dropdowns | El popup se abre hacia arriba si no cabe debajo |

## Patrones de adaptación

- **Apilar en móvil y repartir en escritorio:** `col-12 col-md-*`.
- **Barras de acciones:** `d-flex flex-wrap gap-8`; los botones envuelven en vez de desbordar.
- **Tablas anchas:** dentro de `.table-responsive` (o con la regla automática ≤ 768px).
- **Formularios:** etiqueta encima del campo (`.form-label` + `.form-control`), así no hay que reorganizar nada en móvil.
- **Elementos fijos** (sidebar, topbar): `position-sticky` en escritorio y flujo normal en móvil.
