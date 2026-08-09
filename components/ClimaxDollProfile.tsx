import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { siteConfig } from "@/data/site";

const officialWebsite = "https://www.climax-doll.com/";

const si60Variants = ["XS", "S", "M", "L", "X", "XL", "XXL", "H"] as const;
const si70Variants = ["AT", "AR", "LB", "MK", "GB", "SP", "KA"] as const;
const jVariants = ["J58", "J59", "J60", "J60 XS", "J60 P", "J85 B"] as const;

const visualDirections = [
  ["Anime-inspired персонажи", "Стилизованные лица и образная подача, ориентированная на визуальный язык аниме."],
  ["Fantasy-дизайн", "Фантазийные темы, необычные персонажи и выразительные детали концепции."],
  ["Цвет и образ", "В каталоге встречаются нестандартные цветовые решения и тематические сочетания."],
  ["Character-oriented эстетика", "Костюм, причёска и общий образ могут формировать cosplay- или character-inspired подачу."],
] as const;

const reasons = [
  ["Несколько направлений", "Climax Doll одновременно развивает классические и стилизованные категории; anime/fantasy — отдельная часть более широкого каталога."],
  ["Отдельная категория", "Anime & Fantasy Doll прямо выделена на официальном сайте как самостоятельное направление."],
  ["Компактные серии", "В направлении представлены J-Series, Si60 и Si70 с несколькими вариантами внутри каждой серии."],
  ["Конструкция J-Series", "Для этой серии производитель указывает сочетание силиконового тела и виниловой головы."],
] as const;

