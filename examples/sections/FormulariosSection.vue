<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import FieldsBasic from '../demos/formularios/FieldsBasic.vue'
import fieldsBasicSrc from '../demos/formularios/FieldsBasic.vue?raw'
import FieldTextarea from '../demos/formularios/FieldTextarea.vue'
import fieldTextareaSrc from '../demos/formularios/FieldTextarea.vue?raw'
import FieldSizes from '../demos/formularios/FieldSizes.vue'
import fieldSizesSrc from '../demos/formularios/FieldSizes.vue?raw'
import FieldChecks from '../demos/formularios/FieldChecks.vue'
import fieldChecksSrc from '../demos/formularios/FieldChecks.vue?raw'
import FieldRows from '../demos/formularios/FieldRows.vue'
import fieldRowsSrc from '../demos/formularios/FieldRows.vue?raw'
import FieldSpecial from '../demos/formularios/FieldSpecial.vue'
import fieldSpecialSrc from '../demos/formularios/FieldSpecial.vue?raw'
</script>

<template>
  <DocSection id="formularios" title="Form control / Select">
    <template #lead><code>.form-label</code>, <code>.form-control</code>, <code>.form-select</code>, <code>.form-text</code>.</template>
    <h3>Campos básicos</h3>
    <DemoBlock block :source="fieldsBasicSrc"><FieldsBasic /></DemoBlock>
    <h3>Textarea</h3>
    <DemoBlock block :source="fieldTextareaSrc"><FieldTextarea /></DemoBlock>
    <h3>Tamaños · <code>-sm</code> / <code>-lg</code></h3>
    <DemoBlock :source="fieldSizesSrc"><FieldSizes /></DemoBlock>
    <h3>Checks, radio y switch</h3>
    <DemoBlock :source="fieldChecksSrc"><FieldChecks /></DemoBlock>
    <h3>Filas especiales</h3>
    <DemoBlock block :source="fieldRowsSrc"><FieldRows /></DemoBlock>
    <h3>Select acento e icono al final</h3>
    <DemoBlock :source="fieldSpecialSrc"><FieldSpecial /></DemoBlock>
  </DocSection>
</template>
