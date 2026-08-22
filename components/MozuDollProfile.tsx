import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://mozudoll.com/";
const moonDoll = "https://www.moon-doll.com/";

const features = [
  ["Персонажная стилизация", "Каталог строится вокруг законченных образов с заданными лицом, макияжем, причёской и одеждой."],
  ["Несколько масштабов", "Размерные серии позволяют сравнивать компактные и более крупные форматы внутри одного направления."],
  ["Сменные элементы", "Для части серий отдельно представлены головы, парики и одежда с указанием совместимого размера."],
  ["ACG-направление", "Визуальные концепции опираются на эстетику аниме, игр и современной азиатской поп-культуры."],
  ["Варианты заказа", "Доступные материалы, макияж и дополнительные опции зависят от конкретной карточки товара."],
] as const;

const sizeSeries = [
  ["65cm", "Компактная серия. Комплектацию, материал и совместимость аксессуаров нужно проверять у выбранного персонажа."],
  ["85cm", "Серия среднего компактного формата с отдельными персонажами, одеждой и аксессуарами своего размера."],
  ["115cm", "Более крупная персонажная серия; в официальном каталоге представлены отдельные головы, парики и комплекты одежды для этого размера."],
  ["141cm", "Полноразмерное направление с самостоятельными персонажами и отдельными сменными головами."],
  ["150/160cm", "Реалистическая размерная группа официального каталога. Её модели не следует автоматически считать идентичными аниме-сериям."],
] as const;

const accessoryGroups = [
  ["Оригинальная одежда", "В каталоге есть отдельные комплекты, некоторые из которых обозначены как совместимые с определённой размерной серией."],
  ["Парики", "Отдельные парики привязаны к персонажу или размеру. Совместимость с другой головой необходимо подтверждать."],
  ["Аксессуары и опции", "Дополнительные элементы вынесены в самостоятельный раздел, но их наличие и назначение различаются."],
] as const;

const reasons = [
  ["Широкая шкала размеров", "В одном каталоге можно сравнивать несколько масштабов — от 65 cm до полноразмерных вариантов."],
  ["Образ как комплект", "Персонаж подаётся не только через форму головы, но и через макияж, парик, одежду и общую стилизацию."],
  ["Развитая экосистема", "Сменные головы и размерные аксессуары позволяют уточнять образ без предположения об универсальной совместимости."],
] as const;

const purchaseChecks = [
  "точное название и размер модели",
  "материал тела и материал головы",
  "тип головы и её совместимость с телом",
  "что входит в базовый комплект",
  "входят ли одежда, парик и показанные аксессуары",
  "доступные варианты макияжа и дополнительные опции",
  "итоговую стоимость, оплату и условия доставки",
] as const;

const galleryModels: GalleryModel[] = [
  {
    name: "Mint",
    details: "141cm",
    folder: "141cm-mint",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "141 см",
      material: ["Голова — PVC / vinyl-type", "Тело — TPE / MTPE / силикон"],
      weight: ["около 22–23 кг", "TPE-конфигурация"],
      specs: [
        { label: "Грудь", value: "57 см" },
        { label: "Под грудью", value: "48 см" },
        { label: "Талия", value: "47 см" },
        { label: "Бёдра", value: "76 см" },
        { label: "Плечи", value: "20 см" },
        { label: "Длина руки", value: "50 см" },
        { label: "Стопа", value: "20 см" },
      ],
    },
  },
  {
    name: "Spark's",
    details: "148cm",
    folder: "148cm-sparks",
    photos: ["01.png", "02.png", "03.png"],
    characteristics: {
      height: "148 см",
      material: ["Тело — TPE / MTPE", "Голова — hard-shell / silicone head option"],
      weight: ["около 27 кг", "TPE-платформа"],
      specs: [{ label: "Размер груди", value: "C Cup" }],
    },
  },
  {
    name: "Erin",
    details: "150cm",
    folder: "150cm-erin",
    photos: ["01.png", "02.png", "03.png"],
    characteristics: {
      height: "150 см",
      material: "Тело — TPE / MTPE / силикон",
      weightLabel: "Вес тела",
      weight: "28 кг",
    },
  },
  {
    name: "Lilisi",
    details: "150cm",
    folder: "150cm-lilisi",
    photos: ["01.png", "02.png", "03.png"],
    characteristics: {
      height: "150 см",
      material: ["Голова — Soft Vinyl", "Тело — TPE / MTPE / силикон"],
      weight: ["23,5 кг", "TPE-конфигурация"],
      specs: [{ label: "Размер груди", value: "M Cup" }],
    },
  },
  {
    name: "Kanzaki Sakura",
    details: "150cm",
    folder: "150cm-yuichi-hiiragi",
    photos: ["01.png", "02.png", "03.png"],
    characteristics: {
      height: "150 см",
      material: ["Голова — PVC", "Тело — TPE / MTPE / силикон"],
    },
  },
];

