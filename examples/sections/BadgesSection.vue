<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import BadgeVariants from '../demos/badges/BadgeVariants.vue'
import badgeVariantsSrc from '../demos/badges/BadgeVariants.vue?raw'
</script>

<template>
  <DocSection id="badges" title="Badges">
    <template #lead><code>.badge</code> + variante de color; <code>.rounded-pill</code> para píldora.</template>
    <h3 class="section-subtitle">Variantes · <code>.badge .badge-*</code></h3>
    <DemoBlock :source="badgeVariantsSrc"><BadgeVariants /></DemoBlock>
  </DocSection>
</template>
