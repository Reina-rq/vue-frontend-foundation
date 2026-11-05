<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import ThousandsInputDemo from '../../demos/componentes-vue/ThousandsInputDemo.vue'
import thousandsInputDemoSrc from '../../demos/componentes-vue/ThousandsInputDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-thousands-input" title="ThousandsInput">
    <template #lead>Entero con separador de miles según el idioma; emite solo dígitos.</template>
    <DemoBlock full :source="thousandsInputDemoSrc"><ThousandsInputDemo /></DemoBlock>
  </DocSection>
</template>
