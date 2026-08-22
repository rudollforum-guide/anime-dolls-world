import Image from "next/image";
import Link from "next/link";
import { homepageGalleryPreview } from "@/data/modelGalleryIndex";

const categoryLabels = { anime: "Аниме", furry: "Фурри" } as const;

export function ImageGallery() {
  return (
    <div className="image-gallery" aria-label="Галерея образов">
      {homepageGalleryPreview.map((model) => (
        <Link className="image-gallery-card" href={model.brandHref} aria-label={`${model.name}, ${model.brandName}: открыть страницу бренда`} key={model.id}>
          <Image
            className="image-gallery-image"
            src={model.primaryImage}
            alt={`${model.name} — ${model.brandName}`}
            fill
            sizes="(max-width: 650px) calc((100vw - 40px) / 2), (max-width: 900px) calc((100vw - 76px) / 3), 282px"
          />
          <span className="image-gallery-shade" aria-hidden="true" />
          <span className="image-gallery-copy">
            <span className={`image-gallery-badge is-${model.category}`}>{categoryLabels[model.category]}</span>
            <strong>{model.name}</strong>
            <span>{model.brandName}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}
