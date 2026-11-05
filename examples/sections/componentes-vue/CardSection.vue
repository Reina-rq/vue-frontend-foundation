<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import CardDemo from '../../demos/componentes-vue/CardDemo.vue'
import cardDemoSrc from '../../demos/componentes-vue/CardDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-card" title="Card">
    <template #lead>Prop <code>title</code> o slot <code>#title</code> (con icono). Contenido en el slot por defecto.</template>
    <DemoBlock :source="cardDemoSrc"><CardDemo /></DemoBlock>
  </DocSection>
</template>
