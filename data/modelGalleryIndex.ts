export type GalleryCategory = "anime" | "furry";

export type GalleryIndexItem = {
  id: string;
  name: string;
  details?: string;
  brandName: string;
  brandSlug: string;
  category: GalleryCategory;
  folder: string;
  primaryImage: string;
  brandHref: string;
};

type GalleryGroup = {
  brandName: string;
  brandSlug: string;
  category: GalleryCategory;
  galleryRoot: string;
  models: ReadonlyArray<{
    name: string;
    details?: string;
    folder: string;
    primaryPhoto: string;
  }>;
};

// Compact discovery index derived from the existing BrandModelGallery arrays.
// It stores only fields needed by /gallery/ and references the original image paths.
const galleryGroups: readonly GalleryGroup[] = [
  {
    brandSlug: "aotume-doll",
    brandName: "Aotume Doll",
    category: "anime",
    galleryRoot: "/images/brands/aotume-doll/gallery",
    models: [
      { name: "Kamado Nezuko", details: "Head #47", folder: "kamado-nezuko", primaryPhoto: "01.jpg" },
      { name: "Yami", details: "Head #113", folder: "145cm-yami", primaryPhoto: "01.jpg" },
      { name: "C.C.", details: "Head #35", folder: "cc", primaryPhoto: "01.jpg" },
      { name: "Albedo", details: "Head #33", folder: "155cm-albedo", primaryPhoto: "01.jpg" },
      { name: "Kakudate Karin", details: "Head #64", folder: "kakudate-karin", primaryPhoto: "01.jpg" },
      { name: "Makise Kurisu", details: "Head #77", folder: "155cm-makise-kurisu", primaryPhoto: "01.webp" },
      { name: "Yor Forger", details: "Head #87", folder: "155cm-yor-forger", primaryPhoto: "01.jpg" },
      { name: "Fiona Frost", details: "Head #91", folder: "155cm-fiona-frost", primaryPhoto: "01.jpg" },
      { name: "Saigyouji Yuyuko", details: "Head #101", folder: "saigouji-yuuko", primaryPhoto: "01.webp" },
      { name: "IJN Owari", details: "Head #105", folder: "155cm-ijn-owari", primaryPhoto: "01.jpg" },
      { name: "St. Louis", details: "Head #111", folder: "155cm-st-louis", primaryPhoto: "01.jpg" },
      { name: "Emilia", details: "Head #125", folder: "155cm-emilia", primaryPhoto: "01.webp" },
      { name: "Gouden Leeuw", details: "Head #132", folder: "gouden-leeuw", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "bc-doll",
    brandName: "BC Doll",
    category: "anime",
    galleryRoot: "/images/brands/bc-doll/gallery",
    models: [
      { name: "Frieren", details: "NS146C · N02A", folder: "ns146c-n02a-frieren", primaryPhoto: "01.jpg" },
      { name: "Yamada Kanon", details: "OS155J · O02A", folder: "os155j-o02a-yamada-kanon", primaryPhoto: "01.jpg" },
      { name: "Mitsuri Kanroji", details: "OS155J · O03B", folder: "os155j-o03b-mitsuri-kanroji", primaryPhoto: "01.jpg" },
      { name: "Momo", details: "OS155J · O03C", folder: "os155j-o03c-momo", primaryPhoto: "01.jpg" },
      { name: "Dorothy", details: "OS155J · O04A", folder: "os155j-o04a-dorothy", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "butterfly-doll",
    brandName: "Butterfly Doll",
    category: "anime",
    galleryRoot: "/images/brands/butterfly-doll/gallery",
    models: [
      { name: "Abby", details: "BH-100 · BB140-01 · 140XL", folder: "bh-100-abby-140xl", primaryPhoto: "01.webp" },
      { name: "Mizuko Big", details: "BH-116 · BB140-01 · 140XL", folder: "bh-116-mizuko-big-140xl", primaryPhoto: "01.jpg" },
      { name: "Rion", details: "BH-122 · BB140-01 · 140XL", folder: "bh-122-rion-140xl", primaryPhoto: "01.jpg" },
      { name: "Kaguya", details: "BH-133 · BB150-01 · 150L", folder: "bh-133-kaguya-150l", primaryPhoto: "01.jpg" },
      { name: "Crimson Eyes", details: "BH-134 · BB154-01 · XXL", folder: "bh-134-crimson-eyes-154xxl", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "croissant-doll",
    brandName: "Croissant Doll",
    category: "anime",
    galleryRoot: "/images/brands/croissant-doll/gallery",
    models: [
      { name: "Kitagawa Marin", details: "#B07 · 155P", folder: "kitagawa-marin-155p", primaryPhoto: "01.jpg" },
      { name: "Mythuyu Yukino", details: "#B07 · 155M", folder: "mythuyu-yukino-155m", primaryPhoto: "01.jpg" },
      { name: "Tsukatsuki RIO", details: "#B04 · 168", folder: "tsukatsuki-rio-168", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "elsa-babe",
    brandName: "Elsa Babe",
    category: "anime",
    galleryRoot: "/images/brands/elsa-babe/gallery/anime",
    models: [
      { name: "Suwabe Haruka", details: "AHR023 · 140cm", folder: "140cm-suwabe-haruka", primaryPhoto: "01.jpg" },
      { name: "Miyashiro Chiharu", details: "AHR024 · 148cm", folder: "148cm-miyashiro-chiharu", primaryPhoto: "01.jpg" },
      { name: "Natsuki Asuka", details: "AHR012 · 148cm", folder: "natsuki-asuka-148cm", primaryPhoto: "01.jpg" },
      { name: "Mizuta Nina", details: "AHR019 · 148cm", folder: "mizuta-nina-148cm", primaryPhoto: "01.jpg" },
      { name: "Kaneda Shio", details: "AHR027 · 148cm", folder: "kaneda-shio-148cm", primaryPhoto: "01.jpg" },
      { name: "Itsuki Sango", details: "AHR029 · 148cm", folder: "itsuki-sango-148cm", primaryPhoto: "01.jpg" },
      { name: "Hanasaka Yuka", details: "RAD025 · 148cm", folder: "hanasaka-yuka-148cm", primaryPhoto: "01.jpg" },
      { name: "Utashiro Shiori", details: "RAD028 · 148cm", folder: "utashiro-shiori-148cm", primaryPhoto: "01.jpg" },
      { name: "Mochizuki Rize", details: "RAD045 · 148cm", folder: "mochizuki-rize-148cm", primaryPhoto: "01.jpg" },
      { name: "Kazama Momiji", details: "RAD049 · 148cm", folder: "kazama-momiji-148cm", primaryPhoto: "01.jpg" },
      { name: "Yumeno Ayano", details: "AHR021 · 148cm", folder: "yumeno-ayano-148cm", primaryPhoto: "01.jpg" },
      { name: "Seino Lemon", details: "RAD040 · 151cm L", folder: "151cm-seino", primaryPhoto: "01.jpg" },
      { name: "Kira Chiyuki", details: "RAHC017 · 160cm", folder: "kira-chiyuki-160cm", primaryPhoto: "01.jpg" },
      { name: "Ogata Maika", details: "AHRC032 · 163cm", folder: "163cm-ogata-maika", primaryPhoto: "01.jpg" },
      { name: "Shirai Mino", details: "AHRC033 · 176cm", folder: "176cm-shirai-mino", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "elsa-babe",
    brandName: "Elsa Babe",
    category: "furry",
    galleryRoot: "/images/brands/elsa-babe/gallery/furry",
    models: [
      { name: "Aida Rina", details: "ZHB002 · 150cm", folder: "aida-rina", primaryPhoto: "01.jpg" },
      { name: "Inujima Haruko", details: "ZHB003 · 150cm", folder: "inujima-haruko", primaryPhoto: "01.jpg" },
      { name: "Kako Motoko", details: "AHR007 · 148cm", folder: "kako-motoko", primaryPhoto: "01.jpg" },
      { name: "Morikawa Yuki", details: "ZHB001 · 150cm", folder: "morikawa-yuki", primaryPhoto: "01.jpg" },
      { name: "Nekoha Aya", details: "RAD037 · 148cm", folder: "nekoha-aya", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "irokebijin",
    brandName: "Irokebijin",
    category: "anime",
    galleryRoot: "/images/brands/irokebijin/gallery",
    models: [
      { name: "Abby-Y", details: "148cm L Cup S-TPE", folder: "abby-y-148cm-l-cup-s-tpe", primaryPhoto: "01.jpg" },
      { name: "Abby Set 2", details: "148cm HSS Hyper Soft Silicone", folder: "abby-set-2-148cm-hss", primaryPhoto: "01.jpg" },
      { name: "Kana", details: "148cm HSS Hyper Soft Silicone", folder: "kana-148cm-hss", primaryPhoto: "01.jpg" },
      { name: "Akane", details: "150cm S-TPE", folder: "akane-150cm-s-tpe", primaryPhoto: "01.jpg" },
      { name: "Anna", details: "152cm Medium Breasts S-TPE", folder: "anna-152cm-medium-s-tpe", primaryPhoto: "01.jpg" },
      { name: "Aisa", details: "148cm L Cup S-TPE", folder: "aisa-148cm-l-cup-s-tpe", primaryPhoto: "01.jpg" },
      { name: "Akane", details: "148cm L Cup S-TPE", folder: "akane-148cm-l-cup-s-tpe", primaryPhoto: "01.jpg" },
      { name: "Akane Set 3", details: "148cm HSS Hyper Soft Silicone", folder: "akane-set-3-148cm-hss", primaryPhoto: "01.jpg" },
      { name: "Anna", details: "155cm S-TPE", folder: "anna-155cm-s-tpe", primaryPhoto: "01.jpg" },
      { name: "Mary Set 2", details: "148cm HSS Hyper Soft Silicone", folder: "mary-set-2-148cm-hss", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "kiradols",
    brandName: "Kiradols",
    category: "anime",
    galleryRoot: "/images/brands/kiradols/gallery",
    models: [
      { name: "Tsumugi", details: "#KH003 — DLC006", folder: "150cm-tsumugi", primaryPhoto: "01.png" },
      { name: "Himari", details: "KDA009 / KH002-A / KB155D", folder: "155cm-himari", primaryPhoto: "01.png" },
      { name: "Risa", details: "DLC004 / KH004 / KB155D", folder: "155cm-risa", primaryPhoto: "01.png" },
      { name: "Saori", details: "#KH005 — DLC002", folder: "155cm-saori", primaryPhoto: "01.png" },
      { name: "Umegawa Kurako", details: "#KH001 — DLC001", folder: "155cm-umegawa-kurako", primaryPhoto: "01.png" },
    ],
  },
  {
    brandSlug: "mozudoll",
    brandName: "MozuDoll",
    category: "anime",
    galleryRoot: "/images/brands/mozudoll/gallery",
    models: [
      { name: "Mint", details: "141cm", folder: "141cm-mint", primaryPhoto: "01.jpg" },
      { name: "Spark's", details: "148cm", folder: "148cm-sparks", primaryPhoto: "01.png" },
      { name: "Erin", details: "150cm", folder: "150cm-erin", primaryPhoto: "01.png" },
      { name: "Lilisi", details: "150cm", folder: "150cm-lilisi", primaryPhoto: "01.png" },
      { name: "Kanzaki Sakura", details: "150cm", folder: "150cm-yuichi-hiiragi", primaryPhoto: "01.png" },
    ],
  },
  {
    brandSlug: "moonvale-sy-dolls",
    brandName: "Moonvale Doll / SY Dolls",
    category: "furry",
    galleryRoot: "/images/brands/moonvale-sy-dolls/gallery",
    models: [
      { name: "Lyora", details: "Mo-155cm-Lyora", folder: "155cm-Lyora", primaryPhoto: "01.jpg" },
      { name: "Sorelle", details: "Mo-160cm-Sorelle", folder: "160cm-Sorelle", primaryPhoto: "01.jpg" },
      { name: "Velara", details: "Mo-165cm-Velara", folder: "165cm-Velara", primaryPhoto: "01.jpg" },
      { name: "Cerina", details: "Mo-170cm-Cerina", folder: "170cm-Cerina", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "dolls-castle",
    brandName: "Dolls Castle",
    category: "anime",
    galleryRoot: "/images/brands/dolls-castle/gallery/anime",
    models: [
      { name: "Midna", details: "#SZ6", folder: "130cm-midna", primaryPhoto: "01.jpg" },
      { name: "Bonnie", details: "#SZ23", folder: "167cm-bonnie", primaryPhoto: "01.jpg" },
      { name: "Kirishima Eira", details: "#S11", folder: "178cm-kirishima-eira", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "dolls-castle",
    brandName: "Dolls Castle",
    category: "furry",
    galleryRoot: "/images/brands/dolls-castle/gallery/furry",
    models: [
      { name: "Renamon", details: "#SZ20", folder: "140cm-renamon", primaryPhoto: "01.jpg" },
      { name: "Velkara", details: "#SZ18", folder: "140cm-velkara", primaryPhoto: "01.jpg" },
      { name: "Krystal", details: "#SZ21", folder: "140cm-krystal", primaryPhoto: "01.jpg" },
      { name: "Toriel", details: "#SZ8", folder: "155cm-toriel", primaryPhoto: "01.jpg" },
      { name: "Miriam", details: "#SC1", folder: "162cm-miriam", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "climaxdoll",
    brandName: "ClimaxDoll",
    category: "anime",
    galleryRoot: "/images/brands/climaxdoll/gallery/anime",
    models: [
      { name: "ULW SiF120 Barza", details: "120cm", folder: "120cm-barza", primaryPhoto: "01.webp" },
      { name: "SiQ157 Meru Halloween", details: "157cm", folder: "157cm-meru-halloween", primaryPhoto: "01.jpg" },
      { name: "FD160 Meru", details: "160cm", folder: "160cm-meru", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "climaxdoll",
    brandName: "ClimaxDoll",
    category: "furry",
    galleryRoot: "/images/brands/climaxdoll/gallery/furry",
    models: [
      { name: "Monie", details: "FD141", folder: "141cm-monie", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "fu-doll",
    brandName: "FU Doll",
    category: "anime",
    galleryRoot: "/images/brands/fu-doll/gallery",
    models: [
      { name: "153cm Petite", folder: "153cm-petite", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "rosretty-doll",
    brandName: "Rosretty Doll",
    category: "anime",
    galleryRoot: "/images/brands/rosretty-doll/gallery/anime",
    models: [
      { name: "Sakura", details: "RD-S29-161", folder: "161cm-sakura", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "rosretty-doll",
    brandName: "Rosretty Doll",
    category: "furry",
    galleryRoot: "/images/brands/rosretty-doll/gallery/furry",
    models: [
      { name: "Elena", details: "RD-S32-164", folder: "164cm-elena", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "wm-doll",
    brandName: "WM Doll",
    category: "anime",
    galleryRoot: "/images/brands/wm-doll/gallery",
    models: [
      { name: "Y020", details: "157cm D Cup", folder: "157cm-y020", primaryPhoto: "01.jpg" },
      { name: "Y019", details: "157cm D Cup", folder: "157cm-y019", primaryPhoto: "01.jpg" },
      { name: "Y013", details: "160cm D Cup", folder: "160cm-y013", primaryPhoto: "01.jpg" },
    ],
  },
  {
    brandSlug: "yearndoll",
    brandName: "Yearndoll",
    category: "anime",
    galleryRoot: "/images/brands/yearndoll/gallery",
    models: [
      { name: "LZ01", details: "155cm", folder: "155cm-lz01", primaryPhoto: "01.jpg" },
    ],
  },
];

const sourceGalleryModels: GalleryIndexItem[] = galleryGroups.flatMap((group) =>
  group.models.map((model) => ({
    id: `${group.brandSlug}:${group.category}:${model.folder}`,
    name: model.name,
    ...(model.details ? { details: model.details } : {}),
    brandName: group.brandName,
    brandSlug: group.brandSlug,
    category: group.category,
    folder: model.folder,
    primaryImage: `${group.galleryRoot}/${model.folder}/${model.primaryPhoto}`,
    brandHref: `/brands/${group.brandSlug}/`,
  })),
);

function interleaveByBrand(items: readonly GalleryIndexItem[]) {
  const queues = new Map<string, GalleryIndexItem[]>();
  for (const item of items) {
    const queue = queues.get(item.brandSlug) ?? [];
    queue.push(item);
    queues.set(item.brandSlug, queue);
  }

  const result: GalleryIndexItem[] = [];
  const brandQueues = [...queues.values()];
  for (let index = 0; result.length < items.length; index += 1) {
    for (const queue of brandQueues) {
      if (queue[index]) result.push(queue[index]);
    }
  }
  return result;
}

export const galleryModelIndex = interleaveByBrand(sourceGalleryModels);

export const galleryBrands = [...new Map(
  sourceGalleryModels.map((item) => [item.brandSlug, item.brandName] as const),
)].map(([slug, name]) => ({ slug, name }));

export const galleryCounts = {
  total: sourceGalleryModels.length,
  anime: sourceGalleryModels.filter((item) => item.category === "anime").length,
  furry: sourceGalleryModels.filter((item) => item.category === "furry").length,
  brands: galleryBrands.length,
} as const;

const homepagePreviewIds = [
  "aotume-doll:anime:kamado-nezuko",
  "moonvale-sy-dolls:furry:160cm-Sorelle",
  "croissant-doll:anime:kitagawa-marin-155p",
  "elsa-babe:furry:nekoha-aya",
  "irokebijin:anime:abby-y-148cm-l-cup-s-tpe",
  "dolls-castle:furry:140cm-krystal",
  "kiradols:anime:155cm-himari",
  "rosretty-doll:anime:161cm-sakura",
] as const;

export const homepageGalleryPreview = homepagePreviewIds
  .map((id) => sourceGalleryModels.find((item) => item.id === id))
  .filter((item): item is GalleryIndexItem => Boolean(item));
