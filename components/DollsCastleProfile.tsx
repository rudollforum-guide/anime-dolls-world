import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://www.dolls-castle.com/";
const moonDollWebsite = "https://www.moon-doll.com/";

const features = [
  ["Уникальный дизайн персонажей", "В центре образа — самостоятельная визуальная концепция, характерные черты и узнаваемая стилизация."],
  ["Anime и fantasy эстетика", "Стилизованные лица, тематические наряды и фантазийная подача формируют цельные персонажные образы."],
  ["Furry-образы", "Антропоморфные персонажи и звериные элементы расширяют каталог за пределы классических человеческих дизайнов."],
  ["Коллекционный подход", "Образы воспринимаются как законченные персонажные концепции, где важна согласованность деталей и общей эстетики."],
] as const;

const reasons = [
  ["Между anime и fantasy", "Бренд соединяет стилизованную выразительность anime-направления с фантазийными темами и необычными персонажами."],
  ["Отдельная furry-ниша", "Антропоморфные образы и звериные детали дают альтернативу более привычным человеческим дизайнам."],
  ["Визуальная индивидуальность", "Интерес представляет не отдельная характеристика, а целостность лица, головы, наряда и общей концепции персонажа."],
] as const;

const midnaMeasurements = [
  { label: "Размер груди", value: "E Cup" },
  { label: "Грудь", value: "65 см" },
  { label: "Талия", value: "40 см" },
  { label: "Бёдра", value: "120 см" },
  { label: "Плечи", value: "25 см" },
  { label: "Длина руки", value: "42 см" },
  { label: "Длина ноги", value: "42 см" },
];

const bonnieMeasurements = [
  { label: "Рост без головы", value: "около 149 см" },
  { label: "Длина ушей", value: "18 см" },
  { label: "Размер груди", value: "K Cup" },
  { label: "Грудь", value: "87 см" },
  { label: "Под грудью", value: "52,5 см" },
  { label: "Талия", value: "53 см" },
  { label: "Бёдра", value: "124 см" },
  { label: "Плечи", value: "29 см" },
  { label: "Длина руки", value: "63 см" },
  { label: "Длина ноги", value: "72 см" },
  { label: "Стопа", value: "16 см" },
];

const kirishimaEiraMeasurements = [
  { label: "Размер груди", value: "P Cup" },
  { label: "Грудь", value: "120 см" },
  { label: "Талия", value: "72 см" },
  { label: "Бёдра", value: "136 см" },
  { label: "Плечи", value: "38 см" },
  { label: "Длина руки", value: "76 см" },
  { label: "Длина ноги", value: "87 см" },
  { label: "Цвет на фото", value: "White" },
];

const renamonMeasurements = [
  { label: "Грудь", value: "80 см" },
  { label: "Талия", value: "42 см" },
  { label: "Бёдра", value: "92 см" },
  { label: "Плечи", value: "28 см" },
  { label: "Длина руки", value: "54 см" },
  { label: "Длина ноги", value: "60 см" },
  { label: "Цвет на фото", value: "Yellow" },
];

const velkaraMeasurements = [
  { label: "Размер груди", value: "G Cup" },
  { label: "Грудь", value: "88 см" },
  { label: "Талия", value: "56 см" },
  { label: "Бёдра", value: "100 см" },
  { label: "Плечи", value: "34 см" },
  { label: "Длина руки", value: "60 см" },
  { label: "Длина ноги", value: "70 см" },
];

const krystalMeasurements = [
  { label: "Размер груди", value: "G Cup" },
  { label: "Грудь", value: "88 см" },
  { label: "Талия", value: "56 см" },
  { label: "Бёдра", value: "100 см" },
  { label: "Плечи", value: "34 см" },
  { label: "Длина руки", value: "60 см" },
  { label: "Длина ноги", value: "70 см" },
];

const torielMeasurements = [
  { label: "Размер груди", value: "M Cup" },
  { label: "Грудь", value: "100 см" },
  { label: "Талия", value: "62 см" },
  { label: "Бёдра", value: "128 см" },
  { label: "Плечи", value: "25 см" },
  { label: "Длина руки", value: "60 см" },
  { label: "Длина ноги", value: "80 см" },
];

