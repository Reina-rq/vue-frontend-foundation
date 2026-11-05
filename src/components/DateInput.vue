<script setup lang="ts">
// Campo de fecha "inteligente": permite ESCRIBIR o PEGAR la fecha en varios formatos
// (dd/mm/aaaa, aaaa-mm-dd, dd-mm-aaaa, con `/ - .` o espacio; también ISO con hora) y la
// adapta al valor canónico `yyyy-mm-dd`. Si el texto no es una fecha válida, NO convierte:
// marca el campo como inválido y deja el modelo como estaba.
// El icono de calendario abre un selector propio (.datepicker) con el diseño del sistema
// (el calendario nativo del navegador no se puede estilizar). El popup se teletransporta
// al body para que no lo recorte el overflow de un modal.
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import Icon from './Icon.vue'
import { currentBcp47, datePlaceholder, displayDateForInput, parseInputDate } from '@app/i18n/dates'

const props = withDefaults(
  defineProps<{ modelValue: string; disabled?: boolean; placeholder?: string }>(),
  { disabled: false, placeholder: '' },
)
const emit = defineEmits<{ 'update:modelValue': [string] }>()

// Placeholder reactivo al idioma (salvo override explicito del padre).
const ph = computed(() => props.placeholder || datePlaceholder())

const text = ref('')
const invalid = ref(false)

// Delega en la funcion global (locale-aware: en MM/DD, zh YYYY/MM, resto DD/MM).
// Devuelve yyyy-mm-dd si se puede interpretar, '' si está vacío, o null si es inválida.
function parseDate(input: string): string | null {
  return parseInputDate(input)
}
// yyyy-mm-dd -> texto de edicion segun idioma.
function toDisplay(ymd: string): string {
  return displayDateForInput(ymd)
}
// Valor canónico yyyy-mm-dd (sin hora) del modelo.
const canonical = computed(() => {
  const m = (props.modelValue ?? '').match(/^(\d{4})-(\d{2})-(\d{2})/)
  return m ? `${m[1]}-${m[2]}-${m[3]}` : ''
})

text.value = toDisplay(props.modelValue)
watch(
  () => props.modelValue,
  (v) => {
    if (parseDate(text.value) !== v) text.value = toDisplay(v)
    invalid.value = false
  },
)
// Al cambiar de idioma se re-renderiza el texto valido al formato local
// (si el texto es invalido se deja intacto para no pisar la edicion).
watch(ph, () => {
  if (parseDate(text.value) !== null) {
    text.value = toDisplay(props.modelValue)
    invalid.value = false
  }
})

// Al salir del campo o con Enter: intenta convertir. Si está mal, no adapta.
function commit(): void {
  const parsed = parseDate(text.value)
  if (parsed === null) {
    invalid.value = true
    return
  }
  invalid.value = false
  text.value = toDisplay(parsed)
  emit('update:modelValue', parsed)
}

function setValue(ymd: string): void {
  invalid.value = false
  text.value = toDisplay(ymd)
  emit('update:modelValue', ymd)
}

// ---------------- Selector propio ----------------
const pad = (n: number) => String(n).padStart(2, '0')
const ymdOf = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
const todayYmd = () => ymdOf(new Date())

const root = ref<HTMLElement | null>(null)
const pop = ref<HTMLElement | null>(null)
const open = ref(false)
const popStyle = ref<Record<string, string>>({})
const viewYear = ref(new Date().getFullYear())
const viewMonth = ref(new Date().getMonth())

// Primer día de la semana: domingo en inglés (US), lunes en el resto.
const firstDay = computed(() => (currentBcp47().startsWith('en') ? 0 : 1))
const monthTitle = computed(() =>
  new Intl.DateTimeFormat(currentBcp47(), { month: 'long', year: 'numeric' }).format(new Date(viewYear.value, viewMonth.value, 1)),
)
const weekdays = computed(() => {
  const fmt = new Intl.DateTimeFormat(currentBcp47(), { weekday: 'short' })
  // 2024-01-07 fue domingo.
  return Array.from({ length: 7 }, (_, i) => fmt.format(new Date(2024, 0, 7 + firstDay.value + i)).replace('.', ''))
})
const days = computed(() => {
  const first = new Date(viewYear.value, viewMonth.value, 1)
  const offset = (first.getDay() - firstDay.value + 7) % 7
  const today = todayYmd()
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(viewYear.value, viewMonth.value, 1 - offset + i)
    const ymd = ymdOf(d)
    return { ymd, day: d.getDate(), muted: d.getMonth() !== viewMonth.value, today: ymd === today, selected: ymd === canonical.value }
  })
})

