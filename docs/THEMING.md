# Temas y marca

## Capas de color

```text
themes/_palette.scss   Marca (--brand-*) y escalas (--success-*, --danger-*, --gray-*…)   ← no cambia con el tema
        │
themes/_light.scss     Tokens semánticos en :root (--color-primary, --color-text…)        ← tema claro
themes/_dark.scss      Los mismos tokens redefinidos en body.dark                         ← tema oscuro
        │
parciales              Solo consumen var(--…)
```

## Variables CSS principales

| Token | Claro | Oscuro | Uso |
|---|---|---|---|
| `--color-primary` | `--brand-deep` `#005F73` | `--brand-teal` `#0A9396` | Botones, enlaces, foco |
| `--color-primary-hover` | `#004454` | `--brand-mint` | Hover del primario |
| `--color-on-primary` | blanco | `--brand-ink` | Texto sobre el primario |
| `--color-text` | `#111827` | `#e5e7eb` | Texto |
| `--color-muted` | `#6b7280` | `#9aa3af` | Texto secundario |
| `--color-background` / `--bg` | `#f4f6f8` | `#0f141a` | Fondo de página |
| `--color-surface` | blanco | `#161d25` | Tarjetas, modales, campos |
| `--color-border` / `--line` | `#e6e9ee` | `#2a323c` | Bordes |
| `--color-success` | `#076c71` | — | Éxito |
| `--color-danger` | `--brand-red` | `#e2786c` | Error (en oscuro, más claro para texto) |
| `--color-warning` / `--color-accent` | `--brand-amber` | — | Aviso / acento |
| `--color-info` | `--brand-deep` | — | Información |
| `--code-bg` / `--code-text` | `--brand-ink` / `#e5e7eb` | `#0b1015` | Bloques de código |

`--primary`, `--primary-2`, `--bg`, `--line`, `--accent` y `--panel` son los nombres originales del sistema. Siguen en uso en los parciales y equivalen a los semánticos.

## Tema claro y tema oscuro

- **Claro:** `:root`.
- **Oscuro:** clase `dark` en `<body>`. Redefine los tokens semánticos y añade unas pocas reglas `body.dark …` para componentes con tintes pastel (badges, alertas, fondos `-subtle`).
- **Selectores nativos:** en oscuro se aplica `color-scheme: dark`, así que calendarios y scrollbars nativos también se ven oscuros.

## Cambio de tema

```ts
import { useTheme } from '@/store/useTheme'

const { theme, isDark, init, toggle, set } = useTheme()
init()          // al arrancar: lee localStorage('theme') y aplica la clase
toggle()        // claro ↔ oscuro
set('dark')     // forzar
```

La elección se guarda en `localStorage` con la clave `theme`.

## Evitar el parpadeo en la carga inicial

`useTheme().init()` se ejecuta con el JavaScript de la app. Sin más, la página se pintaría en claro un instante y luego pasaría a oscuro. Para evitarlo, `index.html` aplica la clase **antes** de montar la app, en un script en línea justo después de abrir `<body>`:

```html
<body>
  <script>
    try { if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark') } catch (e) {}
  </script>
  <div id="app"></div>
</body>
```

Si cambias la clave en `useTheme.ts`, cámbiala también aquí.

## Personalizar la marca

1. **Cambia los 10 `--brand-*`** de `themes/_palette.scss`.
2. **Recalcula los tintes derivados**, anotados en cada línea (`--success-100`, `--danger-100`, `--info-*`, `--primary-50/200`, `--peach-100`). Son mezclas del color de marca con blanco.
3. **Revisa `--color-on-primary`.** Si el primario nuevo es claro, el texto encima debe ser oscuro (`var(--ink)`).
4. **Ajusta el primario del modo oscuro** en `_dark.scss` (`--primary`, `--primary-2`) para que tenga contraste sobre `#161d25`.

También se puede sobrescribir sin tocar la fundación, cargando después tu propio `:root { --brand-deep: …; }`.

## Tipografía

| Token | Por defecto |
|---|---|
| `--font-family-base` | `'Inter', ui-sans-serif, system-ui, …` |
| `--font-size-base` | `13px` |
| `--line-height-base` | `1.45` |
| `--font-family-mono` | `ui-monospace, SFMono-Regular, Menlo, Consolas, monospace` |

La fuente se carga en `index.html` (Google Fonts). Para cambiarla, cambia la carga y `--font-family-base`. En el catálogo puedes comparar fuentes y tamaños en vivo desde la barra superior.
