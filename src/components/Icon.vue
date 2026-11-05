<script setup lang="ts">
// Icono SVG reutilizable. Usa el sprite (IconSprite.vue) vía <use>.
// Uso: <Icon name="grid" />  →  <svg class="ic"><use href="#i-grid"/></svg>
defineProps<{ name: string }>()
</script>

<template>
  <svg class="ic"><use :href="`#i-${name}`" /></svg>
</template>
