# Componentes

Componentes globales de `src/components`. Se importan desde el barrel:

```ts
import { Modal, SearchSelect, DateInput } from '@/components'
```

Ninguno consume APIs ni conoce lógica de negocio. Los textos salen del namespace i18n `componentes` (ver [DEVELOPMENT-GUIDELINES.md](DEVELOPMENT-GUIDELINES.md#internacionalización)).

**Hosts que se montan una sola vez en la raíz** (`App.vue`): `IconSprite`, `NotificationHost` y `PrintDoc`.

---

## Icon

Icono SVG del sprite.

| Prop | Tipo | Por defecto |
|---|---|---|
| `name` | `string`: id del símbolo sin el prefijo `i-` | requerido |

- **Clases:** `.ic` (18px, trazo `currentColor`); tamaño con `icon-sm/md/lg/xl` o `icon-13..34`, color con `icon-*` o `text-*`.
- **Depende de:** `IconSprite` montado.

```vue
<Icon name="check" class="icon-lg icon-success" />
```

## IconSprite

Sprite con 93 símbolos (`<symbol id="i-…">`). No tiene props. Se monta una vez en la raíz.

## Button

| Prop | Tipo | Por defecto |
|---|---|---|
| `variant` | `ButtonVariant`: `primary` · `secondary` · `success` · `danger` · `warning` · `info` · `light` · `dark` · `link` · `outline-{primary…dark}` | `'primary'` |
| `size` | `'sm' \| 'lg'` | — |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` |
| `disabled` | `boolean` | `false` |

- **Slot:** por defecto (texto y/o `Icon`).
- **Clases:** `.btn .btn-{variant} .btn-{size}`.

```vue
<Button variant="success" size="sm"><Icon name="check" /> Guardar</Button>
```

## Card

| Prop | Tipo |
|---|---|
| `title` | `string` (opcional) |

- **Slots:** `#title` (título con contenido propio, p. ej. un icono) y por defecto.
- **Clases:** `.card`, `.card h3`.

```vue
<Card title="Resumen">Contenido</Card>
```

## Badge

| Prop | Tipo | Por defecto |
|---|---|---|
| `tone` | `'primary' \| 'secondary' \| 'success' \| 'danger' \| 'warning' \| 'info' \| 'light' \| 'dark'` | `'primary'` |
| `pill` | `boolean` | `false` |

- **Slot:** por defecto.
- **Clases:** `.badge .badge-{tone}` (+ `.rounded-pill`).

## Modal

| Prop | Tipo |
|---|---|
| `open` | `boolean` (con `v-model:open`) |
| `title` | `string` (opcional) |
| `size` | `'sm' \| 'lg' \| 'xl'` (opcional) |
| `compact` | `boolean`: campos y botones densos (`.modal.mc`) |
| `contentClass` | `string`: clases extra para la caja `.modal` |

- **Eventos:** `update:open`.
- **Slots:** por defecto y `#footer` (se pinta en `.mfoot`).
- **Comportamiento:** se teletransporta a `body` y se cierra al hacer clic en el fondo.
- **Clases:** `.modal-bg(.on) .modal(.sm/.lg/.xl/.mc) .mfoot`.

```vue
<Modal v-model:open="open" title="Editar" size="lg">
  …
  <template #footer><button class="btn btn-primary" @click="open = false">Guardar</button></template>
</Modal>
```

## AnularModal

Confirmación para anular un registro.

| Prop | Tipo |
|---|---|
| `open` | `boolean` (con `v-model:open`) |
| `num` | `string` (opcional): identificador que se muestra en la pregunta |

- **Eventos:** `update:open` y `confirm` (después de emitir `confirm` se cierra solo).
- **Clases:** `.modal.modal-confirm`, `.confirm-*`, `.btn-danger`.

## NotificationHost · `useNotify()`

Pila de notificaciones en la esquina superior derecha.

```ts
const notify = useNotify()
notify.success('Guardado', 'Mensaje opcional')   // también error · warning · info
notify.push('info', 'Título', 'Mensaje', 8000)    // duración en ms; 0 = no se cierra solo
```

- **`push`** devuelve el `id` de la notificación; `remove(id)` la cierra. La duración por defecto es de 4500 ms.
- **Clases:** `.toast-host`, `.toast`, `.toast--{tipo}`.

## PrintDoc · `usePrintDoc()`

Visor de impresión. Recibe **datos**, no HTML:

```ts
usePrintDoc().open({
  title: 'Documento',
  subtitle: 'Opcional',
  sections: [
    { heading: 'Datos', rows: [{ label: 'Nombre', value: 'Elemento A' }] },
    { heading: 'Detalle', table: { heads: ['Ítem', 'Total'], rows: [['1', '200,00']] } },
  ],
  total: { label: 'Total', value: '350,00' },
})
```

- **Al imprimir** se oculta todo salvo el documento.
- **Texto de marca:** sale de la clave i18n `componentes.marca`.
- **Clases:** `.print-doc` y `.no-print`.
- **Tipos:** `DocOptions`, `DocSection` y `DocKV`.

## SearchSelect

Select con buscador, cuyas opciones se pintan con slots.

| Prop | Tipo | Por defecto |
|---|---|---|
| `modelValue` | `number \| string \| null` | requerido |
| `options` | `Record<string, unknown>[]` | requerido |
| `valueKey` | `string` | `'id'` |
| `labelKey` | `string` | `'name'` |
| `searchKeys` | `string[]`: claves adicionales para filtrar | `[]` |
| `placeholder` / `searchPlaceholder` | `string` | textos i18n |
| `disabled` | `boolean` | `false` |

- **Eventos:** `update:modelValue`. Con "Quitar selección" emite `null`.
- **Slots:** `#option="{ option }"` y `#selected="{ option }"`.
- **Comportamiento:** el popup se teletransporta a `body`, se abre hacia arriba si no cabe debajo y se cierra con un clic fuera.
- **Clases:** `.msel`, `.msel-field`, `.ss-pop`, `.ss-opt`.

> Para `options` usa `type` en lugar de `interface`: los tipos `interface` no son asignables a `Record<string, unknown>`.

## DateInput

Fecha escribible y selector propio.

| Prop | Tipo | Por defecto |
|---|---|---|
| `modelValue` | `string` en formato `yyyy-mm-dd` (o `''`) | requerido |
| `disabled` | `boolean` | `false` |
| `placeholder` | `string` | según el idioma (`dd/mm/aaaa`, `mm/dd/yyyy`…) |

- **Eventos:** `update:modelValue`.
- **Entrada de texto:** acepta texto en varios formatos (`dd/mm/aaaa`, `aaaa-mm-dd`, con `/ - .` o espacio). Si no es válido, marca el campo con `.is-invalid` y no cambia el modelo.
- **Selector:** navegación por meses, botones "Hoy" y "Borrar", y la semana empieza en lunes (domingo en inglés). Se cierra con un clic fuera o con Escape.
- **Clases:** `.form-control`, `.input-icon-end`, `.datepicker-*`.

## PhoneInput

| Prop | Tipo | Por defecto |
|---|---|---|
| `modelValue` | `string`: `"código número"`, p. ej. `"+591 70000000"` | requerido |
| `disabled` | `boolean` | `false` |
| `placeholder` | `string` | `componentes.numero` |

- **Eventos:** `update:modelValue`.
- **Códigos de país:** incluye 12 (Bolivia por defecto). Al recibir un valor separa el prefijo del número.
- **Clases:** `.input-group`, `.form-select.input-group-select`, `.form-control`.

## ThousandsInput

| Prop | Tipo |
|---|---|
| `modelValue` | `string \| number` |
| `placeholder` | `string` (opcional) |
| `disabled` | `boolean` (opcional) |

- **Eventos:** `update:modelValue` (solo dígitos).
- **Comportamiento:** muestra el entero agrupado según el idioma activo (`1.250.000` en español).
