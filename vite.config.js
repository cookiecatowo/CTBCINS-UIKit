import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // 檔案在index.ts匯出，因此將index.ts作為進入點
      entry: resolve(__dirname, "src/index.ts"),
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
