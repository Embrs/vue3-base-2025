import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import VueRouter from 'unplugin-vue-router/vite';


// https://vite.dev/config/

export default defineConfig({
  plugins: [
    VueRouter({ // https://github.com/posva/unplugin-vue-router
      extensions: ['.vue'],
      routesFolder: ['src/pages'],
      dts: 'src/types/auto-router.d.ts'
    }), // ⚠️ Vue 必須在 VueRouter() 之後
    vue(),
    vueDevTools(),
    AutoImport({ //https://github.com/unplugin/unplugin-auto-import
      imports: ['vue', 'vue-router', 'pinia', 'vue-i18n'],
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['src/components', 'src/composables', 'src/stores'],
    }),
    Components({ // https://github.com/unplugin/unplugin-vue-components
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
