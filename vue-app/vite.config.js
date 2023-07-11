import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [
		vue(),
		vuetify({ autoImport: true }),
	],
  server: {
    host: true,
    port: 8000
  }
})
