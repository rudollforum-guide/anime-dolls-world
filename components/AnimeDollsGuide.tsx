import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { siteConfig } from "@/data/site";

const materials = [
  ["TPE", "Обычный TPE используется несколькими производителями. Свойства зависят от конкретного состава."],
  ["Силикон", "Используется как для тел, так и для голов. Мягкость, плотность и конструкция различаются между производителями."],
  ["S-TPE", "S-TPE — фирменное обозначение Irokebijin. В карточках отдельных моделей также встречается название Super Soft Platinum TPE. Это не универсальный отраслевой стандарт."],
  ["STPE", "STPE — обозначение, используемое Croissant Doll для отдельных тел и моделей. Его состав и свойства необходимо уточнять по конкретной позиции; STPE нельзя автоматически приравнивать к S-TPE других производителей."],
  ["HSS", "Обозначение Irokebijin — Hyper Soft Silicone."],
  ["ALM", "Обозначение, используемое Croissant Doll. Состав нельзя расшифровывать самостоятельно, если производитель его не раскрывает."],
] as const;

const faceFeatures = [
  ["Сменные головы", "Многие бренды предлагают несколько голов для совместимых тел."],
  ["Сменные глаза", "Цвет, рисунок радужки и форма глаз могут быть частью конфигурации."],
  ["Ручной макияж", "Используется, например, Aotume Doll и Croissant Doll."],
  ["Decal-макияж", "Отдельный вариант у Croissant Doll с более повторяемым каталоговым образом."],
  ["Следящий взгляд", "У Aotume Doll официально заявлена функция eye tracking / tracking eyes. Это визуальная особенность глаз, а не электронная система."],
  ["Электронные глаза", "Elsa Babe предлагает Anime Electronic Eyes как отдельную опцию для части аниме-моделей."],
] as const;

const construction = ["металлические каркасы", "регулируемые плечи", "проволочные пальцы", "артикулированные пальцы", "стоячие стопы", "съёмные головы", "подставки", "различная подвижность суставов"];

const technologies = [
  { name: "Aotume Doll", features: ["Следящие глаза", "Кастомизация персонажа", "Сменные глаза", "Ручной макияж"] },
  { name: "Elsa Babe", features: ["Anime Electronic Eyes", "AI Voice Function", "Articulated Fingers", "Материал и мягкость тела — по конкретной модели", "Gel Butt"] },
  { name: "Irokebijin", features: ["S-TPE", "HSS Silicone", "Сменные головы", "Большой выбор глаз", "3D View", "Проверка подлинности"] },
  { name: "Croissant Doll", features: ["Ручной / decal-макияж", "STPE / ALM / Silicone", "Изменение формы глаз и рта", "Regular / Advanced / Exhibition Grade", "Индивидуальная одежда и парики"] },
  { name: "MozuDoll", features: ["Несколько размерных серий", "Сменные головы", "Кастомизация макияжа", "Оригинальная одежда", "Angel Body", "Авторские и игровые коллаборации"] },
  { name: "MRL Doll", features: ["Anime 1.0", "Anime 3.0", "TPE и Platinum Silicone", "Персонажные скульптуры", "Авторские коллаборации"] },
];

const mainBrands = [
  { slug: "aotume-doll", name: "Aotume Doll", text: "Производитель аниме-моделей из TPE и силикона с акцентом на настройку персонажного образа. Для отдельных голов заявлены следящий взгляд и ручной макияж.", tags: ["TPE / силикон", "следящие глаза", "ручной макияж", "кастомизация"] },
  { slug: "bc-doll", name: "BC Doll", text: "В каталоге представлены миниатюрные и полноразмерные аниме-модели, торсы и отдельные головы. Материал и конструкцию необходимо сверять для выбранной позиции.", tags: ["силикон", "PU-головы", "мини и полный размер", "подвижный каркас"] },
  { slug: "butterfly-doll", name: "Butterfly Doll", text: "Производитель с отдельным аниме-направлением и широким диапазоном тел. Доступные материалы и параметры зависят от конкретной серии.", tags: ["TPE / силикон", "аниме-линейка", "разные тела", "OEM / ODM"] },
  { slug: "croissant-doll", name: "Croissant Doll", text: "Бренд оригинальных аниме-персонажей с несколькими вариантами материалов и глубокой настройкой образа. Предлагаются ручной и decal-макияж.", tags: ["STPE / ALM / силикон", "два типа макияжа", "кастомизация", "оригинальные персонажи"] },
  { slug: "elsa-babe", name: "Elsa Babe", text: "Производитель с большим выбором голов и тел, включая аниме-серии. Для части моделей доступны электронные глаза и дополнительные электронные функции.", tags: ["Platinum Silicone / TPE", "Electronic Eyes", "AI Voice", "выбор голов и тел"] },
  { slug: "irokebijin", name: "Irokebijin", text: "Аниме-бренд со сменными головами, выбором глаз и широким диапазоном роста. В каталоге используются собственные обозначения S-TPE и HSS.", tags: ["S-TPE / HSS", "сменные головы", "выбор глаз", "3D View"] },
  { slug: "mozudoll", name: "MozuDoll", text: "Бренд с компактными и полноразмерными сериями, оригинальной одеждой и персонажными коллаборациями. Материалы и опции различаются между телами.", tags: ["несколько серий", "сменные головы", "силикон / TPE / MTPE", "Angel Body"] },
  { slug: "mrl-doll", name: "MRL Doll", text: "Производитель компактных и более крупных персонажных моделей серий Anime 1.0 и Anime 3.0. В линейках встречаются TPE и Platinum Silicone.", tags: ["Anime 1.0 / 3.0", "TPE / Platinum Silicone", "персонажные модели", "коллаборации"] },
];

