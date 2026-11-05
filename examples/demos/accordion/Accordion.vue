<script setup lang="ts">
import { ref } from 'vue'

const accItems = [
  ['Sección 1', 'Contenido de la primera sección.'],
  ['Sección 2', 'Contenido de la segunda sección.'],
  ['Sección 3', 'Contenido de la tercera sección.'],
]
const acc = ref(0)
</script>

<template>
  <div class="accordion w-100">
    <div v-for="(it, i) in accItems" :key="i" class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button" :class="{ collapsed: acc !== i }" @click="acc = acc === i ? -1 : i">{{ it[0] }}</button>
      </h2>
      <div class="accordion-collapse" :class="{ show: acc === i }">
        <div class="accordion-body">{{ it[1] }}</div>
      </div>
    </div>
  </div>
</template>
