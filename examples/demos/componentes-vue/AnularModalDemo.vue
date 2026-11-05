<script setup lang="ts">
import { ref } from 'vue'
import { AnularModal } from '@/components'

const open = ref(false)
const confirmed = ref(false)
</script>

<template>
  <button class="btn btn-outline-danger" @click="open = true">Anular registro</button>
  <span v-if="confirmed" class="badge badge-danger">Evento confirm recibido</span>
  <AnularModal v-model:open="open" num="REG-0001" @confirm="confirmed = true" />
</template>