const miriamMeasurements = [
  { label: "Размер груди", value: "E Cup" },
  { label: "Грудь", value: "85 см" },
  { label: "Талия", value: "54 см" },
  { label: "Бёдра", value: "84 см" },
  { label: "Плечи", value: "34 см" },
  { label: "Длина руки", value: "67 см" },
];

const animeGalleryModels: GalleryModel[] = [
  {
    name: "Midna",
    details: "#SZ6",
    folder: "130cm-midna",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "130 см", material: "силикон", weight: "34 кг", specs: midnaMeasurements },
  },
  {
    name: "Bonnie",
    details: "#SZ23",
    folder: "167cm-bonnie",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "167 см", material: "силикон", weight: "50 кг", specs: bonnieMeasurements },
  },
  {
    name: "Kirishima Eira",
    details: "#S11",
    folder: "178cm-kirishima-eira",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "178 см", material: "силикон", weight: "63 кг", specs: kirishimaEiraMeasurements },
  },
];

const furryGalleryModels: GalleryModel[] = [
  {
    name: "Renamon",
    details: "#SZ20",
    folder: "140cm-renamon",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "140 см", material: "силикон", weight: "38 кг", specs: renamonMeasurements },
  },
  {
    name: "Velkara",
    details: "#SZ18",
    folder: "140cm-velkara",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "140 см", material: "силикон", weight: "38 кг", specs: velkaraMeasurements },
  },
  {
    name: "Krystal",
    details: "#SZ21",
    folder: "140cm-krystal",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "140 см", material: "силикон", weight: "36 кг", specs: krystalMeasurements },
  },
  {
    name: "Toriel",
    details: "#SZ8",
    folder: "155cm-toriel",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "силикон", weight: "48 кг", specs: torielMeasurements },
  },
  {
    name: "Miriam",
    details: "#SC1",
    folder: "162cm-miriam",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "156 см", material: ["Голова — силикон", "Тело — TPE"], weight: "32 кг", specs: miriamMeasurements },
  },
];

