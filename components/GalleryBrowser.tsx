"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  galleryBrands,
  galleryModelIndex,
  type GalleryCategory,
} from "@/data/modelGalleryIndex";

const PAGE_SIZE = 24;
type CategoryFilter = "all" | GalleryCategory;

const categoryLabels: Record<GalleryCategory, string> = {
  anime: "Аниме",
  furry: "Фурри",
};

export function GalleryBrowser() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [brand, setBrand] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredModels = useMemo(
    () => galleryModelIndex.filter((model) =>
      (category === "all" || model.category === category)
      && (brand === "all" || model.brandSlug === brand)),
    [brand, category],
  );
  const visibleModels = filteredModels.slice(0, visibleCount);

  function selectCategory(nextCategory: CategoryFilter) {
    setCategory(nextCategory);
    setVisibleCount(PAGE_SIZE);
  }

  function selectBrand(nextBrand: string) {
    setBrand(nextBrand);
    setVisibleCount(PAGE_SIZE);
  }

  function resetFilters() {
    setCategory("all");
    setBrand("all");
    setVisibleCount(PAGE_SIZE);
  }

  return (
    <div className="gallery-browser">
      <div className="gallery-filters" aria-label="Фильтры галереи">
        <div className="gallery-category-filters" aria-label="Фильтр по направлению">
          {([
            ["all", "Все"],
            ["anime", "Аниме"],
            ["furry", "Фурри"],
          ] as const).map(([value, label]) => (
            <button
              className={category === value ? "is-active" : undefined}
              type="button"
              aria-pressed={category === value}
              onClick={() => selectCategory(value)}
              key={value}
            >
              {label}
            </button>
          ))}
        </div>
        <label className="gallery-brand-filter">
          <span>Бренд</span>
          <select value={brand} onChange={(event) => selectBrand(event.target.value)}>
            <option value="all">Все бренды</option>
            {galleryBrands.map((item) => (
              <option value={item.slug} key={item.slug}>{item.name}</option>
            ))}
          </select>
        </label>
      </div>

      <p className="gallery-result-count" aria-live="polite">
        Показано {visibleModels.length} из {filteredModels.length}
      </p>

      {visibleModels.length > 0 ? (
        <div className="gallery-browser-grid">
          {visibleModels.map((model, index) => (
            <Link
              className="image-gallery-card"
              href={model.brandHref}
              aria-label={`${model.name}, ${model.brandName}: открыть страницу бренда`}
              key={model.id}
            >
              <Image
                className="image-gallery-image"
                src={model.primaryImage}
                alt={`${model.name} — ${model.brandName}`}
                fill
                priority={index < 4}
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
      ) : (
        <div className="gallery-empty-state">
          <h2>По выбранным фильтрам моделей не найдено.</h2>
          <p>Сбросьте фильтры, чтобы вернуться ко всей подборке.</p>
          <button className="button secondary" type="button" onClick={resetFilters}>Сбросить фильтры</button>
        </div>
      )}

      {visibleModels.length < filteredModels.length && (
        <div className="gallery-load-more">
          <button
            className="button secondary"
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            Показать ещё
          </button>
        </div>
      )}
    </div>
  );
}
