import type { Metadata } from "next";
import { BrandDirectory } from "@/components/BrandDirectory";
import { PageHero } from "@/components/PageHero";
import { brands } from "@/data/brands";

export const metadata: Metadata = { title: "Бренды аниме- и фурри-кукол", description: "Каталог производителей полноразмерных аниме- и фурри-кукол, ростовых моделей и отдельных стилизованных линеек из TPE, силикона и фирменных материалов.", alternates: { canonical: "/brands/" } };

export default function BrandsPage() { return <><PageHero className="brands-page-hero" backgroundImage="/images/brands/brands-hero.webp" eyebrow="Каталог производителей" title="Бренды" description="Каталог производителей полноразмерных аниме- и фурри-моделей из TPE, силикона и других подтверждённых материалов. Основной фокус — ростовые модели и отдельные стилизованные линейки. У отдельных производителей встречаются S-TPE, STPE, ultra-soft silicone и другие фирменные формуляции." crumbs={[{label:"Бренды"}]} /><section className="section"><div className="container"><BrandDirectory brands={brands} /></div></section></>; }
