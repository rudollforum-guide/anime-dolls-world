import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://www.irokebijinshop.com/";
const moonDoll = "https://www.moon-doll.com/";
const salesEmail = "sales@irokebijinshop.com";
const contactEmail = "contact@irokebijin.com";

const galleryModels: GalleryModel[] = [
  {
    name: "Abby-Y",
    details: "148cm L Cup S-TPE",
    folder: "abby-y-148cm-l-cup-s-tpe",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: ["Голова — S-TPE", "Тело — Super Soft Platinum TPE / S-TPE"],
      weight: "37,6 кг",
      specs: [
        { label: "Размер груди", value: "L Cup" },
        { label: "Грудь", value: "85 см" },
        { label: "Под грудью", value: "47,5 см" },
        { label: "Талия", value: "47 см" },
        { label: "Бёдра", value: "103 см" },
        { label: "Плечи", value: "22 см" },
        { label: "Стопа", value: "19 см" },
      ],
    },
  },
  {
    name: "Abby Set 2",
    details: "148cm HSS Hyper Soft Silicone",
    folder: "abby-set-2-148cm-hss",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone / HSS Hyper Soft Silicone",
      weight: "25 кг",
      specs: [
        { label: "Размер груди", value: "F Cup" },
        { label: "Грудь", value: "81 см" },
        { label: "Под грудью", value: "61 см" },
        { label: "Талия", value: "53 см" },
        { label: "Бёдра", value: "88 см" },
        { label: "Плечи", value: "33 см" },
        { label: "Стопа", value: "20 см" },
      ],
    },
  },
  {
    name: "Kana",
    details: "148cm HSS Hyper Soft Silicone",
    folder: "kana-148cm-hss",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone / HSS Hyper Soft Silicone",
      weight: "25 кг",
      specs: [
        { label: "Размер груди", value: "F Cup" },
        { label: "Грудь", value: "81 см" },
        { label: "Под грудью", value: "61 см" },
        { label: "Талия", value: "53 см" },
        { label: "Бёдра", value: "88 см" },
        { label: "Плечи", value: "33 см" },
        { label: "Стопа", value: "20 см" },
      ],
    },
  },
  {
    name: "Akane",
    details: "150cm S-TPE",
    folder: "akane-150cm-s-tpe",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "150 см",
      material: ["Голова — S-TPE", "Тело — Super Soft Platinum TPE / S-TPE"],
      weight: "35 кг",
      specs: [
        { label: "Вес отправления", value: "43 кг" },
        { label: "Размер груди", value: "E Cup" },
        { label: "Грудь", value: "91 см" },
        { label: "Под грудью", value: "55 см" },
        { label: "Талия", value: "51,3 см" },
        { label: "Бёдра", value: "90 см" },
        { label: "Плечи", value: "30,6 см" },
        { label: "Стопа", value: "22 см" },
      ],
    },
  },
  {
    name: "Anna",
    details: "152cm Medium Breasts S-TPE",
    folder: "anna-152cm-medium-s-tpe",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "152 см",
      material: "Extra Soft Platinum TPE / S-TPE",
      weight: "32 кг",
      specs: [
        { label: "Вес отправления", value: "43 кг" },
        { label: "Размер груди", value: "C Cup" },
        { label: "Грудь", value: "85,3 см" },
        { label: "Под грудью", value: "58,4 см" },
        { label: "Талия", value: "58,8 см" },
        { label: "Бёдра", value: "90 см" },
        { label: "Плечи", value: "29,7 см" },
        { label: "Стопа", value: "20 см" },
      ],
    },
  },
  {
    name: "Aisa",
    details: "148cm L Cup S-TPE",
    folder: "aisa-148cm-l-cup-s-tpe",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: ["Голова — S-TPE", "Тело — Super Soft Platinum TPE / S-TPE"],
      weight: "37,6 кг",
      specs: [
        { label: "Размер груди", value: "L Cup" },
        { label: "Грудь", value: "85 см" },
        { label: "Под грудью", value: "47,5 см" },
        { label: "Талия", value: "47 см" },
        { label: "Бёдра", value: "103 см" },
        { label: "Плечи", value: "22 см" },
        { label: "Стопа", value: "19 см" },
      ],
    },
  },
  {
    name: "Akane",
    details: "148cm L Cup S-TPE",
    folder: "akane-148cm-l-cup-s-tpe",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: ["Голова — S-TPE", "Тело — Super Soft Platinum TPE / S-TPE"],
      weight: "37,6 кг",
      specs: [
        { label: "Размер груди", value: "L Cup" },
        { label: "Грудь", value: "85 см" },
        { label: "Под грудью", value: "47,5 см" },
        { label: "Талия", value: "47 см" },
        { label: "Бёдра", value: "103 см" },
        { label: "Плечи", value: "22 см" },
        { label: "Стопа", value: "19 см" },
      ],
    },
  },
  {
    name: "Akane Set 3",
    details: "148cm HSS Hyper Soft Silicone",
    folder: "akane-set-3-148cm-hss",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone / HSS Hyper Soft Silicone",
      weight: "25 кг",
      specs: [
        { label: "Размер груди", value: "F Cup" },
        { label: "Грудь", value: "81 см" },
        { label: "Под грудью", value: "61 см" },
        { label: "Талия", value: "53 см" },
        { label: "Бёдра", value: "88 см" },
        { label: "Плечи", value: "33 см" },
        { label: "Стопа", value: "20 см" },
      ],
    },
  },
  {
    name: "Anna",
    details: "155cm S-TPE",
    folder: "anna-155cm-s-tpe",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "155 см",
      material: "Super Soft Platinum TPE / S-TPE",
      weight: "35 кг",
      specs: [
        { label: "Грудь", value: "90 см" },
        { label: "Под грудью", value: "49 см" },
        { label: "Талия", value: "48 см" },
        { label: "Бёдра", value: "89 см" },
        { label: "Плечи", value: "22 см" },
        { label: "Стопа", value: "21 см" },
      ],
    },
  },
  {
    name: "Mary Set 2",
    details: "148cm HSS Hyper Soft Silicone",
    folder: "mary-set-2-148cm-hss",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone / HSS Hyper Soft Silicone",
      weight: "25 кг",
      specs: [
        { label: "Размер груди", value: "F Cup" },
        { label: "Грудь", value: "81 см" },
        { label: "Под грудью", value: "61 см" },
        { label: "Талия", value: "53 см" },
        { label: "Бёдра", value: "88 см" },
        { label: "Плечи", value: "33 см" },
        { label: "Стопа", value: "20 см" },
      ],
    },
  },
];

