function SearchBar({ placeholder, initial }) {
  return (
    <header className="topbar">
      <div className="search-box">
        {/* Loupe */}
        <span className="search-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>

        <input type="text" className="search-input" placeholder={placeholder} />

        {/* Importer une image  */}
        <button type="button" className="search-camera hint hint-bottom" data-tooltip="Importer une image">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 11V8a2 2 0 0 0-2-2h-2.5L14 3.5h-4L8.5 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8" />
            <circle cx="12" cy="13" r="3.2" />
            <circle cx="19" cy="19" r="1.6" fill="currentColor" stroke="none" />
          </svg>
        </button>
      </div>

      {/* Votre profil */}
      <div className="avatar hint hint-bottom" data-tooltip="Votre profil">{initial}</div>

      {/* Comptes */}
      <button type="button" className="topbar-chevron hint hint-bottom-end" data-tooltip="Comptes">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </header>
  );
}

export default SearchBar;