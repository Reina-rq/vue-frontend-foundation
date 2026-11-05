<script setup lang="ts">
const bgColors = [
  'bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info',
  'bg-light', 'bg-dark', 'bg-white', 'bg-soft', 'bg-success-subtle', 'bg-slate-100',
  'bg-slate-200', 'bg-slate-300', 'bg-blue-100', 'bg-blue-700', 'bg-sky-100', 'bg-amber-100',
  'bg-red-100', 'bg-violet-100',
]
</script>

<template>
  <div class="ds-swatches">
    <div v-for="c in bgColors" :key="c" class="ds-swatch">
      <div class="ds-swatch__c" :class="c"></div>
      <div class="ds-swatch__l"><b>.{{ c }}</b></div>
    </div>
  </div>
</template>
