"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryModel = {
  name: string;
  details: string;
  folder: string;
  photos: string[];
};

type BrandModelGalleryProps = {
  id: string;
  eyebrow: string;
  title?: string;
  description: string;
  notice?: string;
  galleryRoot: string;
  models: GalleryModel[];
  layout?: "cover" | "triptych";
  tone?: "default" | "contrast";
};

const aotumeModels: GalleryModel[] = [
  {
    name: "Kamado Nezuko",
    details: "145cm · Head #47",
    folder: "kamado-nezuko",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
  },
  {
    name: "C.C",
    details: "155cm · Head #35",
    folder: "cc",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
  },
  {
    name: "Kakudate Karin",
    details: "155cm · Head #64",
    folder: "kakudate-karin",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
  },
  {
    name: "Saigouji Yuuko",
    details: "155cm · Head #101",
    folder: "saigouji-yuuko",
    photos: ["01.webp", "02.webp", "03.webp"],
  },
  {
    name: "Gouden Leeuw",
    details: "160cm · Head #132",
    folder: "gouden-leeuw",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
  },
];

function photoPath(galleryRoot: string, model: GalleryModel, photo: string) {
  return `${galleryRoot}/${model.folder}/${photo}`;
}

export function BrandModelGallery({
  id,
  eyebrow,
  title = "Галерея моделей",
  description,
  notice,
  galleryRoot,
  models,
  layout = "cover",
  tone = "default",
}: BrandModelGalleryProps) {
  const [activeModelIndex, setActiveModelIndex] = useState<number | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const activeModel = activeModelIndex === null ? null : models[activeModelIndex];

  function openGallery(modelIndex: number, photoIndex: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActivePhotoIndex(photoIndex);
    setActiveModelIndex(modelIndex);
  }

  function closeGallery() {
    setActiveModelIndex(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  function showPreviousPhoto() {
    if (!activeModel) return;
    setActivePhotoIndex((current) => (current - 1 + activeModel.photos.length) % activeModel.photos.length);
  }

  function showNextPhoto() {
    if (!activeModel) return;
    setActivePhotoIndex((current) => (current + 1) % activeModel.photos.length);
  }

  useEffect(() => {
    if (activeModelIndex === null) return;
    const photoCount = models[activeModelIndex].photos.length;
    const documentRoot = document.documentElement;
    documentRoot.classList.add("lightbox-open");

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveModelIndex(null);
        window.setTimeout(() => triggerRef.current?.focus(), 0);
      }
      if (event.key === "ArrowLeft") {
        setActivePhotoIndex((current) => (current - 1 + photoCount) % photoCount);
      }
      if (event.key === "ArrowRight") {
        setActivePhotoIndex((current) => (current + 1) % photoCount);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      documentRoot.classList.remove("lightbox-open");
    };
  }, [activeModelIndex, models]);

  return (
    <>
      <section className={`section aotume-model-gallery-section${tone === "contrast" ? " is-contrast" : ""}`} aria-labelledby={`${id}-gallery-title`}>
        <div className="container">
          {notice && <div className="notice aotume-model-gallery-notice">{notice}</div>}

          <div className="section-head">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h2 id={`${id}-gallery-title`}>{title}</h2>
            </div>
            <p>{description}</p>
          </div>

          <div className={`aotume-model-gallery-grid${layout === "triptych" ? " is-triptych" : ""}`}>
            {models.map((model, modelIndex) => (
              <article className={`aotume-model-gallery-card${layout === "triptych" ? " is-triptych" : ""}`} key={model.folder}>
                {layout === "cover" ? (
                  <button
                    className="aotume-model-gallery-trigger"
                    type="button"
                    aria-haspopup="dialog"
                    aria-label={`Открыть фотосет модели ${model.name}`}
                    onClick={(event) => openGallery(modelIndex, 0, event.currentTarget)}
                  >
                    <span className="aotume-model-gallery-preview">
                      <Image
                        src={photoPath(galleryRoot, model, model.photos[0])}
                        alt={`${model.name} — превью фотосета`}
                        fill
                        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      />
                      <span className="aotume-model-gallery-count" aria-hidden="true">{model.photos.length} фото</span>
                    </span>
                    <span className="aotume-model-gallery-copy">
                      <strong>{model.name}</strong>
                      <span>{model.details}</span>
                      <span className="aotume-model-gallery-open">Открыть фотосет</span>
                    </span>
                  </button>
                ) : (
                  <>
                    <div className="aotume-model-gallery-copy">
                      <strong>{model.name}</strong>
                      <span>{model.details}</span>
                    </div>
                    <div className="aotume-model-gallery-triptych">
                      {model.photos.map((photo, photoIndex) => (
                        <button
                          type="button"
                          key={photo}
                          aria-haspopup="dialog"
                          aria-label={`Открыть фотографию ${photoIndex + 1} модели ${model.name}`}
                          onClick={(event) => openGallery(modelIndex, photoIndex, event.currentTarget)}
                        >
                          <Image
                            src={photoPath(galleryRoot, model, photo)}
                            alt={`${model.name}, фотография ${photoIndex + 1}`}
                            fill
                            sizes="(max-width: 650px) 30vw, 18vw"
                          />
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeModel && createPortal(
        <div
          className="aotume-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${id}-lightbox-title-${activeModel.folder}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <div className="aotume-lightbox-panel">
            <div className="aotume-lightbox-heading">
              <div>
                <p className="eyebrow">Фотосет · {activePhotoIndex + 1} из {activeModel.photos.length}</p>
                <h2 id={`${id}-lightbox-title-${activeModel.folder}`}>{activeModel.name}</h2>
                <p>{activeModel.details}</p>
              </div>
              <button className="aotume-lightbox-close" type="button" onClick={closeGallery} aria-label="Закрыть фотосет" autoFocus>×</button>
            </div>

            <div className="aotume-lightbox-stage">
              <Image
                src={photoPath(galleryRoot, activeModel, activeModel.photos[activePhotoIndex])}
                alt={`${activeModel.name}, фотография ${activePhotoIndex + 1} из ${activeModel.photos.length}`}
                fill
                sizes="100vw"
                priority
              />
              <button className="aotume-lightbox-arrow previous" type="button" onClick={showPreviousPhoto} aria-label="Предыдущая фотография">‹</button>
              <button className="aotume-lightbox-arrow next" type="button" onClick={showNextPhoto} aria-label="Следующая фотография">›</button>
            </div>

            <div className="aotume-lightbox-thumbnails" aria-label="Фотографии модели">
              {activeModel.photos.map((photo, photoIndex) => (
                <button
                  className={photoIndex === activePhotoIndex ? "active" : undefined}
                  type="button"
                  key={photo}
                  onClick={() => setActivePhotoIndex(photoIndex)}
                  aria-label={`Показать фотографию ${photoIndex + 1}`}
                  aria-current={photoIndex === activePhotoIndex ? "true" : undefined}
                >
                  <Image src={photoPath(galleryRoot, activeModel, photo)} alt="" fill sizes="92px" />
                </button>
              ))}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}

export function AotumeModelGallery() {
  return (
    <BrandModelGallery
      id="aotume"
      eyebrow="Образы Aotume Doll"
      description="Пять персонажных образов с отдельными фотосетами. Откройте карточку, чтобы посмотреть все фотографии модели."
      notice="Ниже представлены некоторые модели бренда для ознакомления. Это не полный каталог продукции. Полный список моделей и актуальные новинки доступны на официальном сайте производителя."
      galleryRoot="/images/brands/aotume-doll/gallery"
      models={aotumeModels}
    />
  );
}
