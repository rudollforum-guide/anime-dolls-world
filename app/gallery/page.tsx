import type { Metadata } from "next";
import { GalleryBrowser } from "@/components/GalleryBrowser";
import { PageHero } from "@/components/PageHero";
import { galleryCounts } from "@/data/modelGalleryIndex";
import { siteConfig } from "@/data/site";

const title = "Галерея аниме- и фурри-кукол | Anime Dolls World";
const description = "Галерея образов аниме- и фурри-кукол разных брендов. Просматривайте модели и переходите к страницам брендов с фотографиями и характеристиками.";
const canonical = `${siteConfig.url}/gallery/`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/gallery/" },
  openGraph: { title, description, type: "website", url: canonical, siteName: siteConfig.name, locale: "ru_RU" },
  twitter: { card: "summary", title, description },
};

export default function GalleryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: title,
        description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: "Галерея образов", item: canonical },
        ],
      },
    ],
  };

  return (
    <>
      <PageHero
        className="gallery-page-hero"
        eyebrow="Визуальная коллекция"
        title="Галерея образов"
        description="Фотографии аниме- и фурри-кукол из галерей представленных брендов. Выберите понравившийся образ, чтобы открыть страницу бренда, посмотреть другие модели и характеристики."
        crumbs={[{ label: "Галерея образов" }]}
      />
      <section className="section gallery-directory-section" aria-labelledby="gallery-directory-title">
        <div className="container">
          <div className="gallery-directory-head">
            <div>
              <p className="eyebrow">{galleryCounts.brands} брендов · {galleryCounts.total} моделей</p>
              <h2 id="gallery-directory-title">Выберите направление или бренд</h2>
            </div>
            <p>Карточка ведёт на профиль бренда, где доступны полный фотосет модели и дополнительные сведения.</p>
          </div>
          <GalleryBrowser />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
