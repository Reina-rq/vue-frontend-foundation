<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import CheckList from '../demos/check-list/CheckList.vue'
import checkListSrc from '../demos/check-list/CheckList.vue?raw'
</script>

<template>
  <DocSection id="check-list">
    <template #title>Check list · <code>.check-list</code></template>
    <template #lead>Lista con scroll de opciones con checkbox (p. ej. usuarios a notificar).</template>
    <DemoBlock :source="checkListSrc"><CheckList /></DemoBlock>
  </DocSection>
</template>
