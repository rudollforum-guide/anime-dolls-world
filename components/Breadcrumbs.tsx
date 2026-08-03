import Link from "next/link";
import { siteConfig } from "@/data/site";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ label: "Главная", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: all.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, item: item.href ? `${siteConfig.url}${item.href}` : undefined })),
  };
  return <><nav className="breadcrumbs" aria-label="Хлебные крошки">{all.map((item, i) => <span key={item.label}>{i > 0 && " / "}{item.href ? <Link href={item.href}>{item.label}</Link> : item.label}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /></>;
}
