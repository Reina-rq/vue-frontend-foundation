<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Placeholders from '../demos/placeholders/Placeholders.vue'
import placeholdersSrc from '../demos/placeholders/Placeholders.vue?raw'
</script>

<template>
  <DocSection id="placeholders" title="Placeholders (skeleton)">
    <DemoBlock block :source="placeholdersSrc"><Placeholders /></DemoBlock>
  </DocSection>
</template>
