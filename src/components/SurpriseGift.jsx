import { useState } from 'react'
import './SurpriseGift.css'

function SurpriseGift() {
  const [revealedCount, setRevealedCount] = useState(0)
  
  const loveCoupons = [
    { emoji: "🎬", title: "Movie Night", text: "One free movie night of YOUR choice! No complaints 🍿" },
    { emoji: "🍫", title: "Chocolate Supply", text: "Unlimited chocolate for a whole week! 🤤" },
    { emoji: "🤗", title: "Hug Coupon", text: "One extra-long, super tight hug anytime you want 💕" },
    { emoji: "📱", title: "No Phone", text: "One full day where I keep my phone away, only you! 😘" },
    { emoji: "🍕", title: "Food Date", text: "I'll cook (or order 😅) your favorite food!" },
    { emoji: "⭐", title: "Wish Granted", text: "One wish, whatever you want... I'll make it happen ✨" },
  ]

  const revealNext = () => {
    if (revealedCount < loveCoupons.length) {
      setRevealedCount(prev => prev + 1)
    }
  }

  return (
    <div className="gift-card surprise-card">
      <h2 className="gift-title">
        <span>🎁</span> Gift 3: Love Coupons
      </h2>
      <p className="surprise-subtitle">Special coupons just for you! Tap to reveal each one 💝</p>
      
      <div className="coupons-grid">
        {loveCoupons.map((coupon, index) => (
          <div 
            key={index}
            className={`coupon ${index < revealedCount ? 'revealed' : 'hidden'}`}
          >
            {index < revealedCount ? (
              <>
                <span className="coupon-emoji">{coupon.emoji}</span>
                <h3 className="coupon-title">{coupon.title}</h3>
                <p className="coupon-text">{coupon.text}</p>
              </>
            ) : (
              <div className="coupon-mystery">
                <span className="mystery-icon">🎁</span>
                <p>???</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {revealedCount < loveCoupons.length ? (
        <button className="reveal-btn" onClick={revealNext}>
          🎀 Reveal Next Coupon ({revealedCount}/{loveCoupons.length})
        </button>
      ) : (
        <p className="all-revealed">All coupons revealed! Use them wisely 😉💖</p>
      )}
    </div>
  )
}

export default SurpriseGift
