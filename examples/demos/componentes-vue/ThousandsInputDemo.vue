<script setup lang="ts">
import { ref } from 'vue'
import { ThousandsInput } from '@/components'

// Muestra el número agrupado según el idioma; emite solo dígitos ("1250000").
const cantidad = ref('1250000')
</script>

<template>
  <div class="min-w-220"><ThousandsInput v-model="cantidad" /></div>
  <span class="fs-12 text-muted">v-model: {{ cantidad || "''" }}</span>
</template>
