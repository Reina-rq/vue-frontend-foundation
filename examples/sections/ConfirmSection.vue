<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Confirm from '../demos/confirm/Confirm.vue'
import confirmSrc from '../demos/confirm/Confirm.vue?raw'
</script>

<template>
  <DocSection id="confirm">
    <template #title>Confirmación destructiva · <code>.confirm-*</code></template>
    <template #lead>Banner rojo + pregunta + acciones, dentro de un modal.</template>
    <DemoBlock :source="confirmSrc"><Confirm /></DemoBlock>
  </DocSection>
</template>
