import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://sydolls.com/collections/moonvale-doll";
const moonDollCollection = "https://www.moon-doll.com/collections/moonvale-collection";

const galleryModels: GalleryModel[] = [
  {
    name: "Lyora",
    details: "Mo-155cm-Lyora",
    folder: "155cm-Lyora",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "155 см",
      material: "Full Silicone",
      weight: "34 кг",
      specs: [
        { label: "Голова", value: "силиконовая, с подвижной челюстью" },
        { label: "Обхват шеи", value: "26 см" },
        { label: "Плечи", value: "36 см" },
        { label: "Грудь", value: "74 см" },
        { label: "Талия", value: "58 см" },
        { label: "Бёдра", value: "92 см" },
        { label: "Длина руки", value: "44 см" },
        { label: "Длина ладони", value: "11 см" },
        { label: "Обхват бедра", value: "51 см" },
        { label: "Обхват голени", value: "34 см" },
        { label: "Стопа", value: "22 см" },
        { label: "Длина ноги", value: "80 см" },
      ],
    },
  },
  {
    name: "Sorelle",
    details: "Mo-160cm-Sorelle",
    folder: "160cm-Sorelle",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "160 см",
      material: "Full Silicone",
      weight: "38,5 кг",
      specs: [
        { label: "Голова", value: "силиконовая, с подвижной челюстью" },
        { label: "Обхват шеи", value: "26 см" },
        { label: "Плечи", value: "33 см" },
        { label: "Грудь", value: "79 см" },
        { label: "Талия", value: "56 см" },
        { label: "Бёдра", value: "104 см" },
        { label: "Длина руки", value: "48 см" },
        { label: "Длина ладони", value: "15 см" },
        { label: "Обхват бедра", value: "63 см" },
        { label: "Обхват голени", value: "36 см" },
        { label: "Стопа", value: "19 см" },
        { label: "Длина ноги", value: "76 см" },
      ],
    },
  },
  {
    name: "Velara",
    details: "Mo-165cm-Velara",
    folder: "165cm-Velara",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "165 см",
      material: "Full Silicone",
      weight: "45 кг",
      specs: [
        { label: "Голова", value: "силиконовая, с подвижной челюстью" },
        { label: "Обхват шеи", value: "26 см" },
        { label: "Плечи", value: "35 см" },
        { label: "Грудь", value: "93 см" },
        { label: "Талия", value: "58 см" },
        { label: "Бёдра", value: "102 см" },
        { label: "Длина руки", value: "52 см" },
        { label: "Длина ладони", value: "18 см" },
        { label: "Обхват бедра", value: "60 см" },
        { label: "Обхват голени", value: "32 см" },
        { label: "Стопа", value: "22 см" },
        { label: "Длина ноги", value: "83 см" },
      ],
    },
  },
  {
    name: "Cerina",
    details: "Mo-170cm-Cerina",
    folder: "170cm-Cerina",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: {
      height: "170 см",
      material: "Full Silicone",
      weight: "50 кг",
      specs: [
        { label: "Голова", value: "силиконовая, с подвижной челюстью" },
        { label: "Обхват шеи", value: "25 см" },
        { label: "Плечи", value: "37 см" },
        { label: "Грудь", value: "112 см" },
        { label: "Талия", value: "68 см" },
        { label: "Бёдра", value: "124 см" },
        { label: "Обхват верхней части руки", value: "27 см" },
        { label: "Обхват предплечья", value: "21 см" },
        { label: "Длина руки", value: "53 см" },
        { label: "Длина ладони", value: "19 см" },
        { label: "Обхват бедра", value: "71 см" },
        { label: "Обхват голени", value: "38 см" },
        { label: "Стопа", value: "23 см" },
        { label: "Длина ноги", value: "78 см" },
      ],
    },
  },
];

