<script setup lang="ts">
import { Card, Icon } from '@/components'
</script>

<template>
  <div class="row g-3 w-100">
    <div class="col-12 col-md-6">
      <Card title="Título">Contenido de la tarjeta.</Card>
    </div>
    <div class="col-12 col-md-6">
      <Card>
        <template #title><Icon name="info" /> Título con icono</template>
        Contenido de la tarjeta.
      </Card>
    </div>
  </div>
</template>
