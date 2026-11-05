<script setup lang="ts">
// Catálogo del sistema de diseño. Las secciones y su orden vienen del registro
// (catalog/registry.ts); cada sección compone sus demos (demos/<sección>/*.vue).
import { catalog } from '../catalog/registry'
import CatalogLayout from '../layout/CatalogLayout.vue'
</script>

<template>
  <CatalogLayout :groups="catalog">
    <template v-for="group in catalog" :key="group.title">
      <component :is="section.component" v-for="section in group.sections" :key="section.id" />
    </template>
  </CatalogLayout>
</template>
