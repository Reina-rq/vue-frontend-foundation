<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Timeline from '../demos/timeline/Timeline.vue'
import timelineSrc from '../demos/timeline/Timeline.vue?raw'
</script>

<template>
  <DocSection id="timeline" title="Timeline">
    <template #lead><code>.timeline</code> + <code>.timeline-item</code> (modificadores <code>--danger/--success/--disabled</code>).</template>
    <DemoBlock block :source="timelineSrc"><Timeline /></DemoBlock>
  </DocSection>
</template>
