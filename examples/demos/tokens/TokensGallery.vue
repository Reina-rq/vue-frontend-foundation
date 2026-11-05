<script setup lang="ts">
interface TokenSample {
  var: string
  desc: string
}

const tokens: TokenSample[] = [
  { var: '--color-primary', desc: 'Marca' },
  { var: '--color-secondary', desc: 'Secundario' },
  { var: '--color-success', desc: 'Éxito' },
  { var: '--color-danger', desc: 'Peligro' },
  { var: '--color-warning', desc: 'Aviso' },
  { var: '--color-info', desc: 'Info' },
  { var: '--color-surface', desc: 'Superficie' },
  { var: '--color-border', desc: 'Bordes' },
]
</script>

<template>
  <div class="ds-swatches">
    <div v-for="t in tokens" :key="t.var" class="ds-swatch">
      <div class="ds-swatch__c" :style="{ background: `var(${t.var})` }"></div>
      <div class="ds-swatch__l"><b>{{ t.var }}</b><span>{{ t.desc }}</span></div>
    </div>
  </div>
</template>
