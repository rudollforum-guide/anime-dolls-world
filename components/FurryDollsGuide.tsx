import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

const visualElements = ["звериные головы", "увеличенные или нестандартные уши", "морды и изменённая форма лица", "хвосты", "рога", "декоративный мех", "лапы или стилизованные кисти и стопы", "необычные глаза", "персонажные парики", "фантазийная окраска кожи или шерсти"];

const categoryDifferences = [
  ["Нестандартная голова", "Антропоморфные головы могут заметно отличаться от обычных anime- и realistic-голов по форме и соединению."],
  ["Выступающие элементы", "Уши, рога и другие детали требуют осторожной упаковки, хранения и транспортировки."],
  ["Хвосты", "Хвост может быть съёмным или интегрированным. Тип крепления нужно уточнять отдельно."],
  ["Глаза и выражение", "У furry-голов форма глаз и их посадка особенно сильно влияют на образ."],
  ["Декоративные покрытия", "Некоторые модели используют специальные окраски, меховые элементы или сложный макияж."],
  ["Совместимость", "Голова и тело должны проверяться как конкретная совместимая комбинация."],
] as const;

const moonvaleTech = [
  ["Full Silicone", "Текущие Moonvale-модели в официальном каталоге представлены в том числе как full silicone."],
  ["Movable Jaw Head", "Для отдельных моделей, например Sorelle 160 см, производитель указывает голову с подвижной челюстью."],
  ["Standing Feet", "Для проверенной модели Sorelle официально указаны стоячие стопы."],
  ["Metal Alloy Skeleton", "SY Doll описывает внутренний шарнирный металлический каркас для позирования."],
  ["Yoga Skeleton", "SY Doll предлагает отдельную опцию Yoga Skeleton с увеличенной гибкостью и диапазоном поз."],
  ["Interchangeable Heads", "SY Doll заявляет взаимозаменяемость голов и тел внутри своей линейки. Совместимость конкретной комбинации необходимо подтвердить перед заказом."],
] as const;

const moonvaleCharacters = [
  ["Fox", "Лисьи персонажи: Red Fox и White Fox."],
  ["Leopard", "Yellow Leopard и White Leopard."],
  ["Panther", "White Panther и Black Panther."],
  ["Deer / Mythical", "Модели с deer-head и другими fantasy-элементами."],
] as const;

const comparisons = [
  { name: "Moonvale / SY Dolls", points: ["отдельная furry-линейка", "full silicone в текущем каталоге", "fox / leopard / panther / deer персонажи", "расширенные конструктивные опции для отдельных моделей"] },
  { name: "Elsa Babe", points: ["anime + furry", "furry-головы и антропоморфные образы", "широкий выбор тел и голов", "характеристики проверяются индивидуально"] },
  { name: "Dolls Castle", points: ["fantasy / anthropomorphic направление", "демонстрационные галереи ростовых anime- и furry-моделей", "материалы и конструкция проверяются по конкретной позиции"] },
];

const purchaseChecks = ["точное название персонажа", "материал головы", "материал тела", "совместимость головы и тела", "тип соединения головы", "конструкцию ушей", "конструкцию рогов", "крепление хвоста", "съёмные ли декоративные элементы", "наличие меховых деталей", "тип глаз", "возможность замены глаз", "парик", "комплектацию", "массу", "тип каркаса", "стоячие стопы", "тип пальцев", "ограничения позирования", "упаковку выступающих элементов", "заводские фотографии перед отправкой", "правила ухода за окрашенными и декоративными деталями"];

const careChecks = ["можно ли снимать уши, рога и хвост", "как очищать окрашенные поверхности", "можно ли мочить меховые элементы", "как хранить выступающие части", "можно ли класть модель на уши или рога", "есть ли отдельные рекомендации производителя"];

