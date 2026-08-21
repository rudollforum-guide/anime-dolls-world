import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://croissantdoll.com/";
const aliexpressStore = "https://aliexpress.ru/store/1104058341?spm=a2g2w.detail.0.0.20e71f0a0GyoB5&page=1";
const moonDoll = "https://www.moon-doll.com/";
const email = "yjslcl321@gmail.com";

const galleryModels: GalleryModel[] = [
  {
    name: "Kitagawa Marin",
    details: "#B07 · 155P",
    folder: "kitagawa-marin-155p",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "155 см",
      material: ["Голова — soft vinyl / PVC", "Тело — S-TPE / ALM"],
      weight: "26 кг",
      specs: [
        { label: "Размер груди", value: "D Cup" },
        { label: "Грудь", value: "66 см" },
        { label: "Талия", value: "46 см" },
        { label: "Бёдра", value: "77 см" },
        { label: "Плечи", value: "27 см" },
        { label: "Стопа", value: "20 см" },
        { label: "Размер упаковки", value: "145 × 40 × 34 см" },
        { label: "Скелет", value: "EVO + M16" },
        { label: "Пальцы", value: "шарнирный скелет доступен" },
        { label: "Standing", value: "с болтами / без standing" },
      ],
    },
  },
  {
    name: "Mythuyu Yukino",
    details: "#B07 · 155M",
    folder: "mythuyu-yukino-155m",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "155 см",
      material: ["Голова — soft vinyl / PVC", "Тело — S-TPE / ALM"],
      weight: "около 27 кг",
      specs: [
        { label: "Грудь", value: "85 см" },
        { label: "Под грудью", value: "48 см" },
        { label: "Талия", value: "50 см" },
        { label: "Бёдра", value: "90 см" },
        { label: "Плечи", value: "30 см" },
        { label: "Обхват шеи", value: "22 см" },
        { label: "Стопа", value: "22 см" },
      ],
    },
  },
  {
    name: "Tsukatsuki RIO",
    details: "#B04 · 168",
    folder: "tsukatsuki-rio-168",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "168 см",
      material: ["Голова — soft vinyl / PVC", "Тело — STPE / ALM"],
      specs: [
        { label: "Варианты тела", value: "168 / 168 Lightweight" },
        { label: "Размер груди", value: "K Cup" },
      ],
    },
  },
];

const catalogItems = [
  ["Обычные модели", "Готовые аниме-образы, среди которых встречаются варианты с ручным макияжем и готовым decal-макияжем."],
  ["Оригинальные персонажи", "Собственные образы бренда, включая модели с мягкими силиконовыми головами и разными вариантами художественного оформления."],
  ["Премиальные готовые изделия", "Отдельные законченные работы высокого уровня, которые могут продаваться как готовые экземпляры."],
  ["Коллекционные изделия", "Выставочные или художественно оформленные модели, рассчитанные на коллекционную подачу."],
  ["Компоненты для кастомизации", "Отдельные головы, аксессуары, тела, парики, одежда и варианты настройки внешности."],
];
const brandCatalog = ["готовые персонажные модели", "оригинальные образы бренда", "модели с ручным макияжем", "варианты с готовым decal-макияжем", "головы из мягкого силикона", "готовые премиальные изделия", "коллекционные выставочные варианты", "отдельные тела", "головы и аксессуары", "парики", "одежда на заказ"];
const bodyCodes = ["128", "132S", "132B", "132F", "140", "141", "148", "155", "155M", "155N", "155P", "155ED", "165", "168", "168 Lightweight", "182"];
const customization = ["макияж головы без изменения формы", "изменение формы рта", "изменение формы глаз", "более полную корректировку внешности", "заранее уложенный парик", "индивидуальную одежду"];
const lightweightChecks = ["фактическую массу", "материал", "конструкцию каркаса", "отличия от стандартного тела", "доступные головы", "ограничения по опциям", "размер упаковки"];
const aliexpressChecks = ["открыть актуальную страницу магазина", "проверить название продавца", "уточнить конкретную модель", "согласовать тело и голову", "подтвердить материал", "проверить итоговую комплектацию", "проверить цену после выбора опций", "уточнить доставку в Россию", "сохранить переписку внутри площадки"];
const directChecks = ["модель", "тело", "голову", "материал", "макияж", "парик", "одежду", "конструкцию пальцев", "итоговую цену", "доставку", "дополнительные сборы"];
const orderChecks = ["точное название модели", "тело", "голову", "материал тела", "материал головы", "тип макияжа", "уровень исполнения", "цвет кожи", "глаза", "парик", "одежду", "аксессуары", "тип пальцев", "рост", "массу", "облегчённую или стандартную версию", "полную комплектацию", "итоговую стоимость", "стоимость доставки", "необходимость доплаты за регион", "срок изготовления", "наличие готового изделия", "фотографии перед отправкой", "условия возврата", "порядок действий при повреждении"];
const deliveryChecks = ["возможна ли отправка в Россию", "через какую службу", "стоимость доставки", "нужна ли отдельная доплата", "размер и масса коробки", "срок подготовки заказа", "срок изготовления", "таможенные расходы", "порядок действий при задержке", "правила получения повреждённой посылки"];

