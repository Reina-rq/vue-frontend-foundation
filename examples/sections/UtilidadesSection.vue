<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Util from '../demos/utilidades/Util.vue'
import utilSrc from '../demos/utilidades/Util.vue?raw'
import UtilityShadow from '../demos/utilidades/UtilityShadow.vue'
import utilityShadowSrc from '../demos/utilidades/UtilityShadow.vue?raw'
import UtilityOpacity from '../demos/utilidades/UtilityOpacity.vue'
import utilityOpacitySrc from '../demos/utilidades/UtilityOpacity.vue?raw'
import UtilityObjectFit from '../demos/utilidades/UtilityObjectFit.vue'
import utilityObjectFitSrc from '../demos/utilidades/UtilityObjectFit.vue?raw'
</script>

<template>
  <DocSection id="utilidades" title="Utilidades">
    <template #lead>Set único. Combínalas en <code>class</code>.</template>
    <DemoBlock block :source="utilSrc"><Util /></DemoBlock>
    <h3>Sombras · <code>.shadow-*</code></h3>
    <DemoBlock :source="utilityShadowSrc"><UtilityShadow /></DemoBlock>
    <h3>Opacidad · <code>.opacity-*</code></h3>
    <DemoBlock :source="utilityOpacitySrc"><UtilityOpacity /></DemoBlock>
    <h3>Object fit · <code>.object-fit-*</code></h3>
    <DemoBlock :source="utilityObjectFitSrc"><UtilityObjectFit /></DemoBlock>
    <table class="ds-ref mt-10">
      <tbody>
        <tr><td>Display</td><td><code>d-flex · d-inline-flex · d-block · d-grid · d-none</code> (+ <code>d-md-*</code>)</td></tr>
        <tr><td>Flex</td><td><code>flex-column · flex-wrap · align-items-* · justify-content-* · flex-1 · flex-fill · min-w-0</code></td></tr>
        <tr><td>Float</td><td><code>float-start · float-end · float-none</code> (+ <code>float-md-*</code>)</td></tr>
        <tr><td>Spacing</td><td><code>m/p · mt/mb/ms/me/mx/my · -0..5 (rem)</code> + px heredados <code>mt-8 · gap-12 · p-16</code></td></tr>
        <tr><td>Sizing</td><td><code>w-25/50/75/100/auto · w-70/120/200… · min-w-* · max-w-* · h-100/240/300</code></td></tr>
        <tr><td>Texto</td><td><code>text-start/center/end · text-nowrap · text-truncate · fs-* · fw-* · lh-*</code></td></tr>
        <tr><td>Bordes</td><td><code>border · border-top/end/bottom/start · border-0 · rounded-1/2/3 · rounded-pill/circle</code></td></tr>
        <tr><td>Posición</td><td><code>position-relative/absolute/fixed · top-0 · end-0 · inset-0 · translate-middle</code></td></tr>
        <tr><td>Overflow</td><td><code>overflow-hidden/auto/scroll/visible · overflow-x-* · overflow-y-*</code></td></tr>
        <tr><td>Visibilidad</td><td><code>visible · invisible · visually-hidden</code></td></tr>
        <tr><td>Z-index</td><td><code>z-n1 · z-0 · z-1 · z-2 · z-3</code></td></tr>
        <tr><td>Vertical align</td><td><code>align-top/middle/bottom/baseline/text-top/text-bottom</code></td></tr>
        <tr><td>Interacción</td><td><code>user-select-none/all/auto · pe-none · pe-auto · cursor-pointer</code></td></tr>
      </tbody>
    </table>
  </DocSection>
</template>
