function PinCard({ image, title }) {
  return (
    <div className="pin-card">
      <div className="pin-media">
        <img src={image} alt={title} className="pin-img" />

        <div className="pin-overlay">
          <button type="button" className="pin-save">Enregistrer</button>

          {/* Partager */}
          <button type="button" className="pin-share">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
              <polyline points="16 6 12 2 8 6" />
              <line x1="12" y1="2" x2="12" y2="15" />
            </svg>
          </button>
        </div>
      </div>

      <div className="pin-footer">
        {/* Plus d'actions */}
        <button type="button" className="pin-more hint hint-top" data-tooltip="Plus d'actions">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default PinCard;