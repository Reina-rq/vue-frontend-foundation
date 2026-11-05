<script setup lang="ts">
import DocSection from '../../components/DocSection.vue'
import DemoBlock from '../../components/DemoBlock.vue'
import ButtonDemo from '../../demos/componentes-vue/ButtonDemo.vue'
import buttonDemoSrc from '../../demos/componentes-vue/ButtonDemo.vue?raw'
</script>

<template>
  <DocSection id="vue-button" title="Button">
    <template #lead>Props: <code>variant</code> (<code>pri</code> | <code>gho</code>), <code>type</code> (<code>button</code> | <code>submit</code>), <code>disabled</code>.</template>
    <div class="alert alert-warning">Problema conocido del original: <code>Button</code> emite <code>.btn-pri</code> / <code>.btn-gho</code>, que no existen en el SCSS. Se ve solo con la base <code>.btn</code>. Para el look de marca usa <code>&lt;button class="btn btn-primary"&gt;</code>.</div>
    <DemoBlock :source="buttonDemoSrc"><ButtonDemo /></DemoBlock>
  </DocSection>
</template>
