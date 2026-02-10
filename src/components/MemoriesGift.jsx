import './MemoriesGift.css'

function MemoriesGift() {
  // CUSTOMIZE: Add your photo paths here
  // Example: const photos = ['/images/photo1.jpg', '/images/photo2.jpg']
  const photos = []

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
