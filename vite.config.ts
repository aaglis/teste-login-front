import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
  },
  preview: {
    // Honra a porta injetada pela infra (Coolify/Traefik); fallback 5173.
    port: Number(process.env.PORT) || 5173,
    host: true,
    // Atrás de proxy reverso o Host vem com o domínio público — não bloquear.
    allowedHosts: true,
  },
});
