"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["Бренды", "/brands/"], ["Аниме", "/anime-dolls/"], ["Фурри", "/furry-dolls/"],
  ["Магазины", "/stores/"], ["Выбор", "/buying/"], ["Уход", "/care/"], ["О проекте", "/about/"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
          <span className="brand-gem">AD</span><span>Anime Dolls <b>World</b></span>
        </Link>
        <button className="menu-button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "×" : "☰"}</button>
        <nav className={open ? "nav open" : "nav"} aria-label="Главное меню">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        </nav>
      </div>
    </header>
  );
}
