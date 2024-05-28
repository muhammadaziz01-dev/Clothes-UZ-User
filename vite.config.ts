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
      {find: "@global-interface" , replacement: "/src/types/global-interface"},
      { find: '@validations', replacement: '/src/validations' },

      { find: '@product', replacement: '/src/service/product' },
      { find: '@like', replacement: '/src/service/like' },


      { find: '@stor-product', replacement: '/src/stor/stor-product' },
      { find: '@stor-like', replacement: '/src/stor/stor-like' },
      
    ]
  }
})
