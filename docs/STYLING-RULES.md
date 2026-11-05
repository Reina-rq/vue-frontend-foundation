# Reglas de estilos

## Clases

1. **Primero se busca lo que ya existe.** Antes de escribir CSS, revisa el catálogo (`npm run dev`) y [DESIGN-SYSTEM.md](DESIGN-SYSTEM.md). Casi todo se compone con grid + utilidades + componentes.
2. **Nombres genéricos, en kebab-case**, por componente o patrón: `.btn-primary`, `.form-control`, `.section-title`. Nunca prefijos de un dominio o pantalla (`.productos-*`, `.pantalla-x-*`).
3. **Modificadores** con sufijo (`.btn-sm`, `.grid-auto-lg`) o con doble guion para variantes de un patrón (`.timeline-item--danger`, `.calendar-event--success`). Los estados se escriben como clase aparte: `.on`, `.show`, `.active`, `.is-invalid`, `.is-today`.
4. **No hay CSS por pantalla.** Si un patrón se repite en dos sitios, se crea como componente global en `src/styles/components/` y se documenta en el catálogo.

## Variables CSS

- **Colores siempre por variable:** `var(--color-primary)` o `var(--brand-teal)`. Nunca hex directos en los parciales (`themes/` es el único sitio con hex).
- **En código nuevo, tokens semánticos** (`--color-text`, `--color-muted`, `--color-surface`, `--color-border`). Así el modo oscuro funciona sin reglas extra.
- **Texto sobre el color primario:** `var(--color-on-primary)`.
- **Radios y sombras:** `--radius-*` y `--shadow-*`.
- **Fuentes:** no se declara `font-family` en componentes; se heredan `--font-family-base` y `--font-family-mono`.

## SCSS

- **Un parcial por componente** (`_nombre.scss`), registrado en `main.scss` en su grupo.
- **Lo que no emite CSS va en `abstracts/`** (variables, funciones, mixins). Se inyecta en cada `<style lang="scss">` mediante `additionalData`, así que no hay que importarlo.
- **Breakpoints con el mixin:** `@include bp(md) { … }`.
- **Sin `@extend`.**
- **Selectores cortos.** Se evita anidar más de 2–3 niveles y se evita `!important` (solo en `_responsive.scss` para anular anchos fijos).
- **Reglas de oscuro:** si algo necesita una regla en oscuro, primero se intenta resolver con tokens. Si no se puede, se añade `body.dark .clase { … }` junto al componente o en `themes/_dark.scss`.

## Estilos inline

- ❌ **Prohibido `style="…"` estático en el markup.** Cada estilo va a una clase global.
- ✅ **`:style` solo para valores que vienen de datos**: un color elegido por el usuario o un porcentaje calculado.

```vue
<!-- ❌ -->
<div style="margin-top: 12px; color: #6b7280">…</div>

<!-- ✅ -->
<div class="mt-12 text-muted">…</div>
<div class="progress-bar" :style="{ width: `${avance}%` }" />
```

## Markup y componentes Vue

- **El markup va en `<template>`.** Nunca HTML como texto en `<script>`, ni para documentación (las demos del catálogo usan `?raw`).
- **`<style scoped>` solo para detalles** internos de un componente que no tienen sentido como clase global. Lo reutilizable va al sistema.

## Responsive

- **Mobile-first:** la clase sin breakpoint aplica siempre y el sufijo aplica desde ese ancho (`col-12 col-md-6`). Ver [RESPONSIVE-DESIGN.md](RESPONSIVE-DESIGN.md).
- **Ocultar o mostrar** con `d-none d-md-block`, no con media queries por pantalla.

## Reutilizar utilidades

| En vez de… | Usa |
|---|---|
| `display:flex; gap:8px; align-items:center` | `d-flex gap-8 align-items-center` |
| `margin-left:auto` | `ms-auto` |
| `font-size:12px; color:gris` | `fs-12 text-muted` |
| tarjeta con borde y radio | `card` |
| rejilla de tarjetas o iconos | `grid-auto` / `grid-auto-sm` |
| ocultar en móvil | `d-none d-md-block` |
