# Guía de desarrollo

## TypeScript estricto

`tsconfig.app.json` activa `strict`, `noUnusedLocals`, `noUnusedParameters` y `noImplicitReturns`. `npm run build` ejecuta `vue-tsc -b` antes de compilar, así que **un error de tipos rompe el build**.

- Componentes con `<script setup lang="ts">`; props con `defineProps<{ … }>()` y eventos con `defineEmits<{ … }>()`.
- Literales con tipos nombrados: `type ModalSize = 'sm' | 'lg' | 'xl'`.
- Sin `any`. Si un dato llega sin tipo, se usa `unknown` y se valida o se convierte.
- Para objetos que se pasan como `Record<string, unknown>` (por ejemplo, las opciones de `SearchSelect`) se usa `type` en lugar de `interface`.

## SOLID y DRY

- **Una responsabilidad por archivo.** Ejemplos del catálogo: `DemoBlock` muestra la vista previa y el código; `DocSection`, el título y la introducción; `sfcSource.ts` contiene funciones puras.
- **Datos separados de la vista:** listas y navegación salen de registros tipados (ver `examples/catalog/registry.ts`), no se escriben repetidas en el template.
- **Componentes abiertos a extensión:** slots (`#option`, `#footer`, `#title`) y props, en lugar de copiar un componente para una variante.
- **DRY:** si un patrón visual aparece dos veces, va al sistema de estilos; si una lógica aparece dos veces, va a un composable o utilidad.

## Convenciones de código

- **Nombres con significado**, también en `v-for`, callbacks y `catch`: `for (const option of options)`, no `o`.
- **Imports con alias** (`@/`, `@app/`, `@styles/`), sin `../../../` entre capas.
- **El markup va en `<template>`**, nunca como texto en `<script>`.
- **Sin estilos inline estáticos** (ver [STYLING-RULES.md](STYLING-RULES.md)).
- **Comentarios que explican el porqué**, no el qué.
- **Antes de entregar:** `npm run build` sin errores y revisión del cambio en el catálogo, en claro y en oscuro.

## Composables singleton

El estado compartido vive en `src/store/` como composables cuyo `ref` se declara **fuera** de la función. Así todos los componentes comparten la misma instancia, sin Pinia:

```ts
// store/useTheme.ts (simplificado)
const theme = ref<Theme>('light')          // ← nivel de módulo: compartido

export function useTheme() {
  function toggle(): void { /* … */ }
  return { theme: computed(() => theme.value), toggle }
}
```

- Se expone el estado **de solo lectura** (`computed`) junto con funciones para cambiarlo.
- Solo se crea un composable global si el dato es **compartido**, necesita **sincronización global** o **persistencia**, o evita **trabajo repetido costoso**. Si no, basta con `Page → Service → API`.
- Composables incluidos: `useNotify` (notificaciones), `usePrintDoc` (documento a imprimir) y `useTheme` (tema).

## Servicios HTTP

> La fundación **no incluye** cliente HTTP. Este es el patrón recomendado, el que usaba la aplicación de origen.

- **Un único cliente Axios** (`services/httpClient.ts`). Toma `baseURL` y `timeout` de variables de entorno, inyecta el token en cada petición y **normaliza todos los errores** a una clase propia (`ApiError` con `status`, `message` y `data`).
- **Las variables de entorno se leen en un solo punto** (`app/config/env.ts`). Nadie más usa `import.meta.env`.
- **Un service por módulo** (`modules/<dominio>/services/*.service.ts`). Desenvuelve la respuesta y devuelve datos tipados. Los componentes nunca llaman a la API.
- **La UI muestra el mensaje real del backend:**

```ts
try {
  await productosService.guardar(form)
  notify.success('Guardado')
} catch (error) {
  notify.error('No se pudo guardar', (error as Error).message)
}
```

## Validación con Zod y Vee-Validate

> Tampoco forman parte de la fundación; son el patrón recomendado para formularios.

- **El esquema Zod es la fuente única de verdad**, y el tipo se deriva con `z.infer`.
- **La lógica del formulario vive en la page**, no en un composable por módulo.

```ts
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { z } from 'zod'

const schema = z.object({ email: z.string().email(), password: z.string().min(1) })
type LoginForm = z.infer<typeof schema>

const { handleSubmit, errors, defineField } = useForm<LoginForm>({ validationSchema: toTypedSchema(schema) })
```

Los errores se muestran con `.is-invalid` en el campo y `.invalid-feedback` debajo.

## Internacionalización

- **Todo texto visible pasa por i18n:** `$t('componentes.cancelar')` en templates y `useI18n().t(...)` en scripts.
- **Los componentes de la fundación** usan el namespace `componentes` (`src/app/i18n/locales/componentes/{es,en,fr,pt_BR,zh}.json`).
- **La instancia `getI18n`** (`src/app/i18n/index.ts`) es la que leen `dates.ts`, `numbers.ts` y los componentes. Para añadir tus textos, suma namespaces a `messages` o sustituye el archivo por tu instancia, manteniendo el export `getI18n` y el namespace `componentes`.
- **Fechas y números según el idioma activo:**
  - `formatDate`, `formatDateTime`, `formatNumber`, `formatInteger`, `formatMoney` y `parseLocalizedNumber`.
  - En templates: `$formatDate(…)`, `$formatNumber(…)`, disponibles tras `installDateGlobals(app)` e `installNumberGlobals(app)`.
  - Se usan solo para mostrar datos. Al backend se envían valores crudos (`yyyy-mm-dd`, números).

## Manejo de errores

- **Los errores HTTP** se normalizan en el cliente y llegan a la UI con un mensaje legible.
- **La page** captura el error, lo muestra (`notify.error` o un mensaje en pantalla) y deja la vista en un estado consistente (`loading = false`).
- **Lo que puede fallar en el navegador** (`localStorage`, portapapeles) se envuelve en `try/catch` y la app sigue funcionando sin ello (ver `useTheme`, `DemoBlock`).
- **Los formularios** no envían si la validación falla, y marcan el campo inválido.

## Mantenibilidad

- **Antes de crear un componente**, revisa el catálogo y [COMPONENTS.md](COMPONENTS.md).
- **Para promover un componente** de un módulo a global: muévelo a `src/components/`, quítale cualquier lógica de negocio (solo props y eventos), añádelo al barrel y crea su demo y su sección en el catálogo.
- **Para un patrón visual nuevo:** crea un parcial genérico en `src/styles/components/`, regístralo en `main.scss` y documéntalo en el catálogo.
- **Sin código muerto ni archivos duplicados.** Lo que no se usa se elimina, después de comprobar que nada depende de ello.
