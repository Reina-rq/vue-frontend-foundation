<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Tooltips from '../demos/tooltips/Tooltips.vue'
import tooltipsSrc from '../demos/tooltips/Tooltips.vue?raw'
</script>

<template>
  <DocSection id="tooltips" title="Tooltips">
    <template #lead>CSS-only por hover con <code>.has-tooltip[data-tip]</code>.</template>
    <DemoBlock :source="tooltipsSrc"><Tooltips /></DemoBlock>
  </DocSection>
</template>
