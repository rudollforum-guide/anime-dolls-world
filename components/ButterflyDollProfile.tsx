import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://butterflydoll.com.cn/";
const email = "info@butterflydoll.com.cn";
const whatsappUrl = "https://wa.me/8613777070002";

const abbyMeasurements = [
  { label: "Размер груди", value: "F Cup" },
  { label: "Грудь", value: "75 см" },
  { label: "Под грудью", value: "54 см" },
  { label: "Талия", value: "52 см" },
  { label: "Бёдра", value: "85 см" },
  { label: "Плечи", value: "36 см" },
  { label: "Стопа", value: "21 см" },
];

const mizukoBigMeasurements = [
  { label: "Размер груди", value: "F Cup" },
  { label: "Грудь", value: "75 см" },
  { label: "Под грудью", value: "54 см" },
  { label: "Талия", value: "52 см" },
  { label: "Бёдра", value: "85 см" },
  { label: "Плечи", value: "36 см" },
  { label: "Стопа", value: "21 см" },
  { label: "Обхват головы", value: "52 см" },
  { label: "Обхват шеи", value: "21 см" },
];

const rionMeasurements = [
  { label: "Размер груди", value: "F Cup" },
  { label: "Грудь", value: "75 см" },
  { label: "Под грудью", value: "54 см" },
  { label: "Талия", value: "52 см" },
  { label: "Бёдра", value: "85 см" },
  { label: "Плечи", value: "36 см" },
  { label: "Стопа", value: "21 см" },
  { label: "Обхват головы", value: "52 см" },
  { label: "Обхват шеи", value: "21 см" },
];

const kaguyaMeasurements = [
  { label: "Размер груди", value: "H Cup" },
  { label: "Грудь", value: "76 см" },
  { label: "Под грудью", value: "45 см" },
  { label: "Талия", value: "43 см" },
  { label: "Бёдра", value: "85 см" },
  { label: "Плечи", value: "28 см" },
  { label: "Стопа", value: "20 см" },
  { label: "Обхват головы", value: "53 см" },
  { label: "Обхват шеи", value: "20 см" },
];

const crimsonEyesMeasurements = [
  { label: "Размер груди", value: "M Cup" },
  { label: "Грудь", value: "90 см" },
  { label: "Под грудью", value: "51 см" },
  { label: "Талия", value: "51 см" },
  { label: "Бёдра", value: "91 см" },
  { label: "Плечи", value: "30 см" },
  { label: "Стопа", value: "20 см" },
  { label: "Обхват головы", value: "53 см" },
  { label: "Обхват шеи", value: "19,5 см" },
];

const galleryModels: GalleryModel[] = [
  {
    name: "Abby",
    details: "BH-100 · BB140-01 · 140XL",
    folder: "bh-100-abby-140xl",
    photos: ["01.webp", "02.webp", "03.webp"],
    characteristics: { height: "140 см", material: "TPE", weight: "28,5 кг", specs: abbyMeasurements },
  },
  {
    name: "Mizuko Big",
    details: "BH-116 · BB140-01 · 140XL",
    folder: "bh-116-mizuko-big-140xl",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "140 см", material: "TPE", weight: "28,5 кг", specs: mizukoBigMeasurements },
  },
  {
    name: "Rion",
    details: "BH-122 · BB140-01 · 140XL",
    folder: "bh-122-rion-140xl",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "140 см", material: "TPE", weight: "28,5 кг", specs: rionMeasurements },
  },
  {
    name: "Kaguya",
    details: "BH-133 · BB150-01 · 150L",
    folder: "bh-133-kaguya-150l",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "150 см", material: "TPE", weight: "31 кг", specs: kaguyaMeasurements },
  },
  {
    name: "Crimson Eyes",
    details: "BH-134 · BB154-01 · XXL",
    folder: "bh-134-crimson-eyes-154xxl",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "154 см", material: "TPE", weight: "38 кг", specs: crimsonEyesMeasurements },
  },
];

