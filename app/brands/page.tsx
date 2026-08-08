import type { Metadata } from "next";
import { BrandDirectory } from "@/components/BrandDirectory";
import { PageHero } from "@/components/PageHero";
import { brands } from "@/data/brands";

export const metadata: Metadata = { title: "Бренды аниме- и фурри-кукол", description: "Каталог производителей аниме- и фурри-кукол с поиском и фильтрами по категориям.", alternates: { canonical: "/brands/" } };

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function BrandsPage() { return <><PageHero className="brands-page-hero" backgroundImage={`${basePath}/images/brands/brands-hero.webp`} eyebrow="Каталог производителей" title="Бренды" description="Проверяемая отправная точка для знакомства с производителями и отдельными стилизованными линейками." crumbs={[{label:"Бренды"}]} /><section className="section"><div className="container"><BrandDirectory brands={brands} /></div></section></>; }
