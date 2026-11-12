import type { NextConfig } from "next";

/**
 * Sitio servido como export estático.
 *
 * - output: "export"  → genera HTML/CSS/JS estático en la carpeta `dist/`.
 * - basePath/assetPrefix → por defecto vacío (sitio en la raíz del dominio).
 *   Para publicarlo bajo un subdirectorio (ej: https://cassdev.com.ar/aviat),
 *   definir la variable de entorno BASE_PATH=/aviat al momento del build.
 * - images.unoptimized → requerido por el export estático (sin servidor de imágenes).
 * - trailingSlash → genera carpetas con index.html, más amigable para Apache/cPanel.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  distDir: "dist",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
