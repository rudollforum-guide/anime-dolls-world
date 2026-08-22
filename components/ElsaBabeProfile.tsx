import Link from "next/link";
import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://elsababedoll.com/";
const aliexpressStore = "https://aliexpress.ru/store/1103338672?g=true&page=1&spm=a2g2w.detail.0.0.489052afRfYreY3";
const moonDoll = "https://www.moon-doll.com/";
const email = "service@elsababe.com";

const animeGalleryModels: GalleryModel[] = [
  {
    name: "Suwabe Haruka",
    details: "AHR023 · 140cm",
    folder: "140cm-suwabe-haruka",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "140 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "73 см" },
        { label: "Талия", value: "42 см" },
        { label: "Бёдра", value: "80 см" },
      ],
    },
  },
  {
    name: "Miyashiro Chiharu",
    details: "AHR024 · 148cm",
    folder: "148cm-miyashiro-chiharu",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Natsuki Asuka",
    details: "AHR012 · 148cm",
    folder: "natsuki-asuka-148cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Mizuta Nina",
    details: "AHR019 · 148cm",
    folder: "mizuta-nina-148cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Kaneda Shio",
    details: "AHR027 · 148cm",
    folder: "kaneda-shio-148cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Itsuki Sango",
    details: "AHR029 · 148cm",
    folder: "itsuki-sango-148cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Hanasaka Yuka",
    details: "RAD025 · 148cm",
    folder: "hanasaka-yuka-148cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Utashiro Shiori",
    details: "RAD028 · 148cm",
    folder: "utashiro-shiori-148cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Mochizuki Rize",
    details: "RAD045 · 148cm",
    folder: "mochizuki-rize-148cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Kazama Momiji",
    details: "RAD049 · 148cm",
    folder: "kazama-momiji-148cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Yumeno Ayano",
    details: "AHR021 · 148cm",
    folder: "yumeno-ayano-148cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "78 / 72 / 66 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Seino Lemon",
    details: "RAD040 · 151cm L",
    folder: "151cm-seino",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "151 см",
      material: "Platinum Silicone",
      specs: [
        { label: "Размер тела", value: "L" },
        { label: "Голова", value: "RAD040" },
      ],
    },
  },
  {
    name: "Kira Chiyuki",
    details: "RAHC017 · 160cm",
    folder: "kira-chiyuki-160cm",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "160 см",
      material: "Platinum Silicone",
      weight: "34 кг",
      specs: [
        { label: "Грудь", value: "102 см" },
        { label: "Талия", value: "56 см" },
        { label: "Бёдра", value: "89 см" },
      ],
    },
  },
  {
    name: "Ogata Maika",
    details: "AHRC032 · 163cm",
    folder: "163cm-ogata-maika",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "163 см",
      material: "Platinum Silicone",
      weight: "39 кг",
      specs: [
        { label: "Грудь", value: "100 см" },
        { label: "Талия", value: "51 см" },
        { label: "Бёдра", value: "100 см" },
      ],
    },
  },
  {
    name: "Shirai Mino",
    details: "AHRC033 · 176cm",
    folder: "176cm-shirai-mino",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "176 см",
      material: "Platinum Silicone",
      weight: "37 кг",
      specs: [
        { label: "Грудь", value: "86 см" },
        { label: "Талия", value: "55 см" },
        { label: "Бёдра", value: "94 см" },
      ],
    },
  },
];

