<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import BadgeDemo from '../../demos/componentes-vue/BadgeDemo.vue'
import badgeDemoSrc from '../../demos/componentes-vue/BadgeDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-badge" title="Badge">
    <template #lead>Emite <code>.badge .badge-{tone}</code>. Props: <code>tone</code> (por defecto <code>primary</code>) y <code>pill</code>.</template>
    <DemoBlock :source="badgeDemoSrc"><BadgeDemo /></DemoBlock>
  </DocSection>
</template>
