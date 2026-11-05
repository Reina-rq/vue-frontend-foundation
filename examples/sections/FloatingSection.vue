<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Floating from '../demos/floating/Floating.vue'
import floatingSrc from '../demos/floating/Floating.vue?raw'
</script>

<template>
  <DocSection id="floating" title="Floating labels">
    <template #lead><code>.form-floating</code>: la etiqueta flota al enfocar o escribir.</template>
    <DemoBlock block :source="floatingSrc"><Floating /></DemoBlock>
  </DocSection>
</template>