const furryGalleryModels: GalleryModel[] = [
  {
    name: "Aida Rina",
    details: "ZHB002 · 150cm",
    folder: "aida-rina",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "150 см",
      material: "Platinum Silicone",
      weight: "27,5 кг",
      specs: [
        { label: "Грудь", value: "72 см" },
        { label: "Под грудью", value: "58 см" },
        { label: "Талия", value: "50 см" },
        { label: "Бёдра", value: "79 см" },
        { label: "Плечи", value: "28 см" },
        { label: "Длина руки", value: "40 см" },
        { label: "Длина ноги", value: "76 см" },
        { label: "Стопа", value: "21 см" },
      ],
    },
  },
  {
    name: "Inujima Haruko",
    details: "ZHB003 · 150cm",
    folder: "inujima-haruko",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "150 см",
      material: "Platinum Silicone",
      weight: "27,5 кг",
      specs: [
        { label: "Грудь", value: "72 см" },
        { label: "Под грудью", value: "58 см" },
        { label: "Талия", value: "50 см" },
        { label: "Бёдра", value: "79 см" },
        { label: "Плечи", value: "28 см" },
        { label: "Длина руки", value: "40 см" },
        { label: "Длина ноги", value: "76 см" },
        { label: "Стопа", value: "21 см" },
      ],
    },
  },
  {
    name: "Kako Motoko",
    details: "AHR007 · 148cm",
    folder: "kako-motoko",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "66 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
  {
    name: "Morikawa Yuki",
    details: "ZHB001 · 150cm",
    folder: "morikawa-yuki",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "150 см",
      material: "Platinum Silicone",
      weight: "27,5 кг",
      specs: [
        { label: "Грудь", value: "72 см" },
        { label: "Под грудью", value: "58 см" },
        { label: "Талия", value: "50 см" },
        { label: "Бёдра", value: "79 см" },
        { label: "Плечи", value: "28 см" },
        { label: "Длина руки", value: "40 см" },
        { label: "Длина ноги", value: "76 см" },
        { label: "Стопа", value: "21 см" },
      ],
    },
  },
  {
    name: "Nekoha Aya",
    details: "RAD037 · 148cm",
    folder: "nekoha-aya",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "148 см",
      material: "Platinum Silicone",
      weight: "25 кг",
      specs: [
        { label: "Грудь", value: "66 см" },
        { label: "Талия", value: "41 см" },
        { label: "Бёдра", value: "74 см" },
      ],
    },
  },
];

const expertise = ["3D-анимация", "игровая графика", "кинопроизводство", "концепт-дизайн", "скульптура", "3D-моделирование", "разработка каркасов", "BJD-стилистика", "аниме-макияж"];
const catalog = [
  ["Аниме-куклы", "Основное направление бренда со стилизованными аниме-головами и различными вариантами тел."],
  ["Силиконовые модели", "Одна из главных категорий Elsa Babe. В каталоге представлены модели с силиконовыми телами и головами."],
  ["TPE-модели", "На официальном сайте выделена отдельная категория TPE Dolls. Доступность конкретных тел и голов необходимо проверять отдельно."],
  ["Торсы", "Компактные изделия и торсы различных размеров."],
  ["Отдельные головы", "Головы могут предлагаться отдельно, однако их совместимость зависит от размерной серии и типа тела."],
  ["Фурри-модели", "Отдельное творческое направление с фурри-головами и антропоморфными образами."],
  ["Мужские модели", "В официальном каталоге присутствует отдельное направление мужских моделей."],
  ["Аксессуары", "Дополнительные головы, парики, элементы образа и другие позиции, доступность которых зависит от текущего каталога."],
];
const heights = ["125 см", "130 см", "140 см", "144 см", "148 см", "150 см", "151 см", "157 см", "160 см", "163 см", "165 см", "176 см"];
const compatibility = [
  ["Серия голов 102 см", ["торс 57 см", "тело 90 см", "тело 102 см"]],
  ["Серия голов 148 см", ["торс 70 см", "тело 125 см", "тело 130 см", "тело 140 см", "тело 144 см", "тело 148 см", "тело 150 см"]],
  ["Серия голов 150 см", ["торс 70 см", "тело 125 см", "тело 130 см", "тело 140 см", "тело 144 см", "тело 148 см", "тело 150 см"]],
  ["Серия голов 165 см", ["торс 83 см", "тело 157 см", "тело 160 см", "тело 165 см"]],
] as const;
const headChecks = ["точное название головы", "код головы", "размерную серию", "материал", "цвет кожи", "совместимость с телом", "тип соединения", "цвет и форму глаз", "входят ли глаза в комплект", "тип макияжа", "парик", "дополнительные аксессуары"];
const skeletonChecks = ["тип каркаса", "подвижность плеч", "конструкцию позвоночника", "подвижность таза", "конструкцию кистей", "тип пальцев", "наличие стоячих стоп", "ограничения суставов", "возможность длительного стояния", "доступность ремонта или замены деталей"];
const furryChecks = ["голову", "совместимое тело", "материал", "форму лица", "уши", "глаза", "парик", "меховые или декоративные элементы", "аксессуары", "комплектацию", "особенности ухода за дополнительными деталями"];
const compactChecks = ["высоту", "чистую массу", "массу с упаковкой", "материал", "совместимую голову", "тип соединения", "наличие внутреннего каркаса", "комплектацию", "размеры коробки", "особенности хранения"];
const customChecks = ["какие варианты доступны для выбранного тела", "можно ли изменить макияж", "можно ли заменить глаза", "можно ли выбрать другой парик", "какие аксессуары входят в комплект", "увеличивают ли опции срок производства", "влияют ли изменения на итоговую стоимость"];
const deliveryChecks = ["возможна ли отправка", "способ доставки", "перевозчика", "стоимость", "включены ли таможенные расходы", "чистую массу изделия", "массу и размеры коробки", "срок изготовления", "срок передачи перевозчику", "ориентировочный срок получения", "порядок действий при повреждении"];
const orderChecks = ["точное название модели", "код тела", "код головы", "размерную серию головы", "совместимость головы и тела", "материал тела", "материал головы", "цвет кожи", "рост", "чистую массу", "массу с упаковкой", "макияж", "глаза", "парик", "одежду", "аксессуары", "фурри-элементы, если они используются", "каркас", "конструкцию пальцев", "стоячие стопы", "кастомные опции", "полную комплектацию", "итоговую цену", "стоимость доставки", "срок изготовления", "срок отправки", "заводские фотографии", "порядок исправления ошибок", "правила возврата", "действия при повреждении"];

