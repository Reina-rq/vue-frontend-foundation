<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Containers from '../demos/containers/Containers.vue'
import containersSrc from '../demos/containers/Containers.vue?raw'
</script>

<template>
  <DocSection id="containers" title="Containers">
    <template #lead><code>.container</code> (ancho máximo por breakpoint, centrado) y <code>.container-fluid</code> (100%).</template>
    <DemoBlock block :source="containersSrc"><Containers /></DemoBlock>
  </DocSection>
</template>
