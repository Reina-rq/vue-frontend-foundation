<script setup lang="ts">
import { Button, Icon } from '@/components'
</script>

<template>
  <Button>Primario</Button>
  <Button variant="outline-secondary">Secundario</Button>
  <Button variant="success"><Icon name="check" /> Guardar</Button>
  <Button variant="danger" size="sm">Eliminar</Button>
  <Button variant="outline-primary" size="lg">Grande</Button>
  <Button variant="link">Enlace</Button>
  <Button type="submit" disabled>Deshabilitado</Button>
</template>