export function FurryDollsGuide() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Фурри-куклы: бренды, материалы и особенности",
    description: "Полноразмерные фурри- и антропоморфные модели: Moonvale, Elsa Babe и Dolls Castle, нестандартные головы, декоративные элементы, материалы, конструкция и выбор.",
    url: `${siteConfig.url}/furry-dolls/`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return <>
    <PageHero className="furry-dolls-page-hero" eyebrow="Фурри-направление" title="Фурри-куклы" description="Полноразмерные антропоморфные и fantasy-модели с нестандартными головами, ушами, хвостами и декоративными элементами. Основной фокус Anime Dolls World — ростовые furry-модели." crumbs={[{ label: "Фурри-куклы" }]} />
    <article className="furry-guide">
      <section className="section"><div className="container furry-intro"><div><p className="eyebrow">Отдельная эстетика</p><h2>Что такое фурри-куклы</h2><p>Фурри-куклы — отдельное направление стилизованных моделей, в котором человеческие пропорции сочетаются с животными или фантазийными чертами.</p><p>В зависимости от производителя и конкретной модели могут использоваться силикон, TPE и другие подтверждённые формуляции материалов.</p><aside>Furry не является единым техническим стандартом. У разных производителей под этим термином могут подразумеваться очень разные конструкции.</aside></div><div><h3>В дизайне могут использоваться</h3><ul>{visualElements.map(item=><li key={item}>{item}</li>)}</ul></div></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Конструктивные отличия</p><h2>Почему эта категория отличается</h2></div><p>Форма персонажа влияет на совместимость деталей, обращение, упаковку и правила ухода.</p></div><div className="furry-difference-grid">{categoryDifferences.map(([title,text])=><section key={title}><span aria-hidden="true" /><h3>{title}</h3><p>{text}</p></section>)}</div></div></section>

      <section className="section furry-moonvale-section"><div className="container"><div className="furry-moonvale-hero"><div><p className="eyebrow">Главное furry-направление</p><h2>Moonvale Doll / SY Dolls</h2><p>Moonvale — отдельная премиальная линейка SY Doll, посвящённая fantasy-inspired и антропоморфным персонажам.</p><div className="furry-tags">{["Red Fox", "White Fox", "Yellow Leopard", "White Leopard", "White Panther", "Black Panther", "Deer-Head"].map(tag=><span key={tag}>{tag}</span>)}</div><Link className="button primary" href="/brands/moonvale-sy-dolls/">Открыть профиль Moonvale</Link></div><aside><span>155</span><span>160</span><span>165</span><span>170</span><p>Рост в сантиметрах, встречающийся в текущем официальном каталоге. Ассортимент и размеры могут меняться.</p></aside></div></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Moonvale / SY Dolls</p><h2>Материал и конструкция</h2></div><p>Характеристики относятся только к тем моделям и опциям, для которых они указаны производителем.</p></div><div className="furry-tech-grid">{moonvaleTech.map(([title,text])=><section key={title}><span>{title}</span><p>{text}</p></section>)}</div><div className="furry-caution">Не переносите характеристики Sorelle или другой отдельной модели автоматически на весь каталог Moonvale.</div></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Fantasy bestiary</p><h2>Типы персонажей Moonvale</h2></div><p>Часть моделей сочетает furry-элементы с anime-style эстетикой.</p></div><div className="furry-character-grid">{moonvaleCharacters.map(([title,text],index)=><section key={title}><span>{String(index+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></section>)}</div></div></section>

      <section className="section alt"><div className="container furry-brand-pair"><article className="furry-elsa-card"><p className="eyebrow">Anime + furry</p><h2>Elsa Babe</h2><p>Elsa Babe — прежде всего крупный anime-бренд, но официальный каталог включает отдельное направление Furry Dolls.</p><div className="furry-tags">{["furry-головы", "антропоморфные образы", "уши и глаза", "парики", "меховые элементы", "аксессуары", "совместимые тела"].map(tag=><span key={tag}>{tag}</span>)}</div><div className="furry-brand-note">Материал зависит от конкретной головы и тела. Совместимость и наличие необходимо проверять отдельно; характеристики обычных anime-моделей нельзя автоматически переносить на furry-модели.</div><Link className="button secondary" href="/brands/elsa-babe/">Открыть профиль Elsa Babe</Link></article><article className="furry-castle-card"><p className="eyebrow">Fantasy / anthropomorphic</p><h2>Dolls Castle</h2><p>Dolls Castle представлен в Anime Dolls World как производитель стилизованных фантазийных и антропоморфных кукол.</p><p>В профиле собраны подтверждённые сведения о направлениях бренда и отдельные демонстрационные галереи ростовых anime- и furry-моделей.</p><aside>Материалы и конструкцию по-прежнему необходимо проверять для каждой конкретной позиции.</aside><Link className="text-link" href="/brands/dolls-castle/">Открыть профиль Dolls Castle</Link></article></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Без рейтинга</p><h2>Сравнение направлений</h2></div><p>Три разных подхода к furry- и антропоморфным моделям.</p></div><div className="furry-compare-grid">{comparisons.map(item=><section key={item.name}><h3>{item.name}</h3><ul>{item.points.map(point=><li key={point}>{point}</li>)}</ul></section>)}</div></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">До оформления заказа</p><h2>Что особенно проверять</h2></div><p>Выступающие и декоративные элементы требуют более подробного согласования, чем стандартная комплектация.</p></div><ol className="furry-checklist">{purchaseChecks.map((item,index)=><li key={item}><span>{String(index+1).padStart(2,"0")}</span>{item}</li>)}</ol></div></section>

      <section className="section"><div className="container furry-care"><div><p className="eyebrow">Материал и декор</p><h2>Особенности ухода</h2><p>Фурри-модели требуют внимания не только к материалу тела, но и к декоративным элементам.</p><Link className="button secondary" href="/care/">Перейти к разделу ухода</Link></div><ul>{careChecks.map(item=><li key={item}>{item}</li>)}</ul></div></section>

      <section className="section alt"><div className="container furry-market"><div><p className="eyebrow">Развивающееся направление</p><h2>Почему рынок пока небольшой</h2><p>На рынке полноразмерных стилизованных кукол furry-направление пока представлено меньшим числом специализированных производителей, чем anime-направление.</p><p>Сложная форма голов, ушей, хвостов и других деталей требует отдельного дизайна, форм и решений по транспортировке. Moonvale служит примером активно развивающейся отдельной furry-линейки, но не рассматривается как рейтинг или безусловная рекомендация.</p></div><span aria-hidden="true">MV</span></div></section>

      <section className="section"><div className="container furry-next"><div><p className="eyebrow">Продолжить изучение</p><h2>Бренды и практические разделы</h2></div><div>{[["/brands/moonvale-sy-dolls/","Moonvale / SY Dolls"],["/brands/elsa-babe/","Elsa Babe"],["/brands/dolls-castle/","Dolls Castle"],["/brands/","Все бренды"],["/buying/","Выбор и покупка"],["/care/","Уход"]].map(([href,label],index)=><Link key={href} className={`button ${index===0?"primary":"secondary"}`} href={href}>{label}</Link>)}</div></div></section>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
  </>;
}
