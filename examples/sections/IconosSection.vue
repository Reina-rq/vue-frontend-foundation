<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import IconsGallery from '../demos/iconos/IconsGallery.vue'
import IconsUsage from '../demos/iconos/IconsUsage.vue'
import iconsUsageSrc from '../demos/iconos/IconsUsage.vue?raw'
</script>

<template>
  <DocSection id="iconos" title="Iconos">
    <template #lead>Sprite global (<code>IconSprite</code>). En componentes Vue usa <code>&lt;Icon name="…" /&gt;</code>; en markup, <code>&lt;svg class="ic"&gt;&lt;use href="#i-…" /&gt;&lt;/svg&gt;</code>.</template>
    <IconsGallery />
    <DemoBlock :source="iconsUsageSrc"><IconsUsage /></DemoBlock>
  </DocSection>
</template>
