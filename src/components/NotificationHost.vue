<script setup lang="ts">
// Host global de toasts. Se monta una vez en App.vue.
import { Icon } from '@/components'
import { useNotify, type NotifyType } from '@/store/useNotify'

const { toasts, remove } = useNotify()

const ICONS: Record<NotifyType, string> = {
  success: 'check',
  error: 'ban',
  warning: 'bell',
  info: 'info',
}
</script>

<template>
  <div class="toast-host" aria-live="polite" aria-atomic="true">
    <TransitionGroup name="toast">
      <div v-for="t in toasts" :key="t.id" class="toast" :class="`toast--${t.type}`" role="status">
        <span class="toast-ico"><Icon :name="ICONS[t.type]" /></span>
        <div class="toast-body">
          <div class="toast-title">{{ t.title }}</div>
          <div v-if="t.message" class="toast-msg">{{ t.message }}</div>
        </div>
        <button class="toast-close" :aria-label="$t('componentes.cerrar')" @click="remove(t.id)">×</button>
      </div>
    </TransitionGroup>
  </div>
</template>
