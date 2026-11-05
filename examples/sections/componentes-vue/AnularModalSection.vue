<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import AnularModalDemo from '../../demos/componentes-vue/AnularModalDemo.vue'
import anularModalDemoSrc from '../../demos/componentes-vue/AnularModalDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-anular-modal" title="AnularModal">
    <template #lead>Confirmación para anular un registro. <code>v-model:open</code>, prop <code>num</code> y evento <code>confirm</code>.</template>
    <DemoBlock full :source="anularModalDemoSrc"><AnularModalDemo /></DemoBlock>
  </DocSection>
</template>
