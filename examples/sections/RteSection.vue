<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import RichTextEditor from '../demos/rte/RichTextEditor.vue'
import richTextEditorSrc from '../demos/rte/RichTextEditor.vue?raw'
</script>

<template>
  <DocSection id="rte">
    <template #title>Editor de texto enriquecido · <code>.rte</code></template>
    <template #lead>Barra de formato + área editable (modales de bancos / textos de diseño).</template>
    <DemoBlock block :source="richTextEditorSrc"><RichTextEditor /></DemoBlock>
  </DocSection>
</template>
