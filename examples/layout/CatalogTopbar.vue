<script setup lang="ts">
// Barra superior del catálogo: título, prueba de tipografía y cambio de tema.
import { Icon } from '@/components'
import { useTheme } from '@/store/useTheme'
import TypographyPicker from '../components/TypographyPicker.vue'

const { isDark, toggle } = useTheme()
</script>

<template>
  <header class="topbar">
    <h1 class="topbar-title">Sistema de diseño</h1>
    <span class="text-muted fs-12">Clases globales · tokens · componentes</span>
    <div class="ms-auto"><TypographyPicker /></div>
    <button type="button" class="btn btn-outline-secondary btn-sm" @click="toggle">
      <Icon :name="isDark ? 'sun' : 'moon'" /> {{ isDark ? 'Oscuro' : 'Claro' }}
    </button>
  </header>
</template>