export function MozuDollProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MozuDoll — аниме- и ACG-куклы",
    description: "Профиль MozuDoll: ACG-направление, размерные серии, сменные головы, аксессуары и материалы.",
    url: `${siteConfig.url}/brands/mozudoll/`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return <>
    <section className="page-hero mozu-brand-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "MozuDoll" }]} />
        <div className="mozu-hero-grid">
          <div>
            <p className="eyebrow">Anime / ACG-направление</p>
            <h1>MozuDoll</h1>
            <p className="lede">Бренд персонажных кукол с аниме-эстетикой, несколькими размерными сериями и отдельным каталогом элементов образа.</p>
            <p className="mozu-hero-note">Mozu объединяет полноразмерные и компактные серии, сменные головы, макияж, парики, одежду и дополнительные опции. В Anime Dolls World основной интерес представляют ростовые серии 141–160 см; компактные форматы сохраняются в профиле для полноты каталога бренда.</p>
            <div className="mozu-tags" aria-label="Направления MozuDoll">{["Anime", "ACG", "65–160 cm", "Customization"].map(tag => <span key={tag}>{tag}</span>)}</div>
            <a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт MozuDoll в новой вкладке">Официальный сайт</a>
          </div>
          <BrandProfileIcon slug="mozudoll" name="MozuDoll" />
        </div>
      </div>
    </section>

    <main className="mozu-brand-profile">
      <section className="section">
        <div className="container mozu-intro">
          <article className="prose">
            <p className="eyebrow">Профиль бренда</p>
            <h2>О бренде</h2>
            <p>MozuDoll развивает модели с выраженной персонажной стилизацией. В официальных материалах компания выделяет ACG-культуру, аниме-направление и индивидуально разработанные образы с собственными лицами и макияжем.</p>
            <p>Каталог включает несколько размерных серий, сменные головы, одежду, парики и дополнительные опции. При этом конструкция, материал и состав комплекта различаются между позициями и должны проверяться отдельно.</p>
            <p>Anime Dolls World описывает структуру каталога нейтрально и не подтверждает рекламные заявления производителя о качестве или сравнительных преимуществах.</p>
          </article>
          <aside className="mozu-summary">
            <p className="eyebrow">Кратко</p>
            <dl><div><dt>Направление</dt><dd>Anime · ACG · персонажные образы</dd></div><div><dt>Размеры</dt><dd>65 · 85 · 115 · 141 · 150/160 cm</dd></div><div><dt>Каталог</dt><dd>Модели · головы · одежда · парики · опции</dd></div></dl>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container mozu-acg-panel">
          <div><p className="eyebrow">Визуальное направление</p><h2>Anime / ACG</h2><p>ACG — собирательное обозначение культуры аниме, комиксов и игр. В MozuDoll это направление выражается через стилизованные лица, персонажный макияж, заданные причёски, костюмы и образы, вдохновлённые современной поп-культурой.</p><p>Наличие визуального сходства не означает автоматически официальную лицензию или коллаборацию. Статус конкретного персонажа нужно проверять по описанию товара и материалам бренда.</p></div>
          <aside><strong>Главный принцип</strong><p>Сравнивать следует конкретные модели: одинаковый рост не гарантирует одинаковую конструкцию, материал, голову или комплектацию.</p></aside>
        </div>
      </section>

      <section className="section">
        <div className="container"><div className="section-head"><div><p className="eyebrow">Характер каталога</p><h2>Особенности MozuDoll</h2></div><p>Несколько направлений объединены общей персонажной подачей.</p></div><div className="mozu-feature-grid">{features.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="section alt">
        <div className="container"><div className="section-head"><div><p className="eyebrow">Навигация по масштабу</p><h2>Размерные серии</h2></div><p>Размер — отправная точка, но не полная техническая характеристика.</p></div><div className="mozu-size-grid">{sizeSeries.map(([title, text]) => <article key={title}><strong>{title}</strong><p>{text}</p></article>)}</div><div className="notice">Официальный сайт относит 65, 85, 115 и 141 cm к прежней размерной структуре каталога, а 150/160 cm — к realistic-направлению. В новых разделах могут использоваться другие названия серий; актуальную классификацию следует сверять перед заказом.</div></div>
      </section>

      <section className="section">
        <div className="container mozu-heads-grid">
          <article><p className="eyebrow">Отдельные элементы</p><h2>Сменные головы</h2><p>В официальном магазине есть самостоятельный раздел Replaceable Doll Heads. Для отдельных голов прямо указывается совместимость с телами того же размера.</p><ul><li>проверяйте размерную серию;</li><li>уточняйте тип и материал головы;</li><li>не считайте все крепления универсальными;</li><li>сверяйте, входит ли макияж.</li></ul></article>
          <article><p className="eyebrow">Персонализация</p><h2>Кастомизация</h2><p>На момент проверки официальный сайт принимает запросы на индивидуальный макияж. Там же отдельно указано, что кастомные парики и костюмы сейчас не принимаются.</p><div className="notice">Наличие страницы кастомизации не означает, что возможна любая внешность или конфигурация. Объём работ, референсы, сроки и результат необходимо согласовать письменно.</div></article>
        </div>
      </section>

      <section className="section alt">
        <div className="container"><div className="section-head"><div><p className="eyebrow">Элементы образа</p><h2>Одежда, парики и аксессуары</h2></div><p>Дополнения подбираются по персонажу и размерной серии.</p></div><div className="mozu-accessory-grid">{accessoryGroups.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><div className="notice">Фотография модели может показывать расширенный образ. До оплаты проверьте, какие предметы входят в базовый комплект, а какие продаются отдельно.</div></div>
      </section>

      <section className="section">
        <div className="container mozu-material-panel">
          <div><p className="eyebrow">Только подтверждённые сведения</p><h2>Материалы</h2><p>В официальном каталоге и карточках MozuDoll встречаются <strong>TPE, MTPE и силикон</strong>. У некоторых позиций тело и голова могут иметь разные материалы, а доступные сочетания зависят от модели.</p></div>
          <aside><h3>Проверяйте отдельно</h3><ul><li>материал тела;</li><li>материал и тип головы;</li><li>доступные комбинации;</li><li>правила ухода;</li><li>совместимость сменных элементов.</li></ul><div className="notice">Нельзя переносить материал, мягкость, конструкцию или опции одной модели на весь бренд либо на всю размерную серию.</div></aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container"><div className="section-head"><div><p className="eyebrow">Отдельная позиция</p><h2>Почему Mozu интересен</h2></div><p>Бренд сочетает масштабный каталог и последовательную работу с персонажными образами.</p></div><div className="mozu-why-grid">{reasons.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <BrandModelGallery
        id="mozudoll-models"
        eyebrow="Демонстрационная подборка"
        title="Аниме-модели"
        description="Примеры ростовых моделей MozuDoll в аниме-стилистике."
        notice="Ниже представлены некоторые ростовые модели MozuDoll для знакомства с аниме-направлением бренда. Это не полный каталог производителя. В Anime Dolls World основной акцент сделан на полноразмерных моделях; компактные серии MozuDoll сохраняются в профиле для полноты информации о бренде."
        galleryRoot="/images/brands/mozudoll/gallery"
        models={galleryModels}
      />

      <section className="section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, комплектацию и условия заказа необходимо подтверждать у выбранного продавца.</p></div>
          <div className="mozu-buy-panel">
            <article className="moon-doll-inquiry"><p className="eyebrow">Дополнительный вариант запроса</p><h3>Moon-Doll</h3><p>В текущем каталоге Moon-Doll отдельная коллекция MozuDoll не заявлена. Возможность индивидуального заказа можно уточнить у менеджера магазина по ссылке, фотографии или точному названию модели.</p><p>Если нужной модели нет в каталоге Moon-Doll, можно уточнить возможность заказа через менеджера магазина.</p><a className="button secondary" href={moonDoll} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll для уточнения заказа MozuDoll в новой вкладке">Уточнить в Moon-Doll</a></article>
            <article className="official"><p className="eyebrow">Официальный источник</p><h3>Официальный сайт MozuDoll</h3><p>Официальный сайт можно использовать для просмотра моделей, характеристик, размерных серий и вариантов комплектации.</p><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный магазин MozuDoll в новой вкладке">Открыть официальный магазин</a></article>
            <aside><h3>Перед оплатой уточните</h3><ul>{purchaseChecks.map(item => <li key={item}>{item}</li>)}</ul></aside>
            <div className="notice mozu-buy-notice"><strong>Важно:</strong> Anime Dolls World не является продавцом и не участвует в оформлении заказа. Наличие, итоговую стоимость, комплектацию, оплату и доставку необходимо подтвердить непосредственно у Moon-Doll или MozuDoll.</div>
          </div>
        </div>
      </section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
