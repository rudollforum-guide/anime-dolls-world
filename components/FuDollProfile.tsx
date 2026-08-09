import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/site";

const officialCatalog = "https://fu-doll.com/product/";

const catalogDirections = [
  ["Silicone Dolls", "Раздел моделей из силикона; характеристики проверяются в карточке выбранной позиции."],
  ["Hybrid Dolls", "Гибридные сочетания материалов и конструкций, которые различаются между моделями."],
  ["Torso Dolls", "Отдельная категория компактных форматов торса."],
  ["Single Heads", "Самостоятельные головы для изменения образа совместимой модели."],
  ["BBW и Skinny", "Категории с разными пропорциями и типами тел."],
  ["Ростовые категории", "Каталог позволяет выбирать модели разных размеров и форматов."],
] as const;

const stylizedFeatures = [
  ["Stylized модели", "Аниме-подобные лица и более условная персонажная подача встречаются точечно, а не как отдельная крупная серия."],
  ["Fantasy-персонажи", "В официальном каталоге встречаются фантазийные образы, включая отдельную модель с образом fantasy elf."],
  ["Cosplay-эстетика", "Некоторые позиции строятся вокруг тематического костюма, макияжа и цельного персонажного образа."],
] as const;

export function FuDollProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/brands/fu-doll/#webpage`,
        url: `${siteConfig.url}/brands/fu-doll/`,
        name: "FU Doll — stylized, fantasy и отдельные anime-модели",
        description: "Профиль FU Doll: реалистичный основной каталог и отдельные stylized, fantasy и cosplay-персонажи.",
        isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
        breadcrumb: { "@id": `${siteConfig.url}/brands/fu-doll/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/brands/fu-doll/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: "Бренды", item: `${siteConfig.url}/brands/` },
          { "@type": "ListItem", position: 3, name: "FU Doll", item: `${siteConfig.url}/brands/fu-doll/` },
        ],
      },
    ],
  };

  return <>
    <section className="page-hero fu-brand-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "FU Doll" }]} />
        <div className="fu-hero-grid">
          <div>
            <p className="eyebrow">Дополнительный бренд каталога</p>
            <h1>FU Doll</h1>
            <p className="lede">Производитель с преимущественно реалистичным каталогом, в котором точечно встречаются stylized, fantasy и cosplay-персонажи.</p>
            <p className="fu-hero-note">FU Doll представлен в Anime Dolls World не как специализированный anime-бренд, а как дополнительный источник отдельных стилизованных образов.</p>
            <div className="fu-tags" aria-label="Направления FU Doll"><span>Realistic catalog</span><span>Stylized</span><span>Fantasy</span><span>Cosplay</span></div>
            <a className="button primary" href={officialCatalog} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный каталог FU Doll в новой вкладке">Официальный каталог</a>
          </div>
          <div className="fu-emblem" aria-hidden="true"><span>FU</span><small>Doll</small></div>
        </div>
      </div>
    </section>

    <main className="fu-brand-profile">
      <section className="section">
        <div className="container fu-intro">
          <article className="prose">
            <p className="eyebrow">Позиционирование</p>
            <h2>О бренде</h2>
            <p>FU Doll — производитель с широким каталогом, основную часть которого составляют реалистичные модели. Наряду с ними в ассортименте встречаются отдельные fantasy-, cosplay- и стилизованные персонажи.</p>
            <p>Поэтому бренд включён в Anime Dolls World как дополнительный производитель. Это не означает, что FU Doll специализируется на anime dolls или что весь его каталог относится к персонажному направлению.</p>
          </article>
          <aside className="fu-summary"><p className="eyebrow">Кратко</p><dl><div><dt>Основной каталог</dt><dd>Преимущественно реалистичные модели</dd></div><div><dt>Для Anime Dolls World</dt><dd>Отдельные stylized, fantasy и cosplay-образы</dd></div><div><dt>Статус</dt><dd>Дополнительный, не специализированный anime-бренд</dd></div></dl></aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container fu-direction-grid">
          <article><p className="eyebrow">Точечные позиции</p><h2>Anime и stylized модели</h2><p>Аниме-подобные и стилизованные модели встречаются в каталоге точечно. Отдельной большой Anime Series на официальном сайте не выделено.</p><p>При поиске таких персонажей следует ориентироваться на конкретную голову, макияж, костюм и описание отдельного товара, а не на название общей категории бренда.</p></article>
          <article><p className="eyebrow">Тематические образы</p><h2>Fantasy и cosplay</h2><p>Официальный каталог включает fantasy- и cosplay-направления: фантазийных персонажей, тематические костюмы и необычные персонажные дизайны.</p><p>Подтверждённый пример — отдельная fantasy elf модель. Её характеристики относятся только к этой позиции и не описывают остальные модели FU Doll.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Широкий основной каталог</p><h2>Ассортимент FU Doll</h2></div><p>Структура официального каталога показывает, что бренд значительно шире отдельных stylized-персонажей.</p></div>
          <div className="fu-catalog-grid">{catalogDirections.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container fu-material-grid">
          <article><p className="eyebrow">Проверка карточки товара</p><h2>Материалы</h2><p>На официальном сайте есть silicone dolls, hybrid dolls и отдельные головы. Конкретное сочетание материалов и конструкция зависят от выбранной модели.</p><div className="notice">Материал тела, головы, скелет и доступные опции необходимо проверять в карточке конкретной модели.</div><p>Наличие определённого материала в общем каталоге не подтверждает его использование в конкретной stylized- или fantasy-позиции.</p></article>
          <article><p className="eyebrow">Изменение персонажа</p><h2>Головы и изменение образа</h2><p>FU Doll продаёт Single Heads. Отдельная голова может изменить внешний образ совместимой модели, но это не означает универсальную совместимость всех голов и тел.</p><p>Перед заказом необходимо подтвердить у производителя тип соединения, подходящее тело, материал головы и состав комплекта.</p></article>
        </div>
      </section>

      <section className="section">
        <div className="container fu-reason-panel">
          <div><p className="eyebrow">Роль в каталоге</p><h2>Почему FU Doll есть в Anime Dolls World</h2><p>FU Doll включён в каталог не как специализированный anime-бренд, а как дополнительный производитель, у которого периодически появляются stylized, fantasy и cosplay-персонажи.</p></div>
          <aside><h3>Как оценивать модель</h3><div className="fu-feature-list">{stylizedFeatures.map(([title, text]) => <article key={title}><strong>{title}</strong><p>{text}</p></article>)}</div></aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, материалы, комплектацию, итоговую стоимость и доставку необходимо подтверждать непосредственно у продавца.</p></div>
          <div className="fu-buy-panel">
            <article className="official"><p className="eyebrow">Основной источник</p><h3>Официальный каталог FU Doll</h3><p>Официальный каталог следует использовать для просмотра актуальных моделей, характеристик конкретных позиций и доступных вариантов комплектации.</p><a className="button primary" href={officialCatalog} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный каталог FU Doll в новой вкладке">Открыть каталог FU Doll</a></article>
            <article><p className="eyebrow">Вариант уточнения заказа</p><h3>Moon-Doll</h3><p>Если нужной модели FU Doll нет в каталоге Moon-Doll, можно уточнить у менеджера возможность индивидуального заказа.</p><p>Moon-Doll не обозначается здесь как официальный представитель FU Doll; наличие и возможность заказа не гарантируются.</p><Link className="button secondary" href="/stores/moon-doll/">Открыть гид Moon-Doll</Link></article>
            <div className="notice fu-buy-notice"><strong>Важно:</strong> Anime Dolls World не является продавцом. Все условия заказа необходимо подтвердить непосредственно у выбранного магазина или производителя.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container fu-next">
          <div><p className="eyebrow">Продолжить изучение</p><h2>Полезные разделы</h2></div>
          <nav aria-label="Связанные разделы FU Doll"><Link className="button secondary" href="/anime-dolls/">Об аниме-куклах</Link><Link className="button secondary" href="/buying/">Выбор и покупка</Link><Link className="button secondary" href="/care/">Уход</Link><Link className="button secondary" href="/stores/moon-doll/">Moon-Doll</Link></nav>
        </div>
      </section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
