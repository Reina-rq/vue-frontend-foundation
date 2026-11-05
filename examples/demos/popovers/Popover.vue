<script setup lang="ts">
import { ref } from 'vue'

const popOpen = ref(false)
</script>

<template>
  <div class="position-relative d-inline-block">
    <button class="btn btn-outline-secondary" @click="popOpen = !popOpen">Popover</button>
    <div class="popover ds-pop-demo" :class="{ show: popOpen }">
      <div class="popover-header">Título del popover</div>
      <div class="popover-body">Cuerpo con más detalle. Clic de nuevo para cerrar.</div>
    </div>
  </div>
</template>