const catalog = [
  ["S-TPE Dolls", "Основная линейка моделей из материала, обозначенного брендом как Super Soft Platinum TPE."],
  ["Silicone Dolls", "Линейка силиконовых моделей, среди которых встречается обозначение HSS — Hyper Soft Silicone."],
  ["Торсы", "Компактные варианты, представленные в отдельной категории."],
  ["Трёхмерный просмотр", "На сайте выделены отдельные разделы Three Dimensional View для S-TPE и силиконовых моделей."],
  ["Аксессуары", "Связанные с брендом аксессуары и дополнительные позиции."],
  ["Одежда", "Отдельная категория одежды для моделей."],
  ["Модели в наличии", "На сайте присутствуют разделы US in Stock и EURO in Stock."],
  ["Проверка подлинности", "Отдельная страница с информацией о персональном антифальсификационном коде."],
];
const stpeChecks = ["материал тела", "материал головы", "оттенок кожи", "массу", "каркас", "конструкцию пальцев", "стоячие стопы", "совместимые головы", "варианты глаз", "тип упаковки"];
const stpeHeights = ["90 см", "95 см", "98 см", "102 см", "110 см", "120 см", "128 см", "130 см", "140 см", "148 см", "149 см", "150 см", "152 см", "155 см", "156 см", "торсы"];
const siliconeHeights = ["90 см", "95 см", "98 см", "102 см", "110 см", "120 см", "148 см", "160 см"];
const headChecks = ["точное название головы", "материал головы", "совместимость с телом", "тип соединения", "съёмная ли голова", "цвет кожи", "входит ли макияж", "входят ли глаза", "входит ли парик", "доступна ли выбранная голова для S-TPE или силиконового тела"];
const eyeOptions = ["Blue", "Blue-green", "Orange", "Violet", "Ambre", "Green-Cross", "Purple-Hypnosis", "Red-Heart"];
const wigChecks = ["входит ли парик в стоимость", "какой номер выбран", "соответствует ли парик промофотографиям", "входит ли одежда", "какие аксессуары включены", "совпадает ли итоговая комплектация с изображением персонажа"];
const skeletonChecks = ["актуальный тип каркаса", "подвижность плеч", "диапазон движения шеи", "конструкцию позвоночника", "подвижность таза", "тип пальцев", "наличие шарнирных пальцев", "наличие стоячих стоп", "ограничения суставов", "возможность длительного стояния", "ремонтопригодность"];
const packagingChecks = ["доступные варианты упаковки", "стоимость", "массу с упаковкой", "размеры коробки", "пригодность упаковки для выбранного способа доставки", "наличие дополнительных креплений", "порядок действий при повреждении"];
const torsoChecks = ["высоту", "массу", "материал", "материал головы", "совместимые головы", "тип соединения", "наличие внутреннего каркаса", "комплектацию", "размеры коробки", "правила хранения"];
const accessoryChecks = ["совместимость с ростом", "совместимость с телом", "входит ли предмет в базовую комплектацию", "материал", "риск окрашивания", "правила ухода", "актуальное наличие"];
const deliveryChecks = ["возможна ли доставка в Россию", "стоимость", "входит ли доставка в цену", "перевозчика", "срок подготовки", "срок изготовления", "размер и массу упаковки", "наличие картонной коробки или Flight Case", "таможенные расходы", "порядок действий при задержке или повреждении"];
const orderChecks = ["точное название модели", "ростовую категорию", "тело", "голову", "совместимость головы и тела", "материал тела", "материал головы", "цвет кожи", "глаза", "парик", "одежду", "аксессуары", "каркас", "шарнирные пальцы", "стоячие стопы", "дополнительные опции", "чистую массу", "массу с упаковкой", "размеры коробки", "тип упаковки", "итоговую стоимость", "стоимость доставки", "способ оплаты", "срок изготовления", "наличие готовой модели", "фотографии перед отправкой", "сертификат и код подлинности", "условия возврата", "действия при повреждении"];

