<script setup lang="ts">
import DocSection from '../components/DocSection.vue'
import DemoBlock from '../components/DemoBlock.vue'
import Calendar from '../demos/calendar/Calendar.vue'
import calendarSrc from '../demos/calendar/Calendar.vue?raw'
</script>

<template>
  <DocSection id="calendar" title="Calendar">
    <template #lead><code>.calendar</code> con cabecera y navegación, <code>.calendar-grid</code> de 7 columnas. Celdas: <code>.is-today</code>, <code>.is-selected</code>, <code>.is-muted</code>, <code>.is-weekend</code>. Eventos: <code>.calendar-event--primary|success|warning|danger|info</code>. En móvil los eventos pasan a barras de color.</template>
    <DemoBlock block full :source="calendarSrc"><Calendar /></DemoBlock>
  </DocSection>
</template>
