<script setup lang="ts">
// Requiere <NotificationHost /> montado una vez en la raíz de la app.
import { useNotify } from '@/store/useNotify'

const notify = useNotify()
</script>

<template>
  <button class="btn btn-success" @click="notify.success('Guardado', 'El registro se guardó correctamente.')">success</button>
  <button class="btn btn-danger" @click="notify.error('Error', 'No se pudo guardar.')">error</button>
  <button class="btn btn-warning" @click="notify.warning('Atención')">warning</button>
  <button class="btn btn-info" @click="notify.info('Información')">info</button>
</template>
