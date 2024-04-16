import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin(),
  ],
  build: {
    lib: {
      // 檔案在index.js匯出，因此將index.js作為進入點
      entry: resolve(__dirname, "src/index.js"),
      name: 'b2b-ui-storybook',
      fileName: 'b2b-ui-storybook',
    },
    rollupOptions: {
      // 設定vue原檔不會被打包進lib
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  }
})
