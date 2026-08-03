import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/site";

const storeUrl = "https://www.moon-doll.com/";

const orderSteps = [
  "Зарегистрироваться на сайте.",
  "Выбрать модель и нужные опции.",
  "Проверить вес изделия в карточке товара.",
  "Нажать Buy Now.",
  "Ввести данные для оформления заказа.",
  "При наличии промокода указать его при оформлении.",
  "Выбрать доступный способ оплаты.",
  "Дождаться письма менеджера с подтверждением заказа и инвойсом.",
];

const paymentChecks = ["Тело", "Голову", "Материал", "Цвет кожи", "Парик", "Глаза", "Дополнительные опции", "Вес", "Стоимость доставки", "Итоговую сумму заказа"];
const factoryPhotoChecks = ["Правильность тела и головы", "Цвет кожи", "Макияж", "Глаза", "Парик", "Комплектацию", "Отсутствие заметных повреждений", "Соответствие согласованным опциям"];
const missingProductChecks = ["Возможность заказа", "Доступные материалы", "Варианты комплектации", "Цену", "Вес", "Сроки изготовления", "Сроки доставки", "Возможность индивидуального заказа", "Возможность добавления товара в каталог магазина"];
const managerChecklist = ["Доступна ли выбранная модель", "Кто является производителем", "Точное название тела и головы", "Материал тела и головы", "Рост и вес", "Цвет кожи", "Глаза, парик и одежда", "Каркас и дополнительные опции", "Итоговая стоимость", "Стоимость доставки", "Способ оплаты", "Сроки изготовления", "Сроки доставки", "Получение заводских фотографий", "Условия исправления ошибок до отправки", "Правила возврата и решения спорных ситуаций"];

