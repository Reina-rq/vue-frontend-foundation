<script setup lang="ts">
// Selector de prueba de tipografía (solo catálogo): cambia en vivo los tokens
// --font-family-base y --font-size-base para comparar fuentes y tamaños.
// La elección final se fija en src/styles/themes/_light.scss (y en index.html la carga).
import { ref, watch } from 'vue'

const FALLBACK = "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
const fonts = ['Inter', 'DM Sans', 'Manrope', 'Plus Jakarta Sans', 'Nunito Sans', 'IBM Plex Sans', 'Source Sans 3', 'Figtree', 'Outfit', 'Roboto', 'Sistema']
const sizes = [12, 12.5, 13, 14, 15]
const KEY = 'ds_typography'

function read(): { font: string; size: number } {
  try {
    const v = JSON.parse(localStorage.getItem(KEY) ?? 'null')
    if (v && fonts.includes(v.font) && sizes.includes(v.size)) return v
  } catch {
    /* noop */
  }
  return { font: 'Inter', size: 13 }
}
const initial = read()
const font = ref(initial.font)
const size = ref(initial.size)

watch(
  [font, size],
  ([f, s]) => {
    const root = document.documentElement.style
    root.setProperty('--font-family-base', f === 'Sistema' ? FALLBACK : `'${f}', ${FALLBACK}`)
    root.setProperty('--font-size-base', `${s}px`)
    try {
      localStorage.setItem(KEY, JSON.stringify({ font: f, size: s }))
    } catch {
      /* noop */
    }
  },
  { immediate: true },
)
</script>

<template>
  <div class="d-flex align-items-center gap-8">
    <select v-model="font" class="form-select form-select-sm w-auto" title="Fuente">
      <option v-for="f in fonts" :key="f" :value="f">{{ f }}</option>
    </select>
    <select v-model.number="size" class="form-select form-select-sm w-auto" title="Tamaño base">
      <option v-for="s in sizes" :key="s" :value="s">{{ s }}px</option>
    </select>
  </div>
</template>
