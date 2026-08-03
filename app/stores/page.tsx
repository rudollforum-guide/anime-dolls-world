import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { stores } from "@/data/stores";

export const metadata: Metadata = { title:"Магазины и площадки",description:"Памятки о магазинах и покупке аниме-кукол через торговые площадки без вымышленных цен и условий.",alternates:{canonical:"/stores/"} };
export default function StoresPage(){return <><PageHero eyebrow="Перед покупкой" title="Магазины" description="Структурированные памятки: что сверить, о чём спросить продавца и какие условия зафиксировать до оплаты." crumbs={[{label:"Магазины"}]} /><section className="section"><div className="container store-grid">{stores.map(store=><Link className="store-card" href={`/stores/${store.slug}/`} key={store.slug}><span className="tag">{store.eyebrow}</span><h3>{store.name}</h3><p>{store.summary}</p><span className="text-link">Читать памятку</span></Link>)}</div></section></>}
