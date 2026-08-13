export const brandHeroIconFiles: Record<string, string> = {
  "aotume-doll": "aotume-doll.png",
  "bc-doll": "bc-doll.png",
  "butterfly-doll": "butterfly-doll.png",
  climaxdoll: "climaxdoll.png",
  "croissant-doll": "croissant-doll.png",
  "dolls-castle": "dolls-castle.png",
  "elsa-babe": "elsa-babe.png",
  "fu-doll": "fu-doll.png",
  irokebijin: "irokebijin.png",
  "moonvale-sy-dolls": "moonvale-sy-dolls.png",
  mozudoll: "mozudoll.png",
  "mrl-doll": "mrl-doll.png",
  "rosretty-doll": "rosretty-doll.png",
  "wm-doll": "wm-doll.png",
  yearndoll: "yearndoll.png",
};

export function getBrandHeroIconPath(slug: string) {
  const file = brandHeroIconFiles[slug];
  return file ? `/images/brand-icons/${file}` : undefined;
}
