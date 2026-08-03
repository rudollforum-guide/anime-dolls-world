import Image from "next/image";

export function BrandEmblem() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <span className="brand-emblem" aria-hidden="true">
      <Image src={`${basePath}/brand/anime-dolls-world-logo.png`} alt="" width={40} height={40} priority />
    </span>
  );
}
