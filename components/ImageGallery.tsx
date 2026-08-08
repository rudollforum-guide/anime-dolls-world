import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const galleryImages = Array.from(
  { length: 8 },
  (_, index) => `/images/gallery/anime-${String(index + 1).padStart(2, "0")}.webp`,
);

export function ImageGallery() {
  return (
    <div className="image-gallery" aria-label="Галерея образов">
      {galleryImages.map((image, index) => (
        <figure className="image-gallery-card" key={image}>
          <Image
            className="image-gallery-image"
            src={`${basePath}${image}`}
            alt={`Демонстрационный образ аниме- или фурри-куклы ${index + 1}`}
            fill
            sizes="(max-width: 650px) calc((100vw - 40px) / 2), (max-width: 900px) calc((100vw - 76px) / 3), 282px"
          />
          <span className="image-gallery-shade" aria-hidden="true" />
        </figure>
      ))}
    </div>
  );
}
