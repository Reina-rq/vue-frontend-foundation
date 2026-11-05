<script setup lang="ts">
// Modal global (.modal-bg / .modal). Controlado con v-model:open.
// `contentClass` aplica clases globales a la caja .modal. Sirve para armarla como columna
// flex (d-flex flex-column) cuando el modal tiene barra de título a sangre: así la barra de
// scroll queda en el cuerpo y no se superpone al encabezado ni a sus márgenes negativos.
defineProps<{
  open: boolean
  title?: string
  size?: 'sm' | 'lg' | 'xl'
  compact?: boolean
  contentClass?: string
}>()
const emit = defineEmits<{ 'update:open': [boolean] }>()
function close() {
  emit('update:open', false)
}
</script>

<template>
  <Teleport to="body">
    <div class="modal-bg" :class="{ on: open }" @click.self="close">
      <div class="modal" :class="[size, contentClass, { mc: compact }]" role="dialog" aria-modal="true">
        <h3 v-if="title">{{ title }}</h3>
        <slot />
        <div v-if="$slots.footer" class="mfoot"><slot name="footer" /></div>
      </div>
    </div>
  </Teleport>
</template>
