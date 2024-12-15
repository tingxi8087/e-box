import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';  // 需要先安装这个插件

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main/e-box.ts'),
      name: 'e-box',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'use-sync-external-store'],
      output: {
        globals: {
          react: 'React',
          'use-sync-external-store': 'useSyncExternalStore'
        }
      }
    },
    emptyOutDir: true
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/main']
    })
  ]
});