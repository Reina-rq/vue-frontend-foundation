<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Validation from '../demos/validacion/Validation.vue'
import validationSrc from '../demos/validacion/Validation.vue?raw'
</script>

<template>
  <DocSection id="validacion" title="Validación">
    <template #lead>Estados <code>.is-invalid</code> / <code>.is-valid</code> con su feedback, y <code>.input-locked</code>.</template>
    <DemoBlock block :source="validationSrc"><Validation /></DemoBlock>
  </DocSection>
</template>
