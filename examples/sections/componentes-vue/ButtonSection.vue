<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import ButtonDemo from '../../demos/componentes-vue/ButtonDemo.vue'
import buttonDemoSrc from '../../demos/componentes-vue/ButtonDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-button" title="Button">
    <template #lead>Props: <code>variant</code> (<code>primary</code> por defecto, <code>secondary</code>, <code>success</code>, <code>danger</code>, <code>warning</code>, <code>info</code>, <code>light</code>, <code>dark</code>, <code>link</code> y sus <code>outline-*</code>), <code>size</code> (<code>sm</code> | <code>lg</code>), <code>type</code> y <code>disabled</code>.</template>
    <DemoBlock :source="buttonDemoSrc"><ButtonDemo /></DemoBlock>
  </DocSection>
</template>
