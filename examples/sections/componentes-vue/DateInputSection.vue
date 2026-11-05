<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import DateInputDemo from '../../demos/componentes-vue/DateInputDemo.vue'
import dateInputDemoSrc from '../../demos/componentes-vue/DateInputDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-date-input" title="DateInput">
    <template #lead>Fecha escribible (varios formatos) con selector propio. <code>v-model</code> en <code>yyyy-mm-dd</code>. Props: <code>disabled</code>, <code>placeholder</code>.</template>
    <DemoBlock full :source="dateInputDemoSrc"><DateInputDemo /></DemoBlock>
  </DocSection>
</template>
