import Link from "next/link";
import type { Store } from "@/data/stores";

const storeBackgrounds: Record<string, string> = {
  "moon-doll": "moon-doll-store.webp",
  "elsa-babe-aliexpress": "aliexpress-store.webp",
};

export function StoreCard({ store, cta }: { store: Store; cta: string }) {
  const background = storeBackgrounds[store.slug];

  return (
    <Link
      href={`/stores/${store.slug}/`}
      className={`store-card store-card--${store.slug}`}
      style={{ backgroundImage: `url("/images/stores/${background}")` }}
    >
      <span className="tag">{store.eyebrow}</span>
      <h3>{store.name}</h3>
      <p>{store.summary}</p>
      <span className="text-link">{cta}</span>
    </Link>
  );
}
