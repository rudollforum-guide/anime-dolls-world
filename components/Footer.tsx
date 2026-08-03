import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><div className="brand-mark"><span className="brand-gem">AD</span><span>Anime Dolls <b>World</b></span></div><p>Независимый информационный каталог. Только для совершеннолетних.</p><span className="footer-18">18+</span></div>
        <div><h2>Каталог</h2><Link href="/brands/">Бренды</Link><Link href="/anime-dolls/">Аниме-куклы</Link><Link href="/furry-dolls/">Фурри-куклы</Link><Link href="/stores/">Магазины</Link></div>
        <div><h2>Информация</h2><Link href="/buying/">Выбор и покупка</Link><Link href="/care/">Уход</Link><Link href="/about/">О проекте</Link></div>
        <div><h2>Документы</h2><Link href="/privacy/">Конфиденциальность</Link><Link href="/disclaimer/">Отказ от ответственности</Link></div>
      </div>
      <div className="container footer-bottom">© {new Date().getFullYear()} Anime Dolls World · Не является магазином или представителем брендов.</div>
    </footer>
  );
}
