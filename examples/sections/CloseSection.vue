<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Close from '../demos/close/Close.vue'
import closeSrc from '../demos/close/Close.vue?raw'
</script>

<template>
  <DocSection id="close" title="Close button">
    <DemoBlock :source="closeSrc"><Close /></DemoBlock>
  </DocSection>
</template>
