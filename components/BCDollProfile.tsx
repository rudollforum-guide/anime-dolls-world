import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { BrandModelGallery, type GalleryModel } from "@/components/AotumeModelGallery";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://bcdolls.com/";

const directions = ["Мини-силиконовые модели", "Модели 60+ см", "Модели 70+ см", "Модели 100+ см", "Полноразмерные модели 150+ см", "Силиконовые торсы", "Аксессуары и официальные костюмы"];
const poseOptions = ["Проволочные пальцы", "Расширенная подвижность плеч", "Подставка", "Дополнительные возможности позирования"];
const packageItems = ["Тело и голову", "Парик", "Костюм", "Обувь", "Бельё или чулки", "Аксессуары", "Подставку", "Руководство"];
const moonChecks = ["Модель", "Рост и вес", "Материал головы и тела", "Комплектацию", "Наличие подставки", "Итоговую стоимость", "Сроки", "Доставку в Россию"];
const deliveryChecks = ["Срок изготовления", "Способ доставки", "Стоимость", "Таможенные расходы", "Возможность отправки", "Ориентировочный срок получения", "Порядок действий при повреждении"];
const supportOptions = ["Замена повреждённой части", "Ремонтный комплект", "Индивидуальное решение", "Рассмотрение производственного дефекта"];
const orderChecks = ["Название и код модели", "Рост и вес", "Материал тела", "Материал головы", "Тип каркаса", "Конструкцию пальцев", "Наличие подставки", "Парик и одежду", "Комплектацию", "Заводские фотографии", "Стоимость доставки", "Сроки", "Условия гарантии", "Возможность доставки в Россию"];

const frierenMeasurements = [
  { label: "Рост тела без головы", value: "129 см" },
  { label: "Вес тела без головы", value: "22 кг" },
  { label: "Верх груди", value: "68 см" },
  { label: "Под грудью", value: "52 см" },
  { label: "Талия", value: "47 см" },
  { label: "Бёдра", value: "84 см" },
  { label: "Обхват бедра", value: "47 см" },
  { label: "Обхват голени", value: "28 см" },
  { label: "Плечи", value: "29 см" },
  { label: "Длина ноги", value: "76 см" },
  { label: "Длина руки", value: "55 см" },
  { label: "Длина кисти", value: "12 см" },
  { label: "Стопа", value: "16 см" },
  { label: "Обхват шеи", value: "19 см" },
];

const os155jMeasurements = [
  { label: "Рост тела без головы", value: "138 см" },
  { label: "Вес тела без головы", value: "27,4 кг" },
  { label: "Верх груди", value: "85 см" },
  { label: "Под грудью", value: "55,5 см" },
  { label: "Талия", value: "50,5 см" },
  { label: "Бёдра", value: "95 см" },
  { label: "Обхват бедра", value: "53 см" },
  { label: "Обхват голени", value: "33 см" },
  { label: "Плечи", value: "29 см" },
  { label: "Длина ноги", value: "82 см" },
  { label: "Длина руки", value: "58 см" },
  { label: "Длина кисти", value: "14 см" },
  { label: "Стопа", value: "20 см" },
  { label: "Обхват шеи", value: "19 см" },
];

const galleryModels: GalleryModel[] = [
  {
    name: "Frieren",
    details: "NS146C · N02A",
    folder: "ns146c-n02a-frieren",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "146 см", material: "силикон", weight: "24,5 кг", specs: frierenMeasurements },
  },
  {
    name: "Yamada Kanon",
    details: "OS155J · O02A",
    folder: "os155j-o02a-yamada-kanon",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "силикон", weight: "29,6 кг", specs: os155jMeasurements },
  },
  {
    name: "Mitsuri Kanroji",
    details: "OS155J · O03B",
    folder: "os155j-o03b-mitsuri-kanroji",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "силикон", weight: "29,6 кг", specs: os155jMeasurements },
  },
  {
    name: "Momo",
    details: "OS155J · O03C",
    folder: "os155j-o03c-momo",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "силикон", weight: "29,6 кг", specs: os155jMeasurements },
  },
  {
    name: "Dorothy",
    details: "OS155J · O04A",
    folder: "os155j-o04a-dorothy",
    photos: ["01.jpg", "02.jpg", "03.jpg"],
    characteristics: { height: "155 см", material: "силикон", weight: "29,6 кг", specs: os155jMeasurements },
  },
];

