// @ts-check
import { defineConfig } from 'astro/config';
<<<<<<< HEAD

// https://astro.build/config
export default defineConfig({});
=======
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
        allowedHosts: true
    }
  }
});
>>>>>>> master
