<script setup lang="ts">
import { ref } from 'vue'

const modalOpen = ref(false)
</script>

<template>
  <button class="btn btn-primary" @click="modalOpen = true">Abrir modal</button>
  <div class="modal-bg" :class="{ on: modalOpen }" @click.self="modalOpen = false">
    <div class="modal sm">
      <div class="modal-titlebar">Editar registro <span class="modal-close" @click="modalOpen = false">×</span></div>
      <div class="row g-3">
        <div class="col-12"><label class="form-label">Nombre</label><input class="form-control" value="Elemento A"></div>
        <div class="col-12"><label class="form-label">Notas</label><textarea class="form-control" rows="2" placeholder="Observaciones…"></textarea></div>
      </div>
      <div class="mfoot">
        <button class="btn btn-outline-secondary" @click="modalOpen = false">Cancelar</button>
        <button class="btn btn-primary" @click="modalOpen = false">Guardar</button>
      </div>
    </div>
  </div>
</template>
