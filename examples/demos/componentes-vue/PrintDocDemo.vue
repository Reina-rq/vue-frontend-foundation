<script setup lang="ts">
// Requiere <PrintDoc /> montado una vez en la raíz de la app.
import { Icon } from '@/components'
import { usePrintDoc, type DocOptions } from '@/store/usePrintDoc'

const printDoc = usePrintDoc()

const documento: DocOptions = {
  title: 'Documento de ejemplo',
  subtitle: 'Generado desde usePrintDoc().open()',
  sections: [
    { heading: 'Datos', rows: [{ label: 'Nombre', value: 'Elemento A' }, { label: 'Fecha', value: '04/11/2026' }] },
    { heading: 'Detalle', table: { heads: ['Ítem', 'Descripción', 'Cant.', 'Total'], rows: [['1', 'Elemento A', '2', '200,00'], ['2', 'Elemento B', '1', '150,00']] } },
  ],
  total: { label: 'Total', value: '350,00' },
}
</script>

<template>
  <button class="btn btn-primary" @click="printDoc.open(documento)"><Icon name="print" /> Abrir visor de impresión</button>
</template>
