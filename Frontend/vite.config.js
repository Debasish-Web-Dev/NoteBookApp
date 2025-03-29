import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  darkMode: 'class',
  plugins: [react(),
    tailwindcss(),
  ],
  // safelist: [
  //   "from-blue-500", "to-blue-300",
  //   "from-purple-500", "to-purple-300",
  //   "from-pink-500", "to-pink-300"
  // ],
  safelist: [
    { pattern: /from-(blue|purple|pink)-500/ },
    { pattern: /to-(blue|purple|pink)-300/ },
  ],
});



