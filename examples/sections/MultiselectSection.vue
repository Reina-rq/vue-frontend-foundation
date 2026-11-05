<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import MultiselectSingle from '../demos/multiselect/MultiselectSingle.vue'
import multiselectSingleSrc from '../demos/multiselect/MultiselectSingle.vue?raw'
import MultiselectMultiple from '../demos/multiselect/MultiselectMultiple.vue'
import multiselectMultipleSrc from '../demos/multiselect/MultiselectMultiple.vue?raw'
</script>

<template>
  <DocSection id="multiselect">
    <template #title>Multiselect · <code>.msel</code></template>
    <template #lead>Selector con popup. De <b>uno</b> (radio, cierra al elegir) o de <b>varios</b> (checkbox, suma etiquetas).</template>
    <h3>De uno (selección única)</h3>
    <DemoBlock :source="multiselectSingleSrc"><MultiselectSingle /></DemoBlock>
    <h3>De varios (múltiple)</h3>
    <DemoBlock :source="multiselectMultipleSrc"><MultiselectMultiple /></DemoBlock>
  </DocSection>
</template>
