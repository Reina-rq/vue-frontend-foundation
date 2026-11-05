# Sistema de diseño

## Filosofía

- **Un solo sistema de clases globales**, con nombres genéricos (`.btn-primary`, `.form-control`, `.row`, `.col-md-6`, `.text-muted`…).
- **Todo por tokens:** los parciales no contienen colores escritos a mano; consumen variables CSS de `themes/`.
- **Se compone, no se reinventa:** una pantalla nueva se arma con grid + utilidades + componentes existentes.
- **Sin librerías visuales externas** y sin CSS por pantalla.

## Organización

```text
src/styles/
├── abstracts/   No emiten CSS: tokens SCSS ($space), mixins (flex, card-surface),
│                breakpoints (mixin bp) y banderas ($legacy). Se inyectan en cada <style lang="scss">.
├── themes/      _palette (marca y escalas) · _light (:root) · _dark (body.dark)
├── base/        _reset · _icon (.ic) · _tables · _print (.print-doc) · _code · _responsive
├── layouts/     _navbar (estructura de aplicación, legacy)
├── components/  Un parcial por componente
├── grid/        Contenedores, filas, columnas, gutters, offsets y .grid-auto
├── helpers/     ratio, stacks, vr, visually-hidden, stretched-link, text-truncate…
├── utilities/   Utilidades atómicas (display, flex, spacing, sizing, colores, tipografía…)
├── main.scss    Entrada completa
└── core.scss    Entrada sin patrones legacy
```

## Orden de importación

`main.scss` carga:

1. **Temas:** paleta → claro → oscuro.
2. **Base:** reset, icono, tablas, impresión, código.
3. **Layout** de aplicación.
4. **Componentes.**
5. **Grid.**
6. **Helpers.**
7. **Utilidades.**
8. **Responsive** (al final, para ganar a anchos fijos).

Las utilidades van después de los componentes, así que `class="card p-12"` aplica el `p-12`.

`core.scss` configura `$legacy: false` y carga `main.scss`: mismo orden, sin los bloques legacy.

## Tokens

| Tipo | Dónde | Ejemplos |
|---|---|---|
| Marca | `themes/_palette.scss` | `--brand-deep`, `--brand-teal`, `--brand-amber`, `--brand-red`… |
| Escalas | `themes/_palette.scss` | `--success-100/200/500/700`, `--danger-*`, `--warning-*`, `--info-*`, `--gray-*`, `--slate-*` |
| Semánticos | `themes/_light.scss` (y `_dark.scss`) | `--color-primary`, `--color-text`, `--color-muted`, `--color-surface`, `--color-border`, `--color-on-primary` |
| Forma | `themes/_light.scss` | `--radius-sm/md/lg`, `--shadow-sm/md/lg` |
| Tipografía | `themes/_light.scss` | `--font-family-base`, `--font-size-base`, `--line-height-base`, `--font-family-mono` |
| SCSS (no emiten CSS) | `abstracts/_tokens.scss` | `space(1..6)` → 4 · 8 · 12 · 16 · 24 · 32 px |

Regla: en código nuevo se usan los **semánticos** (`--color-*`). Las escalas y la marca se usan cuando se necesita un tono concreto.

## Temas

Claro en `:root`, oscuro en `body.dark`. Ver [THEMING.md](THEMING.md).

## Grid

12 columnas, mobile-first, con contenedores, gutters y offsets. Ver [RESPONSIVE-DESIGN.md](RESPONSIVE-DESIGN.md).

## Utilidades

| Grupo | Clases |
|---|---|
| Display | `d-none · d-flex · d-inline-flex · d-block · d-grid…` (+ `d-{bp}-*`) |
| Flex | `flex-column · flex-wrap · flex-1 · flex-fill · justify-content-* · align-items-* · align-self-*` |
| Spacing (rem) | `m-0..5 · p-0..5 · mt/mb/ms/me/mx/my-* · gap-0..5 · m*-auto` |
| Spacing (px) | `mt-6..22 · mb-6..18 · gap-6..24 · p-6..20 · pt-11 · pe-36` |
| Sizing | `w-25/50/75/100/auto · w-{px} · min-w-* · max-w-* · h-* · vh-100 · min-vh-100` |
| Texto | `text-start/center/end · text-nowrap · text-truncate · text-uppercase · fw-* · fs-1..6 · fs-10..30 · lh-*` |
| Color | `text-primary… text-muted · bg-primary… bg-soft · bg-*-subtle` |
| Bordes | `border · border-top/end/bottom/start · border-0 · border-{color} · rounded-0..3 · rounded-pill/circle` |
| Posición | `position-* · top-0 · bottom-0 · start-0 · end-0 · inset-0 · translate-middle` |
| Otros | `opacity-* · shadow(-sm/-lg/-none) · object-fit-* · overflow-* · z-* · visible/invisible · user-select-* · cursor-pointer` |
| Iconos | tamaño `icon-sm/md/lg/xl`, `icon-13..34`; color `icon-primary/muted/success/danger/warning/info` |
| Helpers | `ratio ratio-16x9 · vstack · hstack · vr · visually-hidden · stretched-link · icon-link · focus-ring · link-*` |

