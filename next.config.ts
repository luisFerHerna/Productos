import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.abcnewsfe.com"
      },
      {
        protocol: "https",
        hostname: "styles.redditmedia.com",
      },
      {
        protocol: "https",
        hostname: "images.icon-icons.com",
      },
      {
        protocol: "https",
        hostname: "images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com"
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.freepik.com"
      },
      {
        protocol: "https",
        hostname: "fakestoreapi.com"
      }
    ]
  },
  // Configuración adicional para desarrollo
  webpackDevMiddleware: (config: any) => {
    config.watchOptions = {
      poll: 1000, // Revisa cambios cada segundo
      aggregateTimeout: 300, // retraso antes de reconstruir
    };
    return config;
  },
};

export default nextConfig;