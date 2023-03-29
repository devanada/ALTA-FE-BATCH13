import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  // Tambahkan dibawah agar bisa diakses secara network
  server: {
    host: true,
  },
});