export function ClimaxDollProfile() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/brands/climaxdoll/#webpage`,
        url: `${siteConfig.url}/brands/climaxdoll/`,
        name: "Climax Doll — аниме и fantasy куклы, серии J, Si60 и Si70",
        description: "Профиль Climax Doll: направление Anime & Fantasy, серии J, Si60 и Si70, материалы и официальный источник.",
        isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
        breadcrumb: { "@id": `${siteConfig.url}/brands/climaxdoll/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${siteConfig.url}/brands/climaxdoll/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Главная", item: `${siteConfig.url}/` },
          { "@type": "ListItem", position: 2, name: "Бренды", item: `${siteConfig.url}/brands/` },
          { "@type": "ListItem", position: 3, name: "Climax Doll", item: `${siteConfig.url}/brands/climaxdoll/` },
        ],
      },
    ],
  };

  return <>
    <section className="page-hero climax-brand-hero">
      <div className="container">
        <Breadcrumbs items={[{ label: "Бренды", href: "/brands/" }, { label: "Climax Doll" }]} />
        <div className="climax-hero-grid">
          <div>
            <p className="eyebrow">Anime & Fantasy Doll</p>
            <h1>Climax Doll</h1>
            <p className="lede">Отдельное anime- и fantasy-направление Climax Doll / CLM с сериями J, Si60 и Si70.</p>
            <p className="climax-hero-note">Общий ассортимент производителя значительно шире и включает другие типы кукол; эта страница сосредоточена на стилизованных персонажах.</p>
            <div className="climax-tags" aria-label="Серии Climax Doll Anime & Fantasy">
              {['J-Series', 'Si60', 'Si70', 'Anime & Fantasy'].map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Climax Doll в новой вкладке">Официальный сайт</a>
          </div>
          <div className="climax-emblem" aria-hidden="true"><span>CLM</span><small>Climax Doll</small></div>
        </div>
      </div>
    </section>

    <main className="climax-brand-profile">
      <section className="section">
        <div className="container climax-intro">
          <article className="prose">
            <p className="eyebrow">Профиль производителя</p>
            <h2>О бренде</h2>
            <p>Climax Doll / CLM — производитель с несколькими направлениями. На официальном сайте отдельно выделена категория <strong>Anime & Fantasy Doll</strong>, которой посвящён этот профиль Anime Dolls World.</p>
            <p>Anime- и fantasy-модели составляют только часть ассортимента Climax Doll. В других разделах представлены классические полноразмерные и компактные модели, торсы и разные сочетания материалов, поэтому характеристики соседних категорий нельзя автоматически переносить на стилизованные серии.</p>
          </article>
          <aside className="climax-summary">
            <p className="eyebrow">Кратко</p>
            <dl>
              <div><dt>Производитель</dt><dd>Climax Doll / CLM</dd></div>
              <div><dt>Направление</dt><dd>Anime & Fantasy Doll</dd></div>
              <div><dt>Основные серии</dt><dd>J-Series · Si60 · Si70</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container climax-direction-panel">
          <div><p className="eyebrow">Отдельная категория</p><h2>Anime & Fantasy</h2><p>Официальный сайт Climax Doll прямо выделяет Anime & Fantasy Doll как самостоятельное направление. В нём представлены J-Series, Si60 Series и Si70 Series.</p><p>Такое деление помогает отделить персонажные и fantasy-inspired модели от более широкого каталога бренда. Оно не означает, что весь ассортимент Climax Doll относится к anime.</p></div>
          <aside><strong>Три основные серии</strong><div className="climax-series-chips">{['J-Series', 'Si60 Series', 'Si70 Series'].map(series => <span key={series}>{series}</span>)}</div></aside>
        </div>
      </section>

      <section className="section">
        <div className="container climax-j-panel">
          <div><p className="eyebrow">Anime & Fantasy</p><h2>J-Series</h2><p>J-Series входит в направление Anime & Fantasy. Для серии производитель указывает конструкцию <strong>silicone body + vinyl head</strong>: силиконовое тело сочетается с виниловой головой.</p><p>Такое сочетание описывает конструкцию серии без оценки её преимуществ. Материал головы и тела, совместимость, опции и комплектацию всё равно следует сверять в карточке выбранной позиции.</p></div>
          <aside><h3>Варианты в каталоге</h3><div className="climax-variant-list">{jVariants.map(item => <span key={item}>{item}</span>)}</div><div className="notice">Перечень отражает варианты, встречающиеся в текущем официальном каталоге. Он не означает, что все прошлые или будущие J-модели имеют полностью одинаковую конструкцию.</div></aside>
        </div>
      </section>

      <section className="section alt">
        <div className="container climax-series-grid">
          <article><p className="eyebrow">Компактная серия</p><h2>Si60 Series</h2><p>Si60 — компактная серия, представленная на официальном сайте в Anime & Fantasy / fantasy-направлении. В текущем каталоге встречаются разные обозначения вариантов.</p><div className="climax-variant-list">{si60Variants.map(item => <span key={item}>Si60 {item}</span>)}</div><div className="notice">Параметры тела, вес, конструкцию и доступные опции необходимо проверять на странице конкретной модели.</div></article>
          <article><p className="eyebrow">Fantasy-inspired серия</p><h2>Si70 Series</h2><p>Si70 также представлена в Anime & Fantasy направлении. Официальный сайт описывает Si60 и Si70 как серии с fantasy-inspired стилем.</p><div className="climax-variant-list">{si70Variants.map(item => <span key={item}>Si70 {item}</span>)}</div><div className="notice">Названия вариантов служат навигацией по каталогу и сами по себе не определяют материалы, вес или комплектацию.</div></article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Стилистика персонажей</p><h2>Anime, fantasy и необычные персонажи</h2></div><p>Официальный каталог показывает fantasy-персонажей и тематические модели с выраженной персонажной подачей.</p></div>
          <div className="climax-visual-grid">{visualDirections.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container climax-material-panel">
          <div><p className="eyebrow">Проверенные сведения</p><h2>Материалы и конструкция</h2><p>Для J-Series официальный сайт указывает силиконовые тела и виниловые головы. В других разделах Climax Doll существуют силиконовые, TPE- и гибридные варианты, но это не определяет материал каждой anime- или fantasy-модели.</p></div>
          <aside><h3>Проверяйте для выбранной позиции</h3><p>Материал, конструкция головы, скелет и доступные опции зависят от конкретной серии и модели. Перед заказом необходимо сверять карточку выбранной позиции.</p><div className="notice">ULW, EVO Skeleton, articulated fingers, gel butt и другие технологии нельзя переносить на anime-серии без прямого подтверждения для конкретной модели.</div></aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Место в каталоге</p><h2>Почему Climax Doll интересен</h2></div><p>Интерес создаёт сочетание широкого каталога с отдельно оформленным персонажным направлением.</p></div>
          <div className="climax-why-grid">{reasons.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <div className="section-head"><div><p className="eyebrow">Варианты заказа</p><h2>Где купить</h2></div><p>Наличие, характеристики, комплектацию, итоговую стоимость и доставку необходимо подтверждать непосредственно у выбранного продавца.</p></div>
          <div className="climax-buy-panel">
            <article className="official"><p className="eyebrow">Официальный источник</p><h3>Официальный сайт Climax Doll</h3><p>Официальный сайт можно использовать для просмотра актуального каталога Anime & Fantasy, серий, характеристик конкретных моделей и доступных вариантов комплектации.</p><a className="button primary" href={officialWebsite} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть официальный сайт Climax Doll в новой вкладке">Открыть официальный сайт</a></article>
            <article><p className="eyebrow">Вариант уточнения заказа</p><h3>Moon-Doll</h3><p>Если нужная модель Climax Doll отсутствует в каталоге Moon-Doll, можно уточнить у менеджера возможность индивидуального заказа.</p><p>Moon-Doll не обозначается здесь как официальный представитель Climax Doll, а возможность заказа и наличие необходимо подтверждать отдельно.</p><Link className="button secondary" href="/stores/moon-doll/">Открыть гид Moon-Doll</Link></article>
            <div className="notice climax-buy-notice"><strong>Важно:</strong> Anime Dolls World не является продавцом и не участвует в оформлении заказа. Возможность заказа, наличие, комплектацию, стоимость, оплату и доставку необходимо подтвердить непосредственно у продавца.</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container climax-next">
          <div><p className="eyebrow">Продолжить изучение</p><h2>Практические материалы</h2><p>Сравните стилизованные направления, подготовьтесь к заказу и заранее изучите правила ухода.</p></div>
          <nav aria-label="Связанные разделы Climax Doll"><Link className="button secondary" href="/anime-dolls/">Об аниме-куклах</Link><Link className="button secondary" href="/buying/">Выбор и покупка</Link><Link className="button secondary" href="/care/">Уход</Link><Link className="button secondary" href="/stores/moon-doll/">Moon-Doll</Link></nav>
        </div>
      </section>
    </main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  </>;
}
