<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import PrintDocDemo from '../../demos/componentes-vue/PrintDocDemo.vue'
import printDocDemoSrc from '../../demos/componentes-vue/PrintDocDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-print-doc" title="Impresión">
    <template #lead><code>usePrintDoc().open(opciones)</code> + <code>&lt;PrintDoc /&gt;</code>: documento con secciones de filas y tablas, total opcional.</template>
    <DemoBlock full :source="printDocDemoSrc"><PrintDocDemo /></DemoBlock>
  </DocSection>
</template>
