<script setup lang="ts">
import { ref } from 'vue'

const ocOpen = ref(false)
</script>

<template>
  <button class="btn btn-primary" @click="ocOpen = true">Abrir offcanvas</button>
  <div class="offcanvas-backdrop" :class="{ show: ocOpen }" @click="ocOpen = false"></div>
  <div class="offcanvas offcanvas-end" :class="{ show: ocOpen }">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Panel lateral</h5>
      <button class="btn-close" @click="ocOpen = false"></button>
    </div>
    <div class="offcanvas-body">Contenido del panel. Clic fuera o en × para cerrar.</div>
  </div>
</template>
