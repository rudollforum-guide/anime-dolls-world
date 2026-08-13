# Anime Dolls World

Независимый русскоязычный информационный каталог аниме- и фурри-кукол, брендов, магазинов, материалов по выбору и уходу. Проект предназначен только для совершеннолетней аудитории и не содержит откровенных изображений.

## Запуск

```bash
npm install
npm run dev
```

Проверка статического экспорта:

```bash
npm run build
```

Готовые файлы появятся в `out/`.

## Данные

- `data/brands.ts` — бренды и категории;
- `data/stores.ts` — страницы магазинов и памяток;
- `data/models.ts` — подготовленная схема будущих галерей;
- `data/site.ts` — название, описание и публичный адрес.

## GitHub Pages и собственный домен

Workflow публикует каталог из `out/` на собственном домене `https://animedollsworld.com/`. Сайт собирается для корня домена без `basePath`; `NEXT_PUBLIC_SITE_URL` задаёт production origin для canonical, sitemap, robots, Open Graph и JSON-LD.

## Правило оформления внешних ссылок

На сайте Anime Dolls World не используются символ ↗, диагональные стрелки или аналогичные декоративные маркеры у внешних ссылок и кнопок. Открытие ссылки в новой вкладке обозначается только техническими атрибутами `target` и `rel`, без визуальной стрелки.

Anime Dolls World does not use the ↗ symbol, diagonal arrows, or similar decorative markers on external links and buttons. Opening a link in a new tab is indicated only by the technical `target` and `rel` attributes, without a visual arrow.
