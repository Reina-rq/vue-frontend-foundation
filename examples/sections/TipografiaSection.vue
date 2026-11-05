<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import TypeScale from '../demos/tipografia/TypeScale.vue'
import TypeUsage from '../demos/tipografia/TypeUsage.vue'
import typeUsageSrc from '../demos/tipografia/TypeUsage.vue?raw'
</script>

<template>
  <DocSection id="tipografia" title="Tipografía">
    <template #lead>Tamaños <code>.fs-*</code> y pesos <code>.fw-*</code>. La fuente y el tamaño base son los tokens <code>--font-family-base</code> y <code>--font-size-base</code>.</template>
    <DemoBlock block><TypeScale /></DemoBlock>
    <DemoBlock block :source="typeUsageSrc"><TypeUsage /></DemoBlock>
  </DocSection>
</template>
