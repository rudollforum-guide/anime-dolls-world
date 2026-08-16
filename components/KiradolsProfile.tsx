import Link from "next/link";
import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://www.kiradols.com/";
const profileDescription = "Kiradols — производитель полноразмерных силиконовых аниме-моделей: 3D-скульпты, ростовые тела, конструкция, глаза, парики, одежда и производственный процесс.";

const productionStages = [
  ["3D-дизайн", "Цифровая проработка задаёт скульпт, пропорции и визуальный характер персонажа."],
  ["Создание форм", "Подготовленные формы переводят цифровой дизайн в производственный процесс."],
  ["Изготовление модели", "После формования выполняются сборка и подготовка полноразмерного тела."],
  ["Окрашивание и детали", "Макияж и body painting формируют финальную подачу конкретного образа."],
  ["Глаза, парик и одежда", "Эти элементы завершают персонажную стилизацию и зависят от комплектации."],
] as const;

const confirmedModels = [
  ["Tsumugi", "150 cm · Head #KH003 · Original Anime"],
  ["Umegawa Kurako", "155 и 160 cm · Head #KH001 · отдельные карточки каталога"],
  ["Risa", "150, 155 и 160 cm · Head #KH004 · DLC / Magical Girl"],
  ["Saori", "155 cm · Head #KH005 · DLC / Magical Girl"],
] as const;

const galleryModels: GalleryModel[] = [
  { name: "Tsumugi", details: "150cm", folder: "150cm-tsumugi", photos: ["01.png", "02.png", "03.png"] },
  { name: "Himari", details: "155cm", folder: "155cm-himari", photos: ["01.png", "02.png", "03.png"] },
  { name: "Risa", details: "155cm", folder: "155cm-risa", photos: ["01.png", "02.png", "03.png"] },
  { name: "Saori", details: "155cm", folder: "155cm-saori", photos: ["01.png", "02.png", "03.png"] },
  { name: "Umegawa Kurako", details: "155cm", folder: "155cm-umegawa-kurako", photos: ["01.png", "02.png", "03.png"] },
];

