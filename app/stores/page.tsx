import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StoreCard } from "@/components/StoreCard";
import { stores } from "@/data/stores";

export const metadata: Metadata = { title:"Магазины и площадки",description:"Памятки о магазинах и покупке аниме-кукол через торговые площадки без вымышленных цен и условий.",alternates:{canonical:"/stores/"} };
export default function StoresPage(){return <><PageHero eyebrow="Перед покупкой" title="Магазины" description="Структурированные памятки: что сверить, о чём спросить продавца и какие условия зафиксировать до оплаты." crumbs={[{label:"Магазины"}]} /><section className="section"><div className="container store-grid">{stores.map(store=><StoreCard store={store} cta="Читать памятку" key={store.slug} />)}</div></section></>}
