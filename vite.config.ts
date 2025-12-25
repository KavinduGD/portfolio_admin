import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // same as 0.0.0.0 → allows access from Docker / LAN
    port: 5174, // optional, but matches your Docker port mapping
  },
});
