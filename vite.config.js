import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

let port = 6544
let host = '10.150.5.179'

export default defineConfig({
  server: {
    host: host,
    port: port,
  },
  plugins: [svelte()],
})
