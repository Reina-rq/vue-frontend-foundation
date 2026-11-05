<script setup lang="ts">
// Índice lateral: un grupo por categoría y un enlace (ancla) por sección.
import type { CatalogGroup } from '../catalog/registry'

defineProps<{ groups: CatalogGroup[] }>()
</script>

<template>
  <aside class="sidebar-layout-aside">
    <nav v-for="group in groups" :key="group.title" class="sidebar-nav">
      <span class="sidebar-nav-title">{{ group.title }}</span>
      <a v-for="section in group.sections" :key="section.id" :href="`#${section.id}`" class="sidebar-nav-link">
        {{ section.label }}
        <span v-if="section.legacy" class="badge badge-light">legacy</span>
      </a>
    </nav>
  </aside>
</template>
