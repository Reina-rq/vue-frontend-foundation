<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Modal from '../demos/modales/Modal.vue'
import modalSrc from '../demos/modales/Modal.vue?raw'
</script>

<template>
  <DocSection id="modales" title="Modal">
    <template #lead>Capa fija <code>.modal-bg.on</code> + tarjeta <code>.modal</code> con su contenido. Botón para abrir; clic fuera o en × / Cancelar para cerrar.</template>
    <DemoBlock :source="modalSrc"><Modal /></DemoBlock>
  </DocSection>
</template>
