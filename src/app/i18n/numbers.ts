// Utilidad global de números y moneda localizada (es/en/fr/pt_BR/zh).
// Punto ÚNICO para mostrar en UI montos monetarios que hoy usan `toLocaleString('es-BO')`
// o formatos manuales. Base visual: español de Bolivia (es-BO: '.' miles, ',' decimal, 2 decimales
// por defecto). Cada función lee `getI18n.global.locale` al formatear, así que cualquier
// template/computed que la llame se re-renderiza solo al cambiar de idioma, sin refetch.
//
// Uso en template (sin imports, vía globalProperties):
//   {{ $formatNumber(row.total) }}              // 2 decimales, agrupado
//   {{ $formatNumber(row.total, 0) }}           // entero agrupado
//   {{ $formatMoney(row.total, row.currencySymbol) }}        // "Bs 1.234,56" en es
//   {{ $formatMoney(row.total, 'S/', 2) }}      // símbolo explícito
// Uso en script:
//   import { formatNumber, formatMoney, formatInteger, parseLocalizedNumber } from '@app/i18n/numbers'
//   o const { formatMoney: fm } = useLocalizedNumber()
//
// NO usar para payloads al backend (enviar number crudo, con round2 si corresponde) ni para
// cálculos: solo formateo de presentación. Respeta los decimales que ya usaba cada llamada.
import type { App } from 'vue'
import { getI18n } from './index'

export const NUMBER_BCP47: Record<string, string> = {
  es: 'es-BO',
  en: 'en-US',
  fr: 'fr-FR',
  pt_BR: 'pt-BR',
  zh: 'zh-CN',
}

export function bcp47ForNumber(locale: string): string {
  return NUMBER_BCP47[locale] ?? 'es-BO'
}

// Fuente reactiva: leer `.value` dentro de un render/computed suscribe a cambios.
export function currentNumberBcp47(): string {
  try {
    return bcp47ForNumber(getI18n.global.locale.value as string)
  } catch {
    return 'es-BO'
  }
}

function toFiniteNumber(value: unknown): number | null {
  if (value === null || value === undefined) return null
  if (typeof value === 'string' && value.trim() === '') return null
  const n = typeof value === 'number' ? value : Number(value)
  return Number.isFinite(n) ? n : null
}

// Número agrupado con N decimales exactos (por defecto 2, como la base es-BO).
// null/undefined/''/NaN → `empty` ('—' por defecto) para no mostrar "NaN" en UI.
// Si no puede usar Intl, cae a es-BO.
export function formatNumber(value: unknown, decimals = 2, empty = '—'): string {
  const n = toFiniteNumber(value)
  if (n === null) return empty
  const d = Number.isInteger(decimals) && decimals >= 0 && decimals <= 20 ? decimals : 2
  try {
    return new Intl.NumberFormat(currentNumberBcp47(), {
      minimumFractionDigits: d,
      maximumFractionDigits: d,
    }).format(n)
  } catch {
    return new Intl.NumberFormat('es-BO', {
      minimumFractionDigits: d,
      maximumFractionDigits: d,
    }).format(n)
  }
}

// Entero agrupado (0 decimales). Azúcar sobre formatNumber para conteos/km/kg.
export function formatInteger(value: unknown, empty = '—'): string {
  return formatNumber(value, 0, empty)
}

// Cantidad con decimales adaptativos: enteros sin decimales ("1.200"), fraccionales
// con hasta `max` decimales sin relleno ("1.200,5"). Equivale al viejo
// `toLocaleString('es-BO')` sin opciones (min 0, max 3) en español, pero siguiendo
// al idioma activo. Para pesos/distancias que casi siempre son enteros pero a veces
// traen fracción: evita el redondeo silencioso de formatInteger sin ensuciar la UI
// con ",0". (No delega en formatNumber porque este fuerza min=max y rellenaría.)
export function formatAdaptive(value: unknown, max = 3, empty = '—'): string {
  const n = toFiniteNumber(value)
  if (n === null) return empty
  const m = Number.isInteger(max) && max >= 0 && max <= 20 ? max : 3
  try {
    return new Intl.NumberFormat(currentNumberBcp47(), {
      minimumFractionDigits: 0,
      maximumFractionDigits: m,
    }).format(n)
  } catch {
    return new Intl.NumberFormat('es-BO', {
      minimumFractionDigits: 0,
      maximumFractionDigits: m,
    }).format(n)
  }
}

