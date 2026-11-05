<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Alerts from '../demos/alertas/Alerts.vue'
import alertsSrc from '../demos/alertas/Alerts.vue?raw'
</script>

<template>
  <DocSection id="alertas" title="Alertas y notas">
    <DemoBlock block :source="alertsSrc"><Alerts /></DemoBlock>
  </DocSection>
</template>
