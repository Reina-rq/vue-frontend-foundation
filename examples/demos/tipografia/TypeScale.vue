<script setup lang="ts">
const fontSizes = [
  'fs-10', 'fs-11', 'fs-12', 'fs-13', 'fs-14', 'fs-16', 'fs-18', 'fs-22',
]
</script>

<template>
  <div v-for="fs in fontSizes" :key="fs" :class="fs">.{{ fs }} — El veloz murciélago hindú</div>
  <div class="d-flex gap-16 mt-12">
    <span class="fw-normal">.fw-normal</span>
    <span class="fw-600">.fw-600</span>
    <span class="fw-700">.fw-700</span>
    <span class="fw-800">.fw-800</span>
  </div>
</template>