const companyCapabilities = ["разработке дизайна кукол", "скульптуре и 3D-моделировании", "создании и производстве форм", "сварке и обработке металлических каркасов", "разработке составов материалов", "изготовлении изделий из TPE, силикона и пластика", "OEM- и ODM-производстве"];
const productionDepartments = ["скульптуры и 3D-дизайна", "разработки и изготовления форм", "сварки и обработки металлических деталей", "исследования и разработки материалов", "производства и сборки"];
const catalogDirections = [
  ["Аниме-модели", "Отдельное направление со стилизованной аниме-внешностью."],
  ["TPE-модели", "Модели, тело которых изготовлено из TPE. Точная конфигурация зависит от карточки товара."],
  ["Силиконовые модели", "Компания работает с силиконовыми материалами, однако наличие силиконовой версии необходимо проверять для конкретной модели."],
  ["Полноразмерные модели", "В каталоге представлены модели разных ростовых групп, включая компактные и полноразмерные варианты."],
  ["Торсы", "Отдельная категория компактных изделий без полного тела."],
  ["Другие стили", "В каталоге также представлены азиатские, западные и фэнтезийные образы."],
];
const animeHeights = ["130–139 см", "140–149 см", "150–159 см"];
const allInOneHeights = ["Торсы", "100–109 см", "130–139 см", "140–149 см", "150–159 см", "160–169 см"];
const modelFields = ["код модели", "рост", "материал", "окружность головы и шеи", "ширину плеч", "параметры груди, талии и бёдер", "размер стопы", "внутренние размеры", "чистый вес", "вес с упаковкой", "размеры транспортировочной коробки"];
const skeletonQuestions = ["какой установлен каркас", "есть ли усиленные или пожимные плечи", "какой тип пальцев используется", "есть ли стоячие стопы", "можно ли хранить модель стоя", "какие ограничения есть у суставов"];
const moonChecks = ["точный код модели", "рост", "материал", "вес изделия", "вес с упаковкой", "голову и тело", "цвет кожи", "глаза и парик", "одежду и аксессуары", "тип каркаса", "итоговую стоимость", "срок изготовления", "доставку в Россию"];
const deliveryChecks = ["возможность отправки в Россию", "способ доставки", "стоимость логистики", "вес и размеры коробки", "срок изготовления", "срок передачи перевозчику", "ориентировочный срок доставки", "таможенные расходы", "порядок действий при задержке или повреждении"];
const orderChecks = ["точное название и код модели", "рост", "чистый вес", "вес с упаковкой", "размеры коробки", "материал тела", "материал головы", "цвет кожи", "макияж", "глаза", "парик", "одежду и аксессуары", "тип соединения головы", "конструкцию каркаса", "тип пальцев", "наличие стоячих стоп", "комплектацию", "заводские фотографии", "срок изготовления", "способ оплаты", "стоимость и способ доставки", "возможность отправки в Россию", "гарантийные условия", "порядок действий при повреждении"];

