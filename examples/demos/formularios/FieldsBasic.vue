<script setup lang="ts">
import { ref } from 'vue'
import { DateInput } from '@/components'

const fecha = ref('')
</script>

<template>
  <div class="row g-3 w-100">
    <div class="col-12 col-md-4">
      <label class="form-label">Texto</label>
      <input class="form-control" placeholder="Escribe…">
    </div>
    <div class="col-12 col-md-4">
      <label class="form-label">Select</label>
      <select class="form-select"><option>Opción A</option><option>Opción B</option></select>
    </div>
    <div class="col-12 col-md-4">
      <label class="form-label">Fecha</label>
      <DateInput v-model="fecha" />
    </div>
  </div>
</template>
