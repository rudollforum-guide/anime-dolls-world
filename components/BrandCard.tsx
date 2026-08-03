import Link from "next/link";
import { Brand, categoryLabels } from "@/data/brands";

export function BrandCard({ brand }: { brand: Brand }) {
  return <article className="brand-card"><div className="card-monogram">{brand.name.slice(0, 2).toUpperCase()}</div><div><div className="tags">{brand.categories.map(c => <span key={c}>{categoryLabels[c]}</span>)}</div><h3>{brand.name}</h3><p>{brand.summary}</p><Link href={`/brands/${brand.slug}/`} className="text-link">Открыть профиль</Link></div></article>;
}
