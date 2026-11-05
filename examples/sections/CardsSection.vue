<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Card from '../demos/cards/Card.vue'
import cardSrc from '../demos/cards/Card.vue?raw'
</script>

<template>
  <DocSection id="cards" title="Cards y secciones">
    <DemoBlock :source="cardSrc"><Card /></DemoBlock>
  </DocSection>
</template>
