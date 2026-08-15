import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StoreCard } from "@/components/StoreCard";
import { stores } from "@/data/stores";

export const metadata: Metadata = { title:"Магазины и площадки",description:"Памятки о магазинах и продавцах полноразмерных аниме- и фурри-моделей: материал, комплектация, оплата, доставка и проверка условий заказа.",alternates:{canonical:"/stores/"} };

export default function StoresPage(){return <><PageHero className="stores-page-hero" backgroundImage="/images/stores/stores-hero.webp" eyebrow="Перед покупкой" title="Магазины" description="Магазины и продавцы полноразмерных TPE- и силиконовых аниме- и фурри-моделей. Проверяйте конкретный материал, комплектацию, продавца и доставку до оплаты." crumbs={[{label:"Магазины"}]} /><section className="section"><div className="container store-grid">{stores.map(store=><StoreCard store={store} cta="Читать памятку" key={store.slug} />)}</div></section></>}
