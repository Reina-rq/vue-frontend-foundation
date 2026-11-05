<script setup lang="ts">
// Demo del calendario mensual (.calendar): navegación de mes, hoy, selección y eventos.
import { computed, ref } from 'vue'
import { currentBcp47 } from '@app/i18n/dates'

type Tone = 'primary' | 'success' | 'warning' | 'danger' | 'info'
interface CalEvent { day: number; title: string; tone: Tone }

const today = new Date()
const year = ref(today.getFullYear())
const month = ref(today.getMonth())
const selected = ref<string | null>(null)

// Eventos de ejemplo (se repiten en cualquier mes).
const EVENTS: CalEvent[] = [
  { day: 3, title: 'Reunión de equipo', tone: 'primary' },
  { day: 8, title: 'Entrega A', tone: 'success' },
  { day: 12, title: 'Revisión', tone: 'warning' },
  { day: 12, title: 'Llamada', tone: 'info' },
  { day: 12, title: 'Seguimiento', tone: 'primary' },
  { day: 19, title: 'Fecha límite', tone: 'danger' },
  { day: 24, title: 'Presentación', tone: 'info' },
]
const MAX_VISIBLE = 2

const title = computed(() =>
  new Intl.DateTimeFormat(currentBcp47(), { month: 'long', year: 'numeric' }).format(new Date(year.value, month.value, 1)),
)
// Lunes como primer día de la semana.
const weekdays = computed(() => {
  const fmt = new Intl.DateTimeFormat(currentBcp47(), { weekday: 'short' })
  return Array.from({ length: 7 }, (_, i) => fmt.format(new Date(2024, 0, 1 + i)))
})

const cells = computed(() => {
  const first = new Date(year.value, month.value, 1)
  const offset = (first.getDay() + 6) % 7
  const start = new Date(year.value, month.value, 1 - offset)
  return Array.from({ length: 42 }, (_, i) => {
    const d = new Date(start.getFullYear(), start.getMonth(), start.getDate() + i)
    const inMonth = d.getMonth() === month.value
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`
    return {
      key,
      day: d.getDate(),
      muted: !inMonth,
      weekend: d.getDay() === 0 || d.getDay() === 6,
      today: d.toDateString() === today.toDateString(),
      events: inMonth ? EVENTS.filter((e) => e.day === d.getDate()) : [],
    }
  })
})

function move(delta: number) {
  const d = new Date(year.value, month.value + delta, 1)
  year.value = d.getFullYear()
  month.value = d.getMonth()
}
function goToday() {
  year.value = today.getFullYear()
  month.value = today.getMonth()
}
</script>

<template>
  <div class="calendar w-100">
    <div class="calendar-header">
      <div class="calendar-title">{{ title }}</div>
      <div class="calendar-nav">
        <button type="button" class="calendar-nav-btn" aria-label="Mes anterior" @click="move(-1)"><svg class="ic"><use href="#i-chevron-left" /></svg></button>
        <button type="button" class="calendar-nav-btn" @click="goToday">Hoy</button>
        <button type="button" class="calendar-nav-btn" aria-label="Mes siguiente" @click="move(1)"><svg class="ic"><use href="#i-chevron-right" /></svg></button>
      </div>
    </div>
    <div class="calendar-grid">
      <div v-for="w in weekdays" :key="w" class="calendar-dow">{{ w }}</div>
      <div
        v-for="c in cells"
        :key="c.key"
        class="calendar-cell"
        :class="{ 'is-muted': c.muted, 'is-weekend': c.weekend, 'is-today': c.today, 'is-selected': selected === c.key }"
        @click="selected = c.key"
      >
        <span class="calendar-daynum">{{ c.day }}</span>
        <span v-for="(e, i) in c.events.slice(0, MAX_VISIBLE)" :key="i" class="calendar-event" :class="`calendar-event--${e.tone}`" :title="e.title">{{ e.title }}</span>
        <span v-if="c.events.length > MAX_VISIBLE" class="calendar-more">+{{ c.events.length - MAX_VISIBLE }} más</span>
      </div>
    </div>
  </div>
</template>
