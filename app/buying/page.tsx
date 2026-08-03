import type { Metadata } from "next";
import { BuyingGuide } from "@/components/BuyingGuide";
export const metadata:Metadata={title:{absolute:"Как выбрать аниме-куклу: TPE, силикон, вес и покупка | Anime Dolls World"},description:"Практическое руководство по выбору аниме-куклы: TPE или силикон, рост и вес, каркас, комплектация, проверка продавца, доставка и получение заказа.",alternates:{canonical:"/buying/"},openGraph:{title:"Как выбрать аниме-куклу: TPE, силикон, вес и покупка",description:"Материал, масса, каркас, комплектация, продавец, доставка и получение заказа.",url:"/buying/"}};
export default function Page(){return <BuyingGuide />}
