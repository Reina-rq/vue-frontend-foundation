<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import BreakpointsTable from '../demos/breakpoints/BreakpointsTable.vue'
import BreakpointsUsage from '../demos/breakpoints/BreakpointsUsage.vue'
import breakpointsUsageSrc from '../demos/breakpoints/BreakpointsUsage.vue?raw'
</script>

<template>
  <DocSection id="breakpoints" title="Breakpoints">
    <template #lead>Puntos de quiebre del sistema (mobile-first). Se usan como sufijos <code>-sm/-md/-lg/-xl/-xxl</code> en grid y utilidades.</template>
    <BreakpointsTable />
    <DemoBlock block :source="breakpointsUsageSrc"><BreakpointsUsage /></DemoBlock>
  </DocSection>
</template>
