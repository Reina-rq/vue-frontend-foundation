// Estado global del visor de impresión. Un módulo llama open(opts) con los DATOS del documento
// (sin HTML) y el host PrintDoc.vue lo renderiza con el diseño global .print-doc. Singleton reactivo.
import { ref, computed } from 'vue'

export interface DocKV {
  label: string
  value: string
}
export interface DocSection {
  heading: string
  rows?: DocKV[]
  table?: { heads: string[]; rows: string[][] }
}
export interface DocOptions {
  title: string
  subtitle?: string
  sections: DocSection[]
  total?: { label: string; value: string }
}

const current = ref<DocOptions | null>(null)

export function usePrintDoc() {
  return {
    current: computed(() => current.value),
    open(opts: DocOptions): void {
      current.value = opts
    },
    close(): void {
      current.value = null
    },
  }
}

// Abre el visor a partir de la cadena "Título|campo: valor|…" (data-print de las filas).
export function printDocFromParts(parts: string[]): void {
  if (!parts.length) return
  const [title, ...lines] = parts
  current.value = {
    title,
    sections: [
      {
        heading: 'Detalle',
        rows: lines.map((l) => {
          const idx = l.indexOf(':')
          return idx >= 0
            ? { label: l.slice(0, idx).trim(), value: l.slice(idx + 1).trim() }
            : { label: l, value: '' }
        }),
      },
    ],
  }
}
