<script setup lang="ts">
// Bloque de ejemplo del catálogo: vista previa (slot) + código.
// El código viene del archivo de la demo (`?raw`): por defecto se muestra solo su
// <template>; con `full` se muestra el SFC completo (cuando el script es parte del ejemplo).
// Sin slot, muestra solo el código (p. ej. un fragmento SCSS).
import { computed, ref } from 'vue'
import { sfcFull, sfcTemplate } from '../utils/sfcSource'

const props = withDefaults(
  defineProps<{
    /** Fuente de la demo (importada con `?raw`). */
    source?: string
    /** Vista previa a lo ancho (apila el contenido). */
    block?: boolean
    /** Muestra el SFC completo en vez de solo el template. */
    full?: boolean
    /** La fuente no es un SFC (SCSS, TS…): se muestra tal cual. */
    plain?: boolean
  }>(),
  { source: '', block: false, full: false, plain: false },
)

const code = computed(() => {
  if (!props.source) return ''
  if (props.plain || props.full) return sfcFull(props.source)
  return sfcTemplate(props.source)
})

const copied = ref(false)
async function copy(): Promise<void> {
  try {
    await navigator.clipboard.writeText(code.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 1500)
  } catch {
    /* portapapeles no disponible */
  }
}
</script>

<template>
  <div v-if="$slots.default" class="card" :class="{ 'd-flex flex-wrap align-items-center gap-12': !block }">
    <slot />
  </div>
  <div v-if="code" class="code-block-wrap">
    <button type="button" class="code-block-copy" @click="copy">{{ copied ? 'Copiado' : 'Copiar' }}</button>
    <pre class="code-block">{{ code }}</pre>
  </div>
</template>
