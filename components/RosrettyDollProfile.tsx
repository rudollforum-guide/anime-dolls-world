import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://www.rosretty.com/";

const catalogSections = [
  "All Products",
  "Best Sellers",
  "New Arrival",
  "BBW Dolls",
  "Celebrity Dolls",
  "Cosplay Dolls",
  "Sex Torsos",
  "Accessories",
] as const;

const characterDirections = [
  ["Anime-эстетика", "Стилизованная подача лица, макияжа и цельного персонажного образа встречается в отдельных позициях."],
  ["Furry / feline", "Звериные и feline-inspired детали представлены точечно и не образуют подтверждённую крупную линейку."],
  ["Cosplay", "Официальный каталог выделяет Cosplay Dolls как отдельную категорию тематических образов."],
  ["Fantasy", "Необычные цвета, уши, костюмы и character-inspired детали формируют отдельные fantasy-концепции."],
] as const;

export function RosrettyDollProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/brands/rosretty-doll/#webpage`,
        url: `${siteConfig.url}/brands/rosretty-doll/`,
        name: "Rosretty Doll — anime, furry и cosplay модели",
        description: "Профиль Rosretty Doll: широкий реалистичный каталог и отдельные anime, furry, cosplay и fantasy-модели.",
        isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
        breadcrumb: { "@id": `${siteConfig.url}/brands/rosretty-doll/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/brands/rosretty-doll/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: "Бренды", item: `${siteConfig.url}/brands/` },
          { "@type": "ListItem", position: 3, name: "Rosretty Doll", item: `${siteConfig.url}/brands/rosretty-doll/` },
        ],
      },
    ],
  };

  return <>
    <section className="page-hero rosretty-brand-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Rosretty Doll" }]} />
        <div className="rosretty-hero-grid">
          <div>
            <p className="eyebrow">Дополнительный anime / furry бренд</p>
            <h1>Rosretty Doll</h1>
            <p className="lede">Широкий каталог реалистичных моделей, в котором также встречаются отдельные anime, furry, cosplay и fantasy-персонажи.</p>
            <p className="rosretty-hero-note">Rosretty не позиционируется здесь как специализированный anime- или furry-производитель.</p>
            <div className="rosretty-tags" aria-label="Направления Rosretty Doll"><span>Realistic catalog</span><span>Anime</span><span>Furry</span><span>Cosplay</span><span>Fantasy</span></div>
            <a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Rosretty Doll в новой вкладке">Официальный сайт</a>
          </div>
          <div className="rosretty-emblem" aria-hidden="true"><span>RR</span><small>Rosretty</small></div>
        </div>
      </div>
    </section>

    <main className="rosretty-brand-profile">
      <section className="section">
        <div className="container rosretty-intro">
          <article className="prose"><p className="eyebrow">Позиционирование</p><h2>О бренде</h2><p>Rosretty — производитель с широким ассортиментом, который не ограничивается anime или furry. Основную часть каталога составляют реалистичные модели, а рядом с ними встречаются отдельные стилизованные, cosplay-, anime/furry- и fantasy-персонажи.</p><p>В Anime Dolls World бренд представлен как дополнительный производитель. Наличие отдельных персонажных образов не означает существование большой официальной Anime Series или Furry Series.</p></article>
          <aside className="rosretty-summary"><p className="eyebrow">Кратко</p><dl><div><dt>Основной каталог</dt><dd>Широкий выбор реалистичных моделей</dd></div><div><dt>Дополнительные направления</dt><dd>Anime · furry · cosplay · fantasy</dd></div><div><dt>Статус</dt><dd>Не специализированный anime/furry-бренд</dd></div></dl></aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container rosretty-elena-panel">
          <div><p className="eyebrow">Пример конкретной модели</p><h2>Anime и furry модели</h2><p>Подтверждённый пример стилизованного направления — <strong>Rosretty Doll 164cm Full Silicone Anime Furry Playful Feline — Elena</strong>.</p><p>Для этой модели в описании указаны рост 164 cm, silicone body + silicone head и anime/furry feline styling. Эти сведения относятся только к Elena и не описывают остальные модели Rosretty.</p></div>
          <aside><strong>Elena</strong><dl><div><dt>Рост</dt><dd>164 cm</dd></div><div><dt>Конструкция</dt><dd>Silicone body + silicone head</dd></div><div><dt>Стилистика</dt><dd>Anime / furry / feline</dd></div></dl><div className="notice">Текущее наличие, комплектацию, вес и доступные опции необходимо проверять в карточке товара или уточнять у производителя.</div></aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Персонажные направления</p><h2>Furry, cosplay и fantasy</h2></div><p>Стилизованные модели составляют отдельные примеры внутри значительно более широкого ассортимента.</p></div>
          <div className="rosretty-character-grid">{characterDirections.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
          <div className="notice rosretty-character-note">Отдельные модели могут сочетать anime, furry и fantasy-эстетику. Это не подтверждает наличие большой самостоятельной furry-линейки или официальную связь образа с лицензированным персонажем.</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Основной каталог</p><h2>Ассортимент Rosretty</h2></div><p>Официальная навигация показывает, что Rosretty значительно шире тематики Anime Dolls World.</p></div>
          <div className="rosretty-catalog-grid">{catalogSections.map(item => <article key={item}><span>{item}</span></article>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container rosretty-material-panel">
          <div><p className="eyebrow">Без универсальных характеристик</p><h2>Материалы</h2><p>Для конкретной модели Elena подтверждены силиконовое тело и силиконовая голова. Это сочетание нельзя переносить на весь каталог: характеристики Rosretty различаются между позициями.</p></div>
          <aside><h3>Проверяйте перед заказом</h3><p>Материал тела и головы, конструкция, вес и доступные опции зависят от конкретной модели. Перед заказом необходимо сверять карточку выбранной позиции.</p></aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container rosretty-reason-panel">
          <div><p className="eyebrow">Роль в справочнике</p><h2>Почему Rosretty есть в Anime Dolls World</h2><p>Rosretty включён не как специализированный anime/furry-производитель, а как дополнительный бренд, у которого встречаются отдельные модели с anime, furry, cosplay и fantasy-эстетикой.</p></div>
          <aside><h3>Что важно учитывать</h3><p>Наличие подтверждённых anime/furry-моделей делает бренд релевантным каталогу, но их долю в общем ассортименте не следует преувеличивать. Оценивайте конкретную карточку, а не бренд целиком.</p></aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, материалы, комплектацию, итоговую стоимость и доставку необходимо подтверждать непосредственно у продавца.</p></div>
          <div className="rosretty-buy-panel">
            <article className="official"><p className="eyebrow">Основной источник</p><h3>Официальный сайт Rosretty</h3><p>Официальный сайт следует использовать для просмотра актуального каталога, категорий и характеристик конкретных моделей.</p><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Rosretty Doll в новой вкладке">Открыть сайт Rosretty</a></article>
            <article><p className="eyebrow">Вариант индивидуального запроса</p><h3>Moon-Doll</h3><p>Если нужной модели Rosretty нет в каталоге Moon-Doll, можно уточнить у менеджера возможность индивидуального заказа.</p><p>Moon-Doll не обозначается как официальный представитель Rosretty; наличие и возможность заказа не гарантируются.</p><Link className="button secondary" href="/stores/moon-doll/">Открыть гид Moon-Doll</Link></article>
            <div className="notice rosretty-buy-notice"><strong>Важно:</strong> Anime Dolls World не является продавцом. Все условия заказа необходимо подтвердить непосредственно у выбранного магазина или производителя.</div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container rosretty-next">
          <div><p className="eyebrow">Продолжить изучение</p><h2>Связанные материалы</h2></div>
          <nav aria-label="Связанные разделы Rosretty Doll"><Link className="button secondary" href="/anime-dolls/">Аниме-куклы</Link><Link className="button secondary" href="/furry-dolls/">Фурри-куклы</Link><Link className="button secondary" href="/buying/">Выбор и покупка</Link><Link className="button secondary" href="/care/">Уход</Link><Link className="button secondary" href="/stores/moon-doll/">Moon-Doll</Link></nav>
        </div>
      </section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
