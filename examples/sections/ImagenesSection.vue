<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Images from '../demos/imagenes/Images.vue'
import imagesSrc from '../demos/imagenes/Images.vue?raw'
</script>

<template>
  <DocSection id="imagenes" title="Imágenes y figuras">
    <template #lead><code>.img-fluid</code> (responsive), <code>.img-thumbnail</code> (marco) y <code>.figure</code> con pie.</template>
    <DemoBlock :source="imagesSrc"><Images /></DemoBlock>
  </DocSection>
</template>
