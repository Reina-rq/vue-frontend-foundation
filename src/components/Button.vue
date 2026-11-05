<script setup lang="ts">
// Botón global. Emite `.btn` + la variante `.btn-{variant}` y el tamaño `.btn-{size}`
// del sistema de estilos (components/_buttons.scss).
export type ButtonVariant =
  | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
  | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger'
  | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark'

withDefaults(
  defineProps<{
    variant?: ButtonVariant
    size?: 'sm' | 'lg'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
  }>(),
  { variant: 'primary', size: undefined, type: 'button', disabled: false },
)
</script>

<template>
  <button class="btn" :class="[`btn-${variant}`, size && `btn-${size}`]" :type="type" :disabled="disabled">
    <slot />
  </button>
</template>
