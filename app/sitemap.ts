import type { MetadataRoute } from "next";
import { brands } from "@/data/brands";
import { stores } from "@/data/stores";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/brands", "/gallery", "/stores", "/anime-dolls", "/furry-dolls", "/buying", "/care", "/about", "/privacy", "/disclaimer"];
  return [
    ...staticPaths.map((path) => ({ url: `${siteConfig.url}${path}/`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : .7 })),
    ...brands.map((brand) => ({ url: `${siteConfig.url}/brands/${brand.slug}/`, changeFrequency: "monthly" as const, priority: .6 })),
    ...stores.map((store) => ({ url: `${siteConfig.url}/stores/${store.slug}/`, changeFrequency: "monthly" as const, priority: .6 })),
  ];
}
