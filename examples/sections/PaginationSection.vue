<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Pagination from '../demos/pagination/Pagination.vue'
import paginationSrc from '../demos/pagination/Pagination.vue?raw'
import Pager from '../demos/pagination/Pager.vue'
import pagerSrc from '../demos/pagination/Pager.vue?raw'
</script>

<template>
  <DocSection id="pagination" title="Pagination">
    <template #lead>Páginas numeradas (<code>.pagination</code>) y el paginador propio (<code>.pager</code>).</template>
    <h3 class="section-subtitle">Variantes · <code>.pagination</code></h3>
    <DemoBlock :source="paginationSrc"><Pagination /></DemoBlock>
    <h3 class="section-subtitle">App · <code>.pager</code></h3>
    <DemoBlock block :source="pagerSrc"><Pager /></DemoBlock>
  </DocSection>
</template>
