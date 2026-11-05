<script setup lang="ts">
import { ref } from 'vue'

const collapseOpen = ref(false)
</script>

<template>
  <button class="btn btn-outline-secondary" @click="collapseOpen = !collapseOpen">Mostrar / ocultar</button>
  <div class="collapse-anim mt-8" :class="{ show: collapseOpen }">
    <div class="card">Contenido colapsable que aparece con animación.</div>
  </div>
</template>
