// Utilidad global de fechas localizadas (es/en/fr/pt_BR/zh).
// Punto UNICO para mostrar en UI fechas que vienen del backend (ISO yyyy-mm-dd,
// ISO con hora, dd/mm/yyyy, "dd-mm-yyyy - HH:MM:SS") en el formato del idioma activo
// y con cambio en caliente: cada funcion lee `getI18n.global.locale` al formatear,
// asi que cualquier template/computed que la llame se re-renderiza solo al cambiar
// de idioma, sin refetch ni estado extra.
//
// Uso en template (sin imports, via globalProperties): {{ $formatDate(row.fecha) }}
// Uso en script: import { formatDate, formatDateTime } from '@app/i18n/dates'
//   o const { formatDate: fmt } = useLocalizedDate()
// No usar para payloads al backend ni para <input type="date"> (canonico yyyy-mm-dd).
import type { App } from 'vue'
import { getI18n } from './index'

export const DATE_BCP47: Record<string, string> = {
  es: 'es-ES',
  en: 'en-US',
  fr: 'fr-FR',
  pt_BR: 'pt-BR',
  zh: 'zh-CN',
}

export function bcp47For(locale: string): string {
  return DATE_BCP47[locale] ?? 'es-ES'
}

// Fuente reactiva: leer `.value` dentro de un render/computed suscribe a cambios.
export function currentBcp47(): string {
  try {
    return bcp47For(getI18n.global.locale.value as string)
  } catch {
    return 'es-ES'
  }
}

function currentLocaleKey(): string {
  try {
    return getI18n.global.locale.value as string
  } catch {
    return 'es'
  }
}

interface Parsed {
  date: Date
  hasTime: boolean
}

function validYMD(y: number, m: number, d: number): boolean {
  return Number.isInteger(y) && Number.isInteger(m) && Number.isInteger(d)
    && m >= 1 && m <= 12 && d >= 1 && d <= 31 && y >= 1000 && y <= 9999
}

function roundtripOk(date: Date, y: number, m: number, d: number): boolean {
  return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d
}

// Normaliza las variantes que envia el backend a un Date local (sin desfase UTC
// para fechas solo-dia: se construye con new Date(y, m-1, d) en vez de new Date(str)).
export function parseBackendDate(value: unknown): Parsed | null {
  if (value === null || value === undefined) return null
  if (value instanceof Date) return isNaN(value.getTime()) ? null : { date: value, hasTime: true }
  if (typeof value === 'number') {
    const d = new Date(value)
    return isNaN(d.getTime()) ? null : { date: d, hasTime: true }
  }
  if (typeof value !== 'string') return null
  const s = value.trim()
  if (!s || s === '—' || s === '-') return null

  // "dd-mm-yyyy - HH:MM[:SS]", "dd/mm/yyyy HH:MM" o solo fecha.
  let m = /^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})(?:\s*(?:-|T)?\s*(\d{1,2}):(\d{2})(?::(\d{2}))?)?/.exec(s)
  if (m) {
    const d = Number(m[1]); const mo = Number(m[2]); const y = Number(m[3])
    if (!validYMD(y, mo, d)) return null
    const H = m[4] !== undefined ? Number(m[4]) : 0
    const M = m[5] !== undefined ? Number(m[5]) : 0
    const S = m[6] !== undefined ? Number(m[6]) : 0
    const date = new Date(y, mo - 1, d, H, M, S)
    if (!roundtripOk(date, y, mo, d)) return null
    return { date, hasTime: m[4] !== undefined }
  }
  // ISO "yyyy-mm-dd[ HH:MM[:SS]]" o con "T" y posible zona (Z / ±HH:MM).
  m = /^(\d{4})-(\d{2})-(\d{2})(?:[T\s](\d{1,2}):(\d{2})(?::(\d{2}))?(\.\d+)?\s*(Z|[+-]\d{2}:?\d{2})?)?/.exec(s)
  if (m) {
    const y = Number(m[1]); const mo = Number(m[2]); const d = Number(m[3])
    if (!validYMD(y, mo, d)) return null
    // Con zona explicita se respeta el instante (evita desfase) y hay hora.
    if (m[7]) {
      const date = new Date(s)
      return isNaN(date.getTime()) ? null : { date, hasTime: true }
    }
    const hasTime = m[4] !== undefined
    const H = hasTime ? Number(m[4]) : 0
    const M = hasTime ? Number(m[5]) : 0
    const S = m[6] !== undefined ? Number(m[6]) : 0
    const date = new Date(y, mo - 1, d, H, M, S)
    if (!roundtripOk(date, y, mo, d)) return null
    return { date, hasTime }
  }
  // Ultimo recurso: lo que Date si parsea (p.ej. "Sep 4 2026").
  const fallback = new Date(s)
  if (!isNaN(fallback.getTime())) return { date: fallback, hasTime: /[T:]/.test(s) }
  return null
}

