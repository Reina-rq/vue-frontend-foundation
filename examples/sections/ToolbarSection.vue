<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Toolbar from '../demos/toolbar/Toolbar.vue'
import toolbarSrc from '../demos/toolbar/Toolbar.vue?raw'
</script>

<template>
  <DocSection id="toolbar">
    <template #title>Toolbar · <code>.toolbar</code> / <code>.toolbar-soft</code></template>
    <template #lead>Barra de herramientas de sección (cabecera gris suave dentro de una card).</template>
    <DemoBlock block :source="toolbarSrc"><Toolbar /></DemoBlock>
  </DocSection>
</template>
