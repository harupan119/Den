function Character() {
  return (
    <div className="character-container">
      <div className="character-placeholder">
        {/* Placeholder character - will be replaced with actual character image */}
        <div className="character-silhouette">
          <svg viewBox="0 0 200 300" width="200" height="300">
            {/* Simple character silhouette */}
            <ellipse cx="100" cy="60" rx="40" ry="50" fill="#6b7280" />
            <ellipse cx="100" cy="200" rx="60" ry="100" fill="#6b7280" />
            {/* Eyes */}
            <ellipse cx="85" cy="55" rx="8" ry="10" fill="#fff" />
            <ellipse cx="115" cy="55" rx="8" ry="10" fill="#fff" />
            <circle cx="85" cy="57" r="4" fill="#1f2937" />
            <circle cx="115" cy="57" r="4" fill="#1f2937" />
            {/* Smile */}
            <path d="M 80 75 Q 100 90 120 75" stroke="#fff" strokeWidth="3" fill="none" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Character
