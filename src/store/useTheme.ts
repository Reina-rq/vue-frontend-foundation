// Estado global de tema (light | dark). Singleton reactivo.
// Alterna la clase `dark` en <body> y persiste la elección en localStorage('theme').
import { ref, computed } from 'vue'

export type Theme = 'light' | 'dark'
const STORAGE_KEY = 'theme'

const theme = ref<Theme>('light')

function apply(value: Theme): void {
  document.body.classList.toggle('dark', value === 'dark')
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    /* noop */
  }
}

export function useTheme() {
  function init(): void {
    let stored: Theme = 'light'
    try {
      stored = (localStorage.getItem(STORAGE_KEY) as Theme) || 'light'
    } catch {
      /* noop */
    }
    theme.value = stored
    apply(stored)
  }

  function toggle(): void {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    apply(theme.value)
  }

  function set(value: Theme): void {
    theme.value = value
    apply(value)
  }

  return {
    theme: computed(() => theme.value),
    isDark: computed(() => theme.value === 'dark'),
    init,
    toggle,
    set,
  }
}