const features = [
  ["Furry-персонажи", "Антропоморфные образы, в которых человеческая пластика сочетается со звериными чертами."],
  ["Fantasy-эстетика", "Фантазийная подача, необычная палитра и характерные детали образа."],
  ["Звериные головы", "Головы и черты лица становятся важной частью характера каждого персонажа."],
  ["Авторский дизайн", "Линейка строится вокруг самостоятельных визуальных концепций, а не нейтральных образов."],
  ["Anime + fantasy", "Стилизованная выразительность аниме сочетается с furry- и fantasy-направлениями."],
] as const;

const characters = [
  ["Fox", "Лисьи персонажи с разными цветовыми решениями и выраженной звериной стилизацией."],
  ["Leopard", "Леопардовые образы, построенные вокруг пятнистого рисунка и кошачьей эстетики."],
  ["Panther", "Пантеры с контрастной подачей, фантазийной палитрой и характерными чертами головы."],
  ["Другие fantasy-образы", "В официальной коллекции встречаются и другие антропоморфные концепции, включая Deer-head."],
] as const;

const reasons = [
  ["Отдельное furry-направление", "Moonvale выделен внутри SY Dolls в самостоятельную линейку антропоморфных персонажей."],
  ["Редкая визуальная ниша", "Такие образы встречаются реже классических аниме-персонажей и расширяют выбор fantasy-концепций."],
  ["Коллекционный подход", "Главный интерес создаёт целостный персонаж: голова, цвет, детали и общая визуальная история."],
] as const;

const purchaseChecks = [
  "точное название и актуальное наличие модели",
  "материал выбранной позиции",
  "конструкцию головы и тела",
  "комплектацию и декоративные элементы",
  "итоговую стоимость и доступные способы оплаты",
  "условия, сроки и географию доставки",
] as const;

