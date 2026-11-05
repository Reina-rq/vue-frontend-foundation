<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import SearchSelectDemo from '../../demos/componentes-vue/SearchSelectDemo.vue'
import searchSelectDemoSrc from '../../demos/componentes-vue/SearchSelectDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-search-select" title="SearchSelect">
    <template #lead>Select con buscador. Props: <code>options</code>, <code>valueKey</code> (<code>id</code>), <code>labelKey</code> (<code>name</code>), <code>searchKeys</code>, <code>placeholder</code>, <code>searchPlaceholder</code>, <code>disabled</code>. Slots <code>#option</code> y <code>#selected</code>.</template>
    <DemoBlock full :source="searchSelectDemoSrc"><SearchSelectDemo /></DemoBlock>
  </DocSection>
</template>