export function ButterflyDollProfile() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Butterfly Doll — аниме-куклы из TPE и силикона",
    description: "Информация о Butterfly Doll: аниме-модели из TPE и силикона, ростовые линейки, производство, материалы, характеристики, официальный сайт и заказ.",
    url: `${siteConfig.url}/brands/butterfly-doll/`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <section className="page-hero butterfly-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Butterfly Doll" }]} />
          <div className="butterfly-hero-grid">
            <div>
              <p className="eyebrow">Основной аниме-бренд</p>
              <h1>Butterfly Doll</h1>
              <p className="lede">Butterfly Doll — китайский производитель кукол из TPE и силикона, в каталоге которого представлены аниме-модели, полноразмерные тела, торсы и другие стилевые направления.</p>
              <p className="butterfly-hero-note">Производством занимается Jiangmen Image Model Display Products Co., Ltd. Компания сообщает, что работает с 2017 года и самостоятельно занимается дизайном, разработкой форм, производством каркасов и исследованием материалов.</p>
              <div className="butterfly-tags" aria-label="Основные направления бренда">{["Аниме", "TPE", "Силикон", "Полноразмерные модели", "Торсы", "OEM / ODM"].map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="button primary butterfly-site-button" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Butterfly Doll в новой вкладке">Официальный сайт</a>
            </div>
            <BrandProfileIcon slug="butterfly-doll" name="Butterfly Doll" />
          </div>
        </div>
      </section>

      <article className="butterfly-profile">
        <section className="section"><div className="container butterfly-intro-grid"><div className="prose butterfly-prose"><p className="eyebrow">Профиль производителя</p><h2>О бренде</h2><p>Butterfly Doll — бренд компании Jiangmen Image Model Display Products Co., Ltd., расположенной в городе Цзянмэнь провинции Гуандун, Китай.</p><p>По информации производителя, компания была основана в 2017 году и специализируется на:</p><ul>{companyCapabilities.map((item) => <li key={item}>{item};</li>)}</ul><div className="notice">Заявленные производственные возможности относятся к компании в целом и не означают, что каждая технология или материал доступны для любой модели.</div></div><aside className="butterfly-summary-card"><p className="eyebrow">Кратко</p><dl><div><dt>Компания</dt><dd>Jiangmen Image Model Display Products Co., Ltd.</dd></div><div><dt>Основание</dt><dd>2017 — по информации официального сайта</dd></div><div><dt>Местонахождение</dt><dd>Цзянмэнь, Гуандун, Китай</dd></div></dl></aside></div></section>

        <section className="section alt"><div className="container"><div className="butterfly-production-panel"><div><p className="eyebrow">Производственная база</p><h2>Производство и разработка</h2><p>Производитель сообщает о собственной производственной и исследовательской базе площадью более 2 000 квадратных метров.</p><p>Также компания заявляет, что в отделе разработки работают специалисты с многолетним опытом в области скульптуры человеческих форм.</p></div><div><strong>В структуре компании указаны подразделения:</strong><ul>{productionDepartments.map((item) => <li key={item}>{item};</li>)}</ul></div></div><p className="butterfly-source-note">Сведения приведены по информации производителя и не являются независимой оценкой качества.</p></div></section>

        <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Структура ассортимента</p><h2>Основные направления каталога</h2></div><p>Конфигурацию и материал необходимо проверять в карточке конкретной модели.</p></div><div className="butterfly-direction-grid">{catalogDirections.map(([title, text], index) => <section key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></section>)}</div></div></section>

        <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Официальная навигация</p><h2>Ростовые категории</h2></div><p>Категории отражают структуру каталогов на официальном сайте.</p></div><div className="butterfly-height-grid"><section><h3>Аниме-каталог</h3><div>{animeHeights.map((item) => <span key={item}>{item}</span>)}</div></section><section><h3>Каталог All-In-One</h3><div>{allInOneHeights.map((item) => <span key={item}>{item}</span>)}</div></section></div><div className="notice">Категории отражают структуру официального сайта. Доступность конкретных моделей, рост, вес и материал могут меняться.</div></div></section>

        <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Варианты исполнения</p><h2>Материалы</h2></div><p>Материал тела и головы подтверждается отдельно для выбранной модели.</p></div><div className="butterfly-material-grid"><section className="butterfly-material-card featured"><span className="tag">Материал производства</span><h3>TPE</h3><p>Butterfly Doll выпускает модели из TPE. В карточке каждой модели необходимо отдельно проверять материал, рост, вес и размеры.</p><p>Не все аниме-модели обязательно изготовлены из TPE.</p></section><section className="butterfly-material-card"><span className="tag">Проверяется по модели</span><h3>Силикон</h3><p>Компания указывает силикон среди материалов, с которыми работает производство. Наличие полностью силиконовой модели, силиконовой головы или комбинированной конфигурации необходимо проверять в карточке товара и подтверждать у продавца.</p></section></div></div></section>

        <section className="section alt"><div className="container butterfly-two-column"><section className="butterfly-content-card"><p className="eyebrow">Карточка товара</p><h2>Характеристики моделей</h2><p>Карточки товаров на официальном сайте могут содержать:</p><ul className="butterfly-card-list">{modelFields.map((item) => <li key={item}>{item}</li>)}</ul><div className="notice butterfly-warning"><strong>Особенно важно</strong>Перед покупкой проверяйте чистый вес и вес с упаковкой. Полноразмерная модель вместе с коробкой может быть значительно тяжелее указанного веса самого изделия.</div><p className="butterfly-note">Характеристики отдельной модели не являются стандартом для всего бренда.</p></section><section className="butterfly-content-card"><p className="eyebrow">Внутренняя конструкция</p><h2>Каркас и позирование</h2><p>Компания указывает собственное подразделение сварки и обработки металлических деталей, связанное с изготовлением внутренних конструкций.</p><p>Однако тип каркаса, подвижность суставов, конструкция пальцев, возможность стояния и доступные опции необходимо уточнять для конкретной модели.</p><strong className="butterfly-list-heading">Вопросы перед заказом</strong><ul className="butterfly-question-list">{skeletonQuestions.map((item) => <li key={item}>{item};</li>)}</ul></section></div></section>

        <section className="section"><div className="container"><div className="butterfly-anime-panel"><div><p className="eyebrow">Самостоятельный раздел каталога</p><h2>Аниме-направление</h2><p>На официальном сайте аниме-куклы выделены в самостоятельный раздел. Модели отличаются стилизованной внешностью, аниме-пропорциями лица, париками, макияжем и готовыми образами.</p><p className="butterfly-note">Комплектация одеждой, париком, глазами и аксессуарами зависит от конкретной карточки товара и должна быть подтверждена до оплаты.</p></div><span aria-hidden="true">蝶</span></div></div></section>

        <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Производственные услуги</p><h2>OEM и ODM</h2></div><p>Butterfly Doll сообщает, что принимает заказы на OEM- и ODM-разработку.</p></div><div className="butterfly-service-grid"><section><span>OEM</span><p>Производство изделия по техническому заданию или под брендом заказчика.</p></section><section><span>ODM</span><p>Разработка и производство модели с участием производителя.</p></section></div><div className="notice">Этот раздел описывает производственные услуги компании и не означает, что индивидуальная кастомизация доступна частному покупателю для любой модели. Возможность, стоимость и минимальные объёмы необходимо уточнять напрямую.</div></div></section>

        <BrandModelGallery
          id="butterfly-doll"
          eyebrow="Демонстрационная подборка"
          description="Пять примеров моделей с опубликованными обозначениями головы и тела."
          notice="Ниже представлены некоторые модели Butterfly Doll для знакомства со стилем и направлениями бренда. Это не полный каталог. Актуальный ассортимент и новые модели следует проверять на официальном сайте производителя."
          galleryRoot="/images/brands/butterfly-doll/gallery"
          models={galleryModels}
          layout="triptych"
        />

        <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, комплектацию и условия необходимо подтверждать у выбранного магазина или производителя.</p></div><div className="butterfly-purchase-stack"><section className="butterfly-purchase-card butterfly-moon-card"><div className="butterfly-recommendation-label">Для русскоязычной аудитории</div><div className="butterfly-moon-layout"><div><p className="eyebrow">Вариант покупки для России</p><h3>Moon-Doll</h3><p>Для покупателей из России одним из возможных вариантов заказа является международный магазин Moon-Doll.</p><p>Если нужной модели Butterfly Doll нет в каталоге, менеджеру можно отправить ссылку на официальный товар, фотографию или код модели и уточнить возможность заказа.</p><a className="button primary butterfly-store-button" href="https://www.moon-doll.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll в новой вкладке">Перейти в Moon-Doll</a></div><div className="butterfly-store-checks"><strong>Уточните перед заказом</strong><ul>{moonChecks.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section><section className="butterfly-purchase-card butterfly-official-card"><div><p className="eyebrow">Официальный источник</p><h3>Официальный сайт Butterfly Doll</h3><p>Официальный сайт можно использовать для просмотра каталога, кодов моделей и опубликованных характеристик.</p><p className="butterfly-note">Условия прямой продажи и доставки в Россию необходимо уточнять у Butterfly Doll до оплаты.</p></div><dl><div><dt>Сайт</dt><dd><a href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Butterfly Doll в новой вкладке">butterflydoll.com.cn</a></dd></div><div><dt>Контакт</dt><dd><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Butterfly Doll по электронной почте">{email}</a></dd></div><div><dt>WhatsApp / WeChat</dt><dd><a href={whatsappUrl} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть WhatsApp Butterfly Doll в новой вкладке">+86 137 7707 0002</a></dd></div><div><dt>X</dt><dd>@X_ButterflyDoll</dd></div></dl></section></div></div></section>

        <section className="section"><div className="container"><section className="butterfly-content-card butterfly-delivery-card"><p className="eyebrow">Международный заказ</p><h2>Доставка</h2><p>На странице бренда не указаны конкретные сроки международной доставки, поскольку подтверждённые универсальные сроки для России отсутствуют.</p><p>Для заказа необходимо заранее уточнить:</p><ul className="butterfly-card-list">{deliveryChecks.map((item) => <li key={item}>{item}</li>)}</ul><div className="notice butterfly-payment-warning"><strong>Важно перед оплатой</strong><span>Anime Dolls World не является продавцом и не участвует в оформлении заказа. Наличие модели, характеристики, итоговую стоимость, способы оплаты и доставку необходимо подтвердить непосредственно у выбранного магазина или производителя.</span></div></section></div></section>

        <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Юридическая информация</p><h2>Производитель и контакты</h2></div><p>Контактные данные приведены для проверки информации и связи с компанией.</p></div><div className="butterfly-company-card"><dl><div><dt>Компания</dt><dd>Jiangmen Image Model Display Products Co., Ltd.</dd></div><div><dt>Год основания</dt><dd>2017 — по информации официального сайта</dd></div><div><dt>Местонахождение</dt><dd>Цзянмэнь, провинция Гуандун, Китай</dd></div><div><dt>E-mail</dt><dd><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Butterfly Doll по электронной почте">{email}</a></dd></div><div><dt>WhatsApp / WeChat</dt><dd><a href={whatsappUrl} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть WhatsApp Butterfly Doll в новой вкладке">+86 137 7707 0002</a></dd></div><div><dt>Официальный сайт</dt><dd><a href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Butterfly Doll в новой вкладке">butterflydoll.com.cn</a></dd></div></dl></div></div></section>

        <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Чек-лист покупателя</p><h2>Что проверить перед заказом</h2></div><p>Зафиксируйте согласованные характеристики, комплектацию и условия до оплаты.</p></div><ol className="butterfly-checklist">{orderChecks.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div></section>

        <section className="section alt"><div className="container"><div className="butterfly-disclaimer"><p className="eyebrow">Независимый справочник</p><h2>Важное предупреждение</h2><p>Anime Dolls World публикует информацию о Butterfly Doll исключительно в справочных целях.</p><ul><li>Сайт не является продавцом или представителем Butterfly Doll.</li><li>Не принимает оплату.</li><li>Не участвует в оформлении заказа.</li><li>Не гарантирует наличие моделей и опций.</li><li>Не подтверждает заявления производителя независимо.</li><li>Не отвечает за изготовление, доставку, таможню и возврат.</li><li>Не гарантирует актуальность цен, характеристик, комплектации и условий покупки.</li></ul><p><strong>Все характеристики, комплектацию, оплату, сроки и доставку покупатель подтверждает непосредственно у Butterfly Doll или выбранного магазина до оплаты.</strong></p><p>Тематика страницы относится к товарам для совершеннолетней аудитории.</p></div></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
    </>
  );
}
