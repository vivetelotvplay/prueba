// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ESTO ES CLAVE: La ruta base debe coincidir con el nombre del repositorio.
  base: '/prueba/', 
});
