<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import ModalDemo from '../../demos/componentes-vue/ModalDemo.vue'
import modalDemoSrc from '../../demos/componentes-vue/ModalDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-modal" title="Modal">
    <template #lead><code>v-model:open</code>. Props: <code>title</code>, <code>size</code> (<code>sm</code> | <code>lg</code> | <code>xl</code>), <code>compact</code>, <code>contentClass</code>. Slots: por defecto y <code>#footer</code>.</template>
    <DemoBlock full :source="modalDemoSrc"><ModalDemo /></DemoBlock>
  </DocSection>
</template>
