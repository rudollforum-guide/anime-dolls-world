"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryModel = {
  name: string;
  details?: string;
  folder: string;
  photos: string[];
  characteristics?: {
    height: string;
    material: string | string[];
    weightLabel?: string;
    weight: string | string[];
    specs: Array<{ label: string; value: string }>;
  };
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
  externalLink?: {
    href: string;
    label: string;
    ariaLabel: string;
  };
};

const aotumeMeasurements = {
  b145: [
    { label: "Размер груди", value: "B Cup" },
    { label: "Грудь", value: "60 см" },
    { label: "Под грудью", value: "49 см" },
    { label: "Талия", value: "42 см" },
    { label: "Бёдра", value: "74 см" },
    { label: "Плечи", value: "26 см" },
    { label: "Длина руки", value: "38 см" },
    { label: "Длина ноги", value: "68 см" },
    { label: "Стопа", value: "18 см" },
  ],
  c155: [
    { label: "Размер груди", value: "C Cup" },
    { label: "Грудь", value: "65 см" },
    { label: "Под грудью", value: "50 см" },
    { label: "Талия", value: "49 см" },
    { label: "Бёдра", value: "81 см" },
    { label: "Плечи", value: "28 см" },
    { label: "Длина руки", value: "45 см" },
    { label: "Длина ноги", value: "73 см" },
    { label: "Стопа", value: "19 см" },
  ],
  f155: [
    { label: "Размер груди", value: "F Cup" },
    { label: "Грудь", value: "73 см" },
    { label: "Под грудью", value: "52 см" },
    { label: "Талия", value: "50 см" },
    { label: "Бёдра", value: "81 см" },
    { label: "Плечи", value: "28 см" },
    { label: "Длина руки", value: "45 см" },
    { label: "Длина ноги", value: "73 см" },
    { label: "Стопа", value: "19 см" },
  ],
  h155: [
    { label: "Размер груди", value: "H Cup" },
    { label: "Грудь", value: "82 см" },
    { label: "Под грудью", value: "53 см" },
    { label: "Талия", value: "51 см" },
    { label: "Бёдра", value: "83 см" },
    { label: "Плечи", value: "29 см" },
    { label: "Длина руки", value: "46 см" },
    { label: "Длина ноги", value: "74 см" },
    { label: "Стопа", value: "19 см" },
  ],
  k160: [
    { label: "Размер груди", value: "K Cup" },
    { label: "Грудь", value: "102 см" },
    { label: "Под грудью", value: "65 см" },
    { label: "Талия", value: "60 см" },
    { label: "Бёдра", value: "104 см" },
    { label: "Плечи", value: "32 см" },
    { label: "Длина руки", value: "50 см" },
    { label: "Длина ноги", value: "79 см" },
    { label: "Стопа", value: "21 см" },
  ],
} satisfies Record<string, Array<{ label: string; value: string }>>;

const aotumeModels: GalleryModel[] = [
  {
    name: "Kamado Nezuko",
    details: "Head #47",
    folder: "kamado-nezuko",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "145 см", material: "TPE / силикон", weight: ["TPE — 23 кг", "Силикон — 23 кг"], specs: aotumeMeasurements.b145 },
  },
  {
    name: "Yami",
    details: "Head #113",
    folder: "145cm-yami",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "145 см", material: "TPE / силикон", weight: ["TPE — 23 кг", "Силикон — 23 кг"], specs: aotumeMeasurements.b145 },
  },
  {
    name: "C.C.",
    details: "Head #35",
    folder: "cc",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "TPE / силикон", weight: ["TPE — 26 кг", "Силикон — 27 кг"], specs: aotumeMeasurements.f155 },
  },
  {
    name: "Albedo",
    details: "Head #33",
    folder: "155cm-albedo",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "TPE / силикон", weight: ["TPE — 26 кг", "Силикон — 27 кг"], specs: aotumeMeasurements.f155 },
  },
  {
    name: "Kakudate Karin",
    details: "Head #64",
    folder: "kakudate-karin",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "TPE / силикон", weight: ["TPE — 26 кг", "Силикон — 27 кг"], specs: aotumeMeasurements.f155 },
  },
  {
    name: "Makise Kurisu",
    details: "Head #77",
    folder: "155cm-makise-kurisu",
    photos: ["01.webp", "02.webp", "03.webp"],
    characteristics: { height: "155 см", material: "TPE / силикон", weight: ["TPE — 27 кг", "Силикон — 27 кг"], specs: aotumeMeasurements.c155 },
  },
  {
    name: "Yor Forger",
    details: "Head #87",
    folder: "155cm-yor-forger",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: ["Голова — силикон", "Тело — TPE"], weightLabel: "Вес тела", weight: "26 кг", specs: aotumeMeasurements.f155 },
  },
  {
    name: "Fiona Frost",
    details: "Head #91",
    folder: "155cm-fiona-frost",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "TPE / силикон", weight: ["TPE — 27 кг", "Силикон — 27 кг"], specs: aotumeMeasurements.c155 },
  },
  {
    name: "Saigyouji Yuyuko",
    details: "Head #101",
    folder: "saigouji-yuuko",
    photos: ["01.webp", "02.webp", "03.webp"],
    characteristics: { height: "155 см", material: "TPE / силикон", weight: ["TPE — 29 кг", "Силикон — 25 кг"], specs: aotumeMeasurements.h155 },
  },
  {
    name: "IJN Owari",
    details: "Head #105",
    folder: "155cm-ijn-owari",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "TPE / силикон", weight: ["TPE — 29 кг", "Силикон — 25 кг"], specs: aotumeMeasurements.h155 },
  },
  {
    name: "St. Louis",
    details: "Head #111",
    folder: "155cm-st-louis",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "TPE / силикон", weight: ["TPE — 29 кг", "Силикон — 25 кг"], specs: aotumeMeasurements.h155 },
  },
  {
    name: "Emilia",
    details: "Head #125",
    folder: "155cm-emilia",
    photos: ["01.webp", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "TPE / силикон", weight: ["TPE — 27 кг", "Силикон — 27 кг"], specs: aotumeMeasurements.c155 },
  },
  {
    name: "Gouden Leeuw",
    details: "Head #132",
    folder: "gouden-leeuw",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "160 см", material: "TPE / силикон", weight: ["TPE — 46 кг", "Силикон — 41 кг"], specs: aotumeMeasurements.k160 },
  },
];

