<script setup lang="ts">
// Estructura del catálogo: barra superior + índice lateral + contenido (slot).
import type { CatalogGroup } from '../catalog/registry'
import CatalogTopbar from './CatalogTopbar.vue'
import CatalogSidebar from './CatalogSidebar.vue'

defineProps<{ groups: CatalogGroup[] }>()
</script>

<template>
  <div class="min-vh-100">
    <CatalogTopbar />
    <div class="sidebar-layout">
      <CatalogSidebar :groups="groups" />
      <main class="sidebar-layout-main"><slot /></main>
    </div>
  </div>
</template>
