<script setup lang="ts">
// Raíz del catálogo: monta una sola vez los hosts globales (sprite de iconos,
// notificaciones y visor de impresión) y la guía de estilos.
import { IconSprite, NotificationHost, PrintDoc } from '@/components'
import DesignSystemPage from './pages/DesignSystemPage.vue'
</script>

<template>
  <IconSprite />
  <DesignSystemPage />
  <NotificationHost />
  <PrintDoc />
</template>
