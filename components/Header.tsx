"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";

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
          <a className="telegram-nav" href={siteConfig.telegramUrl} target="_blank" rel="noopener noreferrer nofollow" aria-label="Открыть Telegram-канал Anime Dolls World в новой вкладке">
            <span className="telegram-icon" aria-hidden="true">➤</span>
            <span>Telegram</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
