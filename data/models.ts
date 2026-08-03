export type DollModel = {
  slug: string;
  name: string;
  brand: string;
  category: "anime" | "furry";
  material?: string;
  height?: string;
  weight?: string;
  description: string;
  cover?: string;
  images: string[];
  officialUrl?: string;
};

// Реальные модели будут добавляться после проверки первичных источников.
export const models: DollModel[] = [];
