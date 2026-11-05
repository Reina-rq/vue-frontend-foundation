<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import TextColorsGallery from '../demos/colores/TextColorsGallery.vue'
import TextColorsUsage from '../demos/colores/TextColorsUsage.vue'
import textColorsUsageSrc from '../demos/colores/TextColorsUsage.vue?raw'
import BgColorsGallery from '../demos/colores/BgColorsGallery.vue'
import BgColorsUsage from '../demos/colores/BgColorsUsage.vue'
import bgColorsUsageSrc from '../demos/colores/BgColorsUsage.vue?raw'
</script>

<template>
  <DocSection id="colores" title="Colores">
    <template #lead>Utilidades de texto y fondo (vía tokens / paleta).</template>
    <h3 class="section-subtitle">Texto · <code>.text-*</code></h3>
    <DemoBlock><TextColorsGallery /></DemoBlock>
    <DemoBlock :source="textColorsUsageSrc"><TextColorsUsage /></DemoBlock>
    <h3 class="section-subtitle">Fondo · <code>.bg-*</code></h3>
    <DemoBlock block><BgColorsGallery /></DemoBlock>
    <DemoBlock block :source="bgColorsUsageSrc"><BgColorsUsage /></DemoBlock>
  </DocSection>
</template>
