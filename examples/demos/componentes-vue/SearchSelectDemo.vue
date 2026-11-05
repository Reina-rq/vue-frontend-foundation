<script setup lang="ts">
import { ref } from 'vue'
import { SearchSelect } from '@/components'

// `type` (no interface): SearchSelect recibe opciones como Record<string, unknown>.
type Estado = {
  id: number
  name: string
  color: string
}

const estados: Estado[] = [
  { id: 1, name: 'Activo', color: 'var(--color-success)' },
  { id: 2, name: 'En revisión', color: 'var(--color-warning)' },
  { id: 3, name: 'Inactivo', color: 'var(--color-danger)' },
]
const estado = ref<number | string | null>(null)
</script>

<template>
  <div class="min-w-240">
    <SearchSelect v-model="estado" :options="estados" placeholder="Estado">
      <template #option="{ option }">
        <span class="w-10 h-10 rounded-circle d-inline-block" :style="{ background: String(option.color) }" />
        {{ option.name }}
      </template>
    </SearchSelect>
  </div>
  <span class="fs-12 text-muted">v-model: {{ estado ?? 'null' }}</span>
</template>
