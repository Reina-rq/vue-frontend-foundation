<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import ButtonVariants from '../demos/botones/ButtonVariants.vue'
import buttonVariantsSrc from '../demos/botones/ButtonVariants.vue?raw'
import ButtonOutline from '../demos/botones/ButtonOutline.vue'
import buttonOutlineSrc from '../demos/botones/ButtonOutline.vue?raw'
import ButtonSizes from '../demos/botones/ButtonSizes.vue'
import buttonSizesSrc from '../demos/botones/ButtonSizes.vue?raw'
import ButtonGroup from '../demos/botones/ButtonGroup.vue'
import buttonGroupSrc from '../demos/botones/ButtonGroup.vue?raw'
import ButtonAdd from '../demos/botones/ButtonAdd.vue'
import buttonAddSrc from '../demos/botones/ButtonAdd.vue?raw'
</script>

<template>
  <DocSection id="botones" title="Botones">
    <template #lead><code>.btn</code> + variante. Tamaños <code>.btn-sm</code> / <code>.btn-lg</code>.</template>
    <h3>Variantes sólidas</h3>
    <DemoBlock :source="buttonVariantsSrc"><ButtonVariants /></DemoBlock>
    <h3>Outline y deshabilitado</h3>
    <DemoBlock :source="buttonOutlineSrc"><ButtonOutline /></DemoBlock>
    <h3>Tamaños e icono</h3>
    <DemoBlock :source="buttonSizesSrc"><ButtonSizes /></DemoBlock>
    <h3>Grupos · <code>.btn-group</code> / <code>.btn-toolbar</code></h3>
    <DemoBlock :source="buttonGroupSrc"><ButtonGroup /></DemoBlock>
    <h3>Acción y cancelar · <code>.addbtn</code> / <code>.btn-cancel</code></h3>
    <DemoBlock :source="buttonAddSrc"><ButtonAdd /></DemoBlock>
  </DocSection>
</template>
