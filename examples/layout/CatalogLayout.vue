<script setup lang="ts">
// Estructura del catálogo: topbar + índice lateral + contenido (slot).
import type { CatalogGroup } from '../catalog/registry'
import CatalogTopbar from './CatalogTopbar.vue'
import CatalogSidebar from './CatalogSidebar.vue'

defineProps<{ groups: CatalogGroup[] }>()
</script>

<template>
  <div class="ds-page">
    <CatalogTopbar />
    <div class="ds-layout">
      <CatalogSidebar :groups="groups" />
      <main class="ds-main"><slot /></main>
    </div>
  </div>
</template>
