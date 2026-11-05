<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const mselOpts = ['Opción A', 'Opción B', 'Opción C', 'Opción D']
const mselOpen = ref(false)
const mselSel = reactive<Record<string, boolean>>({})
const mselLabel = computed(() => {
  const v = mselOpts.filter((o) => mselSel[o])
  return v.length ? v.join(', ') : 'Seleccionar…'
})
const mselPh = computed(() => !mselOpts.some((o) => mselSel[o]))
</script>

<template>
  <div class="msel min-w-220" :class="{ open: mselOpen }">
    <div class="msel-field" @click="mselOpen = !mselOpen">
      <span class="msel-lbl" :class="{ ph: mselPh }">{{ mselLabel }}</span>
      <svg class="ic"><use href="#i-chev" /></svg>
    </div>
    <div class="msel-pop">
      <label v-for="o in mselOpts" :key="o"><input type="checkbox" v-model="mselSel[o]"> {{ o }}</label>
    </div>
  </div>
</template>
