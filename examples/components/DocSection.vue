<script setup lang="ts">
// Sección de documentación del catálogo: ancla (id), título, texto introductorio y contenido.
defineProps<{
  id: string
  title?: string
}>()
</script>

<template>
  <section :id="id" class="ds-section">
    <h2><slot name="title">{{ title }}</slot></h2>
    <p v-if="$slots.lead" class="ds-lead"><slot name="lead" /></p>
    <slot />
  </section>
</template>
