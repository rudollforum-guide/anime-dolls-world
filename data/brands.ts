export type BrandCategory = "anime" | "furry" | "anime-line" | "furry-line";

export type Brand = {
  slug: string;
  name: string;
  categories: BrandCategory[];
  website?: string;
  summary: string;
  description?: string;
  materials: string[];
  modelTypes: string[];
};

export const categoryLabels: Record<BrandCategory, string> = {
  anime: "Аниме",
  furry: "Фурри",
  "anime-line": "Аниме-линейки",
  "furry-line": "Фурри-линейки",
};

const placeholder = {
  materials: ["Информация уточняется у производителя"],
  modelTypes: ["Каталог моделей обновляется"],
};

export const brands: Brand[] = [
  { slug: "aotume-doll", name: "Aotume Doll", categories: ["anime"], website: "https://www.aotumedoll.us/", summary: "Производитель полноразмерных аниме-моделей из TPE, силикона и комбинированных материалов с настройкой персонажного образа.", ...placeholder },
  { slug: "bc-doll", name: "BC Doll", categories: ["anime"], website: "https://bcdolls.com/", summary: "Бренд, в каталоге которого представлены модели с аниме-эстетикой.", ...placeholder },
  { slug: "butterfly-doll", name: "Butterfly Doll", categories: ["anime"], website: "https://butterflydoll.com.cn/", summary: "Производитель с коллекциями кукол в стилизованной аниме-эстетике.", ...placeholder },
  { slug: "croissant-doll", name: "Croissant Doll", categories: ["anime"], website: "https://croissantdoll.com", summary: "Бренд аниме-кукол; актуальный состав коллекций следует проверять на официальном сайте.", ...placeholder },
  { slug: "elsa-babe", name: "Elsa Babe", categories: ["anime", "furry-line"], website: "https://elsababedoll.com/", summary: "Бренд со стилизованными аниме-моделями и отдельными фантазийными линейками.", ...placeholder },
  { slug: "irokebijin", name: "Irokebijin", categories: ["anime"], website: "https://www.irokebijinshop.com/", summary: "Магазин и бренд моделей, оформленных в современной аниме-стилистике.", ...placeholder },
  { slug: "mozudoll", name: "MozuDoll", categories: ["anime"], website: "https://mozudollna.com/", summary: "Бренд с моделями, вдохновлёнными японской поп-культурой и аниме-образами.", ...placeholder },
  { slug: "mrl-doll", name: "MRL Doll", categories: ["anime"], website: "https://www.mrlsexdoll.com/", summary: "Производитель, предлагающий в том числе стилизованные аниме-модели.", ...placeholder },
  { slug: "moonvale-sy-dolls", name: "Moonvale / SY Dolls", categories: ["furry"], website: "https://sydolls.com/collections/moonvale-doll", summary: "Фантазийная линейка SY Dolls с антропоморфными персонажами.", description: "Moonvale Doll — отдельная furry- и fantasy-линейка SY Dolls, ориентированная на антропоморфных и фантазийных персонажей. В центре коллекции — звериные и мифические образы, включая лис, леопардов, пантер и другие fantasy-концепции. Особое внимание уделяется уникальному дизайну персонажей, стилизованным головам, выразительным визуальным особенностям и целостной проработке образа. Благодаря сочетанию anime-style пластики с furry- и fantasy-эстетикой Moonvale занимает отдельную нишу среди коллекционных персонажей.", ...placeholder },
  { slug: "dolls-castle", name: "Dolls Castle", categories: ["furry-line"], website: "https://www.dolls-castle.com/", summary: "Производитель стилизованных фантазийных и антропоморфных кукол.", ...placeholder },
  { slug: "climaxdoll", name: "ClimaxDoll", categories: ["anime-line"], website: "https://www.climax-doll.com/", summary: "Производитель, в широком каталоге которого встречаются отдельные аниме-модели.", ...placeholder },
  { slug: "fu-doll", name: "FU Doll / Fudoll", categories: ["anime-line"], website: "https://fu-doll.com/", summary: "Бренд с различными направлениями, включая отдельные стилизованные модели.", ...placeholder },
  { slug: "rosretty-doll", name: "Rosretty Doll", categories: ["anime-line", "furry-line"], website: "https://rosretty.com/", summary: "Производитель с широким реалистичным каталогом и отдельными anime-, furry-, cosplay- и fantasy-моделями.", ...placeholder },
  { slug: "wm-doll", name: "WM Doll", categories: ["anime-line"], website: "https://www.wmdolls.com/", summary: "Крупный производитель с отдельными стилизованными моделями в ассортименте.", ...placeholder },
  { slug: "yearndoll", name: "Yearndoll", categories: ["anime-line"], summary: "Информация о моделях бренда доступна через дилеров; официальный адрес пока не указан.", ...placeholder },
];

export const getBrand = (slug: string) => brands.find((brand) => brand.slug === slug);