function CharacteristicValue({ value }: { value: string | string[] }) {
  return Array.isArray(value) ? <>{value.map((line) => <span key={line}>{line}</span>)}</> : <>{value}</>;
}

function ModelCharacteristics({ model }: { model: GalleryModel }) {
  if (!model.characteristics) return null;
  const { height, material, weightLabel = "Вес", weight, specs } = model.characteristics;

  return (
    <div className="aotume-model-characteristics">
      <dl className="aotume-model-characteristics-primary">
        <div><dt>Рост</dt><dd>{height}</dd></div>
        <div><dt>Материал</dt><dd><CharacteristicValue value={material} /></dd></div>
        <div><dt>{weightLabel}</dt><dd><CharacteristicValue value={weight} /></dd></div>
      </dl>
      <details className="aotume-model-characteristics-details">
        <summary>Все характеристики</summary>
        <dl>{specs.map((spec) => <div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl>
      </details>
    </div>
  );
}

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
  externalLink,
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

          <aside className="gallery-editorial-note" aria-label="Редакционная заметка об изображениях">
            <p>Часть изображений может быть визуально адаптирована для нейтральной публикации. Одежда на изображении не означает её наличие в комплекте.</p>
            <p>Оригинальные фабричные фотографии и материалы без такой адаптации также публикуются в <a href="https://t.me/AnimeDollsWorld" target="_blank" rel="noopener noreferrer" aria-label="Открыть Telegram-канал Anime Dolls World в новой вкладке">Telegram-канале Anime Dolls World</a>.</p>
          </aside>

          <div className="section-head">
            <div>
              <p className="eyebrow">{eyebrow}</p>
              <h2 id={`${id}-gallery-title`}>{title}</h2>
            </div>
            <p>{description}</p>
          </div>

          <div className={`aotume-model-gallery-grid${layout === "triptych" ? " is-triptych" : ""}${models.some((model) => model.characteristics) ? " has-characteristics" : ""}`}>
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
                      {model.details && <span>{model.details}</span>}
                      <span className="aotume-model-gallery-open">Открыть фотосет</span>
                    </span>
                  </button>
                ) : (
                  <>
                    <div className="aotume-model-gallery-copy">
                      <strong>{model.name}</strong>
                      {model.details && <span>{model.details}</span>}
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
                <ModelCharacteristics model={model} />
              </article>
            ))}
          </div>

          {externalLink && (
            <a
              className="aotume-model-gallery-external"
              href={externalLink.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label={externalLink.ariaLabel}
            >
              {externalLink.label}
            </a>
          )}
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
                {activeModel.details && <p>{activeModel.details}</p>}
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
      description="Тринадцать персонажных образов с отдельными фотосетами и характеристиками. Откройте карточку, чтобы посмотреть все фотографии модели."
      notice="Ниже представлены некоторые модели бренда для ознакомления. Это не полный каталог продукции. Полный список моделей и актуальные новинки доступны на официальном сайте производителя."
      galleryRoot="/images/brands/aotume-doll/gallery"
      models={aotumeModels}
    />
  );
}
