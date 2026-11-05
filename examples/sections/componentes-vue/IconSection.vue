<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import IconDemo from '../../demos/componentes-vue/IconDemo.vue'
import iconDemoSrc from '../../demos/componentes-vue/IconDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-icon" title="Icon">
    <template #lead>Icono SVG del sprite. Prop <code>name</code> = id del símbolo sin el prefijo <code>i-</code>. Tamaño y color con <code>.icon-*</code>. Requiere <code>&lt;IconSprite /&gt;</code> montado una vez en la raíz.</template>
    <DemoBlock :source="iconDemoSrc"><IconDemo /></DemoBlock>
  </DocSection>
</template>