function CheckList({ items, className = "croissant-list" }: { items: string[]; className?: string }) {
  return <ul className={className}>{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export function CroissantDollProfile() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Croissant Doll — аниме-куклы и кастомизация образов",
    description: "Информация о Croissant Doll: аниме-модели, STPE, ALM и силикон, ручной и decal-макияж, кастомизация головы, готовые образы, официальный сайт и AliExpress.",
    url: `${siteConfig.url}/brands/croissant-doll/`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return <>
    <section className="page-hero croissant-hero"><div className="container">
      <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Croissant Doll" }]} />
      <div className="croissant-hero-grid"><div><p className="eyebrow">Основной аниме-бренд</p><h1>Croissant Doll</h1><p className="lede">Croissant Doll — бренд аниме-кукол и художественно оформленных моделей с готовыми персонажными образами, разными вариантами макияжа и возможностью подбора отдельных компонентов.</p><p className="croissant-hero-note">На официальном сайте представлены стандартные модели, оригинальные персонажи, премиальные готовые варианты, коллекционные изделия и отдельные элементы для кастомизации.</p><div className="croissant-tags">{["Аниме", "STPE", "ALM", "Силикон", "Кастомизация", "Ручной макияж", "Готовые образы"].map((tag) => <span key={tag}>{tag}</span>)}</div><div className="croissant-actions"><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Croissant Doll в новой вкладке">Официальный сайт</a><a className="button secondary" href={aliexpressStore} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть Croissant Doll Store на AliExpress в новой вкладке">Croissant Doll Store на AliExpress</a></div></div><BrandProfileIcon slug="croissant-doll" name="Croissant Doll" /></div>
    </div></section>

    <main className="croissant-profile">
      <section className="section"><div className="container croissant-intro-grid"><div className="prose"><p className="eyebrow">Профиль бренда</p><h2>О бренде</h2><p>Croissant Doll специализируется на аниме-моделях и образах с выраженной стилизацией.</p><p>На сайте представлены:</p><CheckList items={brandCatalog} className="croissant-compact-list" /><div className="notice">Каталог сочетает обычные серийные модели и более сложные художественные варианты. Доступность конкретного образа и комплектации необходимо проверять в карточке товара.</div></div><aside className="croissant-summary"><p className="eyebrow">Кратко</p><dl><div><dt>Направление</dt><dd>Аниме-модели и готовые образы</dd></div><div><dt>Материалы в каталоге</dt><dd>STPE · ALM · силикон</dd></div><div><dt>Настройка</dt><dd>Головы, макияж, парики, одежда и аксессуары</dd></div></dl></aside></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Направления</p><h2>Структура каталога</h2></div><p>От серийных образов до отдельных компонентов для настройки.</p></div><div className="croissant-catalog-grid">{catalogItems.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="notice">Названия разделов отражают структуру официального сайта. Они не являются независимой оценкой качества.</div></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Художественное оформление</p><h2>Варианты макияжа</h2></div><p>Тип исполнения необходимо проверять в названии или карточке выбранной модели.</p></div><div className="croissant-makeup-grid"><article><span className="tag">Индивидуальная работа</span><h3>Ручной макияж</h3><p>На части моделей макияж выполняется художником вручную.</p><CheckList items={["индивидуальную прорисовку лица", "более сложную работу с оттенками", "настройку отдельных черт", "отличия между готовыми экземплярами"]} /></article><article><span className="tag">Стандартизированный образ</span><h3>Готовый decal-макияж</h3><p>У некоторых моделей используется заранее подготовленный декоративный макияж.</p><CheckList items={["более стандартизированный внешний вид", "повторяемость образа", "понятный результат по каталогу"]} /></article></div><div className="notice">Конкретный тип макияжа указан в названии или карточке модели. Его необходимо проверять до заказа. Ручное исполнение само по себе не является автоматической оценкой качества.</div></div></section>

      <section className="section alt"><div className="container croissant-feature-panel"><div><p className="eyebrow">Настройка деталей</p><h2>Кастомизация головы и образа</h2><p>На официальном сайте предусмотрена отдельная страница настройки головы и аксессуаров.</p><CheckList items={customization} className="croissant-chip-list" /></div><aside><strong>Уровни исполнения</strong>{["Regular Grade", "Advanced Grade", "Exhibition Grade"].map((grade) => <span key={grade}>{grade}</span>)}<p>Эти уровни являются внутренними категориями Croissant Doll. Они не должны интерпретироваться как независимый рейтинг.</p></aside></div><div className="container"><div className="notice">Возможность конкретной кастомизации, итоговый результат, срок и стоимость необходимо согласовывать до оплаты.</div></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Конфигурации</p><h2>Материалы</h2></div><p>Материал зависит от конкретного тела и модели.</p></div><div className="croissant-material-grid"><article><h3>STPE</h3><p>В карточках отдельных моделей и тел Croissant Doll указан материал STPE.</p><p>Состав и свойства обозначения необходимо уточнять у продавца.</p></article><article><h3>ALM</h3><p>В каталоге встречаются тела с обозначением ALM.</p><p>Точный состав, мягкость, вес и особенности ухода необходимо уточнять у продавца, поскольку обозначение само по себе не раскрывает все характеристики материала.</p></article><article><h3>Силикон</h3><p>На сайте силикон встречается как один из вариантов материала тела и как материал отдельных мягких голов.</p><p>Это не означает, что все модели доступны в силиконовой версии.</p></article></div><div className="notice"><strong>Перед заказом</strong> Нужно письменно подтвердить материал головы и тела отдельно.</div></div></section>

      <section className="section alt"><div className="container croissant-two-column"><article className="croissant-card"><p className="eyebrow">Корпус</p><h2>Тела и ростовые варианты</h2><p>На странице покупки тела отдельно представлены разные варианты корпуса. В каталоге встречаются обозначения:</p><div className="croissant-code-list">{bodyCodes.map((code) => <span key={code}>{code}</span>)}</div><div className="notice">Перечень отражает варианты, встречающиеся на сайте. Не все тела обязательно доступны одновременно, а характеристики могут меняться. Числовое обозначение без карточки товара не гарантирует рост.</div></article><article className="croissant-card"><p className="eyebrow">Конструкция</p><h2>Обычные и облегчённые версии</h2><p>В каталоге встречаются обычные и облегчённые варианты тела, включая обозначение 168 Lightweight.</p><p>Перед заказом облегчённой версии необходимо уточнить:</p><CheckList items={lightweightChecks} /><p className="croissant-note">Облегчённая версия не считается автоматически более удобной или долговечной.</p></article></div></section>

      <section className="section"><div className="container croissant-two-column"><article className="croissant-card"><p className="eyebrow">Кисти</p><h2>Пальцы и конструкция</h2><p>В карточках отдельных моделей встречаются два варианта:</p><div className="croissant-compare"><div><strong>Copper wire</strong><p>Проволочная конструкция пальцев.</p></div><div><strong>Finger skeleton</strong><p>Отдельная более сложная внутренняя конструкция пальцев.</p></div></div><div className="notice">Доступный вариант зависит от конкретной модели и конфигурации. Перед заказом уточните, какая конструкция будет установлена. Ни один вариант не является универсально лучшим.</div></article><article className="croissant-card"><p className="eyebrow">Стилизация</p><h2>Оригинальные и персонажные образы</h2><p>Croissant Doll выпускает как оригинальные модели, так и образы, визуально ориентированные на аниме- и игровые персонажи.</p><CheckList items={["оригинальные персонажи", "готовые персонажные образы", "модели с ручным макияжем", "модели с decal-макияжем", "варианты с готовым париком и одеждой"]} /><p className="croissant-note">Наличие конкретного персонажа, костюма, аксессуаров и парика может меняться. Комплектацию необходимо проверять в карточке товара.</p></article></div></section>

      <section className="section alt"><div className="container croissant-premium-panel"><div><p className="eyebrow">Готовые работы</p><h2>Премиальные и коллекционные изделия</h2><p>На сайте выделены отдельные категории готовых премиальных и коллекционных изделий.</p></div><CheckList items={["более сложное художественное оформление", "индивидуальная работа над образом", "готовая комплектация", "выставочная подача", "ограниченная доступность"]} className="croissant-chip-list" /><p>Категории Premium и Collector’s Grade являются внутренними обозначениями магазина. Они не являются независимой оценкой качества, инвестиционной ценности или редкости.</p></div></section>

      <BrandModelGallery
        id="croissant-doll"
        eyebrow="Демонстрационная подборка"
        description="Три примера моделей Croissant Doll с разными ростовыми форматами, материалами и вариантами тела."
        notice="Ниже представлены некоторые модели Croissant Doll для знакомства со стилем и направлениями бренда. Это не полный каталог. Актуальные характеристики, комплектацию и доступность необходимо проверять в карточке выбранной модели или уточнять у продавца."
        galleryRoot="/images/brands/croissant-doll/gallery"
        models={galleryModels}
        layout="triptych"
      />

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Детали заказа и комплектацию необходимо подтверждать непосредственно у продавца.</p></div><div className="croissant-purchase-stack"><article className="croissant-purchase featured"><div><p className="eyebrow">Основной вариант покупки</p><h3>Croissant Doll Store на AliExpress</h3><p>На AliExpress доступен магазин Croissant Doll Store. Наличие конкретной модели и статус продавца необходимо проверить перед оплатой.</p><a className="button primary" href={aliexpressStore} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть Croissant Doll Store на AliExpress в новой вкладке">Открыть Croissant Doll Store</a></div><div><strong>Перед оплатой необходимо</strong><CheckList items={aliexpressChecks} /></div><p className="croissant-full-note">Страницы магазинов, ассортимент и правила AliExpress могут меняться. Anime Dolls World не подтверждает статус магазина независимо.</p></article><article className="croissant-purchase moon-doll-inquiry"><div><p className="eyebrow">Дополнительный вариант запроса</p><h3>Moon-Doll</h3><p>В текущем каталоге Moon-Doll отдельная коллекция Croissant Doll не заявлена. Возможность индивидуального заказа можно уточнить у менеджера магазина по ссылке, фотографии или точному названию модели.</p><p>Если нужной модели нет в каталоге Moon-Doll, можно уточнить возможность заказа через менеджера магазина.</p><a className="button secondary" href={moonDoll} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll для уточнения заказа Croissant Doll в новой вкладке">Уточнить в Moon-Doll</a></div><div className="notice">Moon-Doll не указан здесь как официальный дилер Croissant Doll. Наличие, цену, комплектацию, оплату и доставку необходимо подтвердить непосредственно у магазина.</div></article><article className="croissant-purchase official"><div><p className="eyebrow">Официальный источник</p><h3>Официальный сайт Croissant Doll</h3><p>Официальный сайт можно использовать для просмотра моделей, характеристик, материалов, вариантов комплектации, макияжа и кастомизации.</p><p>Перед оформлением заказа сайт рекомендует предварительно подтвердить детали у службы поддержки.</p></div><dl><div><dt>Сайт</dt><dd><a href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Croissant Doll в новой вкладке">croissantdoll.com</a></dd></div><div><dt>Контакт</dt><dd><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Croissant Doll по электронной почте">{email}</a></dd></div></dl></article></div></div></section>

      <section className="section"><div className="container croissant-two-column"><article className="croissant-card"><p className="eyebrow">Прямой заказ</p><h2>Покупка через официальный сайт</h2><p>На страницах товаров Croissant Doll размещено предупреждение о необходимости связаться со службой поддержки до оформления заказа.</p><p>Перед оплатой рекомендуется согласовать:</p><CheckList items={directChecks} className="croissant-compact-list" /><div className="notice">Не оформляйте отдельные технические товары или ссылки для доплаты без предварительного подтверждения службы поддержки.</div></article><article className="croissant-card"><p className="eyebrow">Техническая позиция</p><h2>Доплата за доставку</h2><p>На официальном сайте есть отдельная техническая ссылка для корректировки стоимости доставки в отдельные регионы.</p><p>Такая ссылка должна использоваться только после подтверждения службы поддержки.</p><div className="notice"><strong>Важно</strong> Товар для доплаты за доставку не является самостоятельным изделием. Без предварительного согласования его оформлять нельзя.</div><p className="croissant-note">Размер доплаты зависит от региона и заказа.</p></article></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Чек-лист заказа</p><h2>Что согласовать перед оплатой</h2></div><p>Сохраните подтверждение конфигурации и условий в переписке.</p></div><ol className="croissant-checklist">{orderChecks.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div></section>

      <section className="section"><div className="container croissant-delivery"><div><p className="eyebrow">Условия для России</p><h2>Доставка в Россию</h2><p>Универсальные подтверждённые сроки доставки в Россию на странице не указываются. До оплаты необходимо уточнить:</p><CheckList items={deliveryChecks} className="croissant-compact-list" /></div><div className="croissant-important"><p className="eyebrow">Важно перед оплатой</p><p>Anime Dolls World не является продавцом и не участвует в оформлении заказа. Наличие модели, характеристики, итоговую стоимость и доставку необходимо подтвердить непосредственно у продавца.</p></div></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Проверка источников</p><h2>Контакты</h2></div><p>Используйте актуальные страницы и точный адрес электронной почты.</p></div><div className="croissant-contact-grid"><a href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Croissant Doll в новой вкладке"><span>Официальный сайт</span><strong>croissantdoll.com</strong></a><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Croissant Doll по электронной почте"><span>E-mail</span><strong>{email}</strong></a><a href={aliexpressStore} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть Croissant Doll Store на AliExpress в новой вкладке"><span>AliExpress</span><strong>Croissant Doll Store</strong></a></div></div></section>

      <section className="section"><div className="container"><div className="croissant-disclaimer"><p className="eyebrow">Независимый справочник</p><h2>Важное предупреждение</h2><p>Anime Dolls World публикует информацию о Croissant Doll исключительно в справочных целях.</p><CheckList items={["не является продавцом", "не является представителем бренда", "не является представителем AliExpress", "не принимает оплату", "не участвует в оформлении заказа", "не является стороной сделки", "не гарантирует наличие моделей", "не гарантирует результат кастомизации", "не подтверждает внутренние уровни качества независимо", "не отвечает за изготовление, доставку, таможню и возврат", "не гарантирует актуальность цен, ассортимента и условий"]} className="croissant-compact-list" /><p><strong>Все характеристики, комплектацию, оплату и доставку необходимо подтверждать у продавца перед заказом.</strong></p><p>Тематика страницы относится к товарам для совершеннолетней аудитории.</p></div></div></section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
  </>;
}