export function MoonvaleSYDollsProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Moonvale Doll / SY Dolls — furry- и fantasy-персонажи",
    description: "Профиль Moonvale Doll — furry- и fantasy-линейки SY Dolls с антропоморфными персонажами.",
    url: `${siteConfig.url}/brands/moonvale-sy-dolls/`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return <>
    <section className="page-hero moonvale-brand-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Moonvale / SY Dolls" }]} />
        <div className="moonvale-hero-grid">
          <div>
            <p className="eyebrow">Furry / fantasy-линейка SY Dolls</p>
            <h1>Moonvale Doll</h1>
            <p className="lede">Ростовые антропоморфные, звериные и фантазийные персонажи на пересечении furry-, anime- и fantasy-эстетики.</p>
            <p className="moonvale-hero-note">В центре линейки — самостоятельный дизайн персонажей, выразительные звериные головы и целостная визуальная проработка образов.</p>
            <div className="moonvale-tags" aria-label="Направления Moonvale Doll">
              {['Furry', 'Fantasy', 'Anthropomorphic', 'SY Dolls'].map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальную коллекцию Moonvale Doll на сайте SY Dolls в новой вкладке">Официальная коллекция</a>
          </div>
          <BrandProfileIcon slug="moonvale-sy-dolls" name="Moonvale Doll / SY Dolls" />
        </div>
      </div>
    </section>

    <main className="moonvale-brand-profile">
      <section className="section">
        <div className="container moonvale-intro">
          <article className="prose">
            <p className="eyebrow">Профиль бренда</p>
            <h2>О бренде</h2>
            <p>Moonvale Doll — отдельная furry- и fantasy-линейка SY Dolls. Её направление — антропоморфные, звериные и фантазийные персонажи с ярко выраженной собственной эстетикой.</p>
            <p>Основной акцент сделан на уникальном дизайне: характере головы, цветовых решениях, декоративных чертах и согласованности всех элементов образа. Линейка занимает промежуточную нишу между anime-style пластикой и коллекционными furry- и fantasy-персонажами.</p>
            <p>Информация на этой странице носит справочный характер и не содержит обещаний качества, доступности или соответствия ожиданиям покупателя.</p>
          </article>
          <aside className="moonvale-summary">
            <p className="eyebrow">Кратко</p>
            <dl>
              <div><dt>Линейка</dt><dd>Moonvale Doll от SY Dolls</dd></div>
              <div><dt>Направление</dt><dd>Furry · fantasy · anthropomorphic</dd></div>
              <div><dt>Акцент</dt><dd>Персонажный дизайн и звериные образы</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Визуальный язык</p><h2>Особенности бренда</h2></div><p>Moonvale развивает узнаваемые персонажные концепции без ухода в классический реализм.</p></div>
          <div className="moonvale-feature-grid">{features.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Коллекция</p><h2>Типы персонажей</h2></div><p>Названия отражают направления, представленные в текущем официальном каталоге.</p></div>
          <div className="moonvale-character-grid">{characters.map(([title, text]) => <article key={title}><div aria-hidden="true">✦</div><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="notice">Состав коллекции может меняться. Название типа персонажа не определяет автоматически материал, конструкцию или комплектацию конкретной модели.</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container moonvale-material-panel">
          <div><p className="eyebrow">Подтверждённые сведения</p><h2>Материалы и конструкция</h2><p>В текущем официальном каталоге представленные позиции Moonvale обозначены как <strong>Full Silicone</strong>. Это относится к проверенной на момент подготовки страницы выборке товаров и не является бессрочным утверждением обо всей будущей линейке.</p></div>
          <aside><h3>Проверяйте для каждой модели</h3><ul>{purchaseChecks.slice(0, 4).map(item => <li key={item}>{item}</li>)}</ul><div className="notice">Характеристики одной модели нельзя переносить на весь бренд. Материал, конструкцию, подвижность, опции и правила ухода нужно сверять в карточке выбранной позиции.</div></aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Отдельная ниша</p><h2>Почему Moonvale интересен</h2></div><p>Линейка расширяет представление о стилизованных коллекционных персонажах.</p></div>
          <div className="moonvale-why-grid">{reasons.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <BrandModelGallery
        id="moonvale"
        eyebrow="Образы Moonvale Doll"
        description="Четыре демонстрационных фотосета с тремя фотографиями каждой модели."
        notice="Ниже представлены некоторые модели бренда для ознакомления. Это не полный каталог продукции. Полный список моделей и актуальные новинки доступны на официальном сайте производителя."
        galleryRoot="/images/brands/moonvale-sy-dolls/gallery"
        models={galleryModels}
        layout="triptych"
      />

      <section className="section alt">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, комплектацию и условия заказа необходимо подтверждать у выбранного продавца.</p></div>
          <div className="moonvale-buy-panel">
            <article className="featured"><p className="eyebrow">Основной вариант покупки</p><h3>Moon-Doll</h3><p>В магазине Moon-Doll представлена отдельная коллекция Moonvale Doll. Каталог можно использовать для просмотра доступных на момент проверки моделей и параметров их карточек.</p><p>Если нужной модели нет в каталоге Moon-Doll, можно уточнить возможность заказа через менеджера магазина.</p><a className="button primary" href={moonDollCollection} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть коллекцию Moonvale Doll в магазине Moon-Doll в новой вкладке">Открыть коллекцию Moon-Doll</a></article>
            <article><p className="eyebrow">Официальный источник</p><h3>SY Dolls / Moonvale Doll</h3><p>Официальный сайт бренда можно использовать для просмотра моделей, характеристик и вариантов комплектации.</p><a className="button secondary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальную коллекцию Moonvale Doll на сайте SY Dolls в новой вкладке">Официальная коллекция</a></article>
            <aside><h3>До оплаты уточните</h3><ul>{purchaseChecks.map(item => <li key={item}>{item}</li>)}</ul></aside>
            <div className="notice moonvale-buy-notice"><strong>Важно:</strong> Anime Dolls World не является продавцом и не участвует в оформлении заказа. Наличие, итоговую стоимость, комплектацию, оплату и доставку необходимо подтвердить непосредственно у Moon-Doll или SY Dolls.</div>
          </div>
        </div>
      </section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
