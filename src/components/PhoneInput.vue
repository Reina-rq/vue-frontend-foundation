<script setup lang="ts">
// Campo de teléfono con prefijo de país (código de marcación). El valor emitido es un
// único string "código número" (ej. "+591 3333"), que es lo que espera el backend en el
// campo `phone`. Al recibir un valor existente (edición) separa el prefijo del número.
// Diseño con `.input-group` global (mismo look que el resto de campos).
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = withDefaults(
  defineProps<{ modelValue: string; disabled?: boolean; placeholder?: string }>(),
  { disabled: false, placeholder: undefined },
)
const emit = defineEmits<{ 'update:modelValue': [string] }>()

const { t } = useI18n()
// Fallback reactivo al cambio de idioma cuando el padre no pasa placeholder.
const placeholderText = computed(() => props.placeholder ?? t('componentes.numero'))

// Códigos de marcación frecuentes (Bolivia primero, por defecto). Bandera en emoji.
interface Country {
  code: string
  flag: string
  name: string
}
const COUNTRIES: Country[] = [
  { code: '+591', flag: '🇧🇴', name: 'Bolivia' },
  { code: '+51', flag: '🇵🇪', name: 'Perú' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: '+593', flag: '🇪🇨', name: 'Ecuador' },
  { code: '+595', flag: '🇵🇾', name: 'Paraguay' },
  { code: '+598', flag: '🇺🇾', name: 'Uruguay' },
  { code: '+55', flag: '🇧🇷', name: 'Brasil' },
  { code: '+52', flag: '🇲🇽', name: 'México' },
  { code: '+34', flag: '🇪🇸', name: 'España' },
  { code: '+1', flag: '🇺🇸', name: 'EE. UU.' },
]
const DEFAULT_CODE = '+591'
// Para separar el prefijo se prueba el código más largo primero (+591 antes que +59…).
const BY_LENGTH = [...COUNTRIES].sort((a, b) => b.code.length - a.code.length)

const dialCode = ref(DEFAULT_CODE)
const number = ref('')

function parse(value: string): void {
  const v = (value ?? '').trim()
  if (v.startsWith('+')) {
    const match = BY_LENGTH.find((c) => v.startsWith(c.code))
    if (match) {
      dialCode.value = match.code
      number.value = v.slice(match.code.length).trim()
      return
    }
  }
  number.value = v
}
parse(props.modelValue)

function combined(): string {
  const n = number.value.trim()
  return n ? `${dialCode.value} ${n}` : ''
}
function emitChange(): void {
  emit('update:modelValue', combined())
}

// Si el valor externo cambia (p. ej. al cargar el registro en edición) y no coincide con
// lo que ya tenemos compuesto, re-separa prefijo + número.
watch(
  () => props.modelValue,
  (v) => {
    if (v !== combined()) parse(v)
  },
)
</script>

<template>
  <div class="input-group">
    <select
      class="form-select input-group-select"
      v-model="dialCode"
      :disabled="disabled"
      :title="$t('componentes.codigo_de_pais')"
      @change="emitChange"
    >
      <option v-for="c in COUNTRIES" :key="c.code" :value="c.code">{{ c.flag }} {{ c.code }}</option>
    </select>
    <input
      class="form-control"
      v-model="number"
      :disabled="disabled"
      :placeholder="placeholderText"
      inputmode="tel"
      @input="emitChange"
    >
  </div>
</template>
