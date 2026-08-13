import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
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
