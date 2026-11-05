<script setup lang="ts">
// Índice lateral: un grupo por categoría y un enlace (ancla) por sección.
import type { CatalogGroup } from '../catalog/registry'

defineProps<{ groups: CatalogGroup[] }>()
</script>

<template>
  <aside class="ds-sidebar">
    <nav v-for="group in groups" :key="group.title" class="ds-navgroup">
      <b>{{ group.title }}</b>
      <a v-for="section in group.sections" :key="section.id" :href="`#${section.id}`">
        {{ section.label }}
        <span v-if="section.legacy" class="ds-tag">legacy</span>
      </a>
    </nav>
  </aside>
</template>
