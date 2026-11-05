<script setup lang="ts">
// Tarjeta global (.card). Título opcional con icono vía slot.
defineProps<{ title?: string }>()
</script>

<template>
  <div class="card">
    <h3 v-if="title || $slots.title">
      <slot name="title">{{ title }}</slot>
    </h3>
    <slot />
  </div>
</template>
