<script setup lang="ts">
import { ref } from 'vue'

const ctrlTab = ref('uno')
</script>

<template>
  <div class="w-100">
    <div class="tabs">
      <div class="tab" :class="{ on: ctrlTab === 'uno' }" @click="ctrlTab = 'uno'">Datos</div>
      <div class="tab" :class="{ on: ctrlTab === 'dos' }" @click="ctrlTab = 'dos'">Documentos</div>
    </div>
    <div class="tpane" :class="{ on: ctrlTab === 'uno' }">Contenido de la pestaña <b>Datos</b>: campos del registro.</div>
    <div class="tpane" :class="{ on: ctrlTab === 'dos' }">Contenido de la pestaña <b>Documentos</b>: lista de archivos adjuntos.</div>
  </div>
</template>
