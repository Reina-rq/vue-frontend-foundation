// Punto de integración i18n de la fundación.
// `dates.ts`, `numbers.ts` y los componentes globales leen la instancia `getI18n` de este
// archivo. Los componentes usan el
// namespace `componentes.*`.
//
// En un proyecto consumidor: añade tus namespaces a `messages` (o sustituye este archivo
// por tu propia instancia de vue-i18n manteniendo el export `getI18n` y el namespace
// `componentes`).
import { createI18n } from 'vue-i18n'
import componentesEs from './locales/componentes/es.json'
import componentesEn from './locales/componentes/en.json'
import componentesFr from './locales/componentes/fr.json'
import componentesPtBR from './locales/componentes/pt_BR.json'
import componentesZh from './locales/componentes/zh.json'

export const SUPPORTED_LOCALES = ['es', 'en', 'fr', 'pt_BR', 'zh'] as const
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number]

export const messages = {
  es: { componentes: componentesEs },
  en: { componentes: componentesEn },
  fr: { componentes: componentesFr },
  pt_BR: { componentes: componentesPtBR },
  zh: { componentes: componentesZh },
}

export const getI18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  globalInjection: true,
  messages,
})
