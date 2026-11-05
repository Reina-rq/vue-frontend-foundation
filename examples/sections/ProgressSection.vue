<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Progress from '../demos/progress/Progress.vue'
import progressSrc from '../demos/progress/Progress.vue?raw'
</script>

<template>
  <DocSection id="progress" title="Progress">
    <DemoBlock :source="progressSrc"><Progress /></DemoBlock>
  </DocSection>
</template>
