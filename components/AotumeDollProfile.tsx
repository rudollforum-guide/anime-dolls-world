import { Breadcrumbs } from "@/components/Breadcrumbs";

const officialWebsite = "https://www.aotumedoll.us/";

const featureItems = [
  "Аниме-пропорции тела и лица",
  "Ручной макияж",
  "Сменные и регулируемые глаза",
  "Подбор париков и одежды",
  "Готовые косплей-образы",
  "Индивидуальная кастомизация",
  "TPE, силикон и комбинированные варианты",
  "Модели разного роста",
];

const customizationItems = ["Макияж", "Форма и цвет глаз", "Парик", "Одежда", "Визуальные детали", "Материал", "Подходящее тело"];
const catalogItems = ["Оригинальные аниме-модели", "Игровые персонажи", "Косплей", "Модели разного роста", "Женские модели", "Отдельные андрогинные и мужские направления", "Одежда и аксессуары"];
const checklistItems = ["Тело и голову", "Материал", "Рост и вес", "Цвет кожи", "Глаза", "Парик и одежду", "Каркас кистей", "Дополнительные опции", "Итоговую стоимость", "Сроки изготовления", "Доставку в страну покупателя", "Заводские фотографии"];

export function AotumeDollProfile() {
  return (
    <>
      <section className="page-hero aotume-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Aotume Doll" }]} />
          <div className="aotume-hero-grid">
            <div>
              <p className="eyebrow">Основной аниме-бренд</p>
              <h1>Aotume Doll</h1>
              <p className="lede">Бренд полноразмерных кукол в аниме- и игровом стиле с готовыми образами и индивидуальной кастомизацией персонажей.</p>
              <div className="aotume-tags" aria-label="Основные направления бренда">
                {['Аниме', 'TPE', 'Силикон', 'Кастомизация', 'Косплей'].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a className="button primary aotume-official-link" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Aotume Doll в новой вкладке">Официальный сайт ↗</a>
            </div>
            <div className="aotume-monogram" aria-hidden="true"><span>AO</span><small>Anime character studio</small></div>
          </div>
        </div>
      </section>

      <article className="aotume-profile">
        <section className="section">
          <div className="container aotume-intro-grid">
            <div className="prose aotume-prose">
              <p className="eyebrow">Знакомство с производителем</p>
              <h2>О бренде</h2>
              <p>Aotume Doll — бренд полноразмерных кукол в аниме- и игровом стиле. В каталоге представлены готовые персонажи, оригинальные образы и модели, созданные по мотивам известных аниме и игр.</p>
              <p>Отдельное направление бренда — индивидуальное изготовление персонажа по изображениям и пожеланиям покупателя.</p>
            </div>
            <aside className="aotume-summary-card">
              <p className="eyebrow">Кратко</p>
              <dl>
                <div><dt>Категория</dt><dd>Аниме-бренд</dd></div>
                <div><dt>Материалы</dt><dd>TPE · Силикон · Комбинированные версии</dd></div>
                <div><dt>Направления</dt><dd>Готовые образы · Косплей · Кастомизация</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Конструкция и образ</p><h2>Основные особенности</h2></div><p>Ключевые особенности, заявленные для моделей и вариантов кастомизации Aotume Doll.</p></div>
            <div className="aotume-feature-grid">{featureItems.map((item, index) => <div className="aotume-feature-card" key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Варианты исполнения</p><h2>Материалы</h2></div><p>Состав конкретной модели и совместимость материалов необходимо проверять в её карточке.</p></div>
            <div className="aotume-material-grid">
              <section className="aotume-material-card"><span className="tag">Материал 01</span><h3>TPE</h3><p>По информации производителя, у полностью TPE-версий из TPE изготавливаются тело и голова. Материал позиционируется как мягкий, эластичный и устойчивый к растяжению.</p><p>Макияж наносится вручную специальными пигментами. Глаза можно заменять и регулировать. Внутри расположен многосуставной металлический каркас.</p></section>
              <section className="aotume-material-card featured"><span className="tag">Материал 02</span><h3>Силикон</h3><p>Силиконовые версии производятся с силиконовыми телом и головой. Производитель сообщает о многослойном ручном макияже с фиксацией и сменных регулируемых глазах.</p><p>У большинства размеров заявлено мягкое гелевое наполнение груди.</p></section>
              <section className="aotume-material-card"><span className="tag">Материал 03</span><h3>Комбинированные версии</h3><p>В каталоге встречаются модели с силиконовой головой и TPE-телом.</p><p>Доступность такого сочетания зависит от конкретной модели.</p></section>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container aotume-two-column">
            <section className="aotume-content-card"><p className="eyebrow">Детали образа</p><h2>Внешность и макияж</h2><p>Aotume Doll указывает, что макияж наносится вручную. Для моделей используются аниме-глаза, парики, костюмы и характерные детали персонажей.</p><p>Также представлены улучшенные парики и отдельные варианты формованных причёсок.</p></section>
            <section className="aotume-content-card"><p className="eyebrow">Подвижность</p><h2>Каркас и позирование</h2><p>Внутри используется многосуставной металлический каркас. Для некоторых конфигураций могут быть доступны разные варианты каркаса кистей и пальцев.</p><p>Возможности позирования и доступные опции необходимо проверять в карточке конкретной модели.</p></section>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="aotume-custom-card">
              <div><p className="eyebrow">Персонаж по вашему образцу</p><h2>Индивидуальная кастомизация</h2><p>Aotume Doll предлагает создание образа по изображениям аниме-персонажа, игрового персонажа или собственному дизайну.</p><p>Возможность реализации, стоимость и сроки рассчитываются индивидуально.</p></div>
              <div className="aotume-option-list">{customizationItems.map((item) => <span key={item}>{item}</span>)}</div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Ассортимент</p><h2>Направления каталога</h2></div><p>Доступность конкретных персонажей, размеров и аксессуаров следует проверять в актуальном каталоге.</p></div>
            <div className="aotume-catalog-grid">{catalogItems.map((item) => <div key={item}><span aria-hidden="true">◇</span><p>{item}</p></div>)}</div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="aotume-gallery-placeholder"><span aria-hidden="true">✦</span><p className="eyebrow">Будущее обновление</p><h2>Галерея моделей</h2><p>Галерея моделей Aotume Doll будет добавлена позже</p></div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, комплектацию и условия заказа необходимо подтверждать непосредственно у выбранного магазина или производителя.</p></div>
            <div className="aotume-purchase-stack">
              <section className="aotume-purchase-card aotume-moon-card">
                <div className="aotume-recommendation-label">Для русскоязычной аудитории</div>
                <div className="aotume-moon-layout">
                  <div>
                    <p className="eyebrow">Вариант покупки для России</p><h3>Moon-Doll</h3>
                    <p>Для покупателей из России одним из вариантов заказа является международный магазин Moon-Doll.</p>
                    <p>В магазине представлены куклы разных брендов, включая модели в аниме-стиле. Если нужной модели Aotume Doll нет в каталоге, возможность её заказа можно уточнить у менеджера Moon-Doll по ссылке, фотографии или названию модели.</p>
                    <a className="button primary aotume-store-button" href="https://www.moon-doll.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть сайт Moon-Doll в новой вкладке">Перейти в Moon-Doll ↗</a>
                  </div>
                  <div className="aotume-store-checks"><strong>Перед заказом уточните</strong><ul><li>Наличие нужной модели</li><li>Материал и комплектацию</li><li>Итоговую цену</li><li>Вес</li><li>Сроки изготовления</li><li>Условия доставки в Россию</li><li>Доступные способы оплаты</li></ul></div>
                </div>
              </section>
              <section className="aotume-purchase-card aotume-official-card">
                <p className="eyebrow">Официальный источник</p><h3>Официальный сайт Aotume Doll</h3>
                <p>Официальный сайт бренда можно использовать для просмотра каталога, характеристик и доступных вариантов кастомизации.</p>
                <dl><div><dt>Сайт</dt><dd><a href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Aotume Doll в новой вкладке">www.aotumedoll.us ↗</a></dd></div><div><dt>Контакт бренда</dt><dd><a href="mailto:aotume.us@gmail.com" target="_blank" rel="noopener noreferrer nofollow" aria-label="Написать Aotume Doll по электронной почте">aotume.us@gmail.com ↗</a></dd></div></dl>
                <p className="aotume-source-note">Условия прямой доставки в Россию необходимо уточнять у Aotume Doll заранее.</p>
              </section>
            </div>
            <section className="aotume-purchase-card aotume-delivery-card">
              <p className="eyebrow">Логистика</p><h2>Доставка</h2><p>На официальном сайте указаны отслеживаемая доставка и перевозчики UPS, FedEx, DHL и EMS. Опубликованы ориентировочные сроки около 20–30 рабочих дней, но индивидуальные заказы и таможня могут увеличить срок.</p>
              <div className="notice aotume-shipping-warning"><strong>Важно перед оплатой</strong>Anime Dolls World не является продавцом и не участвует в оформлении заказа. Наличие моделей Aotume Doll, комплектацию, итоговую стоимость, способы оплаты и доставку необходимо подтверждать непосредственно у выбранного магазина или производителя.</div>
            </section>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head"><div><p className="eyebrow">Чек-лист покупателя</p><h2>Что проверить перед заказом</h2></div><p>Зафиксируйте выбранную комплектацию и подтверждения производителя до оплаты.</p></div>
            <ol className="aotume-checklist">{checklistItems.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>)}</ol>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="aotume-disclaimer">
              <p className="eyebrow">Независимый справочник</p><h2>Дисклеймер</h2><p>Anime Dolls World публикует информацию об Aotume Doll исключительно в справочных целях.</p>
              <ul><li>Сайт не является продавцом или представителем бренда.</li><li>Не принимает оплату.</li><li>Не участвует в оформлении заказа.</li><li>Не гарантирует наличие моделей и опций.</li><li>Не отвечает за изготовление, доставку, таможню и возврат.</li></ul>
              <p><strong>Все условия необходимо подтверждать непосредственно у производителя до оплаты.</strong></p>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
