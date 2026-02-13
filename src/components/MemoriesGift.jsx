import './MemoriesGift.css'

function MemoriesGift() {
  const photos = [
    '/images/WhatsApp Image 2026-02-14 at 00.17.jpeg',
    '/images/WhatsApp Image 2026-02-14 at 00.17.5.jpeg',
    '/images/WhatsApp Image 2026-02-14 at 00.17.57.jpeg',
    '/images/WhatsApp Image 2026-02-14 at 00.17.58.jpeg',
    '/images/WhatsApp Image 2026-02-14 at 00.19.52.jpeg',
  ]

  return (
    <div className="gift-card memories-card">
      <h2 className="gift-title">
        <span>📸</span> Our Beautiful Memories
      </h2>
      <div className="memories-content">
        {photos.length > 0 ? (
          <div className="photos-grid">
            {photos.map((photo, index) => (
              <div key={index} className="photo-item">
                <img
                  src={photo}
                  alt={`Memory ${index + 1}`}
                  className="memory-photo"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="photo-placeholder">
            <div className="placeholder-icon">📷</div>
            <h3>Add Your Special Moments Here!</h3>
            <p className="placeholder-text">
              Replace this section with your favorite photos together.
              <br />
              Add photo paths to the <code>photos</code> array in <code>MemoriesGift.jsx</code>
            </p>
            <div className="placeholder-examples">
              <div className="example-photo">🌅</div>
              <div className="example-photo">💑</div>
              <div className="example-photo">🎉</div>
              <div className="example-photo">💕</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MemoriesGift
