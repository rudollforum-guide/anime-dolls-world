import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function HeroMaidScene() {
  return (
    <div className="hero-maid-scene" aria-hidden="true">
      <div className="hero-scene-image">
        <Image
          src={`${basePath}/images/hero/anime-maids.webp`}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero-scene-glow"><span /><span /></div>
      <div className="hero-scene-particles">
        {Array.from({ length: 10 }, (_, index) => <i key={index} />)}
      </div>
    </div>
  );
}
