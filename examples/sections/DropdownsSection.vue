<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Dropdown from '../demos/dropdowns/Dropdown.vue'
import dropdownSrc from '../demos/dropdowns/Dropdown.vue?raw'
</script>

<template>
  <DocSection id="dropdowns" title="Dropdowns">
    <template #lead><code>.dropdown</code> + <code>.dropdown-menu.show</code>. Ítems: <code>.dropdown-header</code>, <code>.dropdown-item</code> (<code>.active</code>, <code>.disabled</code>, <code>.dropdown-item--danger</code>, <code>.dropdown-item-meta</code>), <code>.dropdown-divider</code>, <code>.dropdown-text</code>. Alineación: <code>.dropdown-menu-end</code> / <code>.dropdown-menu-up</code>. Con <code>.show</code> en <code>.dropdown</code> el chevron gira.</template>
    <DemoBlock block full :source="dropdownSrc"><Dropdown /></DemoBlock>
  </DocSection>
</template>
