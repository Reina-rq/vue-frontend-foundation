<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Kpis from '../demos/kpis/Kpis.vue'
import kpisSrc from '../demos/kpis/Kpis.vue?raw'
</script>

<template>
  <DocSection id="kpis" title="KPIs">
    <DemoBlock block :source="kpisSrc"><Kpis /></DemoBlock>
  </DocSection>
</template>