function List({ items, className = "iro-list" }: { items: readonly string[]; className?: string }) {
  return <ul className={className}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function IrokebijinProfile() {
  const webPageJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "Irokebijin — аниме-куклы из S-TPE и HSS-силикона", description: "Информация об Irokebijin: аниме-куклы из S-TPE и мягкого HSS-силикона, ростовые линейки, сменные головы, глаза, парики, торсы и проверка подлинности.", url: `${siteConfig.url}/brands/irokebijin/`, isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url } };

  return <>
    <section className="page-hero iro-hero"><div className="container"><Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Irokebijin" }]} /><div className="iro-hero-grid"><div><p className="eyebrow">Основной аниме-бренд</p><h1>Irokebijin</h1><p className="lede">Irokebijin — бренд стилизованных аниме-кукол с линейками из S-TPE и мягкого силикона HSS, широким выбором роста, сменных голов, глаз, париков и вариантов комплектации.</p><p className="iro-hero-note">Каталог охватывает компактные и полноразмерные модели, торсы, отдельные варианты комплектации и аксессуары. Основное визуальное направление бренда строится вокруг аниме-лиц, выразительных глаз и персонажных образов.</p><div className="iro-tags">{["Аниме", "S-TPE", "HSS-силикон", "Сменные головы", "Торсы", "Разные ростовые линейки", "Выбор глаз", "Проверка подлинности"].map((tag) => <span key={tag}>{tag}</span>)}</div><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Irokebijin в новой вкладке">Официальный сайт</a></div><BrandProfileIcon slug="irokebijin" name="Irokebijin" /></div></div></section>

    <main className="iro-profile">
      <section className="section"><div className="container iro-intro"><div className="prose"><p className="eyebrow">Профиль бренда</p><h2>О бренде</h2><p>Irokebijin специализируется на куклах с выраженной аниме-стилизацией. В каталоге представлены тела и головы разных размеров, варианты из S-TPE и силикона, торсы, одежда и связанные аксессуары.</p><p>Официальный магазин разделяет каталог на две основные материальные линейки: S-TPE Dolls и Silicone Dolls.</p><p>Также на сайте присутствуют:</p><List items={["новые модели", "отдельные ростовые категории", "торсы", "аксессуары бренда", "одежда", "складские предложения для США", "складские предложения для Европы", "страница проверки подлинности", "информация об оплате"]} className="iro-compact-list" /><div className="notice">Структура отражает текущий официальный каталог. Ассортимент, наличие и доступные опции могут меняться.</div></div><aside className="iro-summary"><p className="eyebrow">Кратко</p><dl><div><dt>Направление</dt><dd>Стилизованные аниме-модели</dd></div><div><dt>Линейки</dt><dd>S-TPE · HSS-силикон</dd></div><div><dt>Конфигурация</dt><dd>Головы, глаза, парики и упаковка</dd></div></dl></aside></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Визуальный образ</p><h2>Аниме-образы и сменные головы</h2></div><p>Стилизация строится вокруг крупных глаз и персонажных сочетаний.</p></div><p className="iro-lead">Внешность Irokebijin строится вокруг стилизованных аниме-лиц, крупных глаз, ярких оттенков радужки, персонажных париков и сочетания одной размерной серии тела с несколькими вариантами головы.</p><div className="iro-aesthetic">{[["Аниме-лица", "Выраженная стилизация, крупные глаза, компактные черты лица и макияж, ориентированный на аниме-эстетику."], ["Сменные головы", "В карточках моделей указывается съёмная голова. Доступный перечень голов зависит от конкретного тела и размерной серии."], ["Персонажная настройка", "Для отдельных моделей предлагается выбор головы, парика, цвета глаз и оттенка кожи."]].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><div className="notice">Наличие конкретной головы, парика и цвета глаз необходимо проверять в карточке выбранного тела. Все головы не считаются совместимыми со всеми телами.</div></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Ассортимент</p><h2>Основные разделы каталога</h2></div><p>Категории не обязательно постоянно заполнены товарами.</p></div><div className="iro-catalog">{catalog.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section alt"><div className="container iro-line-panel"><div><p className="eyebrow">Материальная линейка</p><h2>Линейка S-TPE</h2><p>На официальном сайте материал линейки обозначается как S-TPE, а в карточках отдельных моделей встречается формулировка Super Soft Platinum TPE.</p><List items={["точный химический состав не расшифровывается", "не все тела имеют одинаковую мягкость", "свойства могут различаться по росту и конструкции", "материал головы и тела необходимо подтверждать отдельно", "фактическую массу нужно смотреть в карточке конкретной модели", "доступные опции зависят от тела"]} /></div><aside><strong>Что уточнить</strong><List items={stpeChecks} /></aside></div><div className="container"><div className="notice">Название S-TPE является обозначением бренда и не должно интерпретироваться как независимый стандарт материала.</div></div></section>

      <section className="section"><div className="container iro-line-panel silicone"><div><p className="eyebrow">Материальная линейка</p><h2>Силиконовая линейка HSS</h2><p>В силиконовом каталоге Irokebijin используется обозначение HSS — Hyper Soft Silicone. В карточках отдельных моделей материал также указывается как Platinum Silicone.</p><List items={["HSS не является универсальным стандартом для всей индустрии", "не все силиконовые тела имеют одинаковую мягкость", "конструкция кистей и стоп может различаться", "материал головы и тела необходимо проверять отдельно", "масса зависит от конкретного роста и тела", "доступные головы и опции различаются между моделями"]} /></div><aside><strong>Особенность отдельных тел</strong><p>У некоторых компактных силиконовых моделей в карточке указываются жёсткие кисти и стопы по умолчанию. Это характеристика конкретных тел, а не всей силиконовой линейки.</p></aside></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Нейтральное сравнение</p><h2>Сравнение линеек</h2></div><p>Выбор делается по конкретному телу, а не только по названию материала.</p></div><div className="iro-compare"><article><h3>S-TPE</h3><List items={["более широкий перечень ростовых категорий на текущем сайте", "материал обозначен как Super Soft Platinum TPE", "представлены компактные и полноразмерные тела", "в каталоге есть торсы", "доступные головы и опции зависят от тела"]} /></article><article><h3>HSS-силикон</h3><List items={["материал обозначается как Hyper Soft Silicone или Platinum Silicone", "представлены компактные и более крупные тела", "ростовой каталог уже, чем у S-TPE", "особенности кистей, стоп и каркаса зависят от конкретного тела", "доступные головы и опции необходимо проверять отдельно"]} /></article></div><div className="notice">Выбор между S-TPE и HSS-силиконом нужно делать по конкретной модели, фактической массе, конструкции, требованиям к уходу и доступной комплектации. Ни одна линейка не объявляется универсально лучшей.</div></div></section>

      <section className="section"><div className="container iro-two"><article className="iro-card"><p className="eyebrow">S-TPE</p><h2>Ростовые категории</h2><p>На официальном сайте S-TPE-модели распределены по категориям:</p><div className="iro-code-list">{stpeHeights.map((height) => <span key={height}>{height}</span>)}</div><div className="notice">Категории отражают структуру официального сайта на момент подготовки страницы. Они не гарантируют наличие каждого роста или полное совпадение числовой категории с фактическим измерением.</div></article><article className="iro-card"><p className="eyebrow">HSS-силикон</p><h2>Ростовые категории</h2><p>В силиконовой линейке представлены:</p><div className="iro-code-list">{siliconeHeights.map((height) => <span key={height}>{height}</span>)}</div><div className="notice">Не все размеры обязательно доступны одновременно. Материал, масса, конструкция и комплект голов зависят от выбранного тела.</div></article></div></section>

      <section className="section alt"><div className="container iro-two"><article className="iro-card"><p className="eyebrow">От 90 см</p><h2>Компактные модели</h2><p>В каталоге представлены модели от 90 см. Они обычно проще по размещению, однако их фактическая масса и размеры упаковки всё равно требуют проверки.</p></article><article className="iro-card"><p className="eyebrow">До крупных категорий</p><h2>Более крупные модели</h2><p>S-TPE-линейка доходит до категории 156 см, а силиконовая — до 160 см. Такие модели требуют более продуманной доставки, переноски и хранения.</p></article></div><div className="container"><div className="notice">Компактный рост не гарантирует небольшой массы, а крупный рост не описывает вес без карточки конкретного тела.</div></div></section>

      <section className="section"><div className="container iro-three"><article className="iro-card"><p className="eyebrow">Конфигурация</p><h2>Головы и совместимость</h2><p>В карточках Irokebijin можно выбирать голову из списка, доступного для конкретного тела.</p><List items={headChecks} /><p className="iro-note">Список голов может отличаться даже у тел одного материала. Варианты одной карточки нельзя переносить на весь каталог.</p></article><article className="iro-card"><p className="eyebrow">Примеры</p><h2>Цвета глаз</h2><p>В карточках отдельных моделей предлагается выбор нескольких вариантов:</p><div className="iro-code-list">{eyeOptions.map((eye) => <span key={eye}>{eye}</span>)}</div><div className="notice">Это примеры, а не постоянный полный список. Цвет, рисунок радужки, доступность и возможность замены проверяются для конкретной головы.</div></article><article className="iro-card"><p className="eyebrow">Нумерованный каталог</p><h2>Парики и образ</h2><p>В карточках моделей доступен выбор парика из нумерованного каталога.</p><List items={wigChecks} /><p className="iro-note">Промофотографии могут показывать полный образ, тогда как часть элементов выбирается отдельно.</p></article></div></section>

      <section className="section alt"><div className="container iro-two"><article className="iro-card"><p className="eyebrow">White и Tan</p><h2>Оттенки кожи</h2><p>В карточках отдельных моделей встречаются варианты оттенка White и Tan.</p><List items={["доступность зависит от тела и головы", "оттенок тела и головы необходимо подтверждать вместе", "фотографии могут передавать цвет иначе из-за освещения и обработки", "итоговый оттенок лучше уточнять по реальным фотографиям перед отправкой"]} /></article><article className="iro-card"><p className="eyebrow">Внутреннее обозначение</p><h2>Каркас и опции</h2><p>В карточках некоторых моделей указан EVO skeleton по умолчанию. Это внутреннее обозначение конструкции, а не независимый стандарт качества.</p><List items={skeletonChecks} /><div className="notice">EVO-каркас нельзя приписывать всем моделям без проверки карточки конкретного тела.</div></article></div></section>

      <section className="section"><div className="container iro-two"><article className="iro-card"><p className="eyebrow">Выбираемая опция</p><h2>Шарнирные пальцы</h2><p>В отдельных карточках Articulated Fingers доступны как выбираемая опция. Наличие и стоимость зависят от конкретного тела.</p></article><article className="iro-card"><p className="eyebrow">Standing Feet</p><h2>Стоячие стопы</h2><p>В некоторых конфигурациях можно выбрать Standing Feet вместо Non-standing.</p><div className="notice">Стоячие стопы не исключают риск падения и не означают, что модель можно постоянно хранить стоя без поддержки.</div></article></div></section>

      <section className="section alt"><div className="container iro-three"><article className="iro-card"><p className="eyebrow">Коробка или кейс</p><h2>Упаковка</h2><p>В карточках отдельных моделей встречается выбор между картонной коробкой и Flight Case.</p><List items={packagingChecks} /><p className="iro-note">Flight Case является вариантом транспортировочного кейса и не исключает повреждения полностью.</p></article><article className="iro-card"><p className="eyebrow">Дополнительный обзор</p><h2>Трёхмерный просмотр</h2><p>На официальном сайте выделены отдельные разделы Three Dimensional View для S-TPE и силиконовых моделей. Такой формат можно использовать для знакомства с формой тела и пропорциями.</p><div className="notice">Трёхмерный просмотр не заменяет реальные фотографии готового изделия и письменное подтверждение комплектации.</div></article><article className="iro-card"><p className="eyebrow">Компактный формат</p><h2>Торсы</h2><p>В S-TPE-каталоге Irokebijin присутствует отдельная категория торсов.</p><List items={torsoChecks} /><p className="iro-note">Торс является компактным форматом, но не обязательно лёгким. Характеристики полноразмерных тел на торсы не переносятся.</p></article></div></section>

      <section className="section"><div className="container iro-auth"><div><p className="eyebrow">Проверка подлинности</p><h2>Антифальсификационный код</h2><p>По информации официального сайта, каждая новая кукла Irokebijin комплектуется уникальным кодом проверки подлинности. Код печатается на сертификате, вложенном в упаковку.</p><List items={["найти сертификат", "проверить наличие кода", "не публиковать код открыто", "использовать указанную брендом страницу проверки", "сохранить сертификат вместе с документами на заказ"]} /></div><aside><strong>Безопасный переход</strong><p>Актуальную ссылку на проверку следует открывать через раздел Anti Fake официального сайта Irokebijin.</p><p>Anime Dolls World не управляет системой проверки и не подтверждает её работу независимо.</p></aside></div></section>

      <section className="section alt"><div className="container iro-two"><article className="iro-card"><p className="eyebrow">Дополнительные позиции</p><h2>Аксессуары и одежда</h2><p>На сайте предусмотрены отдельные категории брендовых аксессуаров и одежды.</p><List items={accessoryChecks} /><p className="iro-note">Не все аксессуары подходят ко всем моделям.</p></article><article className="iro-card"><p className="eyebrow">Региональные склады</p><h2>Модели в наличии</h2><p>Официальный сайт выделяет разделы US in Stock и EURO in Stock. Такие предложения могут означать, что отдельные готовые изделия находятся на региональном складе.</p><List items={["наличие меняется", "региональный склад не означает возможность доставки в Россию", "комплектацию готовой модели нужно проверять отдельно", "изменения головы, тела или опций могут быть недоступны", "сроки и стоимость доставки нужно подтверждать до оплаты"]} /></article></div></section>

      <BrandModelGallery
        id="irokebijin"
        eyebrow="Демонстрационная подборка"
        description="Десять примеров моделей из S-TPE- и HSS-силиконовой линеек бренда."
        notice="Ниже представлены некоторые модели Irokebijin для знакомства со стилем и направлением бренда. Это не полный каталог. Актуальный ассортимент и новые модели следует проверять на официальном сайте производителя."
        galleryRoot="/images/brands/irokebijin/gallery"
        models={galleryModels}
        layout="triptych"
      />

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Каталог и условия необходимо проверять непосредственно перед заказом.</p></div><div className="iro-purchase"><article className="featured"><p className="eyebrow">Официальный источник</p><h3>Официальный магазин Irokebijin</h3><p>Официальный сайт можно использовать для просмотра S-TPE- и силиконовых моделей, роста, совместимых голов, глаз, париков, упаковки и других опций.</p><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный магазин Irokebijin в новой вкладке">Открыть официальный магазин</a><div className="notice">Сайт используется для демонстрации каталога, а перед покупкой необходимо связаться с продавцом по электронной почте.</div><a className="iro-email" href={`mailto:${salesEmail}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать в отдел продаж Irokebijin">{salesEmail}</a></article><article><p className="eyebrow">Альтернативный вариант покупки для России</p><h3>Moon-Doll</h3><p>Возможность заказа Irokebijin для России можно отдельно уточнить у международного магазина Moon-Doll.</p><p>Менеджеру можно отправить:</p><List items={["ссылку на модель", "название тела", "название головы", "фотографию", "выбранный материал", "список необходимых опций"]} /><a className="button secondary" href={moonDoll} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll в новой вкладке">Перейти в Moon-Doll</a></article></div></div></section>

      <section className="section"><div className="container iro-two"><article className="iro-card"><p className="eyebrow">Два варианта</p><h2>Оплата</h2><p>На официальной странице оплаты указаны банковский перевод и PayPal.</p><p>Для банковского перевода сайт рекомендует заранее написать на <a href={`mailto:${salesEmail}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Irokebijin для согласования оплаты">{salesEmail}</a> и отправить снимок корзины, чтобы продавец подтвердил итоговую сумму и предоставил реквизиты.</p><p>Для PayPal описана стандартная оплата через аккаунт PayPal, привязанную карту или банковский счёт.</p><List items={["доступность способов оплаты зависит от страны", "возможность оплаты российскими картами необходимо проверять отдельно", "реквизиты следует получать только через подтверждённый контакт магазина", "перед переводом нужно сверить адрес электронной почты, сумму и заказ", "Anime Dolls World не участвует в оплате"]} /></article><article className="iro-card"><p className="eyebrow">Условия заказа</p><h2>Доставка</h2><p>На главной странице официального магазина размещено заявление о бесплатной доставке, однако его нельзя автоматически применять ко всем странам, моделям и способам отправки.</p><p>До оплаты необходимо письменно подтвердить:</p><List items={deliveryChecks} /><div className="notice"><strong>Важно</strong> Бесплатная доставка в Россию не указывается как подтверждённый факт. Условия необходимо согласовывать для конкретного заказа.</div></article></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Конфигурация заказа</p><h2>Что согласовать перед оплатой</h2></div><p>Сохраните письменное подтверждение каждой характеристики.</p></div><ol className="iro-checklist">{orderChecks.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Связь</p><h2>Контакты</h2></div><p>Адреса разделены по назначению.</p></div><div className="iro-contacts"><a href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Irokebijin в новой вкладке"><span>Официальный сайт</span><strong>irokebijinshop.com</strong></a><a href={`mailto:${salesEmail}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать в отдел продаж Irokebijin"><span>Покупка и оплата</span><strong>{salesEmail}</strong></a><a href={`mailto:${contactEmail}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Irokebijin по общим вопросам"><span>Общий контакт</span><strong>{contactEmail}</strong></a><a href={moonDoll} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll в новой вкладке"><span>Альтернативный магазин</span><strong>Moon-Doll</strong></a></div></div></section>

      <section className="section alt"><div className="container"><div className="iro-disclaimer"><p className="eyebrow">Независимый справочник</p><h2>Важное предупреждение</h2><p>Anime Dolls World публикует информацию об Irokebijin исключительно в справочных целях.</p><List items={["не является продавцом Irokebijin", "не является представителем бренда", "не принимает оплату", "не участвует в оформлении заказа", "не является стороной сделки", "не гарантирует наличие моделей", "не гарантирует совместимость головы и тела", "не подтверждает свойства S-TPE и HSS независимо", "не управляет системой проверки подлинности", "не отвечает за производство, оплату, доставку, таможню и возврат", "не гарантирует актуальность цен, акций, складских остатков и комплектации"]} className="iro-compact-list" /><p><strong>Все характеристики, опции, итоговую стоимость, оплату и доставку необходимо подтвердить у продавца до заказа.</strong></p><p>Тематика страницы относится к товарам для совершеннолетней аудитории.</p></div></div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
  </>;
}
