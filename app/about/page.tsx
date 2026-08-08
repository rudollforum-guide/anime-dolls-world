import type { Metadata } from "next";
import { ArticlePage } from "@/components/ArticlePage";
export const metadata:Metadata={title:"О проекте",description:"Anime Dolls World — независимый информационный каталог брендов, магазинов и материалов для совершеннолетней аудитории.",alternates:{canonical:"/about/"}};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Page(){return <ArticlePage path="/about/" heroClassName="about-page-hero" heroBackgroundImage={`${basePath}/images/about/about-hero.webp`} eyebrow="Независимый справочник" title="О проекте" description="Anime Dolls World помогает спокойно ориентироваться в брендах, категориях и проверках перед покупкой." sections={[{title:"Наша задача",paragraphs:["Собрать понятную структуру вокруг разрозненных каталогов производителей и продавцов, не подменяя первичные источники и не публикуя неподтверждённые характеристики."]},{title:"Принципы",bullets:["Нейтральный информационный тон.","Отсутствие откровенных изображений и текстов.","Явные заглушки вместо вымышленных данных.","Безопасные ссылки на внешние ресурсы."]},{title:"Независимость",paragraphs:["Проект не является магазином, производителем или официальным представителем перечисленных брендов. Упоминание компании не означает партнёрство или рекомендацию."]}]} />}
