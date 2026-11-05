<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Carousel from '../demos/carousel/Carousel.vue'
import carouselSrc from '../demos/carousel/Carousel.vue?raw'
</script>

<template>
  <DocSection id="carousel" title="Carousel">
    <template #lead>Slides con fade y controles. Clase <code>.active</code> en el slide visible (controlada por JS).</template>
    <DemoBlock block :source="carouselSrc"><Carousel /></DemoBlock>
  </DocSection>
</template>
