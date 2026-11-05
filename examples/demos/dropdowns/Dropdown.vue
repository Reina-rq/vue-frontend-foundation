<script setup lang="ts">
// Demo de dropdowns (.dropdown): cierre por clic fuera / Escape, variantes de ítem y alineación.
import { onBeforeUnmount, onMounted, ref } from 'vue'

const open = ref<string | null>(null)
const root = ref<HTMLElement | null>(null)
const orden = ref('recientes')

function toggle(id: string) {
  open.value = open.value === id ? null : id
}
function onDoc(e: PointerEvent) {
  if (open.value && !root.value?.contains(e.target as Node)) open.value = null
}
function onKey(e: KeyboardEvent) {
  if (e.key === 'Escape') open.value = null
}
onMounted(() => {
  document.addEventListener('pointerdown', onDoc)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', onDoc)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="root" class="d-flex flex-wrap gap-12 align-items-start w-100">
    <!-- Acciones -->
    <div class="dropdown" :class="{ show: open === 'acciones' }">
      <button class="btn btn-outline-secondary dropdown-toggle" @click="toggle('acciones')">
        Acciones <svg class="ic"><use href="#i-chev" /></svg>
      </button>
      <div class="dropdown-menu" :class="{ show: open === 'acciones' }">
        <div class="dropdown-header">Registro</div>
        <button class="dropdown-item" @click="open = null"><svg class="ic"><use href="#i-edit" /></svg> Editar <span class="dropdown-item-meta">Ctrl+E</span></button>
        <button class="dropdown-item" @click="open = null"><svg class="ic"><use href="#i-copy" /></svg> Duplicar</button>
        <button class="dropdown-item" @click="open = null"><svg class="ic"><use href="#i-print" /></svg> Imprimir</button>
        <button class="dropdown-item disabled"><svg class="ic"><use href="#i-download" /></svg> Exportar</button>
        <div class="dropdown-divider" />
        <button class="dropdown-item dropdown-item--danger" @click="open = null"><svg class="ic"><use href="#i-trash" /></svg> Eliminar</button>
      </div>
    </div>

    <!-- Selección (ítem activo) -->
    <div class="dropdown" :class="{ show: open === 'orden' }">
      <button class="btn btn-primary dropdown-toggle" @click="toggle('orden')">
        <svg class="ic"><use href="#i-sort" /></svg> Ordenar <svg class="ic"><use href="#i-chev" /></svg>
      </button>
      <div class="dropdown-menu" :class="{ show: open === 'orden' }">
        <div class="dropdown-header">Ordenar por</div>
        <button
          v-for="o in [['recientes', 'Más recientes'], ['antiguos', 'Más antiguos'], ['nombre', 'Nombre (A-Z)']]"
          :key="o[0]"
          class="dropdown-item"
          :class="{ active: orden === o[0] }"
          @click="orden = o[0]; open = null"
        >
          {{ o[1] }} <svg v-if="orden === o[0]" class="ic ms-auto"><use href="#i-check" /></svg>
        </button>
      </div>
    </div>

    <!-- Menú de usuario alineado a la derecha -->
    <div class="dropdown ms-auto" :class="{ show: open === 'usuario' }">
      <button class="btn btn-outline-secondary dropdown-toggle" @click="toggle('usuario')">
        <svg class="ic"><use href="#i-user" /></svg> Usuario <svg class="ic"><use href="#i-chev" /></svg>
      </button>
      <div class="dropdown-menu dropdown-menu-end" :class="{ show: open === 'usuario' }">
        <div class="dropdown-text"><b class="text-body">Usuario A</b><br>usuario@ejemplo.com</div>
        <div class="dropdown-divider" />
        <button class="dropdown-item" @click="open = null"><svg class="ic"><use href="#i-user" /></svg> Perfil</button>
        <button class="dropdown-item" @click="open = null"><svg class="ic"><use href="#i-cog" /></svg> Ajustes</button>
        <div class="dropdown-divider" />
        <button class="dropdown-item" @click="open = null"><svg class="ic"><use href="#i-logout" /></svg> Cerrar sesión</button>
      </div>
    </div>
  </div>
</template>
