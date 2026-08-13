import Image from "next/image";

export function BrandEmblem() {
  return (
    <span className="brand-emblem" aria-hidden="true">
      <Image src="/brand/anime-dolls-world-logo.png" alt="" width={40} height={40} priority />
    </span>
  );
}
