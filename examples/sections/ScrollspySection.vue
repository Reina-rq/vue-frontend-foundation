<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Scrollspy from '../demos/scrollspy/Scrollspy.vue'
import scrollspySrc from '../demos/scrollspy/Scrollspy.vue?raw'
</script>

<template>
  <DocSection id="scrollspy" title="Scrollspy">
    <template #lead>Resalta el ítem del nav según la sección visible al hacer scroll en el contenedor.</template>
    <DemoBlock block :source="scrollspySrc"><Scrollspy /></DemoBlock>
  </DocSection>
</template>
