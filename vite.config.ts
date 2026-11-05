import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// Aliases @/, @app, @modules, @styles. Prohibido usar ../../../ entre capas.
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url)),
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        // Tokens y mixins disponibles globalmente en todos los <style lang="scss">
        additionalData: `@use "@styles/abstracts/_index.scss" as *;`,
      },
    },
  },
  server: { port: 3000 },
})
