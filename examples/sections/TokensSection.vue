<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import TokensGallery from '../demos/tokens/TokensGallery.vue'
import tokensUsageSrc from '../demos/tokens/tokens-usage.scss?raw'
</script>

<template>
  <DocSection id="tokens" title="Tokens (CSS Variables)">
    <template #lead>Se consumen con <code>var(--token)</code>, nunca hex directo. El modo oscuro (<code>body.dark</code>) los redefine.</template>
    <DemoBlock block><TokensGallery /></DemoBlock>
    <DemoBlock plain :source="tokensUsageSrc" />
  </DocSection>
</template>