export function KiradolsProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${siteConfig.url}/brands/kiradols/#webpage`, url: `${siteConfig.url}/brands/kiradols/`, name: "Kiradols — полноразмерные силиконовые аниме-модели", description: profileDescription, isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url }, breadcrumb: { "@id": `${siteConfig.url}/brands/kiradols/#breadcrumb` } },
      { "@type": "BreadcrumbList", "@id": `${siteConfig.url}/brands/kiradols/#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${siteConfig.url}/` },
        { "@type": "ListItem", position: 2, name: "Бренды", item: `${siteConfig.url}/brands/` },
        { "@type": "ListItem", position: 3, name: "Kiradols", item: `${siteConfig.url}/brands/kiradols/` },
      ] },
    ],
  };

  return <>
    <section className="page-hero aotume-hero"><div className="container">
      <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Kiradols" }]} />
      <div className="aotume-hero-grid"><div>
        <p className="eyebrow">Аниме</p><h1>Kiradols</h1>
        <p className="lede">Производитель полноразмерных силиконовых аниме-моделей с персонажными 3D-скульптами, ростовыми телами и собственным производственным процессом.</p>
        <div className="aotume-tags" aria-label="Основные направления Kiradols">{["Аниме", "Silicone", "3D-дизайн", "150–160 cm"].map(tag => <span key={tag}>{tag}</span>)}</div>
        <a className="button primary aotume-official-link" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Kiradols в новой вкладке">Официальный сайт Kiradols</a>
      </div><BrandProfileIcon slug="kiradols" name="Kiradols" /></div>
    </div></section>

    <main className="aotume-profile">
      <section className="section"><div className="container aotume-intro-grid">
        <article className="prose aotume-prose"><p className="eyebrow">Профиль производителя</p><h2>О бренде</h2>
          <p>Kiradols специализируется на полноразмерных силиконовых моделях с выраженной аниме-эстетикой. Официальный каталог выделяет Original Anime и DLC Series, а также отдельные разделы с головами, париками и одеждой.</p>
          <p>Бренд показывает путь от 3D-дизайна и форм до производства, окрашивания и оформления образа. Наличие конкретного парика, костюма или дополнительной опции всегда следует проверять в карточке выбранной модели.</p>
        </article>
        <aside className="aotume-summary-card"><p className="eyebrow">Кратко</p><dl>
          <div><dt>Категория</dt><dd>Специализированный аниме-бренд</dd></div><div><dt>Материал</dt><dd>Silicone</dd></div><div><dt>Опубликованные форматы</dt><dd>150–160 cm</dd></div><div><dt>Разделы</dt><dd>Original Anime, DLC Series</dd></div>
        </dl></aside>
      </div></section>

      <section className="section alt"><div className="container aotume-two-column">
        <article className="aotume-content-card"><p className="eyebrow">Материал и тело</p><h2>Силиконовые модели</h2><p>Официальный сайт позиционирует Kiradols как бренд аниме-моделей из силикона. Для отдельных карточек подтверждено полностью силиконовое тело, однако состав, мягкость и конструкцию необходимо сверять по конкретной позиции.</p><div className="notice">Опция Jelly Breasts указана для отдельных моделей и не переносится автоматически на весь каталог.</div></article>
        <article className="aotume-content-card"><p className="eyebrow">Конструкция и подвижность</p><h2>Каркас и опции</h2><p>В конфигураторе отдельных моделей доступны Standard и EVO Skeleton. Там же встречаются upgraded articulated hand skeleton, hard hands, hard feet и wired toes.</p><div className="notice">Это набор доступных опций в проверенных карточках, а не универсальная комплектация каждой модели Kiradols.</div></article>
      </div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Оформление персонажа</p><h2>Глаза, парики и одежда</h2></div><p>Образ складывается из нескольких элементов; их наличие и варианты зависят от модели и комплектации.</p></div>
        <div className="aotume-feature-grid">
          <article className="aotume-feature-card"><span>01</span><h3>Глаза</h3><p>В проверенных конфигураторах представлены 13 вариантов цвета глаз. Для отдельных моделей также упоминаются movable eyes.</p></article>
          <article className="aotume-feature-card"><span>02</span><h3>Парики</h3><p>Официальный каталог содержит раздел Wigs и варианты париков в карточках моделей.</p></article>
          <article className="aotume-feature-card"><span>03</span><h3>Одежда</h3><p>Для DLC Series встречается заданная одежда серии, а в каталоге опубликованы отдельные костюмы и apparel.</p></article>
          <article className="aotume-feature-card"><span>04</span><h3>Комплектация</h3><p>Фотография образа не подтверждает автоматически, что все показанные элементы входят в базовый комплект.</p></article>
        </div>
      </div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">От дизайна к образу</p><h2>3D и производственный процесс</h2></div><p>Этапы отражают опубликованную Kiradols структуру процесса и не обозначают универсальную технологию для каждой модели.</p></div><div className="aotume-feature-grid">{productionStages.map(([title,text],index)=><article className="aotume-feature-card" key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section"><div className="container aotume-two-column">
        <article className="aotume-content-card"><p className="eyebrow">Финишная обработка</p><h2>Окрашивание и детализация</h2><p>Официальные материалы упоминают body paint как часть художественной детализации, а в конфигураторе отдельных моделей доступно upgraded body painting.</p><p>Макияж, окрашивание тела и другие детали необходимо оценивать по фотографиям и описанию конкретной позиции.</p></article>
        <article className="aotume-content-card"><p className="eyebrow">Ростовые форматы</p><h2>150–160 cm</h2><p>В проверенном официальном каталоге представлены модели ростом 150, 155 и 160 см. Этот диапазон описывает опубликованные позиции на момент проверки, а не жёсткую границу будущего ассортимента.</p></article>
      </div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Подтверждённые примеры</p><h2>Серии и модели</h2></div><p>Примеры приведены как ориентир по текущему официальному каталогу, а не как полный список Kiradols.</p></div><div className="aotume-feature-grid">{confirmedModels.map(([name,details],index)=><article className="aotume-feature-card" key={name}><span>{String(index+1).padStart(2,"0")}</span><h3>{name}</h3><p>{details}</p></article>)}</div><div className="notice">DLC Series на официальном сайте оформлена как направление Magical Girls. Названия и параметры выше относятся только к указанным карточкам моделей.</div></div></section>

      <BrandModelGallery
        id="kiradols-models"
        eyebrow="Демонстрационная подборка"
        title="Аниме-модели"
        description="Примеры полноразмерных моделей Kiradols из текущего каталога бренда."
        notice="Ниже представлены некоторые ростовые модели Kiradols для знакомства с текущим аниме-направлением бренда. Это демонстрационная подборка, а не полный каталог производителя. В Anime Dolls World основной акцент сделан на полноразмерных моделях. Актуальные характеристики, комплектацию и доступность следует проверять на официальном сайте Kiradols или у продавца."
        galleryRoot="/images/brands/kiradols/gallery"
        models={galleryModels}
        layout="triptych"
      />

      <section className="section"><div className="container aotume-custom-card">
        <div><p className="eyebrow">Каталог и заказ</p><h2>Где смотреть и покупать</h2><p>Официальный сайт Kiradols — основной источник каталога, характеристик, конфигураций и условий заказа.</p><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный каталог Kiradols в новой вкладке">Открыть каталог Kiradols</a></div>
        <div><p>Kiradols не найден в текущем публичном каталоге Moon-Doll. Если нужна конкретная модель, можно отправить менеджеру ссылку и уточнить возможность индивидуального заказа без гарантии наличия или поставки.</p><Link className="button secondary" href="/stores/moon-doll/">Как связаться с Moon-Doll</Link><div className="notice">Moon-Doll не обозначается здесь как официальный представитель Kiradols.</div></div>
      </div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
  </>;
}
