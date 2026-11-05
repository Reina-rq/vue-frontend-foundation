<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Accordion from '../demos/accordion/Accordion.vue'
import accordionSrc from '../demos/accordion/Accordion.vue?raw'
</script>

<template>
  <DocSection id="accordion" title="Accordion">
    <template #lead>Paneles plegables. Abre uno a la vez (<code>.accordion-button.collapsed</code> + <code>.accordion-collapse.show</code>).</template>
    <DemoBlock block :source="accordionSrc"><Accordion /></DemoBlock>
  </DocSection>
</template>
