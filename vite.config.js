import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  
  build: {
    root: "./src", // Cambia la raíz del proyecto a "src"
    outDir: "docs", // Cambia el directorio de salida
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./src/index.html"), // Página principal
        about: resolve(__dirname, "./src/iniciosesion.html"), // Otra página
        // Añade más entradas si es necesario
      },
    },
  },
  base: "/FigmaWeb2024/", // Opcional: rutas relativas para mayor compatibilidad
});