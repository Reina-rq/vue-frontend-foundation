<script setup lang="ts">
import { ref } from 'vue'

const mselOpts = ['Opción A', 'Opción B', 'Opción C', 'Opción D']
const mselOneOpen = ref(false)
const mselOne = ref('')
</script>

<template>
  <div class="msel min-w-220" :class="{ open: mselOneOpen }">
    <div class="msel-field" @click="mselOneOpen = !mselOneOpen">
      <span class="msel-lbl" :class="{ ph: !mselOne }">{{ mselOne || 'Seleccionar…' }}</span>
      <svg class="ic"><use href="#i-chev" /></svg>
    </div>
    <div class="msel-pop">
      <label v-for="o in mselOpts" :key="o"><input type="radio" name="ds-msel-one" :value="o" v-model="mselOne" @change="mselOneOpen = false"> {{ o }}</label>
    </div>
  </div>
</template>