export function MoonDollProfile() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Moon-Doll — заказ аниме-, TPE- и силиконовых кукол",
    description: "Инструкция по заказу в Moon-Doll: выбор модели, комплектация, оплата, сроки изготовления и доставки, заводские фотографии, контакты и важные предупреждения.",
    url: `${siteConfig.url}/stores/moon-doll/`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <>
      <section className="page-hero moon-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Магазины", href: "/stores/" }, { label: "Moon-Doll" }]} />
          <div className="moon-hero-grid">
            <div>
              <p className="eyebrow">Международный магазин</p>
              <h1>Moon-Doll</h1>
              <p className="lede">Moon-Doll — международный магазин TPE- и силиконовых кукол, торсов, голов, аксессуаров и товаров для ухода.</p>
              <p className="moon-hero-note">На сайте представлены товары разных брендов, включая модели в аниме-стиле. Магазин работает с международными заказами и может организовывать доставку в разные страны, включая Россию.</p>
              <div className="moon-tags" aria-label="Основные направления магазина">{["TPE", "Силикон", "Аниме-модели", "Международная доставка", "Аксессуары", "Уход"].map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="button primary moon-site-button" href={storeUrl} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Moon-Doll в новой вкладке">Перейти на сайт Moon-Doll</a>
            </div>
            <div className="moon-hero-mark" aria-hidden="true"><span>MD</span><small>International store</small></div>
          </div>
        </div>
      </section>

      <article className="moon-profile">
        <section className="section">
          <div className="container moon-intro-grid">
            <div className="prose moon-prose"><p className="eyebrow">Каталог и комплектация</p><h2>О магазине</h2><p>Moon-Doll предлагает полноразмерные модели, торсы, отдельные головы, аксессуары и товары для ухода. В каталоге представлены разные производители и варианты комплектации.</p><p>Если нужной модели нет на сайте, возможность её заказа можно уточнить у менеджера Moon-Doll по ссылке, фотографии или описанию.</p></div>
            <aside className="moon-summary-card"><p className="eyebrow">Кратко</p><dl><div><dt>Формат</dt><dd>Международный магазин</dd></div><div><dt>Каталог</dt><dd>Модели · Торсы · Головы · Аксессуары · Уход</dd></div><div><dt>Заказ</dt><dd>Через сайт с подтверждением менеджера</dd></div></dl></aside>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Пошаговый процесс</p><h2>Как оформить заказ</h2></div><p>До перехода к оплате дождитесь подтверждения комплектации и итогового расчёта.</p></div>
            <ol className="moon-order-steps">{orderSteps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}</ol>
            <div className="moon-check-panel"><div><p className="eyebrow">Контроль комплектации</p><h3>Перед оплатой проверьте</h3></div><ul>{paymentChecks.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </section>

        <section className="section">
          <div className="container moon-two-column">
            <section className="moon-content-card"><p className="eyebrow">Настройки сайта</p><h2>Валюта и язык</h2><p>На сайте можно выбрать язык интерфейса и валюту отображения. Это помогает предварительно ориентироваться в цене, но итоговый расчёт, способы оплаты и условия заказа лучше подтверждать у менеджера Moon-Doll.</p><div className="notice">Сумма, отображаемая на сайте, может не учитывать индивидуальные опции, доставку и другие дополнительные расходы.</div></section>
            <section className="moon-content-card moon-payment-card"><p className="eyebrow">Согласование с менеджером</p><h2>Оплата</h2><p>Для оплаты картой МИР покупатели обычно выбирают:</p><div className="moon-payment-path"><span>Payment Method</span><b>→</b><strong>Bank Transfer</strong></div><p>Чаще всего используется полная предоплата. Время, отведённое на оплату инвойса, может быть ограничено, поэтому способ оплаты, сумму и сроки необходимо заранее согласовать с менеджером магазина.</p><div className="notice moon-warning">Не переводите деньги до получения подтверждённой комплектации, итоговой суммы и инструкций от магазина.</div></section>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Ориентировочные этапы</p><h2>Сроки</h2></div><p>Фактические сроки подтверждаются для каждого заказа отдельно.</p></div>
            <div className="moon-timeline-grid"><div><span>01</span><h3>Изготовление</h3><p>Ориентировочно около 2–3 недель.</p></div><div><span>02</span><h3>Проверка перед отправкой</h3><p>Перед отправкой покупателю обычно предоставляют заводские фотографии изделия.</p></div><div><span>03</span><h3>Доставка до Москвы</h3><p>В среднем может занимать около 2–3 месяцев.</p></div></div>
            <p className="moon-timeline-note">Указанные сроки являются ориентировочными. Они зависят от выбранной модели, производителя, сложности комплектации, загруженности фабрики, логистического маршрута, региона доставки, таможенного оформления и других обстоятельств.</p>
          </div>
        </section>

        <section className="section">
          <div className="container moon-photo-grid">
            <div><p className="eyebrow">Контроль до отправки</p><h2>Заводские фотографии</h2><p>Перед отправкой покупателю обычно показывают заводские фотографии готового изделия.</p><p>Если на фотографиях обнаружена ошибка, необходимо сообщить менеджеру до отправки заказа.</p></div>
            <div className="moon-photo-checks"><strong>Рекомендуется внимательно проверить</strong><ul>{factoryPhotoChecks.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </div>
        </section>

        <section className="section alt">
          <div className="container moon-two-column">
            <section className="moon-content-card"><p className="eyebrow">Дополнительные предложения</p><h2>Бонусы и подарки</h2><p>У Moon-Doll могут действовать подарки при покупке недефектного изделия, бонусные баллы и другие предложения.</p><p>Актуальные условия, доступность подарков и правила начисления баллов необходимо уточнять у менеджера перед оплатой.</p></section>
            <section className="moon-content-card"><p className="eyebrow">Индивидуальный запрос</p><h2>Если нужной модели нет на сайте</h2><p>Если нужная модель, голова, торс или аксессуар отсутствует в каталоге, покупатель может отправить менеджеру Moon-Doll ссылку, фотографию или описание товара.</p><div className="moon-compact-list">{missingProductChecks.map((item) => <span key={item}>{item}</span>)}</div><div className="notice">Наличие товара у производителя и возможность его заказа не гарантируются до подтверждения менеджером.</div></section>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Каналы связи</p><h2>Контакты</h2></div><p>Перед оплатой сохраните переписку и подтверждённые условия заказа.</p></div>
            <div className="moon-contact-grid">
              <a href="https://t.me/jackymoondoll" target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть Telegram менеджера Moon-Doll в новой вкладке"><span>Telegram</span><strong>@jackymoondoll</strong><small>Открыть</small></a>
              <a href="mailto:sales@moon-doll.com" target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Moon-Doll по электронной почте"><span>E-mail</span><strong>sales@moon-doll.com</strong><small>Написать</small></a>
              <a href="https://wa.me/601126685168" target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть WhatsApp Moon-Doll в новой вкладке"><span>WhatsApp</span><strong>+60 11-2668 5168</strong><small>Открыть</small></a>
              <a href={storeUrl} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Moon-Doll в новой вкладке"><span>Официальный сайт</span><strong>moon-doll.com</strong><small>Перейти</small></a>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Чек-лист покупателя</p><h2>Что уточнить у менеджера</h2></div><p>Получите ответы по всем применимым пунктам до оплаты заказа.</p></div>
            <ol className="moon-manager-checklist">{managerChecklist.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
          </div>
        </section>

        <section className="section">
          <div className="container"><div className="moon-gallery-placeholder"><span aria-hidden="true">✦</span><p className="eyebrow">Будущее обновление</p><h2>Галерея и иллюстрации магазина</h2><p>Визуальные материалы будут добавлены после проверки источников и прав на использование.</p></div></div>
        </section>

        <section className="section alt">
          <div className="container"><div className="moon-disclaimer"><p className="eyebrow">Справочная информация · 18+</p><h2>Важное предупреждение</h2><p>Anime Dolls World публикует информацию о Moon-Doll исключительно в справочных целях.</p><ul><li>Сайт не является продавцом.</li><li>Не принимает оплату.</li><li>Не участвует в оформлении заказа.</li><li>Не является стороной сделки.</li><li>Не отвечает за действия магазина или производителя.</li><li>Не несёт ответственности за изготовление, доставку, сроки, таможню и дополнительные расходы.</li><li>Не гарантирует актуальность цен, акций, подарков и условий покупки.</li></ul><p>Все сведения о комплектации, оплате, сроках, возврате, доставке и дополнительных расходах покупатель уточняет непосредственно у Moon-Doll до оплаты.</p><p><strong>Тематика страницы относится к товарам для совершеннолетней аудитории.</strong></p></div></div>
        </section>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
    </>
  );
}
