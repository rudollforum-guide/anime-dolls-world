import { Breadcrumbs, Crumb } from "./Breadcrumbs";

export function PageHero({ eyebrow, title, description, crumbs }: { eyebrow: string; title: string; description: string; crumbs: Crumb[] }) {
  return <section className="page-hero"><div className="container"><Breadcrumbs items={crumbs} /><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{description}</p></div></section>;
}
