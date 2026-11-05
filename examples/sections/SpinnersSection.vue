<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Spinners from '../demos/spinners/Spinners.vue'
import spinnersSrc from '../demos/spinners/Spinners.vue?raw'
</script>

<template>
  <DocSection id="spinners" title="Spinners">
    <DemoBlock :source="spinnersSrc"><Spinners /></DemoBlock>
  </DocSection>
</template>
