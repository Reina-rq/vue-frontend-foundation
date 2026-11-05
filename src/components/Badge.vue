<script setup lang="ts">
// Badge global. Emite `.badge` + la variante de color `.badge-{tone}` del sistema
// (primary | secondary | success | danger | warning | info | light | dark).
// `pill` redondea por completo (.rounded-pill).
withDefaults(
  defineProps<{
    tone?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
    pill?: boolean
  }>(),
  { tone: 'primary', pill: false },
)
</script>

<template>
  <span class="badge" :class="[`badge-${tone}`, { 'rounded-pill': pill }]"><slot /></span>
</template>