const additionalBrands = [
  { slug: "climaxdoll", name: "ClimaxDoll", text: "В текущем официальном каталоге выделен раздел Anime & Fantasy Doll. J-Series сочетает силиконовые тела и виниловые головы, а Si60 / Si70 относятся к компактным fantasy- и стилизованным моделям." },
  { slug: "fu-doll", name: "FU Doll / Fudoll", text: "В Anime Dolls World бренд относится к производителям с отдельными стилизованными моделями. Характеристики следует проверять для каждой конкретной позиции." },
  { slug: "rosretty-doll", name: "Rosretty Doll", text: "В каталоге встречаются отдельные стилизованные и cosplay-направления. Их характеристики нельзя автоматически переносить на весь ассортимент бренда." },
  { slug: "wm-doll", name: "WM Doll", text: "Крупный производитель с отдельными стилизованными моделями. Заявленное брендом AI-направление нельзя связывать с конкретной аниме-моделью без подтверждения." },
  { slug: "yearndoll", name: "Yearndoll", text: "Информация о моделях доступна преимущественно через дилеров. Материалы и технологии необходимо подтверждать для конкретной позиции." },
];

const checklist = ["определить нужный визуальный стиль", "выбрать оригинального или готового персонажа", "проверить рост и массу", "уточнить материал головы и тела", "проверить совместимость головы", "выбрать тип глаз", "уточнить вариант макияжа", "проверить парик и одежду", "изучить каркас", "уточнить конструкцию пальцев", "проверить стоячие стопы", "зафиксировать комплектацию", "уточнить электронные функции", "изучить правила ухода", "запросить реальные фотографии перед отправкой"];

