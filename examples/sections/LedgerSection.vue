<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Ledger from '../demos/ledger/Ledger.vue'
import ledgerSrc from '../demos/ledger/Ledger.vue?raw'
</script>

<template>
  <DocSection id="ledger" title="Ledger / Resumen">
    <DemoBlock block :source="ledgerSrc"><Ledger /></DemoBlock>
  </DocSection>
</template>