export function BCDollProfile() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "BC Doll — полноразмерные и компактные аниме-модели",
    description: "Информация о BC Doll: полноразмерные и компактные аниме-модели, силиконовые тела, отдельные PU-головы, каркас, комплектация, официальный сайт и заказ.",
    url: `${siteConfig.url}/brands/bc-doll/`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <section className="page-hero bc-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "BC Doll" }]} />
          <div className="bc-hero-grid">
            <div>
              <p className="eyebrow">Основной аниме-бренд</p><h1>BC Doll</h1>
              <p className="lede">BC Doll — бренд аниме-моделей, в каталоге которого представлены полноразмерные и компактные силиконовые модели, торсы и отдельные головы. Конструкцию и материал необходимо проверять для выбранной позиции.</p>
              <div className="bc-tags" aria-label="Основные направления бренда">{["Аниме", "Силикон", "Мини-модели", "Полноразмерные модели", "PU-головы", "Аксессуары"].map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="button primary bc-site-button" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт BC Doll в новой вкладке">Официальный сайт</a>
            </div>
            <BrandProfileIcon slug="bc-doll" name="BC Doll" />
          </div>
        </div>
      </section>

      <article className="bc-profile">
        <section className="section"><div className="container bc-intro-grid"><div className="prose bc-prose"><p className="eyebrow">Профиль производителя</p><h2>О бренде</h2><p>BC Doll выпускает аниме-куклы, миниатюрные и полноразмерные модели, силиконовые торсы, аксессуары и костюмы.</p><p>Основной упор сделан на стилизованную аниме-внешность, готовые образы, силиконовые тела и подвижные каркасы.</p><p>В Anime Dolls World основной акцент сделан на полноразмерных моделях BC Doll; компактные серии и торсы сохраняются в профиле для полноты информации о бренде.</p></div><aside className="bc-summary-card"><p className="eyebrow">Кратко</p><dl><div><dt>Категория</dt><dd>Основной аниме-бренд</dd></div><div><dt>Материал</dt><dd>Проверяется по модели</dd></div><div><dt>Форматы</dt><dd>Мини-модели · Полноразмерные модели · Торсы</dd></div></dl></aside></div></section>

        <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Ассортимент</p><h2>Основные направления</h2></div><p>Размеры, вес и комплектация зависят от конкретной модели.</p></div><div className="bc-direction-grid">{directions.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div><div className="notice bc-inline-note">Размеры, вес и комплектация зависят от конкретной модели.</div></div></section>

        <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Варианты исполнения</p><h2>Материалы</h2></div><p>Материал головы и тела следует проверять в карточке выбранной модели.</p></div><div className="bc-material-grid"><section className="bc-material-card featured"><span className="tag">Материал в каталоге</span><h3>Силикон</h3><p>В официальном каталоге BC Doll представлены силиконовые тела. Материал тела и головы необходимо подтверждать в карточке конкретной модели.</p><p>Конструкцию внутреннего каркаса также следует проверять для выбранной позиции.</p></section><section className="bc-material-card"><span className="tag">Отдельные модели</span><h3>PU-головы</h3><p>У некоторых моделей голова изготавливается из PU, а тело — из силикона. Производитель указывает, что PU хорошо удерживает форму и макияж.</p><p>Особенности ухода необходимо проверять для конкретной модели.</p></section></div></div></section>

        <section className="section alt"><div className="container bc-two-column"><section className="bc-content-card"><p className="eyebrow">Подвижность</p><h2>Каркас и позирование</h2><p>Внутри моделей используется подвижный металлический каркас, позволяющий изменять положение рук, ног и корпуса.</p><div className="bc-option-list">{poseOptions.map((item) => <span key={item}>{item}</span>)}</div><div className="notice bc-warning"><strong>Конструкция кистей</strong>Официальный FAQ указывает, что в некоторых моделях нет отдельных суставов пальцев и используются металлические проволочные элементы. Конструкцию кистей необходимо уточнять перед заказом.</div></section><section className="bc-content-card"><p className="eyebrow">Готовый образ</p><h2>Внешность и комплектация</h2><p>BC Doll выпускает модели с готовым аниме-макияжем, париками, одеждой и аксессуарами.</p><p>В зависимости от модели комплект может включать:</p><ul className="bc-card-list">{packageItems.map((item) => <li key={item}>{item}</li>)}</ul><p className="bc-note">Точная комплектация указывается в карточке конкретной модели.</p></section></div></section>

        <section className="section"><div className="container"><div className="bc-character-card"><div><p className="eyebrow">Стилизованные коллекции</p><h2>Аниме- и игровые образы</h2><p>В каталоге встречаются модели, созданные по мотивам персонажей аниме и игр. Наличие конкретных образов и состав каталога могут меняться.</p></div><span aria-hidden="true">◇</span></div></div></section>

        <BrandModelGallery
          id="bc-doll"
          eyebrow="Демонстрационная подборка"
          description="Пять примеров моделей с опубликованными обозначениями тела и головы."
          notice="Ниже представлены некоторые модели BC Doll для знакомства с аниме-направлением бренда. Это не полный каталог. Актуальный ассортимент и новые модели следует проверять на официальном сайте производителя."
          galleryRoot="/images/brands/bc-doll/gallery"
          models={galleryModels}
          layout="triptych"
          tone="contrast"
        />

        <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, комплектацию и условия необходимо подтверждать у выбранного магазина или производителя.</p></div><div className="bc-purchase-stack"><section className="bc-purchase-card bc-moon-card"><div className="bc-recommendation-label">Для русскоязычной аудитории</div><div className="bc-moon-layout"><div><p className="eyebrow">Вариант покупки для России</p><h3>Moon-Doll</h3><p>Для покупателей из России одним из возможных вариантов заказа является международный магазин Moon-Doll.</p><p>Если нужной модели BC Doll нет в каталоге, менеджеру можно отправить ссылку на модель с официального сайта и уточнить возможность заказа.</p><a className="button primary bc-store-button" href="https://www.moon-doll.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll в новой вкладке">Перейти в Moon-Doll</a></div><div className="bc-store-checks"><strong>Уточните перед заказом</strong><ul>{moonChecks.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section><section className="bc-purchase-card bc-official-card"><div><p className="eyebrow">Официальный источник</p><h3>Официальный сайт BC Doll</h3><p>Используйте официальный каталог для проверки модели, характеристик и заявленной комплектации.</p><p className="bc-source-note">Возможность прямой доставки в Россию необходимо подтвердить у BC Doll до оплаты.</p></div><dl><div><dt>Сайт</dt><dd><a href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт BC Doll в новой вкладке">bcdolls.com</a></dd></div><div><dt>Контакт</dt><dd><a href="mailto:service@bcdolls.com" target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать BC Doll по адресу service@bcdolls.com">service@bcdolls.com</a></dd></div><div><dt>Дополнительный контакт</dt><dd><a href="mailto:info.bcdolls@gmail.com" target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать BC Doll по адресу info.bcdolls@gmail.com">info.bcdolls@gmail.com</a></dd></div></dl></section></div></div></section>

        <section className="section alt"><div className="container bc-two-column"><section className="bc-content-card"><p className="eyebrow">Условия для России</p><h2>Доставка и сроки</h2><p>На сайте BC Doll опубликована информация о доставке и сроках, однако она может относиться к отдельным странам, моделям и способам отправки.</p><p>Для России необходимо заранее уточнить:</p><ul className="bc-card-list">{deliveryChecks.map((item) => <li key={item}>{item}</li>)}</ul><div className="notice">Не переносите сроки для отдельных стран на Россию: гарантированные сроки здесь не указываются.</div></section><section className="bc-content-card"><p className="eyebrow">После получения</p><h2>Гарантия и поддержка</h2><p>BC Doll сообщает, что индивидуальные товары обычно не принимаются к возврату после подтверждения и отправки заказа.</p><p>При повреждении во время доставки бренд просит предоставить фотографии и видео в течение 24 часов после получения.</p><div className="bc-option-list">{supportOptions.map((item) => <span key={item}>{item}</span>)}</div><p className="bc-note">Возможный вариант решения зависит от ситуации; возврат или замена не гарантируются.</p></section></div></section>

        <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Чек-лист покупателя</p><h2>Что проверить перед заказом</h2></div><p>Зафиксируйте согласованную модель, комплектацию и условия до оплаты.</p></div><ol className="bc-checklist">{orderChecks.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol></div></section>

        <section className="section alt"><div className="container"><div className="bc-disclaimer"><p className="eyebrow">Независимый справочник</p><h2>Дисклеймер</h2><p>Anime Dolls World публикует информацию о BC Doll исключительно в справочных целях.</p><ul><li>Сайт не является продавцом или представителем бренда.</li><li>Не принимает оплату.</li><li>Не участвует в оформлении заказа.</li><li>Не гарантирует наличие моделей.</li><li>Не отвечает за изготовление, доставку, таможню и возврат.</li><li>Не гарантирует актуальность характеристик, комплектации и условий.</li></ul><p><strong>Все сведения необходимо подтверждать у BC Doll или выбранного магазина до оплаты.</strong></p></div></div></section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
    </>
  );
}
