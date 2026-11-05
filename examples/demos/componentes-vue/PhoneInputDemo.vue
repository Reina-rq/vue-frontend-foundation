<script setup lang="ts">
import { ref } from 'vue'
import { PhoneInput } from '@/components'

// Emite "código número", p. ej. "+591 70000000".
const telefono = ref('+591 70000000')
</script>

<template>
  <div class="min-w-260"><PhoneInput v-model="telefono" /></div>
  <span class="fs-12 text-muted">v-model: {{ telefono || "''" }}</span>
</template>
