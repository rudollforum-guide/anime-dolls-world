"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type AotumeGalleryModel = {
  name: string;
  details: string;
  folder: string;
  photos: string[];
};

const galleryRoot = "/images/brands/aotume-doll/gallery";

const models: AotumeGalleryModel[] = [
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

function photoPath(model: AotumeGalleryModel, photo: string) {
  return `${galleryRoot}/${model.folder}/${photo}`;
}

export function AotumeModelGallery() {
  const [activeModelIndex, setActiveModelIndex] = useState<number | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const activeModel = activeModelIndex === null ? null : models[activeModelIndex];

  function openGallery(modelIndex: number, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setActivePhotoIndex(0);
    setActiveModelIndex(modelIndex);
  }

  function closeGallery() {
    setActiveModelIndex(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  function showPreviousPhoto() {
    setActivePhotoIndex((current) => (current - 1 + 3) % 3);
  }

  function showNextPhoto() {
    setActivePhotoIndex((current) => (current + 1) % 3);
  }

  useEffect(() => {
    if (activeModelIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPreviousPhoto();
      if (event.key === "ArrowRight") showNextPhoto();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeModelIndex]);

  return (
    <section className="section aotume-model-gallery-section" aria-labelledby="aotume-gallery-title">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="eyebrow">Образы Aotume Doll</p>
            <h2 id="aotume-gallery-title">Галерея моделей</h2>
          </div>
          <p>Пять персонажных образов с отдельными фотосетами. Откройте карточку, чтобы посмотреть все фотографии модели.</p>
        </div>

        <div className="aotume-model-gallery-grid">
          {models.map((model, modelIndex) => (
            <article className="aotume-model-gallery-card" key={model.folder}>
              <button
                className="aotume-model-gallery-trigger"
                type="button"
                aria-haspopup="dialog"
                aria-label={`Открыть фотосет модели ${model.name}`}
                onClick={(event) => openGallery(modelIndex, event.currentTarget)}
              >
                <span className="aotume-model-gallery-preview">
                  <Image
                    src={photoPath(model, model.photos[0])}
                    alt={`${model.name} — превью фотосета`}
                    fill
                    sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  />
                  <span className="aotume-model-gallery-count" aria-hidden="true">3 фото</span>
                </span>
                <span className="aotume-model-gallery-copy">
                  <strong>{model.name}</strong>
                  <span>{model.details}</span>
                  <span className="aotume-model-gallery-open">Открыть фотосет</span>
                </span>
              </button>
            </article>
          ))}
        </div>
      </div>

      {activeModel && (
        <div
          className="aotume-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`aotume-lightbox-title-${activeModel.folder}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <div className="aotume-lightbox-panel">
            <div className="aotume-lightbox-heading">
              <div>
                <p className="eyebrow">Фотосет · {activePhotoIndex + 1} из 3</p>
                <h2 id={`aotume-lightbox-title-${activeModel.folder}`}>{activeModel.name}</h2>
                <p>{activeModel.details}</p>
              </div>
              <button className="aotume-lightbox-close" type="button" onClick={closeGallery} aria-label="Закрыть фотосет" autoFocus>×</button>
            </div>

            <div className="aotume-lightbox-stage">
              <Image
                src={photoPath(activeModel, activeModel.photos[activePhotoIndex])}
                alt={`${activeModel.name}, фотография ${activePhotoIndex + 1} из 3`}
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
                  <Image src={photoPath(activeModel, photo)} alt="" fill sizes="92px" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
