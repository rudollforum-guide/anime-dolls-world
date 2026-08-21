import Link from "next/link";
import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { siteConfig } from "@/data/site";

const galleryModels: GalleryModel[] = [
  {
    name: "LZ01",
    details: "155cm",
    folder: "155cm-lz01",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "155 см",
      material: "силикон",
      weight: "30 кг",
      specs: [
        { label: "Размер груди", value: "I Cup" },
        { label: "Грудь", value: "85 см" },
        { label: "Талия", value: "50,5 см" },
        { label: "Бёдра", value: "95 см" },
        { label: "Плечи", value: "29 см" },
        { label: "Длина руки", value: "58 см" },
        { label: "Длина ноги", value: "82 см" },
        { label: "Стопа", value: "20 см" },
        { label: "Голова", value: "LZ01" },
        { label: "Тип головы", value: "Hard Silicone / Soft Silicone" },
      ],
    },
  },
];

const verificationChecks = [
  "точное название и обозначение модели",
  "материал тела и головы",
  "рост, вес и размеры упаковки",
  "конструкция скелета и доступные опции",
  "фотографии и полный состав комплектации",
] as const;

export function YearndollProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/brands/yearndoll/#webpage`,
        url: `${siteConfig.url}/brands/yearndoll/`,
        name: "Yearndoll — отдельные anime и stylized модели",
        description: "Yearndoll — бренд, под которым встречаются отдельные anime и stylized модели. Официальной информации немного, поэтому характеристики рекомендуется проверять для каждой модели отдельно.",
        isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
        breadcrumb: { "@id": `${siteConfig.url}/brands/yearndoll/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/brands/yearndoll/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: "Бренды", item: `${siteConfig.url}/brands/` },
          { "@type": "ListItem", position: 3, name: "Yearndoll", item: `${siteConfig.url}/brands/yearndoll/` },
        ],
      },
    ],
  };

  return <>
    <section className="page-hero yearndoll-brand-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Yearndoll" }]} />
        <div className="yearndoll-hero-grid">
          <div>
            <p className="eyebrow">Дополнительный бренд каталога</p>
            <h1>Yearndoll</h1>
            <p className="lede">Бренд или маркировка, под которой у продавцов встречаются разные модели, включая отдельные варианты с anime и stylized эстетикой.</p>
            <p className="yearndoll-hero-note">Подтверждённый официальный сайт производителя на момент проверки не установлен, поэтому профиль не содержит предположений об истории, технологиях или характеристиках всего ассортимента.</p>
            <div className="yearndoll-tags" aria-label="Категория Yearndoll"><span>Аниме-линейки</span><span>Ограниченные данные</span><span>Проверка модели</span></div>
            <Link className="button primary" href="/buying/">Как проверить предложение</Link>
          </div>
          <BrandProfileIcon slug="yearndoll" name="Yearndoll" />
        </div>
      </div>
    </section>

    <main className="yearndoll-brand-profile">
      <section className="section">
        <div className="container yearndoll-intro">
          <article className="prose"><p className="eyebrow">Что можно сказать без предположений</p><h2>О Yearndoll</h2><p>Yearndoll — бренд или маркировка, под которой в продаже встречаются различные модели кукол, включая отдельные варианты с anime и stylized эстетикой.</p><p>На момент подготовки страницы отдельный подтверждённый официальный сайт производителя найти не удалось, поэтому Anime Dolls World не приписывает Yearndoll неподтверждённые характеристики.</p></article>
          <aside className="yearndoll-status"><p className="eyebrow">Статус информации</p><dl><div><dt>Категория</dt><dd>Аниме-линейки</dd></div><div><dt>Официальный источник</dt><dd>Не установлен</dd></div><div><dt>Характеристики</dt><dd>Проверяются для каждой модели</dd></div></dl></aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container yearndoll-two-column">
          <article><p className="eyebrow">Отдельные предложения</p><h2>Anime-модели</h2><p>Под маркировкой Yearndoll встречаются отдельные модели с anime-style дизайном. Это не означает, что весь ассортимент относится к anime или что существует подтверждённая официальная Anime Series.</p><p>Дизайн головы, макияж, размеры, материал и комплектацию необходимо проверять по конкретному предложению продавца.</p></article>
          <article><p className="eyebrow">Сторонние каталоги</p><h2>Что известно о каталоге</h2><p>Yearndoll встречается в каталогах сторонних продавцов и дилеров. Из-за отсутствия полноценного подтверждённого официального каталога ассортимент, доступность и характеристики могут различаться между площадками.</p><p>Предложения магазинов нельзя использовать как подтверждение универсальных характеристик всего бренда.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="container yearndoll-material-panel">
          <div><p className="eyebrow">Без общих технических заявлений</p><h2>Материалы и характеристики</h2><p>Материал тела и головы, рост, вес, конструкция скелета и доступные опции необходимо проверять для каждой конкретной модели у продавца.</p><p>Если в будущем появится подтверждённый официальный источник Yearndoll, страницу можно будет дополнить проверяемыми сведениями.</p></div>
          <aside><h3>Запросите перед оплатой</h3><ul>{verificationChecks.map(item => <li key={item}>{item}</li>)}</ul></aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container yearndoll-reason-panel"><div><p className="eyebrow">Роль в справочнике</p><h2>Почему Yearndoll есть в Anime Dolls World</h2><p>Yearndoll включён в каталог как дополнительный производитель или бренд, у которого встречаются отдельные anime и stylized модели.</p><p>По имеющимся подтверждённым данным это не специализированный anime-бренд.</p></div><aside><strong>Ограниченный профиль</strong><p>Небольшой объём страницы — осознанное решение: отсутствие первичного источника нельзя компенсировать предположениями или рекламными описаниями дилеров.</p></aside></div>
      </section>

      <BrandModelGallery
        id="yearndoll"
        eyebrow="Найденная стилизованная модель"
        description="Демонстрационный фотосет конкретной модели из стороннего каталога."
        notice="Ниже представлена одна найденная стилизованная модель Yearndoll для знакомства с направлением бренда. Это не полный каталог. Официальный сайт производителя нами не подтверждён; ссылка ниже ведёт на сторонний магазин, где опубликована страница этой модели. Её можно использовать как ориентир при уточнении заказа у выбранного продавца."
        galleryRoot="/images/brands/yearndoll/gallery"
        models={galleryModels}
        layout="triptych"
        externalLink={{
          href: "https://www.rosemarydoll.com/es/product/155cm-5ft1-i-cup-silicone-sex-doll-lz01-2/",
          label: "Посмотреть эту модель у RosemaryDoll",
          ariaLabel: "Открыть страницу модели Yearndoll LZ01 в стороннем магазине RosemaryDoll в новой вкладке",
        }}
      />

      <section className="section">
        <div className="container"><div className="section-head"><div><p className="eyebrow">Вариант запроса</p><h2>Где купить</h2></div><p>Anime Dolls World не подтверждает постоянное наличие Yearndoll у какого-либо продавца.</p></div><div className="yearndoll-buy-panel">
          <article><p className="eyebrow">Индивидуальное уточнение</p><h3>Moon-Doll</h3><p>Если вы нашли конкретную модель Yearndoll у другого продавца или в каталоге производителя, можно отправить ссылку менеджеру Moon-Doll и уточнить возможность индивидуального заказа.</p><p>Moon-Doll не является подтверждённым официальным представителем Yearndoll; возможность заказа и наличие не гарантируются.</p><Link className="button primary" href="/stores/moon-doll/">Открыть гид Moon-Doll</Link></article>
          <aside><h3>Особенно важно проверить</h3><p>Перед заказом Yearndoll запросите у продавца точное название модели, материал, размеры, фотографии комплектации и актуальные характеристики.</p><div className="notice">Условия заказа, оплаты и доставки необходимо подтвердить непосредственно у продавца до оплаты.</div></aside>
        </div></div>
      </section>

      <section className="section alt">
        <div className="container yearndoll-source-note"><div><p className="eyebrow">Прозрачность данных</p><h2>Источники</h2><p>Официальный веб-ресурс Yearndoll на момент проверки не установлен. Информация на этой странице намеренно ограничена тем, что можно подтвердить без предположений.</p></div><nav aria-label="Связанные разделы Yearndoll"><Link className="button secondary" href="/anime-dolls/">Аниме-куклы</Link><Link className="button secondary" href="/buying/">Выбор и покупка</Link><Link className="button secondary" href="/care/">Уход</Link><Link className="button secondary" href="/stores/moon-doll/">Moon-Doll</Link></nav></div>
      </section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
