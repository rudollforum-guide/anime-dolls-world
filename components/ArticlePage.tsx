import { PageHero } from "./PageHero";
import { siteConfig } from "@/data/site";

type Section = { title: string; paragraphs?: string[]; bullets?: string[] };
export function ArticlePage({ eyebrow, title, description, sections, path }: { eyebrow:string; title:string; description:string; sections:Section[]; path:string }) {
  const article={"@context":"https://schema.org","@type":"Article",headline:title,description,mainEntityOfPage:`${siteConfig.url}${path}`,author:{"@type":"Organization",name:siteConfig.name}};
  return <><PageHero eyebrow={eyebrow} title={title} description={description} crumbs={[{label:title}]} /><section className="section"><div className="container"><article className="prose">{sections.map(section=><section key={section.title}><h2>{section.title}</h2>{section.paragraphs?.map(p=><p key={p}>{p}</p>)}{section.bullets&&<ul>{section.bullets.map(item=><li key={item}>{item}</li>)}</ul>}</section>)}</article></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(article)}} /></>;
}
