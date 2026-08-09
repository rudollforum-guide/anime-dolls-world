import type { Metadata } from "next";
import { FurryDollsGuide } from "@/components/FurryDollsGuide";

export const metadata: Metadata = {
  title: { absolute: "Фурри-куклы: бренды, материалы и особенности | Anime Dolls World" },
  description: "Обзор фурри- и антропоморфных кукол: Moonvale Doll, Elsa Babe, Dolls Castle, силиконовые модели, звериные головы, уши, хвосты, каркасы и особенности выбора.",
  alternates: { canonical: "/furry-dolls/" },
  openGraph: {
    title: "Фурри-куклы: бренды, материалы и особенности",
    description: "Moonvale Doll, Elsa Babe и Dolls Castle: антропоморфные образы, конструкция, совместимость и выбор.",
    url: "/furry-dolls/",
  },
};

export default function FurryDollsPage() {
  return <FurryDollsGuide />;
}
