<script setup lang="ts">
// Botón global. Emite las clases del original (.btn .btn-primary / .btn-outline-secondary).
withDefaults(
  defineProps<{
    variant?: 'pri' | 'gho'
    type?: 'button' | 'submit'
    disabled?: boolean
  }>(),
  { variant: 'pri', type: 'button', disabled: false },
)
</script>

<template>
  <button class="btn" :class="`btn-${variant}`" :type="type" :disabled="disabled">
    <slot />
  </button>
</template>
