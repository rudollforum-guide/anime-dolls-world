import type { Metadata } from "next";
import { FurryDollsGuide } from "@/components/FurryDollsGuide";

export const metadata: Metadata = {
  title: { absolute: "Фурри-куклы: бренды, материалы и особенности | Anime Dolls World" },
  description: "Полноразмерные фурри- и антропоморфные модели: Moonvale, Elsa Babe и Dolls Castle, нестандартные головы, декоративные элементы, материалы, конструкция и выбор.",
  alternates: { canonical: "/furry-dolls/" },
  openGraph: {
    title: "Фурри-куклы: бренды, материалы и особенности",
    description: "Полноразмерные фурри-модели Moonvale, Elsa Babe и Dolls Castle: образы, материалы, конструкция и выбор.",
    url: "/furry-dolls/",
  },
};

export default function FurryDollsPage() {
  return <FurryDollsGuide />;
}
