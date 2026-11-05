# Dependencias

Versiones declaradas en `package.json` y versiones instaladas con las que se comprobó el build (`npm run build`: `vue-tsc` + Vite, sin errores).

## Producción

| Paquete | Rango declarado | Instalado | Para qué |
|---|---|---|---|
| `vue` | `^3.5.12` | 3.5.44 | Framework |
| `vue-i18n` | `^11.4.8` | 11.4.18 | Textos de los componentes y formateo de fechas y números según el idioma |

## Desarrollo

| Paquete | Rango declarado | Instalado | Para qué |
|---|---|---|---|
| `vite` | `^5.4.10` | 5.4.21 | Servidor de desarrollo y build |
| `@vitejs/plugin-vue` | `^5.1.4` | 5.2.4 | Compilación de SFC `.vue` |
| `sass` | `^1.80.4` | 1.107.1 | Compilación SCSS (API `modern-compiler`) |
| `typescript` | `^5.6.3` | 5.9.3 | Tipado estricto |
| `vue-tsc` | `^2.1.8` | 2.2.12 | Comprobación de tipos en `.vue` |
| `@types/node` | `^22.7.5` | 22.20.5 | Tipos de Node para `vite.config.ts` |

**Entorno:** Node.js `^18.0.0 || >=20.0.0` (requisito de Vite 5). Probado con Node 22.

## Opcionales (patrones recomendados, no incluidos)

No son dependencias de la fundación. Se añaden en el proyecto que las use:

| Paquete | Para qué | Ver |
|---|---|---|
| `vue-router` | Navegación por páginas y módulos | [ARCHITECTURE.md](ARCHITECTURE.md) |
| `axios` | Cliente HTTP centralizado | [DEVELOPMENT-GUIDELINES.md](DEVELOPMENT-GUIDELINES.md#servicios-http) |
| `vee-validate`, `@vee-validate/zod`, `zod` | Validación de formularios | [DEVELOPMENT-GUIDELINES.md](DEVELOPMENT-GUIDELINES.md#validación-con-zod-y-vee-validate) |

## Lo que necesitan los componentes

| Requisito | Lo usan | Lo aporta |
|---|---|---|
| Instancia i18n `getI18n` con el namespace `componentes` | Todos los que muestran texto, `DateInput`, `PhoneInput`, `ThousandsInput`, `PrintDoc`, `SearchSelect` | `src/app/i18n/index.ts` (o tu instancia) |
| `<IconSprite />` montado | `Icon` y todo componente con iconos | `App.vue` del proyecto |
| `<NotificationHost />` montado | `useNotify()` | `App.vue` |
| `<PrintDoc />` montado | `usePrintDoc()` | `App.vue` |
| Estilos del sistema cargados | Todos (usan clases globales) | `import '@styles/core.scss'` o `main.scss` |
| Alias `@/`, `@app/`, `@styles/` e inyección `additionalData` de `abstracts` | Imports de componentes y `<style lang="scss">` | `vite.config.ts` y `tsconfig.app.json` |
| Fuente tipográfica | `--font-family-base` (Inter por defecto) | `<link>` de Google Fonts en `index.html` (o carga local) |

## Compatibilidad de navegadores

| Función | Soporte | Si no hay soporte |
|---|---|---|
| `color-mix()` (anillos de foco, tintes) | Navegadores actuales | — |
| Lista del select con diseño (`appearance: base-select`) | Chrome y Edge 135 o superior | Lista nativa del navegador |
| Icono propio del selector de `<input type="date">` (`::-webkit-calendar-picker-indicator`) | Chromium y Safari | Icono nativo (Firefox) |
| Selector de fecha de `DateInput` | Todos (es propio) | — |
