<script setup lang="ts">
// Input numérico entero con separador de miles localizado (es-BO '.'; en-US ','; fr espacio).
// Muestra el valor agrupado según el idioma activo pero emite el valor CRUDO (solo dígitos)
// para enviarlo al backend. Reactivo en caliente: el display lee el locale en cada render.
import { computed } from 'vue'
import { formatInteger } from '@/app/i18n/numbers'

const props = defineProps<{ modelValue: string | number; placeholder?: string; disabled?: boolean }>()
const emit = defineEmits<{ 'update:modelValue': [string] }>()

const display = computed(() => {
  const raw = String(props.modelValue ?? '').replace(/\D/g, '')
  if (!raw) return ''
  return formatInteger(Number(raw), '')
})

function onInput(e: Event) {
  const raw = (e.target as HTMLInputElement).value.replace(/\D/g, '')
  emit('update:modelValue', raw)
}
</script>

<template>
  <input
    class="form-control"
    :value="display"
    :placeholder="placeholder"
    :disabled="disabled"
    inputmode="numeric"
    @input="onInput"
  >
</template>
