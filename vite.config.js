import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  
  build: {
    root: "./src", // Cambia la raíz del proyecto a "src"
    outDir: "docs", // Cambia el directorio de salida
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Página principal
        about: resolve(__dirname, "iniciosesion.html"), // Otra página
        // Añade más entradas si es necesario
      },
    },
  },
  base: "/FigmaWeb2024/index.html", // Opcional: rutas relativas para mayor compatibilidad
});