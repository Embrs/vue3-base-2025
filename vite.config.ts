import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';


// https://vite.dev/config/

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/components', 'src/composables', 'src/stores'],
    }),
    Components({ // https://github.com/unplugin/unplugin-vue-components?tab=readme-ov-file#configuration
      dts: true,
      directoryAsNamespace: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/assets/styles/scss/colors.scss' as *;
          @use '@/assets/styles/scss/fn.scss' as *;
          @use '@/assets/styles/scss/mixin.scss' as *;
          @use '@/assets/styles/scss/font-size.scss' as *;
          @use '@/assets/styles/scss/rwd.scss' as *;
        `,
      },
    },
  },
});