function List({ items, className = "elsa-brand-list" }: { items: readonly string[]; className?: string }) {
  return <ul className={className}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function ElsaBabeProfile() {
  const webPageJsonLd = { "@context": "https://schema.org", "@type": "WebPage", name: "Elsa Babe — силиконовые аниме- и фурри-куклы", description: "Информация о Elsa Babe: силиконовые аниме-куклы, фурри-модели, головы и тела разных ростовых серий, совместимость, материалы, официальный сайт и покупка.", url: `${siteConfig.url}/brands/elsa-babe/`, isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url } };

  return <>
    <section className="page-hero elsa-brand-hero"><div className="container"><Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Elsa Babe" }]} /><div className="elsa-brand-hero-grid"><div><p className="eyebrow">Основной аниме-бренд</p><h1>Elsa Babe</h1><p className="lede">Elsa Babe — бренд аниме-кукол, известный выраженной стилизацией лиц, широким выбором голов и тел, силиконовыми моделями и отдельным фурри-направлением.</p><p className="elsa-brand-hero-note">Бренд развивает модели с аниме- и BJD-эстетикой и сообщает об использовании собственного опыта в концепт-дизайне, скульптуре, 3D-моделировании, макияже и проектировании внутренних конструкций.</p><div className="elsa-brand-tags">{["Аниме", "Силикон", "TPE", "Фурри", "Отдельные головы", "Торсы", "Ростовые линейки", "Кастомизация"].map((tag) => <span key={tag}>{tag}</span>)}</div><div className="elsa-brand-actions"><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Elsa Babe в новой вкладке">Официальный сайт</a><a className="button secondary" href={aliexpressStore} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть магазин Elsa Babe на AliExpress в новой вкладке">Магазин на AliExpress</a></div></div><BrandProfileIcon slug="elsa-babe" name="Elsa Babe" /></div></div></section>

    <main className="elsa-brand-profile">
      <section className="section"><div className="container elsa-brand-intro"><div className="prose"><p className="eyebrow">Профиль бренда</p><h2>О бренде</h2><p>Elsa Babe сообщает, что бренд основан в 2017 году и занимается разработкой и производством стилизованных кукол и других изделий для взрослой аудитории.</p><p>По информации официального сайта, опыт команды связан с направлениями:</p><List items={expertise} className="elsa-brand-compact-list" /><div className="notice">Эти сведения опубликованы самим брендом. Anime Dolls World не подтверждает опыт команды и производственные заявления независимо.</div></div><aside className="elsa-brand-summary"><p className="eyebrow">Кратко</p><dl><div><dt>Год основания</dt><dd>2017 — по информации бренда</dd></div><div><dt>Эстетика</dt><dd>Аниме · BJD · фурри</dd></div><div><dt>Форматы</dt><dd>Модели, торсы и отдельные головы</dd></div></dl></aside></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Визуальное направление</p><h2>Аниме- и BJD-эстетика</h2></div><p>Выраженная стилизация лиц и готовые персонажные концепции.</p></div><p className="elsa-brand-lead">Основное визуальное направление Elsa Babe — выраженная стилизация внешности. У моделей встречаются крупные глаза, подчёркнутые аниме-пропорции лица, яркий макияж, персонажные парики и готовые образы. Бренд также указывает BJD-направление как одну из основ своего дизайна.</p><div className="elsa-brand-aesthetic">{[["Аниме-стилизация", "Выраженные глаза, характерные пропорции лица и визуальный образ, ориентированный на аниме-эстетику."], ["BJD-влияние", "Отдельные модели и головы используют стилистические приёмы, напоминающие коллекционных шарнирных кукол."], ["Персонажные образы", "В каталоге встречаются модели с именами, макияжем, париками и готовой визуальной концепцией."]].map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div><div className="notice">Фактическая комплектация париком, одеждой и аксессуарами зависит от карточки конкретной модели.</div></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Ассортимент</p><h2>Основные разделы каталога</h2></div><p>Доступность позиций и конфигураций зависит от текущего каталога.</p></div><div className="elsa-brand-catalog">{catalog.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Варианты исполнения</p><h2>Материалы</h2></div><p>Материал головы и тела подтверждается отдельно для выбранной модели.</p></div><div className="elsa-brand-materials"><article><span className="tag">Основной материал</span><h3>Силикон</h3><p>Силикон является одним из основных материалов Elsa Babe. На официальном сайте многие модели обозначены как изделия из Platinum Silicone.</p><List items={["материал необходимо проверять в карточке конкретной модели", "свойства силикона могут различаться между телами", "материал головы и тела нужно подтверждать отдельно", "обозначение Platinum Silicone не означает одинаковую мягкость, плотность или внутреннюю конструкцию у всех моделей"]} /></article><article><span className="tag">Отдельная категория</span><h3>TPE</h3><p>На официальном сайте Elsa Babe также выделена категория TPE-моделей.</p><List items={["не все головы и тела доступны в TPE", "совместимость необходимо проверять по конкретной модели", "правила ухода отличаются от силикона", "материал головы и тела нужно согласовывать отдельно"]} /></article></div><div className="notice"><strong>Перед заказом</strong> Необходимо письменно подтвердить материал тела, материал головы, цвет кожи, массу и доступные опции.</div></div></section>

      <section className="section"><div className="container elsa-brand-two"><article className="elsa-brand-card"><p className="eyebrow">Размеры каталога</p><h2>Ростовые линейки</h2><p>Официальный сайт позволяет просматривать модели по ростовым категориям.</p><div className="elsa-brand-code-list">{heights.map((height) => <span key={height}>{height}</span>)}</div><p>Также представлены торсы, отдельные головы и компактные модели.</p><div className="notice">Категории отражают структуру официального каталога и не означают, что все модели постоянно доступны. Числовое обозначение без карточки товара не гарантирует фактический рост.</div></article><article className="elsa-brand-card"><p className="eyebrow">Лицо и образ</p><h2>Головы, глаза и макияж</h2><p>Elsa Babe выпускает большое количество аниме-голов, которые могут использоваться с несколькими совместимыми телами.</p><List items={headChecks} /><p className="elsa-brand-note">Изображение персонажа в каталоге может включать парик, одежду и другие элементы образа, которые не входят в базовую комплектацию. Возможность регулировки или замены глаз проверяется по конкретной голове.</p></article></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Голова и тело</p><h2>Совместимость размерных серий</h2></div><p>Одна голова подходит не ко всем телам, поэтому совместимость проверяется до оплаты.</p></div><div className="elsa-brand-compatibility">{compatibility.map(([series, bodies]) => <article key={series}><h3>{series}</h3><p>По информации FAQ может сочетаться с:</p><List items={bodies} /></article>)}</div><div className="notice"><strong>Важно</strong> Эта структура основана на опубликованной информации бренда. Перед оплатой совместимость конкретной головы, тела, соединения и цвета кожи всё равно необходимо подтвердить у продавца.</div></div></section>

      <section className="section"><div className="container elsa-brand-two"><article className="elsa-brand-card"><p className="eyebrow">Механика</p><h2>Каркас и позирование</h2><p>В описаниях ряда моделей Elsa Babe указывается внутренний металлический каркас. При этом конструкция и доступные возможности могут отличаться между телами.</p><List items={skeletonChecks} /><div className="notice">Наличие металлического каркаса не означает одинаковую механику у всех моделей. Шарнирные пальцы, подвижные плечи и стоячие стопы подтверждаются отдельно.</div></article><article className="elsa-brand-card"><p className="eyebrow">Творческая линейка</p><h2>Фурри-направление</h2><p>На официальном сайте Elsa Babe выделена отдельная категория Furry Dolls с творческими головами и антропоморфными образами.</p><p>Перед заказом необходимо проверить:</p><List items={furryChecks} /><p className="elsa-brand-note">Наличие конкретных фурри-голов, тел и аксессуаров может меняться.</p></article></div></section>

      <section className="section alt"><div className="container elsa-brand-two"><article className="elsa-brand-card"><p className="eyebrow">Отдельная категория</p><h2>Мужское направление</h2><p>Elsa Babe также выделяет отдельную категорию мужских моделей.</p><p>Материал, рост, масса, голова и комплектация мужских моделей зависят от конкретной карточки товара.</p><div className="notice">Характеристики одной модели нельзя переносить на всё мужское направление.</div></article><article className="elsa-brand-card"><p className="eyebrow">Компактный формат</p><h2>Торсы и компактные модели</h2><p>В каталоге Elsa Babe присутствуют торсы и компактные модели. При выборе необходимо уточнить:</p><List items={compactChecks} /><p className="elsa-brand-note">Компактный формат не всегда означает небольшой вес. Фактическую массу нужно проверять в карточке конкретного изделия.</p></article></div></section>

      <section className="section"><div className="container elsa-brand-custom"><div><p className="eyebrow">Настройка образа</p><h2>Кастомизация</h2><p>В зависимости от модели Elsa Babe может предлагать выбор головы, тела, цвета кожи, глаз, парика, макияжа и дополнительных опций.</p></div><List items={customChecks} className="elsa-brand-chip-list" /><div className="notice">Возможность кастомизации зависит от конкретной модели и должна подтверждаться продавцом письменно. Точное повторение изображения или персонажа не гарантируется.</div></div></section>

      <BrandModelGallery
        id="elsa-babe-anime"
        eyebrow="Аниме-направление"
        title="Аниме-модели"
        description="Подборка моделей Elsa Babe в аниме-стилистике."
        notice="Ниже представлены некоторые модели Elsa Babe для знакомства с аниме- и фурри-направлениями бренда. Это не полный каталог продукции. Актуальный ассортимент и новые модели следует проверять на официальном сайте производителя."
        galleryRoot="/images/brands/elsa-babe/gallery/anime"
        models={animeGalleryModels}
        layout="triptych"
      />

      <BrandModelGallery
        id="elsa-babe-furry"
        eyebrow="Фурри-направление"
        title="Фурри-модели"
        description="Подборка антропоморфных и фурри-моделей Elsa Babe."
        galleryRoot="/images/brands/elsa-babe/gallery/furry"
        models={furryGalleryModels}
        layout="triptych"
        tone="contrast"
      />

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Четыре источника для просмотра, проверки и выбора способа покупки.</p></div><div className="elsa-brand-purchase-grid"><article className="featured"><p className="eyebrow">Магазин бренда на торговой площадке</p><h3>Elsa Babe на AliExpress</h3><p>На AliExpress доступен магазин Elsa Babe, где можно посмотреть предложения и связаться с продавцом по поводу нужной модели.</p><a className="button primary" href={aliexpressStore} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть магазин Elsa Babe на AliExpress в новой вкладке">Открыть магазин на AliExpress</a><p className="elsa-brand-note">Перед оплатой необходимо проверить название магазина, данные продавца, карточку товара, комплектацию и итоговую сумму.</p></article><article><p className="eyebrow">Внутренняя инструкция</p><h3>Как купить Elsa Babe через AliExpress</h3><p>На Anime Dolls World опубликована отдельная пошаговая инструкция по выбору модели, согласованию комплектации, изменению цены, оплате, доставке и получению заказа.</p><Link className="button secondary" href="/stores/elsa-babe-aliexpress/">Открыть инструкцию</Link></article><article><p className="eyebrow">Альтернативный вариант покупки для России</p><h3>Moon-Doll</h3><p>Возможность заказа Elsa Babe также можно уточнить у международного магазина Moon-Doll.</p><p>Если нужной модели нет в каталоге, менеджеру можно отправить:</p><List items={["ссылку на модель", "название тела", "название головы", "фотографию", "список нужных опций"]} /><a className="button secondary" href={moonDoll} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll в новой вкладке">Перейти в Moon-Doll</a></article><article><p className="eyebrow">Официальный источник</p><h3>Официальный сайт Elsa Babe</h3><p>Официальный сайт можно использовать для просмотра каталога, голов, тел, материалов, совместимости и вариантов комплектации.</p><dl><div><dt>Сайт</dt><dd><a href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Elsa Babe в новой вкладке">elsababedoll.com</a></dd></div><div><dt>Контакт</dt><dd><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Elsa Babe по электронной почте">{email}</a></dd></div></dl><p className="elsa-brand-note">Условия прямой оплаты и доставки в Россию необходимо уточнять у Elsa Babe до заказа.</p></article></div></div></section>

      <section className="section alt"><div className="container elsa-brand-three"><article className="elsa-brand-card"><p className="eyebrow">Ориентир бренда</p><h2>Производство и сроки</h2><p>FAQ Elsa Babe указывает ориентировочное стандартное время производства около 15 рабочих дней.</p><p>Дополнительные опции могут увеличить срок:</p><List items={["роспись тела", "имплантация волос", "индивидуальный макияж", "другие варианты кастомизации"]} /><div className="notice">Это опубликованный брендом ориентир, а не гарантированный срок. Фактическое время зависит от модели, комплектации, опций и загруженности производства.</div></article><article className="elsa-brand-card"><p className="eyebrow">Общие сведения FAQ</p><h2>Доставка</h2><p>По информации FAQ, Elsa Babe отправляет заказы в разные страны. В зависимости от направления могут использоваться FedEx, UPS или другие перевозчики.</p><p>На сайте приводится ориентир 7–15 дней для доставки готовых изделий в большинство стран. Для отдельных направлений могут использоваться поезд или морская перевозка, что значительно увеличивает срок.</p><div className="notice">Эти сведения не являются подтверждёнными сроками доставки в Россию.</div><p>Для России уточните:</p><List items={deliveryChecks} /></article><article className="elsa-brand-card"><p className="eyebrow">Официальный сайт</p><h2>Оплата</h2><p>Официальный FAQ описывает оплату через PayPal. Бренд указывает, что для оплаты банковской картой отдельный аккаунт PayPal может быть не нужен, если соответствующая возможность доступна на странице оплаты.</p><div className="notice">Доступные способы оплаты зависят от страны, платёжной системы и текущих настроек сайта. Возможность оплаты российской картой необходимо проверять отдельно.</div></article></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Конфигурация заказа</p><h2>Что согласовать перед оплатой</h2></div><p>Сохраните письменное подтверждение каждой выбранной характеристики.</p></div><ol className="elsa-brand-checklist">{orderChecks.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Проверка источников</p><h2>Контакты и ссылки</h2></div><p>Официальный каталог, торговые площадки и внутренняя инструкция.</p></div><div className="elsa-brand-contacts"><a href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Elsa Babe в новой вкладке"><span>Официальный сайт</span><strong>elsababedoll.com</strong></a><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Elsa Babe по электронной почте"><span>E-mail</span><strong>{email}</strong></a><a href={aliexpressStore} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть магазин Elsa Babe на AliExpress в новой вкладке"><span>AliExpress</span><strong>Магазин Elsa Babe</strong></a><Link href="/stores/elsa-babe-aliexpress/"><span>Инструкция</span><strong>Покупка через AliExpress</strong></Link><a href={moonDoll} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll в новой вкладке"><span>Магазин</span><strong>Moon-Doll</strong></a></div></div></section>

      <section className="section"><div className="container"><div className="elsa-brand-disclaimer"><p className="eyebrow">Независимый справочник</p><h2>Важное предупреждение</h2><p>Anime Dolls World публикует информацию о Elsa Babe исключительно в справочных целях.</p><List items={["не является продавцом Elsa Babe", "не является представителем бренда", "не является представителем AliExpress", "не принимает оплату", "не участвует в оформлении заказа", "не является стороной сделки", "не гарантирует наличие моделей и опций", "не подтверждает заявления производителя независимо", "не отвечает за изготовление, оплату, доставку, таможню и возврат", "не гарантирует актуальность цен, акций, сроков и комплектации", "не гарантирует результат спора или возврата денежных средств"]} className="elsa-brand-compact-list" /><p><strong>Все характеристики, совместимость, комплектацию, стоимость и доставку покупатель должен подтвердить у Elsa Babe или выбранного магазина до оплаты.</strong></p><p>Тематика страницы относится к товарам для совершеннолетней аудитории.</p></div></div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
  </>;
}
