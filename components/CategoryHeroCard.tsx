import Image from "next/image";
import Link from "next/link";

type CategoryHeroCardProps = {
  title: string;
  description: string;
  href: string;
  image: string;
};

export function CategoryHeroCard({ title, description, href, image }: CategoryHeroCardProps) {
  return (
    <Link className="category-hero-card" href={href}>
      <Image
        className="category-hero-image"
        src={image}
        alt=""
        fill
        sizes="(max-width: 900px) calc(100vw - 28px), 381px"
      />
      <span className="category-hero-shade" aria-hidden="true" />
      <span className="category-hero-copy">
        <strong>{title}</strong>
        <span>{description}</span>
      </span>
    </Link>
  );
}
