<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import ListGroup from '../demos/list-group/ListGroup.vue'
import listGroupSrc from '../demos/list-group/ListGroup.vue?raw'
</script>

<template>
  <DocSection id="list-group" title="List group">
    <DemoBlock block :source="listGroupSrc"><ListGroup /></DemoBlock>
  </DocSection>
</template>
