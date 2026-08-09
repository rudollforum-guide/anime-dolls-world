import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://www.wmdolls.com/";
const officialStore = "https://wmdollshop.com/";

const catalogDirections = [
  ["TPE Dolls", "Исторически важное для WM Doll направление; материал конкретной модели всегда проверяется отдельно."],
  ["Silicone dolls", "Отдельные силиконовые позиции присутствуют в официальном магазине производителя."],
  ["Hybrid Doll", "Категория моделей с комбинированной конструкцией, параметры которой зависят от выбранной позиции."],
  ["Torso", "Компактный формат внутри широкого основного каталога WM Doll."],
  ["Accessories", "Дополнительные товары и опции, состав которых следует уточнять перед заказом."],
  ["Realistic", "Заметная часть каталога, показывающая основное позиционирование бренда за пределами anime-эстетики."],
] as const;

export function WMDollProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/brands/wm-doll/#webpage`,
        url: `${siteConfig.url}/brands/wm-doll/`,
        name: "WM Doll — отдельные anime и stylized модели",
        description: "WM Doll — крупный производитель с широким каталогом, в котором также встречаются отдельные stylized и anime-like модели.",
        isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
        breadcrumb: { "@id": `${siteConfig.url}/brands/wm-doll/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/brands/wm-doll/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: "Бренды", item: `${siteConfig.url}/brands/` },
          { "@type": "ListItem", position: 3, name: "WM Doll", item: `${siteConfig.url}/brands/wm-doll/` },
        ],
      },
    ],
  };

  return <>
    <section className="page-hero wm-brand-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "WM Doll" }]} />
        <div className="wm-hero-grid">
          <div>
            <p className="eyebrow">Дополнительный бренд каталога</p>
            <h1>WM Doll</h1>
            <p className="lede">Крупный производитель с широким ассортиментом, в котором отдельные stylized и anime-like персонажи встречаются как дополнительное направление.</p>
            <p className="wm-hero-note">WM Doll не является специализированным anime-брендом: выбирать стилизованную модель следует по конкретной голове, макияжу и карточке товара.</p>
            <div className="wm-tags" aria-label="Направления WM Doll"><span>Аниме-линейки</span><span>TPE</span><span>Silicone</span><span>Hybrid</span><span>Realistic catalog</span></div>
            <a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт WM Doll в новой вкладке">Официальный сайт</a>
          </div>
          <div className="wm-emblem" aria-hidden="true"><span>WM</span><small>Doll</small></div>
        </div>
      </div>
    </section>

    <main className="wm-brand-profile">
      <section className="section">
        <div className="container wm-intro">
          <article className="prose"><p className="eyebrow">Позиционирование</p><h2>О бренде</h2><p>WM Doll — крупный производитель с широким ассортиментом, исторически известный прежде всего работой с TPE-моделями. Каталог не ограничивается стилизованными персонажами и включает значительно больше реалистичных позиций и форматов.</p><p>Anime-like модели составляют дополнительную часть ассортимента. Поэтому WM Doll представлен в Anime Dolls World не как anime-производитель, а как источник отдельных стилизованных образов.</p></article>
          <aside className="wm-summary"><p className="eyebrow">Кратко</p><dl><div><dt>Основной каталог</dt><dd>Широкий ассортимент разных форматов</dd></div><div><dt>Для Anime Dolls World</dt><dd>Отдельные stylized и anime-like модели</dd></div><div><dt>Категория</dt><dd>Аниме-линейки</dd></div></dl></aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container wm-two-column">
          <article><p className="eyebrow">Точечные позиции</p><h2>Anime и stylized модели</h2><p>Стилизованные и anime-like персонажи у WM Doll встречаются точечно. Отдельная крупная Anime Series в текущей навигации официального сайта не выделена.</p><p>При поиске такого образа необходимо оценивать конкретную голову, макияж, пропорции, дизайн и описание выбранного товара, а не весь бренд целиком.</p></article>
          <article><p className="eyebrow">Основное позиционирование</p><h2>Широкий ассортимент WM Doll</h2><p>Официальный магазин показывает большой выбор реалистичных моделей, разные типы тел, голов и форматов. В навигации представлены TPE Dolls, Silicone dolls, Hybrid Doll, Torso, Accessories и Realistic.</p><p>Эта структура отличает WM Doll от брендов, для которых anime-эстетика является самостоятельной центральной специализацией.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="container"><div className="section-head"><div><p className="eyebrow">Структура официального магазина</p><h2>Направления каталога</h2></div><p>Категории показывают широту ассортимента, но не задают одинаковые характеристики для всех моделей.</p></div><div className="wm-catalog-grid">{catalogDirections.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      </section>

      <section className="section alt">
        <div className="container wm-material-grid">
          <article><p className="eyebrow">История материалов</p><h2>TPE и материалы</h2><p>Официальный сайт связывает историю WM Doll с развитием моделей из TPE. При этом в актуальном магазине представлены и другие направления, поэтому нельзя утверждать, что все модели бренда изготовлены из одного материала.</p><div className="notice">Материал тела и головы, конструкция, скелет и доступные опции зависят от конкретной модели. Перед заказом необходимо сверять карточку выбранной позиции.</div></article>
          <article className="wm-ai-card"><p className="eyebrow">Современное направление</p><h2>AI</h2><p>Производитель заявляет интерес к развитию AI-направления и переходу к новому технологическому этапу.</p><p>Это заявление не описывает конкретные функции и не означает автоматической связи AI с anime-like моделями. Возможности нужно подтверждать по отдельным официальным материалам.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="container wm-reason-panel"><div><p className="eyebrow">Роль в справочнике</p><h2>Почему WM Doll есть в Anime Dolls World</h2><p>WM Doll включён в каталог Anime Dolls World не как специализированный anime-бренд, а как крупный производитель, в ассортименте которого встречаются отдельные стилизованные и anime-like модели.</p></div><aside><strong>Оценивайте конкретную позицию</strong><p>Дизайн головы, макияж, материал, конструкцию и комплект следует проверять для выбранной модели отдельно.</p></aside></div>
      </section>

      <section className="section alt">
        <div className="container"><div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, комплектацию, итоговую стоимость, способы оплаты и доставку необходимо подтверждать непосредственно у продавца.</p></div><div className="wm-buy-panel">
          <article className="official"><p className="eyebrow">Основной источник</p><h3>Официальный сайт WM Doll</h3><p>Официальный адрес WM Doll служит отправной точкой бренда и ведёт к магазину производителя на wmdollshop.com, где размещены каталог и характеристики конкретных моделей.</p><div className="wm-buy-actions"><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт WM Doll в новой вкладке">Открыть сайт WM Doll</a><a className="button secondary" href={officialStore} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный магазин WM Doll в новой вкладке">Открыть каталог производителя</a></div></article>
          <article><p className="eyebrow">Вариант индивидуального запроса</p><h3>Moon-Doll</h3><p>Если нужной модели WM Doll нет в каталоге Moon-Doll, можно уточнить у менеджера возможность индивидуального заказа.</p><p>Moon-Doll не обозначается как официальный представитель WM Doll; наличие полного ассортимента и возможность заказа не гарантируются.</p><Link className="button secondary" href="/stores/moon-doll/">Открыть гид Moon-Doll</Link></article>
          <div className="notice wm-buy-notice"><strong>Важно:</strong> Anime Dolls World не является продавцом. Условия заказа необходимо подтвердить у выбранного магазина или производителя.</div>
        </div></div>
      </section>

      <section className="section">
        <div className="container wm-next"><div><p className="eyebrow">Продолжить изучение</p><h2>Связанные материалы</h2></div><nav aria-label="Связанные разделы WM Doll"><Link className="button secondary" href="/anime-dolls/">Аниме-куклы</Link><Link className="button secondary" href="/buying/">Выбор и покупка</Link><Link className="button secondary" href="/care/">Уход</Link><Link className="button secondary" href="/stores/moon-doll/">Moon-Doll</Link></nav></div>
      </section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
