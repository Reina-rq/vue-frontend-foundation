<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Totals from '../demos/totals/Totals.vue'
import totalsSrc from '../demos/totals/Totals.vue?raw'
</script>

<template>
  <DocSection id="totals" title="Totales y líneas de resumen">
    <template #lead><code>.totals</code>, <code>.kv-line</code> y <code>.flow-step</code>.</template>
    <DemoBlock block :source="totalsSrc"><Totals /></DemoBlock>
  </DocSection>
</template>
