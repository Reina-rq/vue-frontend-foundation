<script setup lang="ts">
// Select global con buscador (diseño genérico .msel del sistema). Reemplaza al <select>
// nativo cuando se necesita render personalizado de las opciones (ej. una etiqueta con
// color) que el <option> nativo no permite. El contenido de cada opción y del valor
// seleccionado se define por slots (#option / #selected), así el diseño es dinámico.
// El popup se teletransporta al body para que no lo recorte el overflow de un modal.
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import { Icon } from '@/components'

type OptionValue = number | string | null
type OptionItem = Record<string, unknown>

const props = withDefaults(
  defineProps<{
    modelValue: OptionValue
    options: OptionItem[]
    /** Clave del valor (id) en cada opción. */
    valueKey?: string
    /** Clave del texto a mostrar/buscar por defecto. */
    labelKey?: string
    /** Claves adicionales sobre las que filtra el buscador. */
    searchKeys?: string[]
    placeholder?: string
    searchPlaceholder?: string
    disabled?: boolean
  }>(),
  {
    valueKey: 'id',
    labelKey: 'name',
    searchKeys: () => [],
    placeholder: undefined,
    searchPlaceholder: undefined,
    disabled: false,
  },
)
const emit = defineEmits<{ 'update:modelValue': [OptionValue] }>()

const { t } = useI18n()
// Fallbacks reactivos: si el padre no pasa placeholder, se traducen y reaccionan al cambio de idioma.
const placeholderText = computed(() => props.placeholder ?? t('componentes.seleccionar'))
const searchPlaceholderText = computed(() => props.searchPlaceholder ?? t('componentes.buscar'))

const root = ref<HTMLElement | null>(null)
const field = ref<HTMLElement | null>(null)
const pop = ref<HTMLElement | null>(null)
const open = ref(false)
const search = ref('')
const popStyle = ref<Record<string, string>>({})

function valueOf(option: OptionItem): OptionValue {
  return option[props.valueKey] as OptionValue
}
function labelOf(option: OptionItem): string {
  return String(option[props.labelKey] ?? '')
}

const selected = computed(() => props.options.find((o) => valueOf(o) === props.modelValue) ?? null)
const filtered = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return props.options
  const keys = [props.labelKey, ...props.searchKeys]
  return props.options.filter((o) =>
    keys.some((k) => String(o[k] ?? '').toLowerCase().includes(q)),
  )
})

// Posiciona el popup (fixed) anclado al campo. Decide si abre hacia abajo o hacia arriba
// según el espacio disponible en la ventana, y lo reubica al hacer scroll/resize.
const MARGIN = 4
function positionPop() {
  const r = field.value?.getBoundingClientRect()
  if (!r) return
  const popHeight = pop.value?.offsetHeight ?? 0
  const spaceBelow = window.innerHeight - r.bottom
  const spaceAbove = r.top
  // Abre hacia arriba solo si abajo no cabe y arriba hay más espacio.
  const openUp = spaceBelow < popHeight + MARGIN && spaceAbove > spaceBelow
  // min-width ancla al campo; sin `width` fijo el popup encoge-a-contenido y así crece con
  // el texto más largo de las opciones (comodidad al buscar). maxWidth evita salir del viewport.
  popStyle.value = {
    left: `${r.left}px`,
    minWidth: `${Math.max(r.width, 240)}px`,
    maxWidth: `${window.innerWidth - r.left - MARGIN}px`,
    top: openUp ? `${Math.max(MARGIN, r.top - popHeight - MARGIN)}px` : `${r.bottom + MARGIN}px`,
  }
}

async function toggle() {
  if (props.disabled) return
  open.value = !open.value
  if (open.value) {
    search.value = ''
    // Dos ticks: el primero monta el popup, el segundo posiciona ya con su alto real.
    await nextTick()
    positionPop()
    await nextTick()
    positionPop()
  }
}
function pick(value: OptionValue) {
  emit('update:modelValue', value)
  open.value = false
}

