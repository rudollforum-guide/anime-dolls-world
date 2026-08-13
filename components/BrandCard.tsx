import Image from "next/image";
import Link from "next/link";
import { Brand, categoryLabels } from "@/data/brands";
import { brandIconFiles } from "@/data/brandIcons";

export function BrandCard({ brand }: { brand: Brand }) {
  const iconFile = brandIconFiles[brand.slug];

  return <article className={`brand-card${iconFile ? " has-brand-icon" : ""}`}><div className={`card-monogram${iconFile ? " has-image" : ""}`}>{iconFile ? <><span className="card-monogram-fallback" aria-hidden="true">{brand.name.slice(0, 2).toUpperCase()}</span><Image className="card-monogram-image" src={`/brand-icons/${iconFile}`} alt={`Иконка бренда ${brand.name}`} width={64} height={64} /></> : brand.name.slice(0, 2).toUpperCase()}</div><div><div className="tags">{brand.categories.map(c => <span key={c}>{categoryLabels[c]}</span>)}</div><h3>{brand.name}</h3><p>{brand.summary}</p><Link href={`/brands/${brand.slug}/`} className="text-link">Открыть профиль</Link></div></article>;
}