export function AnimeDollsGuide() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Аниме-куклы: бренды, материалы и технологии",
    description: "Полноразмерные аниме-куклы примерно 140–170+ см: TPE, S-TPE, STPE, силикон, фирменные мягкие формуляции, бренды, головы, каркасы и кастомизация.",
    url: `${siteConfig.url}/anime-dolls/`,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.url },
  };

  return <>
    <PageHero className="anime-dolls-page-hero" backgroundImage="/images/anime-dolls/anime-dolls-hero.png" eyebrow="Аниме-направление" title="Аниме-куклы" description="Стилизованные полноразмерные модели из TPE и силикона, включая отдельные более мягкие формуляции материалов, оригинальные персонажи и образы по мотивам игр, аниме и манги. Основной акцент Anime Dolls World — ростовые модели примерно 140–170+ см." crumbs={[{ label: "Аниме-куклы" }]} />
    <article className="anime-guide">
      <section className="section"><div className="container anime-intro"><div><p className="eyebrow">Общее направление</p><h2>Что такое аниме-куклы</h2><p>Аниме-куклы отличаются не только крупными глазами и стилизованными чертами лица. Современные производители используют разные подходы к переносу двухмерного персонажа в физическую форму: ручной и decal-макияж, сменные головы и глаза, персонажные парики, специальные пропорции тела, готовые костюмы и индивидуальную кастомизацию.</p><p>В каталогах производителей также встречаются компактные модели, торсы и отдельные головы. Они сохраняются в обзорах для полноты информации о брендах, но не являются главным направлением Anime Dolls World.</p></div><div className="anime-intro-list"><h3>В каталогах встречаются</h3><ul>{["оригинальные персонажи производителей", "классические аниме-образы", "модели по мотивам игр, аниме и манги", "кастомные проекты по изображениям заказчика", "компактные коллекционные модели", "полноразмерные модели", "торсы и отдельные головы"].map(item=><li key={item}>{item}</li>)}</ul></div><aside className="anime-note">Наличие конкретного персонажа или образа может меняться. Права на персонажей и статус официальной лицензии необходимо проверять отдельно.</aside></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Основа модели</p><h2>Материалы</h2></div><p>Одинаковые обозначения не гарантируют одинаковые свойства у разных производителей.</p></div><div className="anime-material-grid">{materials.map(([title,text])=><section key={title}><span>{title}</span><p>{text}</p></section>)}</div><div className="anime-conclusion">Название материала само по себе не показывает качество модели. Учитывайте конкретное тело, голову, массу, каркас и правила ухода.</div></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Главный акцент образа</p><h2>Головы, глаза и макияж</h2></div><p>Именно лицо создаёт основную аниме-стилизацию, а способы её реализации заметно различаются.</p></div><div className="anime-feature-grid">{faceFeatures.map(([title,text])=><section key={title}><span aria-hidden="true" /><h3>{title}</h3><p>{text}</p></section>)}</div><div className="anime-warning"><strong>Важно об Irokebijin</strong><p>Для бренда подтверждены сменные головы, выбор глаз и варианты радужки. Следящие глаза не указаны здесь как подтверждённая характеристика без официального источника.</p></div></div></section>

      <section className="section alt"><div className="container anime-construction"><div><p className="eyebrow">Механика модели</p><h2>Каркас и позирование</h2><p>Аниме-внешность не определяет конструкцию тела. Каркас, диапазон суставов и опции позирования необходимо проверять для конкретной модели, не перенося одну характеристику на весь бренд.</p></div><ul>{construction.map(item=><li key={item}>{item}</li>)}</ul></div></section>

      <section className="section anime-tech-section"><div className="container"><div className="section-head"><div><p className="eyebrow">Разные подходы</p><h2>Необычные технологии и модификации</h2></div><p>Подборка заявленных брендами особенностей — без предположений о моделях, для которых они не подтверждены.</p></div><div className="anime-tech-grid">{technologies.map(item=><section key={item.name}><h3>{item.name}</h3><div className="anime-tags">{item.features.map(feature=><span key={feature}>{feature}</span>)}</div></section>)}</div></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Ключевые производители</p><h2>Основные аниме-бренды</h2></div><p>Краткие ориентиры для сравнения. Полные сведения и оговорки собраны в персональных профилях.</p></div><div className="anime-brand-grid">{mainBrands.map(brand=><article key={brand.slug}><div><p className="anime-brand-index">{String(mainBrands.indexOf(brand)+1).padStart(2,"0")}</p><h3>{brand.name}</h3><p>{brand.text}</p></div><div className="anime-tags">{brand.tags.map(tag=><span key={tag}>{tag}</span>)}</div><Link className="button secondary" href={`/brands/${brand.slug}/`}>Открыть профиль</Link></article>)}</div></div></section>

      <section className="section"><div className="container"><div className="section-head"><div><p className="eyebrow">Отдельные линейки</p><h2>Бренды с отдельными аниме-моделями</h2></div><p>Наличие стилизованной серии не означает, что весь каталог производителя относится к аниме-направлению.</p></div><div className="anime-secondary-grid">{additionalBrands.map(brand=><article key={brand.slug}><h3>{brand.name}</h3><p>{brand.text}</p><Link href={`/brands/${brand.slug}/`} className="text-link">Открыть профиль</Link></article>)}</div></div></section>

      <section className="section alt"><div className="container"><div className="section-head"><div><p className="eyebrow">Перед заказом</p><h2>Как выбирать</h2></div><p>Сначала сравните конкретные параметры модели, затем подтвердите комплектацию и доступность у производителя или продавца.</p></div><ol className="anime-checklist">{checklist.map((item,index)=><li key={item}><span>{String(index+1).padStart(2,"0")}</span>{item}</li>)}</ol><div className="anime-next"><div><p className="eyebrow">Продолжить изучение</p><h2>Следующие шаги</h2></div><div>{[["/brands/","Смотреть все бренды"],["/buying/","Выбор и покупка"],["/care/","Уход"]].map(([href,label],index)=><Link key={href} className={`button ${index===0?"primary":"secondary"}`} href={href}>{label}</Link>)}</div></div></div></section>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
  </>;
}
