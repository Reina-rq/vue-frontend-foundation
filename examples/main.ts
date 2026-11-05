import { createApp } from 'vue'
import App from './App.vue'
import { getI18n } from '@app/i18n'
import { installDateGlobals } from '@app/i18n/dates'
import { installNumberGlobals } from '@app/i18n/numbers'
import { useTheme } from '@/store/useTheme'
import '@styles/main.scss'
import './styles/_design-system.scss'

useTheme().init()
// Catálogo: ?theme=dark | ?theme=light fuerza el tema (útil para revisar y para capturas).
const themeParam = new URLSearchParams(location.search).get('theme')
if (themeParam === 'dark' || themeParam === 'light') useTheme().set(themeParam)
const app = createApp(App)
app.use(getI18n)
installDateGlobals(app)
installNumberGlobals(app)
app.mount('#app')
