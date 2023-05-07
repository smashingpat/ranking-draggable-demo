import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const publicPath = '/ranking-draggable-demo/';

// https://vitejs.dev/config/
export default defineConfig({
  base: publicPath,
  plugins: [react()],
});
