export function BrandEmblem() {
  return (
    <span className="brand-emblem" aria-hidden="true">
      <svg viewBox="0 0 64 64" role="img">
        <defs>
          <linearGradient id="emblem-core" x1="10" y1="8" x2="54" y2="58" gradientUnits="userSpaceOnUse">
            <stop stopColor="#25152f" />
            <stop offset="0.55" stopColor="#55234f" />
            <stop offset="1" stopColor="#2a1838" />
          </linearGradient>
          <linearGradient id="emblem-accent" x1="20" y1="18" x2="46" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffd2e9" />
            <stop offset="0.55" stopColor="#ee9fd0" />
            <stop offset="1" stopColor="#b996ff" />
          </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="29" fill="url(#emblem-core)" stroke="#e7c77d" strokeWidth="1.5" />
        <circle cx="32" cy="32" r="25.5" fill="none" stroke="#f3b6da" strokeOpacity="0.28" />
        <path d="M20 27c1.6-7 6.3-11 12.2-11S43 20 44.3 27c-3.5-2.3-7.5-3.5-12.2-3.5S23.4 24.7 20 27Z" fill="#f8d9ea" />
        <path d="M21.8 23.8l-3.2-3.3 1.2 5-4.2.5 4 1.7-2.1 3.7 4.2-2.2" fill="none" stroke="#f4b5da" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M42.7 23.4 49 19.8l-1 6.2 4.4 3.7-6.4.6-3.9 5.1-.9-7.2Z" fill="url(#emblem-accent)" stroke="#f8d9ea" strokeWidth="1" strokeLinejoin="round" />
        <path d="M23 31.3c.3-5.3 4-8.7 9.1-8.7 5.2 0 8.9 3.5 9.1 8.9l-1.7 8.4c-1.1 5-3.7 8.5-7.4 8.5-3.8 0-6.3-3.5-7.5-8.5Z" fill="url(#emblem-accent)" />
        <path d="M23.3 31.5c2-4.7 5.3-7 9.7-7 4.6 0 7.1 2.4 8.3 6.5-4.1-1.3-7.1-3.5-9.2-6.1-1.6 3.2-4.5 5.5-8.8 6.6Z" fill="#211329" />
        <path d="M19.7 53c1.5-6.7 6.3-10.2 12.4-10.2s10.8 3.5 12.4 10.2" fill="#17101f" stroke="#e7c77d" strokeWidth="1.3" strokeLinecap="round" />
        <path d="m28.2 44.6 3.9 4.1 3.8-4.1" fill="none" stroke="#fff0f7" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </span>
  );
}
