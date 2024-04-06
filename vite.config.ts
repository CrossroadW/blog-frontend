import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default defineConfig({
  plugins: [
      vue(),
   ],

  base: '/',

  server: {
      host: "localhost",
      port: 3000,
      proxy: {
          '/api': {
              target: 'http://localhost:8000/',
              changeOrigin: true,
              ws: false,
              rewrite: (pathStr) => pathStr.replace('/api', ''),
              timeout: 5000,
          },
      },
  }
});