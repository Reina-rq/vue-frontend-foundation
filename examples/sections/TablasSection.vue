<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Table from '../demos/tablas/Table.vue'
import tableSrc from '../demos/tablas/Table.vue?raw'
import TableApp from '../demos/tablas/TableApp.vue'
import tableAppSrc from '../demos/tablas/TableApp.vue?raw'
</script>

<template>
  <DocSection id="tablas" title="Tablas">
    <template #lead>Variantes (<code>.table</code> + <code>-striped/-hover/-bordered/-sm</code>) y la tabla de la app (cabecera de color + acciones).</template>
    <h3 class="section-subtitle">Variantes · <code>.table</code></h3>
    <DemoBlock block :source="tableSrc"><Table /></DemoBlock>
    <h3 class="section-subtitle">Tabla de la app + paginador</h3>
    <DemoBlock block :source="tableAppSrc"><TableApp /></DemoBlock>
  </DocSection>
</template>
