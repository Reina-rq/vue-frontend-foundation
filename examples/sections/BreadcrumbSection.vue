<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Breadcrumb from '../demos/breadcrumb/Breadcrumb.vue'
import breadcrumbSrc from '../demos/breadcrumb/Breadcrumb.vue?raw'
</script>

<template>
  <DocSection id="breadcrumb" title="Breadcrumb">
    <DemoBlock :source="breadcrumbSrc"><Breadcrumb /></DemoBlock>
  </DocSection>
</template>
