<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Collapse from '../demos/collapse/Collapse.vue'
import collapseSrc from '../demos/collapse/Collapse.vue?raw'
</script>

<template>
  <DocSection id="collapse" title="Collapse">
    <template #lead>Muestra/oculta con transición de altura (<code>.collapse-anim.show</code>).</template>
    <DemoBlock block :source="collapseSrc"><Collapse /></DemoBlock>
  </DocSection>
</template>