export function DollsCastleProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Dolls Castle — anime, fantasy и furry-персонажи",
    description: "Профиль Dolls Castle: стилизованные anime-, fantasy- и furry-персонажи, особенности образов и официальный источник.",
    url: `${siteConfig.url}/brands/dolls-castle/`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return <>
    <section className="page-hero moonvale-brand-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Dolls Castle" }]} />
        <div className="moonvale-hero-grid">
          <div>
            <p className="eyebrow">Anime · fantasy · furry</p>
            <h1>Dolls Castle</h1>
            <p className="lede">Стилизованные персонажные куклы с оригинальными образами, фантазийной эстетикой и антропоморфными направлениями.</p>
            <p className="moonvale-hero-note">Основной акцент сделан на необычном дизайне, визуальной индивидуальности персонажей и целостной коллекционной подаче.</p>
            <div className="moonvale-tags" aria-label="Направления Dolls Castle">
              {['Anime', 'Fantasy', 'Furry', 'Character design'].map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Dolls Castle в новой вкладке">Официальный сайт</a>
          </div>
          <BrandProfileIcon slug="dolls-castle" name="Dolls Castle" />
        </div>
      </div>
    </section>

    <main className="moonvale-brand-profile dolls-castle-profile">
      <section className="section">
        <div className="container moonvale-intro">
          <article className="prose">
            <p className="eyebrow">Профиль бренда</p>
            <h2>О бренде</h2>
            <p>Dolls Castle — бренд стилизованных персонажных кукол с anime-, fantasy- и furry-направлением. В центре его визуального языка находятся оригинальные персонажи, необычный дизайн, фантазийные образы и коллекционная эстетика.</p>
            <p>Бренд делает акцент на выразительности персонажа и общей концепции образа. Эта страница носит справочный характер и не содержит обещаний качества, доступности или соответствия ожиданиям покупателя.</p>
          </article>
          <aside className="moonvale-summary">
            <p className="eyebrow">Кратко</p>
            <dl>
              <div><dt>Направления</dt><dd>Anime · fantasy · furry</dd></div>
              <div><dt>Акцент</dt><dd>Оригинальные персонажные образы</dd></div>
              <div><dt>Эстетика</dt><dd>Стилизация и коллекционная подача</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container moonvale-material-panel">
          <div>
            <p className="eyebrow">Персонажная стилизация</p>
            <h2>Anime / Fantasy направление</h2>
            <p>В этом направлении внимание сосредоточено на стилизованных лицах, персонажных образах и тематических нарядах. Фантазийные детали помогают выстроить самостоятельную визуальную историю и подчеркнуть индивидуальность каждого дизайна.</p>
          </div>
          <aside>
            <h3>Что формирует образ</h3>
            <ul><li>стилизованные лица;</li><li>выразительные персонажные концепции;</li><li>тематические наряды;</li><li>согласованные fantasy-детали.</li></ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container moonvale-material-panel">
          <div>
            <p className="eyebrow">Anthropomorphic / fantasy</p>
            <h2>Furry-направление</h2>
            <p>Dolls Castle также представлен в furry- и fantasy-сегменте. Здесь встречаются антропоморфные персонажи, звериные элементы, необычные головы и фантазийные дизайны.</p>
          </div>
          <aside>
            <h3>Важно учитывать</h3>
            <p>Материалы, конструкцию, комплектацию и другие технические особенности необходимо проверять для каждой конкретной модели. Характеристики одного персонажа нельзя переносить на весь бренд.</p>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Визуальный язык</p><h2>Особенности бренда</h2></div><p>Общие направления каталога объединены вниманием к самостоятельному характеру персонажей.</p></div>
          <div className="moonvale-character-grid">{features.map(([title, text], index) => <article key={title}><div aria-hidden="true">{String(index + 1).padStart(2, '0')}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Отдельная ниша</p><h2>Почему Dolls Castle интересен</h2></div><p>Бренд занимает пространство между anime-куклами и fantasy/furry-персонажами.</p></div>
          <div className="moonvale-why-grid">{reasons.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <BrandModelGallery
        id="dolls-castle-anime"
        eyebrow="Демонстрационная подборка"
        title="Аниме-модели"
        description="Примеры ростовых моделей Dolls Castle в аниме-стилистике."
        notice="Ниже представлены некоторые модели Dolls Castle для знакомства с аниме- и фурри-направлениями бренда. Это не полный каталог продукции. В этой подборке основной акцент сделан на ростовых моделях; компактные и малые форматы не включены. Актуальный ассортимент и новые модели следует проверять на официальном сайте производителя."
        galleryRoot="/images/brands/dolls-castle/gallery/anime"
        models={animeGalleryModels}
        tone="contrast"
      />

      <BrandModelGallery
        id="dolls-castle-furry"
        eyebrow="Отдельное направление"
        title="Фурри-модели"
        description="Примеры ростовых антропоморфных и фурри-моделей Dolls Castle."
        galleryRoot="/images/brands/dolls-castle/gallery/furry"
        models={furryGalleryModels}
      />

      <section className="section alt">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, комплектацию, итоговую стоимость и условия доставки необходимо подтверждать непосредственно у выбранного продавца.</p></div>
          <div className="moonvale-buy-panel">
            <article className="featured"><p className="eyebrow">Официальный источник</p><h3>Официальный сайт Dolls Castle</h3><p>Официальный сайт можно использовать для просмотра актуальных моделей, описаний и доступных вариантов комплектации.</p><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Dolls Castle в новой вкладке">Открыть официальный сайт</a></article>
            <article><p className="eyebrow">Вариант уточнения заказа</p><h3>Moon-Doll</h3><p>Постоянное наличие Dolls Castle в каталоге Moon-Doll не заявляется. Возможность заказа конкретной модели можно уточнить у менеджера магазина по ссылке, фотографии или точному названию.</p><p>Если нужной модели нет в каталоге Moon-Doll, можно уточнить возможность заказа через менеджера магазина.</p><a className="button secondary" href={moonDollWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll для уточнения заказа Dolls Castle в новой вкладке">Уточнить в Moon-Doll</a></article>
            <div className="notice moonvale-buy-notice"><strong>Важно:</strong> Anime Dolls World не является продавцом и не участвует в оформлении заказа. Наличие модели, комплектацию, итоговую стоимость, способы оплаты и доставку необходимо подтвердить непосредственно у Dolls Castle или Moon-Doll.</div>
          </div>
        </div>
      </section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
