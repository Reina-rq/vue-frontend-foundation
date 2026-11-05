<script setup lang="ts">
import { ref } from 'vue'

const spy = ref('a')

// Marca como activa la última sección cuyo título ya pasó el borde superior del contenedor.
function onSpy(e: Event) {
  const container = e.target as HTMLElement
  let current = 'a'
  for (const id of ['a', 'b', 'c']) {
    const el = container.querySelector('#spy-' + id) as HTMLElement | null
    if (el && el.offsetTop - container.scrollTop <= 24) current = id
  }
  spy.value = current
}
</script>

<template>
  <div class="d-flex gap-12 w-100">
    <ul class="nav-pills flex-column flex-none">
      <li class="nav-item"><a class="nav-link" :class="{ active: spy === 'a' }">Uno</a></li>
      <li class="nav-item"><a class="nav-link" :class="{ active: spy === 'b' }">Dos</a></li>
      <li class="nav-item"><a class="nav-link" :class="{ active: spy === 'c' }">Tres</a></li>
    </ul>
    <div class="ds-spy-body" @scroll="onSpy">
      <h4 id="spy-a">Uno</h4>
      <p class="text-muted">Sección uno. Haz scroll para ver cómo cambia el resaltado del nav.</p>
      <h4 id="spy-b">Dos</h4>
      <p class="text-muted">Sección dos. Más contenido de relleno para poder desplazar.</p>
      <h4 id="spy-c">Tres</h4>
      <p class="text-muted">Sección tres, la última del contenedor con scroll.</p>
    </div>
  </div>
</template>
