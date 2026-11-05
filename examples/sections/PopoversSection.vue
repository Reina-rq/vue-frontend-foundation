<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Popover from '../demos/popovers/Popover.vue'
import popoverSrc from '../demos/popovers/Popover.vue?raw'
</script>

<template>
  <DocSection id="popovers" title="Popovers">
    <template #lead><code>.popover.show</code> posicionado junto al disparador.</template>
    <DemoBlock :source="popoverSrc"><Popover /></DemoBlock>
  </DocSection>
</template>
