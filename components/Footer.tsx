import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><div className="brand-mark"><span className="footer-logo-icon" aria-hidden="true"><Image src="/images/logo-icon.webp" alt="" width={36} height={36} /></span><span>Anime Dolls <b>World</b></span></div><p>Независимый информационный каталог. Только для совершеннолетних.</p><span className="footer-18">18+</span></div>
        <div><h2>Каталог</h2><Link href="/brands/">Бренды</Link><Link href="/anime-dolls/">Аниме-куклы</Link><Link href="/furry-dolls/">Фурри-куклы</Link><Link href="/stores/">Магазины</Link><Link href="/stores/moon-doll/">Moon-Doll</Link></div>
        <div><h2>Информация</h2><Link href="/buying/">Выбор и покупка</Link><Link href="/care/">Уход</Link><Link href="/about/">О проекте</Link><a className="footer-social footer-telegram" href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть Telegram-канал Anime Dolls World в новой вкладке"><span className="telegram-icon" aria-hidden="true">➤</span> Telegram-канал Anime Dolls World</a><a className="footer-social footer-tiktok" href="https://www.tiktok.com/@animedollsworld" target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть TikTok-канал Anime Dolls World в новой вкладке"><span className="tiktok-icon" aria-hidden="true">♪</span> TikTok-канал Anime Dolls World</a></div>
        <div><h2>Документы</h2><Link href="/privacy/">Конфиденциальность</Link><Link href="/disclaimer/">Отказ от ответственности</Link></div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Anime Dolls World · Не является магазином или представителем брендов.</div>
    </footer>
  );
}
