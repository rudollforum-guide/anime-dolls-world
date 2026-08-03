export type BrandCategory = "anime" | "furry" | "anime-line";

export type Brand = {
  slug: string;
  name: string;
  categories: BrandCategory[];
  website?: string;
  summary: string;
  materials: string[];
  modelTypes: string[];
};

export const categoryLabels: Record<BrandCategory, string> = {
  anime: "Основные аниме-бренды",
  furry: "Фурри-бренды и линейки",
  "anime-line": "Бренды с отдельными аниме-моделями",
};

const placeholder = {
  materials: ["Информация уточняется у производителя"],
  modelTypes: ["Каталог моделей обновляется"],
};

export const brands: Brand[] = [
  { slug: "aotume-doll", name: "Aotume Doll", categories: ["anime"], website: "https://www.aotumedoll.us/", summary: "Производитель кукол с отдельным направлением моделей в аниме-стилистике.", ...placeholder },
  { slug: "bc-doll", name: "BC Doll", categories: ["anime"], website: "https://bcdolls.com/", summary: "Бренд, в каталоге которого представлены модели с аниме-эстетикой.", ...placeholder },
  { slug: "butterfly-doll", name: "Butterfly Doll", categories: ["anime"], website: "https://butterflydoll.com.cn/", summary: "Производитель с коллекциями кукол в стилизованной аниме-эстетике.", ...placeholder },
  { slug: "croissant-doll", name: "Croissant Doll", categories: ["anime"], website: "https://croissantdoll.com", summary: "Бренд аниме-кукол; актуальный состав коллекций следует проверять на официальном сайте.", ...placeholder },
  { slug: "elsa-babe", name: "Elsa Babe", categories: ["anime", "furry"], website: "https://elsababedoll.com/", summary: "Бренд со стилизованными аниме-моделями и отдельными фантазийными линейками.", ...placeholder },
  { slug: "irokebijin", name: "Irokebijin", categories: ["anime"], website: "https://www.irokebijinshop.com/", summary: "Магазин и бренд моделей, оформленных в современной аниме-стилистике.", ...placeholder },
  { slug: "mozudoll", name: "MozuDoll", categories: ["anime"], website: "https://mozudollna.com/", summary: "Бренд с моделями, вдохновлёнными японской поп-культурой и аниме-образами.", ...placeholder },
  { slug: "mrl-doll", name: "MRL Doll", categories: ["anime"], website: "https://www.mrlsexdoll.com/", summary: "Производитель, предлагающий в том числе стилизованные аниме-модели.", ...placeholder },
  { slug: "moonvale-sy-dolls", name: "Moonvale / SY Dolls", categories: ["furry"], website: "https://sydolls.com/collections/moonvale-doll", summary: "Фантазийная линейка SY Dolls с антропоморфными персонажами.", ...placeholder },
  { slug: "dolls-castle", name: "Dolls Castle", categories: ["furry"], website: "https://www.dolls-castle.com/", summary: "Производитель стилизованных фантазийных и антропоморфных кукол.", ...placeholder },
  { slug: "climaxdoll", name: "ClimaxDoll", categories: ["anime-line"], website: "https://www.climax-doll.com/", summary: "Производитель, в широком каталоге которого встречаются отдельные аниме-модели.", ...placeholder },
  { slug: "fu-doll", name: "FU Doll / Fudoll", categories: ["anime-line"], website: "https://fu-doll.com/", summary: "Бренд с различными направлениями, включая отдельные стилизованные модели.", ...placeholder },
  { slug: "rosretty-doll", name: "Rosretty Doll", categories: ["anime-line"], website: "https://rosretty.com/", summary: "Производитель с отдельными моделями в аниме-стилистике.", ...placeholder },
  { slug: "wm-doll", name: "WM Doll", categories: ["anime-line"], website: "https://www.wmdolls.com/", summary: "Крупный производитель с отдельными стилизованными моделями в ассортименте.", ...placeholder },
  { slug: "yearndoll", name: "Yearndoll", categories: ["anime-line"], summary: "Информация о моделях бренда доступна через дилеров; официальный адрес пока не указан.", ...placeholder },
];

export const getBrand = (slug: string) => brands.find((brand) => brand.slug === slug);
