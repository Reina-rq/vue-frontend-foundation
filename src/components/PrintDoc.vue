<script setup lang="ts">
// Visor de impresión global. Se monta una vez en App.vue. Cuando un módulo llama
// usePrintDoc().open(opts), muestra el documento con el diseño del sistema (.print-doc) y
// permite Imprimir. Al imprimir, el layout se oculta (_print.scss) y queda solo el documento.
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { formatDate } from '@/app/i18n/dates'
import { usePrintDoc } from '@/store/usePrintDoc'

const { current, close } = usePrintDoc()
const { t } = useI18n()

function imprimir() {
  window.print()
}
// Fecha reactiva al idioma (es/en/fr/pt_BR/zh) via funcion global.
const fecha = computed(() => formatDate(new Date()))
const marca = computed(() => t('componentes.marca'))
</script>

<template>
  <div v-if="current" class="print-host">
    <div class="print-host-bar no-print">
      <button class="btn btn-outline-secondary" @click="close">{{ $t('componentes.cerrar') }}</button>
      <button class="btn btn-primary" @click="imprimir">{{ $t('componentes.imprimir') }}</button>
    </div>

    <div class="print-doc">
      <div class="hd"><b>{{ $t('componentes.marca') }}</b><span>{{ $t('componentes.documento') }}</span></div>
      <h1>{{ current.title }}</h1>
      <div v-if="current.subtitle" class="sub">{{ current.subtitle }}</div>
      <div class="rule"></div>

      <template v-for="(s, i) in current.sections" :key="i">
        <h2>{{ s.heading }}</h2>
        <div v-if="s.rows">
          <div v-for="(r, j) in s.rows" :key="j" class="kv"><b>{{ r.label }}</b><span>{{ r.value }}</span></div>
        </div>
        <table v-if="s.table">
          <thead><tr><th v-for="(h, hi) in s.table.heads" :key="hi">{{ h }}</th></tr></thead>
          <tbody>
            <tr v-for="(row, ri) in s.table.rows" :key="ri">
              <td v-for="(c, ci) in row" :key="ci" :style="ci > 1 ? 'text-align:right' : undefined">{{ c }}</td>
            </tr>
          </tbody>
        </table>
      </template>

      <div v-if="current.total" class="kv kv-total"><b>{{ current.total.label }}</b><span>{{ current.total.value }}</span></div>
      <div class="ft">{{ $t('componentes.generado_por', { marca, fecha }) }}</div>
    </div>
  </div>
</template>

<style scoped>
.print-host { position: fixed; inset: 0; z-index: 3000; background: #f3f4f6; overflow: auto; padding: 18px; }
.print-host-bar { max-width: 780px; margin: 0 auto 12px; display: flex; justify-content: flex-end; gap: 9px; }
.kv-total { border: 0; border-top: 2px solid var(--primary); margin-top: 4px; }
.kv-total b { width: auto; flex: 1; text-align: right; padding-right: 14px; color: var(--primary); }
.kv-total span { font-weight: 800; color: var(--primary); }
@media print {
  .print-host { position: static; padding: 0; background: #fff; overflow: visible; }
}
</style>
