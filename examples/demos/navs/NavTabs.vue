<script setup lang="ts">
import { ref } from 'vue'

const navTab = ref(1)
</script>

<template>
  <div class="w-100">
    <ul class="nav-tabs">
      <li class="nav-item"><button class="nav-link" :class="{ active: navTab === 1 }" @click="navTab = 1">Datos</button></li>
      <li class="nav-item"><button class="nav-link" :class="{ active: navTab === 2 }" @click="navTab = 2">Documentos</button></li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane" :class="{ active: navTab === 1 }">Contenido de la pestaña Datos.</div>
      <div class="tab-pane" :class="{ active: navTab === 2 }">Contenido de la pestaña Documentos.</div>
    </div>
  </div>
</template>
