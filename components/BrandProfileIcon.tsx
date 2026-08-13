import Image from "next/image";
import { getBrandHeroIconPath } from "@/data/brandHeroIcons";

export function BrandProfileIcon({ slug, name }: { slug: string; name: string }) {
  const src = getBrandHeroIconPath(slug);

  if (!src) return null;

  return (
    <div className="brand-profile-icon">
      <Image
        src={src}
        alt={`Эмблема бренда ${name}`}
        width={160}
        height={160}
        sizes="(max-width: 650px) 108px, 160px"
      />
    </div>
  );
}