## Patrones visuales

| Patrón | Clases |
|---|---|
| Tarjeta | `.card` (+ `.card-header/-body/-footer/-title/-subtitle/-text`, `.card-flush`) |
| Encabezados de sección | `.section-block · .section-title · .section-lead · .section-subtitle` |
| Página con índice lateral | `.topbar · .sidebar-layout · .sidebar-layout-aside · .sidebar-layout-main · .sidebar-nav` |
| Bloque de código | `.code-block` (+ `.code-block-wrap`, `.code-block-copy`) |
| Rejilla automática | `.grid-auto` (`-sm` 92px · `-lg` 220px por columna) |
| Muestra de color | `.swatch · .swatch-color · .swatch-label` |
| Confirmación destructiva | `.confirm-banner · .confirm-body · .confirm-question · .confirm-note · .confirm-actions` |
| Línea de tiempo | `.timeline · .timeline-item(--success/--danger/--disabled)` |
| Calendario | `.calendar · .calendar-grid · .calendar-cell(.is-today/.is-selected/.is-muted) · .calendar-event--{tono}` |
| Documento imprimible | `.print-doc` (+ `.no-print` para ocultar al imprimir) |

## Formularios

- **Estructura:** `.form-label` + `.form-control` / `.form-select`, con `.form-text`, `.invalid-feedback` y `.is-invalid` / `.is-valid`.
- **Tamaños:** `.form-control-sm/-lg`, `.form-select-sm/-lg`.
- **Checks:** `.form-check`, `.form-check-input`, `.form-switch`.
- **Extras:** `.input-group` (+ `.input-group-text` y `.input-group-select`), `.form-floating`, `.form-range`.
- **Estados** (en `_form-controls.scss`): borde al pasar el ratón, anillo de foco de marca (`--input-focus-ring`) y anillo rojo si es inválido.
- **Select:** chevron propio. En Chrome y Edge 135 o superior la lista desplegable también tiene diseño (`appearance: base-select`); en el resto de navegadores la lista es la nativa.
- **Fechas:** usar `<DateInput>`, que tiene selector propio (`.datepicker`). El calendario de `<input type="date">` es del navegador y no admite diseño.

## Tablas

- **`<table>` sin clases** ya tiene el estilo base del sistema.
- **Variantes:** `.table`, `.table-sm`, `.table-bordered`, `.table-striped`, `.table-hover`, `.table-responsive` y filas `.table-primary/-success/-danger/-warning/-info`.
- **Cabeceras de color:** `.table-head-primary` y `.table-head-warning-soft`.
- **En móvil (≤ 768px)** las tablas hacen scroll horizontal.

## Componentes visuales globales

Alertas, badges, botones, breadcrumb, accordion, carousel, collapse, dropdowns, list group, modal (`.modal-bg` + `.modal`), offcanvas, pagination, placeholders, popover, progress, spinners, toasts y tooltips. Cada uno está en vivo en el catálogo (`npm run dev`), con su código.

## Legacy

Algunos parciales conservan patrones con nombres propios en vez de genéricos: navbar de aplicación, `.sec`, `.fbar`, `.kpi`, `.ledger`, `.totals`, `.tabs`/`.tab`, `.segbtn`, `.pager`/`.act`, `.toolbar`, `.cfg`, `.note`, `.tgl`, `.photo`, `.chip`, `.cat*`, `.view`/`.seg`/`.ph`/`.lk`.

Van envueltos en `@if $legacy { … }`. Se incluyen con `main.scss` y se excluyen con `core.scss`. Para proyectos nuevos se recomienda `core.scss`.
