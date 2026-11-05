<script setup lang="ts">
// Nombres de los símbolos del sprite (IconSprite.vue): id = "i-" + nombre.
const icons = [
  'grid', 'truck', 'users', 'tire', 'doc', 'map', 'cal', 'wrench', 'clip', 'chart',
  'logout', 'bell', 'bldg', 'chev', 'block', 'box', 'flag', 'route', 'search', 'plane',
  'ship', 'cog', 'tag', 'plus', 'shield', 'card', 'edit', 'ban', 'print', 'eye',
  'eye-off', 'info', 'trash', 'moon', 'sun', 'mail', 'lock', 'check', 'arrow-right', 'arrow-left',
  'arrow-up', 'arrow-down', 'chevron-left', 'chevron-right', 'chevron-up', 'x', 'minus', 'menu', 'more-v', 'more-h',
  'sort', 'filter', 'download', 'upload', 'save', 'copy', 'refresh', 'link', 'external', 'folder',
  'list', 'home', 'clock', 'calendar-check', 'phone', 'message', 'send', 'user', 'user-plus', 'star',
  'heart', 'alert', 'help', 'check-circle', 'x-circle', 'circle', 'dot', 'image', 'camera', 'paperclip',
  'key', 'dollar', 'percent', 'calculator', 'wallet', 'receipt', 'bank', 'globe', 'fuel', 'gauge',
  'weight', 'file-plus', 'translate',
]
</script>

<template>
  <div class="ds-icons">
    <div v-for="n in icons" :key="n" class="ds-icon">
      <svg class="ic"><use :href="`#i-${n}`" /></svg>{{ n }}
    </div>
  </div>
</template>