// Monto monetario: número + símbolo delante ("Bs 1.234,56" en es, "$1,234.56" style en en
// según el locale, pero SIEMPRE con los mismos `decimals` que ya usaba la llamada).
// null/undefined → `empty` sin símbolo (igual que BorradoresTable: '—').
export function formatMoney(value: unknown, symbol = '', decimals = 2, empty = '—'): string {
  const n = toFiniteNumber(value)
  if (n === null) return empty
  const formatted = formatNumber(n, decimals, empty)
  const sym = (symbol ?? '').trim()
  return sym ? `${sym} ${formatted}` : formatted
}

// Parser universal para inputs numéricos:
// acepta "1.234,56" (es-BO), "1,234.56" (en-US), "1 234,56" (fr) y "1234.56".
// Regla: el ÚLTIMO separador (',' o '.') es el decimal; el otro y espacios son miles.
// Devuelve number o null si no hay dígitos. NO depende del locale para no romper
// lo ya tipeado al cambiar de idioma en caliente.
export function parseLocalizedNumber(texto: unknown): number | null {
  if (texto === null || texto === undefined) return null
  if (typeof texto === 'number') return Number.isFinite(texto) ? texto : null
  if (typeof texto !== 'string') return null
  // Quita espacios (incl. NBSP/NARROW NBSP de fr) y símbolos de moneda, deja dígitos, , . -
  const s = texto.trim().replace(/[\s\u00A0\u202F\u2009]/g, '').replace(/[^0-9,.\-]/g, '')
  if (!s || s === '-' || s === '.' || s === ',') return null
  const lastComma = s.lastIndexOf(',')
  const lastDot = s.lastIndexOf('.')
  let normalized: string
  if (lastComma >= 0 && lastDot >= 0) {
    // Ambos presentes: el último manda como decimal.
    if (lastComma > lastDot) {
      // "1.234,56" → quita puntos, coma→punto
      normalized = s.replace(/\./g, '').replace(/,/g, '.')
    } else {
      // "1,234.56" → quita comas
      normalized = s.replace(/,/g, '')
    }
  } else if (lastComma >= 0) {
    // Solo coma: si hay 1-2 dígitos al final es decimal, si no son miles.
    const tail = s.slice(lastComma + 1)
    if (/^\d{1,2}$/.test(tail) && s.indexOf(',') === lastComma) {
      normalized = s.replace(/,/g, '.')
    } else if (/^\d{3}(\d{3})*$/.test(tail) && s.split(',').length > 1) {
      // "1,234" o "1,234,567" → miles
      normalized = s.replace(/,/g, '')
    } else {
      // Ambiguo ("12,34" decimal vs "12,345" miles): por defecto decimal si ≤2 dígitos.
      normalized = tail.length <= 2 ? s.replace(/,/g, '.') : s.replace(/,/g, '')
    }
    // Colapsa puntos decimales múltiples.
    const parts = normalized.split('.')
    if (parts.length > 2) normalized = parts[0] + '.' + parts.slice(1).join('')
  } else {
    normalized = s.replace(/(\..*)\./g, '$1')
  }
  if (normalized === '' || normalized === '-' || normalized === '.') return null
  const n = Number(normalized)
  return Number.isFinite(n) ? n : null
}

// Composable para <script setup>: las funciones leen el locale en cada llamada,
// así que siguen reactivas dentro de computed/template sin estado extra.
export function useLocalizedNumber() {
  return { formatNumber, formatInteger, formatAdaptive, formatMoney, parseLocalizedNumber, bcp47ForNumber, currentNumberBcp47 }
}

export function installNumberGlobals(app: App): void {
  const gp = app.config.globalProperties as Record<string, unknown>
  gp.$formatNumber = formatNumber
  gp.$formatInteger = formatInteger
  gp.$formatAdaptive = formatAdaptive
  gp.$formatMoney = formatMoney
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $formatNumber: typeof formatNumber
    $formatInteger: typeof formatInteger
    $formatAdaptive: typeof formatAdaptive
    $formatMoney: typeof formatMoney
  }
}
