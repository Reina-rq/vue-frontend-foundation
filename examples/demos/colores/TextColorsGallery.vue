<script setup lang="ts">
const textColors = [
  'text-primary', 'text-secondary', 'text-success', 'text-danger', 'text-warning', 'text-info',
  'text-ink', 'text-slate', 'text-slate-600', 'text-muted', 'text-dim', 'text-orange',
  'text-sky-700', 'text-blue-700', 'text-violet-700', 'text-danger-emphasis', 'text-info-emphasis', 'text-warning-emphasis',
]
</script>

<template>
  <span v-for="c in textColors" :key="c" :class="c" class="fw-700">.{{ c }}</span>
</template>
