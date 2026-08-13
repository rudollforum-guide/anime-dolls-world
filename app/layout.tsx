import type { Metadata } from "next";
import "./globals.css";
import { AgeGate } from "@/components/AgeGate";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Anime Dolls World — независимый каталог", template: "%s | Anime Dolls World" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "ru_RU", siteName: siteConfig.name, title: siteConfig.name, description: siteConfig.description, url: "/" },
  robots: { index: true, follow: true },
};

const websiteJsonLd = { "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.name, url: siteConfig.url, description: siteConfig.description };
const orgJsonLd = { "@context": "https://schema.org", "@type": "Organization", name: siteConfig.name, url: siteConfig.url };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const ageStateScript = `try{if(localStorage.getItem("adw-age-confirmed")==="yes")document.documentElement.setAttribute("data-age-confirmed","")}catch{}`;
  return <html lang="ru" data-scroll-behavior="smooth" suppressHydrationWarning><head><link rel="icon" href="/favicon.ico" sizes="any" /><link rel="icon" href="/favicon.png" type="image/png" sizes="120x120" /><script dangerouslySetInnerHTML={{ __html: ageStateScript }} /></head><body><AgeGate><Header /><main>{children}</main><Footer /></AgeGate><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} /></body></html>;
}
