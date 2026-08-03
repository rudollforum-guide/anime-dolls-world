import Link from "next/link";
export default function NotFound(){return <section className="not-found"><div><strong>404</strong><h1>Страница не найдена</h1><p className="lede">Возможно, адрес изменился или такой страницы ещё нет в каталоге.</p><Link className="button primary" href="/">Вернуться на главную</Link></div></section>}
