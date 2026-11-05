<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Helpers from '../demos/helpers/Helpers.vue'
import helpersSrc from '../demos/helpers/Helpers.vue?raw'
</script>

<template>
  <DocSection id="helpers" title="Helpers">
    <template #lead>Ratio, stacks, vertical rule, text-truncate, icon-link, focus-ring, visually-hidden…</template>
    <DemoBlock block :source="helpersSrc"><Helpers /></DemoBlock>
  </DocSection>
</template>
