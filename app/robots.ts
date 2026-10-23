import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://escarpment.dev/sitemap.xml",
    host: "https://escarpment.dev",
  };
}
