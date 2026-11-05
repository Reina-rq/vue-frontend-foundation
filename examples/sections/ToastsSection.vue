<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Toasts from '../demos/toasts/Toasts.vue'
import toastsSrc from '../demos/toasts/Toasts.vue?raw'
</script>

<template>
  <DocSection id="toasts" title="Toasts">
    <DemoBlock :source="toastsSrc"><Toasts /></DemoBlock>
  </DocSection>
</template>
