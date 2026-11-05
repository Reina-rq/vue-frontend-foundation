<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import InputGroup from '../demos/input-group/InputGroup.vue'
import inputGroupSrc from '../demos/input-group/InputGroup.vue?raw'
</script>

<template>
  <DocSection id="input-group" title="Input group">
    <template #lead>Agrupa add-ons (<code>.input-group-text</code>) y botones con el campo.</template>
    <DemoBlock block :source="inputGroupSrc"><InputGroup /></DemoBlock>
  </DocSection>
</template>
