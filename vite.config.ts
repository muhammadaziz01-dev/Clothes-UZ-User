import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(),],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },

      { find: '@layut', replacement: '/src/layout' },
      { find: '@ui', replacement: '/src/components/ui' },
      { find: '@components', replacement: '/src/components' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@imgs', replacement: '/src/assets/imgs' },
      { find: '@router', replacement: '/src/router' },

      {find: '@coocse', replacement: '/src/utils/cocies.ts' },

      { find: '@product', replacement: '/src/service/product' },

      { find: '@stor-product', replacement: '/src/stor/stor-product' },

      // { find: '@modals', replacement: '/src/components/modals' },
      // { find: '@navList', replacement: '/src/router/nav-list' },
      // { find: '@model', replacement: '/src/model' },
      // { find: '@valideshin', replacement: '/src/utils/valideshin.ts' },

      // { find: '@auth', replacement: '/src/service/auth' },
      // { find: '@services', replacement: '/src/service/services' },
      // { find: '@orders', replacement: '/src/service/orders' },
      // { find: '@main', replacement: '/src/service/main' },
      // { find: '@clients', replacement: '/src/service/clients' },


      // {find: "@globol-interface" , replacement: '/src/types/globol-interface' },

      // {find: '@store', replacement: '/src/store/index.ts' },


      





    ]
  }
})
