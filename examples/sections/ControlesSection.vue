<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import ControlSearch from '../demos/controles/ControlSearch.vue'
import controlSearchSrc from '../demos/controles/ControlSearch.vue?raw'
import ControlChip from '../demos/controles/ControlChip.vue'
import controlChipSrc from '../demos/controles/ControlChip.vue?raw'
import ControlTgl from '../demos/controles/ControlTgl.vue'
import controlTglSrc from '../demos/controles/ControlTgl.vue?raw'
import ControlPhoto from '../demos/controles/ControlPhoto.vue'
import controlPhotoSrc from '../demos/controles/ControlPhoto.vue?raw'
import ControlAttach from '../demos/controles/ControlAttach.vue'
import controlAttachSrc from '../demos/controles/ControlAttach.vue?raw'
import ControlCat from '../demos/controles/ControlCat.vue'
import controlCatSrc from '../demos/controles/ControlCat.vue?raw'
import Segmented from '../demos/controles/Segmented.vue'
import segmentedSrc from '../demos/controles/Segmented.vue?raw'
import TabsContent from '../demos/controles/TabsContent.vue'
import tabsContentSrc from '../demos/controles/TabsContent.vue?raw'
</script>

<template>
  <DocSection id="controles" title="Controles propios">
    <template #lead>Controles a medida: búsqueda, chips, toggle, fotos, adjuntos, categorías, pestañas y segmentados.</template>
    <h3>Búsqueda · <code>.lsearch</code></h3>
    <DemoBlock :source="controlSearchSrc"><ControlSearch /></DemoBlock>
    <h3>Chips · <code>.chip</code></h3>
    <DemoBlock :source="controlChipSrc"><ControlChip /></DemoBlock>
    <h3>Toggle propio · <code>.tgl</code></h3>
    <DemoBlock :source="controlTglSrc"><ControlTgl /></DemoBlock>
    <h3>Foto y adjunto · <code>.photo</code> / <code>.attach</code></h3>
    <DemoBlock :source="controlPhotoSrc"><ControlPhoto /></DemoBlock>
    <DemoBlock :source="controlAttachSrc"><ControlAttach /></DemoBlock>
    <h3>Categorías · <code>.catlist</code> / <code>.catadd</code></h3>
    <DemoBlock block :source="controlCatSrc"><ControlCat /></DemoBlock>
    <h3>Segmentados · <code>.segbtns</code> (Vue)</h3>
    <DemoBlock :source="segmentedSrc"><Segmented /></DemoBlock>
    <h3>Pestañas simples con contenido · <code>.tabs</code> + <code>.tpane</code> (Vue)</h3>
    <DemoBlock block :source="tabsContentSrc"><TabsContent /></DemoBlock>
  </DocSection>
</template>