// Solo fecha (formato corto propio de cada idioma):
// es 04/09/2026 · en 09/04/2026 · fr 04/09/2026 · pt-BR 04/09/2026 · zh 2026/09/04.
// `empty` preserva el fallback previo de cada llamada ('—' por defecto).
// Si no parsea, devuelve el crudo (no se pierde dato del backend).
export function formatDate(value: unknown, empty = '—'): string {
  if (value === null || value === undefined) return empty
  if (typeof value === 'string' && !value.trim()) return empty
  const parsed = parseBackendDate(value)
  if (!parsed) return typeof value === 'string' ? value : empty
  try {
    return new Intl.DateTimeFormat(currentBcp47(), { day: '2-digit', month: '2-digit', year: 'numeric' }).format(parsed.date)
  } catch {
    return new Intl.DateTimeFormat('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(parsed.date)
  }
}

// Fecha + hora (solo si la entrada trae hora; si no, equivale a formatDate para no
// inventar "00:00"): es 04/09/2026 14:30 · en 09/04/2026 02:30 PM · zh 2026/09/04 14:30.
// Se formatea fecha y hora por separado y se une con espacio: en un solo formato Intl
// aplica el separador del locale (coma en es/en desde ICU 72) y cambia la UI ya asentada.
function fechaHora(bcp: string, date: Date): string {
  const f = new Intl.DateTimeFormat(bcp, { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date)
  const h = new Intl.DateTimeFormat(bcp, { hour: '2-digit', minute: '2-digit' }).format(date)
  return `${f} ${h}`
}

export function formatDateTime(value: unknown, empty = '—'): string {
  if (value === null || value === undefined) return empty
  if (typeof value === 'string' && !value.trim()) return empty
  const parsed = parseBackendDate(value)
  if (!parsed) return typeof value === 'string' ? value : empty
  if (!parsed.hasTime) return formatDate(value, empty)
  try {
    return fechaHora(currentBcp47(), parsed.date)
  } catch {
    return fechaHora('es-ES', parsed.date)
  }
}

// Placeholder del editor libre segun idioma (formato esperado de escritura).
export function datePlaceholder(): string {
  const loc = currentLocaleKey()
  if (loc === 'en') return 'mm/dd/yyyy'
  if (loc === 'fr') return 'jj/mm/aaaa'
  if (loc === 'zh') return 'yyyy/mm/dd'
  return 'dd/mm/aaaa'
}

// Canonico yyyy-mm-dd -> texto de edicion segun idioma (en MM/DD/YYYY, zh YYYY/MM/DD,
// resto DD/MM/YYYY). Solo para <DateInput>; el resto de la UI usa formatDate().
export function displayDateForInput(ymd: unknown): string {
  const mm = typeof ymd === 'string' ? /^(\d{4})-(\d{2})-(\d{2})/.exec(ymd) : null
  if (!mm) return typeof ymd === 'string' ? ymd : ''
  const loc = currentLocaleKey()
  if (loc === 'en') return `${mm[2]}/${mm[3]}/${mm[1]}`
  if (loc === 'zh') return `${mm[1]}/${mm[2]}/${mm[3]}`
  return `${mm[3]}/${mm[2]}/${mm[1]}`
}

// Texto libre -> canonico yyyy-mm-dd ('' vacio, null invalido). Acepta ISO,
// dd/mm/aaaa, mm/dd/aaaa (en) y yyyy/mm/dd (zh); dia>12 autodetecta el orden
// para no romper fechas ya escritas en otro formato.
export function parseInputDate(input: unknown, localeOverride?: string): string | null {
  const s = (input as string ?? '').trim?.() ?? ''
  if (!s) return ''
  const iso = s.match(/^(\d{4})-(\d{1,2})-(\d{1,2})/)
  if (iso) return normalizeYMD(Number(iso[1]), Number(iso[2]), Number(iso[3]))
  const parts = s.split(/[/\-.\s]+/).filter(Boolean)
  if (parts.length !== 3) return null
  let y: string; let m: string; let d: string
  if (parts[0].length === 4) [y, m, d] = parts
  else {
    const loc = localeOverride ?? currentLocaleKey()
    const a = Number(parts[0]); const b = Number(parts[1])
    if (loc === 'en') {
      // Orden m/d; si el primer campo es >12 solo puede ser dia (d/m).
      if (a > 12 && b <= 12) [d, m, y] = parts
      else [m, d, y] = parts
    } else if (b > 12 && a <= 12) [m, d, y] = parts
    else [d, m, y] = parts
  }
  if (y.length === 2) y = (Number(y) > 30 ? '19' : '20') + y
  if (y.length !== 4) return null
  return normalizeYMD(Number(y), Number(m), Number(d))
}

function normalizeYMD(y: number, m: number, d: number): string | null {
  if (!validYMD(y, m, d)) return null
  const date = new Date(y, m - 1, d)
  if (!roundtripOk(date, y, m, d)) return null
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${y}-${pad(m)}-${pad(d)}`
}

// Composable para <script setup>: las funciones leen el locale en cada llamada,
// asi que siguen reactivas dentro de computed/template sin estado extra.
export function useLocalizedDate() {
  return { formatDate, formatDateTime, datePlaceholder, displayDateForInput, parseInputDate, bcp47For, currentBcp47 }
}

export function installDateGlobals(app: App): void {
  const gp = app.config.globalProperties as Record<string, unknown>
  gp.$formatDate = formatDate
  gp.$formatDateTime = formatDateTime
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $formatDate: typeof formatDate
    $formatDateTime: typeof formatDateTime
  }
}
