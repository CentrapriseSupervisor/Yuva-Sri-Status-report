import { defineConfig } from 'vite'

export default defineConfig({
  // Force pre-bundling for React to avoid automatic detection warnings
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