function moveMonth(delta: number): void {
  const d = new Date(viewYear.value, viewMonth.value + delta, 1)
  viewYear.value = d.getFullYear()
  viewMonth.value = d.getMonth()
}

const MARGIN = 4
function positionPop(): void {
  const r = root.value?.getBoundingClientRect()
  if (!r) return
  const h = pop.value?.offsetHeight ?? 0
  const w = pop.value?.offsetWidth ?? 0
  const below = window.innerHeight - r.bottom
  const openUp = below < h + MARGIN && r.top > below
  const left = Math.min(r.left, window.innerWidth - w - MARGIN)
  popStyle.value = {
    left: `${Math.max(MARGIN, left)}px`,
    top: openUp ? `${Math.max(MARGIN, r.top - h - MARGIN)}px` : `${r.bottom + MARGIN}px`,
  }
}

async function togglePicker(): Promise<void> {
  if (props.disabled) return
  open.value = !open.value
  if (!open.value) return
  // Abre en el mes de la fecha elegida (o el actual).
  const base = canonical.value ? new Date(`${canonical.value}T00:00:00`) : new Date()
  viewYear.value = base.getFullYear()
  viewMonth.value = base.getMonth()
  await nextTick()
  positionPop()
  await nextTick()
  positionPop()
}
function pick(ymd: string): void {
  setValue(ymd)
  open.value = false
}
function pickToday(): void {
  pick(todayYmd())
}
function clear(): void {
  pick('')
}

function onDocPointerDown(e: PointerEvent): void {
  if (!open.value) return
  const t = e.target as Node
  if (root.value?.contains(t) || pop.value?.contains(t)) return
  open.value = false
}
function onScroll(e: Event): void {
  if (!open.value || pop.value?.contains(e.target as Node)) return
  positionPop()
}
function onResize(): void {
  if (open.value) positionPop()
}
function onKey(e: KeyboardEvent): void {
  if (open.value && e.key === 'Escape') open.value = false
}
onMounted(() => {
  document.addEventListener('pointerdown', onDocPointerDown, true)
  document.addEventListener('keydown', onKey)
  window.addEventListener('scroll', onScroll, true)
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocPointerDown, true)
  document.removeEventListener('keydown', onKey)
  window.removeEventListener('scroll', onScroll, true)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div ref="root" class="position-relative">
    <input
      class="form-control pe-36"
      :class="{ 'is-invalid': invalid }"
      v-model="text"
      :placeholder="ph"
      :disabled="disabled"
      inputmode="numeric"
      autocomplete="off"
      @blur="commit"
      @keyup.enter="commit"
    >
    <span class="input-icon-end" :class="{ 'is-active': open }" @click="togglePicker"><Icon name="cal" /></span>
    <div v-if="invalid" class="invalid-feedback">{{ $t('componentes.fecha_invalida') }}</div>

    <Teleport to="body">
      <div v-if="open" ref="pop" class="datepicker" :style="popStyle" role="dialog">
        <div class="datepicker-header">
          <button type="button" class="datepicker-nav" :aria-label="$t('componentes.mes_anterior')" @click="moveMonth(-1)"><Icon name="chevron-left" /></button>
          <div class="datepicker-title">{{ monthTitle }}</div>
          <button type="button" class="datepicker-nav" :aria-label="$t('componentes.mes_siguiente')" @click="moveMonth(1)"><Icon name="chevron-right" /></button>
        </div>
        <div class="datepicker-grid">
          <div v-for="w in weekdays" :key="w" class="datepicker-dow">{{ w }}</div>
          <button
            v-for="d in days"
            :key="d.ymd"
            type="button"
            class="datepicker-day"
            :class="{ 'is-muted': d.muted, 'is-today': d.today, 'is-selected': d.selected }"
            @click="pick(d.ymd)"
          >{{ d.day }}</button>
        </div>
        <div class="datepicker-footer">
          <button type="button" class="datepicker-link" @click="clear">{{ $t('componentes.borrar') }}</button>
          <button type="button" class="datepicker-link" @click="pickToday">{{ $t('componentes.hoy') }}</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>
