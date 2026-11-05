<script setup lang="ts">
import { ref } from 'vue'
import { DateInput } from '@/components'

// Valor canónico yyyy-mm-dd.
const fecha = ref('2026-11-04')
</script>

<template>
  <div class="min-w-220"><DateInput v-model="fecha" /></div>
  <span class="fs-12 text-muted">v-model: {{ fecha || "''" }}</span>
</template>
