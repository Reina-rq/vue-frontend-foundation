<script setup lang="ts">
import { ref } from 'vue'

const rng = ref(50)
</script>

<template>
  <input type="range" class="form-range max-w-260" min="0" max="100" v-model="rng">
  <span class="fw-700">{{ rng }}</span>
</template>
