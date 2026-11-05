<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Range from '../demos/range/Range.vue'
import rangeSrc from '../demos/range/Range.vue?raw'
</script>

<template>
  <DocSection id="range" title="Range">
    <template #lead>Control deslizante <code>.form-range</code>.</template>
    <DemoBlock :source="rangeSrc"><Range /></DemoBlock>
  </DocSection>
</template>
