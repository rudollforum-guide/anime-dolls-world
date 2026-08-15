import type { Metadata } from "next";
import Link from "next/link";
import { BrandCard } from "@/components/BrandCard";
import { brands } from "@/data/brands";
import { stores } from "@/data/stores";
import { siteConfig } from "@/data/site";
import { HeroMaidScene } from "@/components/HeroMaidScene";
import { CategoryHeroCard } from "@/components/CategoryHeroCard";
import { StoreCard } from "@/components/StoreCard";
import { ImageGallery } from "@/components/ImageGallery";

const homePreviewUrl = "https://animedollsworld.com/images/og/home-preview.png";
const homeTitle = "Аниме- и фурри-куклы из TPE и силикона | Anime Dolls World";
const homeDescription = "Каталог полноразмерных аниме- и фурри-кукол из TPE и силикона: модели примерно 140–170+ см, бренды, материалы, магазины, выбор и уход.";

export const metadata: Metadata = {
  title: homeTitle,
  description: homeDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: siteConfig.name,
    title: homeTitle,
    description: homeDescription,
    url: "https://animedollsworld.com/",
    images: [homePreviewUrl],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [homePreviewUrl],
  },
};

export default function Home() {
  return <>
    <section className="hero"><HeroMaidScene /><div className="container"><div className="hero-content"><p className="eyebrow">Независимый каталог · 18+</p><h1>Anime Dolls <span>World</span></h1><p className="lede">Каталог полноразмерных аниме- и фурри-кукол из современных TPE- и силиконовых материалов. Основной фокус — ростовые модели примерно 140–170+ см, бренды, технологии, выбор, покупка и уход.</p><div className="hero-actions"><Link className="button primary" href="/brands/">Смотреть бренды</Link><Link className="button secondary" href="/stores/">Где купить</Link><Link className="button secondary" href="/anime-dolls/">Аниме-куклы</Link><Link className="button secondary" href="/furry-dolls/">Фурри-куклы</Link></div><div className="trust-row"><span>Без откровенного контента</span><span>Данные из открытых источников</span><span>Не магазин</span></div></div></div></section>
    <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Навигация по миру кукол</p><h2>Начните с нужного направления</h2></div><p>Разделяем категории и справочные материалы, чтобы сравнивать бренды было проще.</p></div><div className="direction-grid"><CategoryHeroCard title="Аниме-куклы" description="Полноразмерные модели из TPE, силикона и их более мягких вариантов с аниме-стилизацией, персонажными головами и возможностями кастомизации." href="/anime-dolls/" image="/images/sections/anime-section.webp" /><CategoryHeroCard title="Фурри-куклы" description="Ростовые антропоморфные и fantasy-модели с нестандартными головами, ушами, хвостами и другими декоративными элементами." href="/furry-dolls/" image="/images/sections/furry-section.webp" /><CategoryHeroCard title="Выбор и покупка" description="TPE или силикон, мягкие формуляции материалов, рост, масса, каркас, комплектация, продавец и доставка." href="/buying/" image="/images/sections/buying-section.webp" /></div><div className="notice">В каталогах производителей встречаются классический TPE и силикон, отдельные более мягкие варианты, а также фирменные обозначения — например S-TPE, STPE и ultra-soft silicone. Эти названия не взаимозаменяемы: точный материал и его свойства всегда следует проверять для конкретной модели.</div></div></section>
    <section className="section gallery-section" aria-labelledby="gallery-title"><div className="container"><div className="section-head"><div><p className="eyebrow">Визуальная коллекция</p><h2 id="gallery-title">Галерея образов</h2></div><p>Среди аниме- и фурри-кукол представлены разные направления: оригинальные кастомные персонажи, классические образы, а также персонажи, вдохновлённые играми, аниме и мангой.</p></div><ImageGallery /></div></section>
    <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Популярные производители</p><h2>Бренды каталога</h2></div><Link href="/brands/" className="text-link">Все бренды</Link></div><div className="brand-grid">{brands.slice(0,6).map(brand => <BrandCard key={brand.slug} brand={brand} />)}</div></div></section>
    <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Покупка</p><h2>Магазины и площадки</h2></div><p>Нейтральные ориентиры без обещаний по ценам, срокам и наличию.</p></div><div className="store-grid">{stores.map(store => <StoreCard store={store} cta="Открыть памятку" key={store.slug} />)}</div></div></section>
    <section className="section alt"><div className="container"><div className="placeholder-band"><span className="placeholder-icon">✦</span><p className="eyebrow">Каталог развивается</p><h2>Демонстрационные галереи брендов</h2><p className="lede" style={{margin:"0 auto"}}>В профилях брендов добавляются демонстрационные галереи ростовых моделей с параметрами и фотосетами. Подборки не являются полными каталогами производителей и дополняются по мере проверки информации.</p></div></div></section>
    <div className="disclaimer-strip"><div className="container"><span>ⓘ</span><span>Сайт носит справочный характер, не продаёт товары и не гарантирует актуальность условий сторонних площадок. Перед покупкой проверяйте данные у производителя или продавца.</span></div></div>
    <section className="telegram-section" aria-labelledby="telegram-title"><div className="container"><div className="telegram-cta" style={{ backgroundImage: `url("/images/telegram/telegram-section.webp")` }}><div className="telegram-orbit" aria-hidden="true"><span className="telegram-icon">➤</span></div><div className="telegram-copy"><p className="eyebrow">Продолжение каталога</p><h2 id="telegram-title">Anime Dolls World в Telegram</h2><p className="telegram-lede">Новости брендов, новые модели, подборки, материалы по выбору и уходу.</p><p className="telegram-extra">В канале также размещается информация о закрытой группе для совершеннолетних участников.</p></div><div className="telegram-action"><a className="telegram-button" href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть Telegram-канал Anime Dolls World в новой вкладке"><span className="telegram-icon" aria-hidden="true">➤</span><span>Открыть Telegram-канал</span></a><p className="telegram-warning"><strong>18+</strong> В закрытой группе публикуются дополнительные материалы для совершеннолетней аудитории. Условия доступа указаны в Telegram-канале.</p></div></div></div></section>
  </>;
}
