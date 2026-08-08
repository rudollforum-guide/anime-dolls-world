import { Breadcrumbs, Crumb } from "./Breadcrumbs";

export function PageHero({ eyebrow, title, description, crumbs, className, backgroundImage }: { eyebrow: string; title: string; description: string; crumbs: Crumb[]; className?: string; backgroundImage?: string }) {
  return <section className={`page-hero${className ? ` ${className}` : ""}`} style={backgroundImage ? { backgroundImage: `url("${backgroundImage}")` } : undefined}><div className="container"><Breadcrumbs items={crumbs} /><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="lede">{description}</p></div></section>;
}
