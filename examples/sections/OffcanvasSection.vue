<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Offcanvas from '../demos/offcanvas/Offcanvas.vue'
import offcanvasSrc from '../demos/offcanvas/Offcanvas.vue?raw'
</script>

<template>
  <DocSection id="offcanvas" title="Offcanvas">
    <template #lead>Panel lateral deslizante (<code>.offcanvas.show</code> + <code>.offcanvas-backdrop.show</code>).</template>
    <DemoBlock :source="offcanvasSrc"><Offcanvas /></DemoBlock>
  </DocSection>
</template>
