import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrandProfileIcon } from "@/components/BrandProfileIcon";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://kiradols.com/";

const productionStages = [
  ["3D-дизайн", "Форма персонажа начинается с цифровой проработки скульпта и визуального образа."],
  ["Создание форм", "Подготовка форм связывает цифровой дизайн с дальнейшим производственным процессом."],
  ["Производство", "Следующий этап охватывает изготовление полноразмерной модели."],
  ["Оформление образа", "Финальная подача объединяет внешний вид модели и персонажную стилизацию."],
  ["Глаза", "Подбор глаз участвует в формировании узнаваемого аниме-образа."],
  ["Парики", "Причёска дополняет дизайн конкретного персонажа."],
  ["Одежда", "Костюм завершает визуальную концепцию модели."],
] as const;

export function KiradolsProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/brands/kiradols/#webpage`,
        url: `${siteConfig.url}/brands/kiradols/`,
        name: "Kiradols — полноразмерные силиконовые аниме-модели",
        description: "Kiradols — производитель полноразмерных силиконовых аниме-моделей с персонажными 3D-скульптами, ростовыми телами и собственным производственным процессом.",
        isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
        breadcrumb: { "@id": `${siteConfig.url}/brands/kiradols/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/brands/kiradols/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: "Бренды", item: `${siteConfig.url}/brands/` },
          { "@type": "ListItem", position: 3, name: "Kiradols", item: `${siteConfig.url}/brands/kiradols/` },
        ],
      },
    ],
  };

  return (
    <>
      <section className="page-hero aotume-hero">
        <div className="container">
          <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Kiradols" }]} />
          <div className="aotume-hero-grid">
            <div>
              <p className="eyebrow">Аниме</p>
              <h1>Kiradols</h1>
              <p className="lede">Kiradols — производитель полноразмерных силиконовых аниме-моделей, ориентированный на персонажные 3D-скульпты, производственный процесс и ростовые форматы.</p>
              <div className="aotume-tags" aria-label="Основные направления Kiradols">
                {['Аниме', 'Silicone', '3D-дизайн', '150–160 cm'].map((tag) => <span key={tag}>{tag}</span>)}
              </div>
              <a className="button primary aotume-official-link" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Kiradols в новой вкладке">Официальный сайт Kiradols</a>
            </div>
            <BrandProfileIcon slug="kiradols" name="Kiradols" />
          </div>
        </div>
      </section>

      <main className="aotume-profile">
        <section className="section">
          <div className="container aotume-intro-grid">
            <article className="prose aotume-prose">
              <p className="eyebrow">Профиль производителя</p>
              <h2>О бренде</h2>
              <p>Kiradols специализируется на полноразмерных силиконовых моделях с выраженной аниме-эстетикой. Бренд создаёт персонажные образы начиная с 3D-дизайна и форм, после чего следует производство модели и оформление с подбором глаз, париков и одежды.</p>
              <p>Перечень этапов описывает опубликованный производственный подход Kiradols. Он не означает без дополнительного подтверждения, что каждый элемент образа обязательно полностью изготавливается внутри одной фабрики.</p>
            </article>
            <aside className="aotume-summary-card">
              <p className="eyebrow">Кратко</p>
              <dl>
                <div><dt>Категория</dt><dd>Специализированный аниме-бренд</dd></div>
                <div><dt>Подтверждённый материал</dt><dd>Silicone</dd></div>
                <div><dt>Опубликованные форматы</dt><dd>Примерно 150–160 cm</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section alt">
          <div className="container aotume-two-column">
            <article className="aotume-content-card">
              <p className="eyebrow">Основная специализация</p>
              <h2>Аниме-направление</h2>
              <p>В отличие от производителей, где аниме-модели составляют отдельную линейку внутри реалистичного каталога, Kiradols изначально ориентирован на персонажную anime-стилизацию.</p>
              <p>Выразительность образа формируют 3D-скульпт, лицо, глаза, парик, одежда и общая визуальная концепция конкретной модели.</p>
            </article>
            <article className="aotume-content-card">
              <p className="eyebrow">Подтверждённое направление</p>
              <h2>Материалы</h2>
              <p>В доступных материалах Kiradols и опубликованных предложениях подтверждаются полноразмерные силиконовые модели.</p>
              <div className="notice">Точный состав силикона, мягкость, конструкцию и доступные опции необходимо проверять для каждой конкретной позиции.</div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="aotume-custom-card">
              <div>
                <p className="eyebrow">Полноразмерный фокус</p>
                <h2>Рост и форматы</h2>
                <p>В опубликованных моделях Kiradols встречаются ростовые тела примерно 150–160 см — диапазон хорошо соответствует основному полноразмерному фокусу Anime Dolls World.</p>
                <p>Это не означает, что полный или будущий каталог бренда ограничен только этим диапазоном.</p>
              </div>
              <div className="aotume-option-list" aria-label="Опубликованный диапазон роста Kiradols">
                <span>Полноразмерные модели</span>
                <span>Примерно 150–160 cm</span>
                <span>Персонажные форматы</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="container">
            <div className="section-head">
              <div><p className="eyebrow">От дизайна к образу</p><h2>Производственный подход</h2></div>
              <p>Этапы отражают опубликованную структуру процесса, но не обозначают уникальную или универсальную технологию для каждой модели.</p>
            </div>
            <div className="aotume-feature-grid">
              {productionStages.map(([title, text], index) => <div className="aotume-feature-card" key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container aotume-two-column">
            <article className="aotume-content-card">
              <p className="eyebrow">Подборка моделей</p>
              <h2>Изображения и характеристики</h2>
              <p>Подборка моделей Kiradols будет добавлена после проверки изображений и характеристик конкретных моделей.</p>
            </article>
            <article className="aotume-content-card">
              <p className="eyebrow">Официальный источник</p>
              <h2>Где смотреть</h2>
              <p>Официальный сайт Kiradols служит отправной точкой для проверки актуального каталога, характеристик и доступности моделей.</p>
              <a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Kiradols в новой вкладке">Официальный сайт Kiradols</a>
              <div className="notice">Если сайт временно недоступен или отдельные страницы плохо индексируются, характеристики следует подтверждать перед заказом по конкретной позиции.</div>
            </article>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
