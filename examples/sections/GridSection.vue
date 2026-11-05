<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Grid12 from '../demos/grid/Grid12.vue'
import grid12Src from '../demos/grid/Grid12.vue?raw'
import Grid3 from '../demos/grid/Grid3.vue'
import grid3Src from '../demos/grid/Grid3.vue?raw'
import GridMix from '../demos/grid/GridMix.vue'
import gridMixSrc from '../demos/grid/GridMix.vue?raw'
import GridResp from '../demos/grid/GridResp.vue'
import gridRespSrc from '../demos/grid/GridResp.vue?raw'
</script>

<template>
  <DocSection id="grid" title="Grid (12 columnas)">
    <template #lead>Mobile-first: <code>.row</code> + <code>.col-1…12</code>. <code>.col</code> reparte el sobrante. <code>.col-12 .col-md-*</code> apila en móvil.</template>
    <h3 class="section-subtitle">Mitades · <code>.col-6</code></h3>
    <DemoBlock block :source="grid12Src"><Grid12 /></DemoBlock>
    <h3 class="section-subtitle">Tercios · <code>.col-4</code></h3>
    <DemoBlock block :source="grid3Src"><Grid3 /></DemoBlock>
    <h3 class="section-subtitle">Asimétrico · <code>.col-3 + .col-9</code></h3>
    <DemoBlock block :source="gridMixSrc"><GridMix /></DemoBlock>
    <h3 class="section-subtitle">Responsivo · <code>.col-md-*</code></h3>
    <DemoBlock block :source="gridRespSrc"><GridResp /></DemoBlock>
  </DocSection>
</template>
