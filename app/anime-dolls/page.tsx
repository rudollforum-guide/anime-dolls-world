import type { Metadata } from "next";
import { AnimeDollsGuide } from "@/components/AnimeDollsGuide";

export const metadata: Metadata = {
  title: { absolute: "Аниме-куклы: бренды, материалы и технологии | Anime Dolls World" },
  description: "Полноразмерные аниме-куклы примерно 140–170+ см: TPE, S-TPE, STPE, силикон, фирменные мягкие формуляции, бренды, головы, каркасы и кастомизация.",
  alternates: { canonical: "/anime-dolls/" },
  openGraph: {
    title: "Аниме-куклы: бренды, материалы и технологии",
    description: "Полноразмерные аниме-куклы примерно 140–170+ см: материалы, бренды, головы, каркасы и кастомизация.",
    url: "/anime-dolls/",
  },
};

export default function AnimeDollsPage() {
  return <AnimeDollsGuide />;
}
