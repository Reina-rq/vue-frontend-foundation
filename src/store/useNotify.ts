// Sistema global de notificaciones (toasts). Singleton reactivo.
// Reemplaza el `$showNotify` del proyecto original con el diseño de esta app.
import { ref, computed } from 'vue'

export type NotifyType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: number
  type: NotifyType
  title: string
  message?: string
  timeout: number
}

const toasts = ref<Toast[]>([])
let seq = 0

function push(type: NotifyType, title: string, message?: string, timeout = 4500): number {
  const id = ++seq
  toasts.value.push({ id, type, title, message, timeout })
  if (timeout > 0) {
    setTimeout(() => remove(id), timeout)
  }
  return id
}

function remove(id: number): void {
  toasts.value = toasts.value.filter((t) => t.id !== id)
}

export function useNotify() {
  return {
    toasts: computed(() => toasts.value),
    remove,
    push,
    success: (title: string, message?: string) => push('success', title, message),
    error: (title: string, message?: string) => push('error', title, message),
    warning: (title: string, message?: string) => push('warning', title, message),
    info: (title: string, message?: string) => push('info', title, message),
  }
}
