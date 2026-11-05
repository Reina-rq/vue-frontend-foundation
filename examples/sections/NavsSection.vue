<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import NavTabs from '../demos/navs/NavTabs.vue'
import navTabsSrc from '../demos/navs/NavTabs.vue?raw'
import NavPills from '../demos/navs/NavPills.vue'
import navPillsSrc from '../demos/navs/NavPills.vue?raw'
</script>

<template>
  <DocSection id="navs" title="Navs & tabs">
    <template #lead><code>.nav-tabs</code> / <code>.nav-pills</code> + <code>.nav-link.active</code> y <code>.tab-content</code>.</template>
    <h3>Tabs con contenido (Vue)</h3>
    <DemoBlock block :source="navTabsSrc"><NavTabs /></DemoBlock>
    <h3>Pills</h3>
    <DemoBlock :source="navPillsSrc"><NavPills /></DemoBlock>
  </DocSection>
</template>
