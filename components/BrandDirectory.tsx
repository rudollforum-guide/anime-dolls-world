"use client";

import { useMemo, useState } from "react";
import { Brand, BrandCategory, categoryLabels } from "@/data/brands";
import { BrandCard } from "./BrandCard";

export function BrandDirectory({ brands }: { brands: Brand[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<"all" | BrandCategory>("all");
  const visible = useMemo(() => brands.filter(b => (filter === "all" || b.categories.includes(filter)) && b.name.toLowerCase().includes(query.toLowerCase())), [brands, query, filter]);
  return <><div className="directory-tools"><label className="search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Найти бренд" aria-label="Поиск по брендам" /></label><div className="filters"><button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>Все</button>{(Object.keys(categoryLabels) as BrandCategory[]).map(key => <button key={key} className={filter === key ? "active" : ""} onClick={() => setFilter(key)}>{key === "anime" ? "Аниме" : key === "furry" ? "Фурри" : "Аниме-линейки"}</button>)}</div></div><p className="results-count">Найдено: {visible.length}</p><div className="brand-grid">{visible.map(brand => <BrandCard key={brand.slug} brand={brand} useIcon />)}</div>{visible.length === 0 && <div className="empty-state">По этому запросу бренды не найдены.</div>}</>;
}
