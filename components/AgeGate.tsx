"use client";

import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "adw-age-confirmed";

export function AgeGate({ children }: { children: React.ReactNode }) {
  const accepted = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      window.addEventListener("adw-age-change", onStoreChange);
      return () => {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener("adw-age-change", onStoreChange);
      };
    },
    () => localStorage.getItem(STORAGE_KEY) === "yes",
    () => false,
  );

  useEffect(() => {
    document.documentElement.toggleAttribute("data-age-confirmed", accepted);
  }, [accepted]);

  const confirm = () => {
    localStorage.setItem(STORAGE_KEY, "yes");
    document.documentElement.setAttribute("data-age-confirmed", "");
    window.dispatchEvent(new Event("adw-age-change"));
  };

  return (
    <>
      <div className="site-shell" aria-hidden={!accepted} inert={!accepted ? true : undefined}>
        {children}
      </div>
      {!accepted && (
        <div className="age-layer" role="dialog" aria-modal="true" aria-labelledby="age-title" aria-describedby="age-copy">
          <div className="age-card">
            <span className="age-badge">18+</span>
            <p className="eyebrow">Проверка возраста</p>
            <h1 id="age-title">Материалы только для совершеннолетних</h1>
            <p id="age-copy">Сайт содержит нейтральную информацию о товарах для взрослых. Продолжая, вы подтверждаете, что вам исполнилось 18 лет.</p>
            <div className="age-actions">
              <button className="button primary" onClick={confirm} autoFocus>Мне исполнилось 18 лет</button>
              <a className="button secondary" href="https://www.google.com/">Покинуть сайт</a>
            </div>
            <small>Подтверждение хранится только в вашем браузере.</small>
          </div>
        </div>
      )}
    </>
  );
}
