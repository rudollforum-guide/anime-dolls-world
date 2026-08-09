import type { Metadata } from "next";
import { AnimeDollsGuide } from "@/components/AnimeDollsGuide";

export const metadata: Metadata = {
  title: { absolute: "Аниме-куклы: бренды, материалы и технологии | Anime Dolls World" },
  description: "Обзор аниме-кукол: основные бренды, TPE и силикон, S-TPE, HSS, сменные головы, следящие и электронные глаза, AI-функции и особенности кастомизации.",
  alternates: { canonical: "/anime-dolls/" },
  openGraph: {
    title: "Аниме-куклы: бренды, материалы и технологии",
    description: "Основные аниме-бренды, материалы, головы, глаза, каркасы и особенности кастомизации.",
    url: "/anime-dolls/",
  },
};

export default function AnimeDollsPage() {
  return <AnimeDollsGuide />;
}
