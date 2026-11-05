<script setup lang="ts">
interface Breakpoint {
  name: string
  min: string
  device: string
}

const breakpoints: Breakpoint[] = [
  { name: 'sm', min: '≥ 576px', device: 'Móvil grande' },
  { name: 'md', min: '≥ 768px', device: 'Tablet' },
  { name: 'lg', min: '≥ 992px', device: 'Escritorio' },
  { name: 'xl', min: '≥ 1200px', device: 'Escritorio grande' },
  { name: 'xxl', min: '≥ 1400px', device: 'Muy grande' },
]
</script>

<template>
  <table class="ds-ref">
    <tbody>
      <tr v-for="b in breakpoints" :key="b.name">
        <td>{{ b.name }}</td>
        <td><code>{{ b.min }}</code> — {{ b.device }}</td>
      </tr>
    </tbody>
  </table>
</template>
