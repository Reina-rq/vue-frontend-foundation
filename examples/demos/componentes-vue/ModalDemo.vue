<script setup lang="ts">
import { ref } from 'vue'
import { Modal } from '@/components'

type ModalSize = 'sm' | 'lg' | 'xl' | undefined

const open = ref(false)
const size = ref<ModalSize>(undefined)

function openWith(value: ModalSize): void {
  size.value = value
  open.value = true
}
</script>

<template>
  <button class="btn btn-primary" @click="openWith(undefined)">Normal</button>
  <button class="btn btn-outline-secondary" @click="openWith('sm')">sm</button>
  <button class="btn btn-outline-secondary" @click="openWith('lg')">lg</button>
  <button class="btn btn-outline-secondary" @click="openWith('xl')">xl</button>

  <Modal v-model:open="open" title="Título del modal" :size="size">
    <p class="fs-13">Contenido del modal (tamaño: {{ size ?? 'normal' }}).</p>
    <div class="mt-12">
      <label class="form-label">Campo</label>
      <input class="form-control" placeholder="Escribe algo…">
    </div>
    <template #footer>
      <button class="btn btn-outline-secondary" @click="open = false">Cancelar</button>
      <button class="btn btn-primary" @click="open = false">Guardar</button>
    </template>
  </Modal>
</template>