// Cierre por clic-fuera en `pointerdown` (no en `click`): así no choca con el `click` que
// abre el campo ni con el que selecciona una opción (evita el doble disparo).
function onDocPointerDown(e: PointerEvent) {
  if (!open.value) return
  const target = e.target as Node
  if (root.value?.contains(target) || pop.value?.contains(target)) return
  open.value = false
}
// Scroll: si es dentro de la lista del popup, no hacemos nada (scroll interno). Si es de
// la página/modal, reubicamos el popup para que siga al campo (no se cierra).
function onScroll(e: Event) {
  if (!open.value) return
  if (pop.value?.contains(e.target as Node)) return
  positionPop()
}
function onResize() {
  if (open.value) positionPop()
}

onMounted(() => {
  document.addEventListener('pointerdown', onDocPointerDown, true)
  window.addEventListener('scroll', onScroll, true)
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDocPointerDown, true)
  window.removeEventListener('scroll', onScroll, true)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <div ref="root" class="msel" :class="{ open, disabled }">
    <div ref="field" class="msel-field" @click="toggle">
      <span class="msel-lbl" :class="{ ph: !selected }">
        <slot v-if="selected" name="selected" :option="selected">{{ labelOf(selected) }}</slot>
        <template v-else>{{ placeholderText }}</template>
      </span>
      <Icon name="chev" class="icon-14" />
    </div>

    <Teleport to="body">
      <div v-if="open" ref="pop" class="ss-pop" :style="popStyle">
        <input v-model="search" class="form-control form-control-sm mb-6" :placeholder="searchPlaceholderText" @click.stop>
        <div class="ss-list">
          <div
            v-for="o in filtered"
            :key="String(valueOf(o))"
            class="ss-opt"
            :class="{ on: modelValue === valueOf(o) }"
            @click="pick(valueOf(o))"
          >
            <slot name="option" :option="o">{{ labelOf(o) }}</slot>
          </div>
          <div v-if="!filtered.length" class="ss-empty">{{ $t('componentes.sin_resultados') }}</div>
        </div>
        <!-- Acción de limpiar: separada de la lista (no es una opción). Solo cuando hay algo elegido. -->
        <div v-if="modelValue !== null" class="ss-clear" @click="pick(null)">{{ $t('componentes.quitar_seleccion') }}</div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.msel.disabled .msel-field { opacity: .6; cursor: not-allowed; }
</style>

<style>
/* Popup teletransportado al body: mismo look que .msel-pop genérico, pero posición fija
   para que no lo recorte el overflow de un modal con scroll. */
.ss-pop {
  position: fixed; z-index: 2000; background: var(--color-surface); border: 1px solid var(--line);
  border-radius: 8px; box-shadow: 0 10px 28px rgba(0, 0, 0, 0.14); padding: 6px;
}
.ss-pop .ss-list { max-height: 240px; overflow-y: auto; }
.ss-pop .ss-opt {
  display: flex; align-items: center; gap: 9px; padding: 8px 9px; border-radius: 6px;
  font-size: 13px; cursor: pointer; white-space: nowrap;
}
/* Hover: solo fondo. Seleccionada: solo color (sin fondo ni negrita) para que NO se
   confunda con la opción bajo el cursor (antes parecían 2 seleccionadas). */
.ss-pop .ss-opt:hover { background: var(--bg); }
.ss-pop .ss-opt.on { color: var(--color-text); font-weight: 700; }
/* "Quitar selección": acción separada de la lista (borde superior), no una opción más. */
.ss-pop .ss-clear {
  margin-top: 4px; padding: 8px 9px; border-top: 1px solid var(--line);
  font-size: 12.5px; color: var(--color-muted); cursor: pointer; border-radius: 6px;
}
.ss-pop .ss-clear:hover { background: var(--bg); }
.ss-pop .ss-empty { padding: 8px 9px; font-size: 12.5px; color: var(--color-muted); }
</style>
