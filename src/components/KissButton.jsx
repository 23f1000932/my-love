import { useState, useCallback } from 'react'
import './KissButton.css'

function KissButton() {
  const [kisses, setKisses] = useState([])
  const [clickCount, setClickCount] = useState(0)

  const kissEmojis = ['😘', '💋', '💖', '🥰', '💕', '😍', '💗']

  const handleKissClick = useCallback(() => {
    setClickCount(prev => prev + 1)
    
    // Generate 8-15 kisses per click
    const count = Math.floor(Math.random() * 8) + 8
    const newKisses = []
    
    for (let i = 0; i < count; i++) {
      newKisses.push({
        id: Date.now() + Math.random(),
        emoji: kissEmojis[Math.floor(Math.random() * kissEmojis.length)],
        left: Math.random() * 90 + 5,
        delay: Math.random() * 0.5,
        duration: Math.random() * 1.5 + 1.5,
        size: Math.random() * 1.5 + 1,
      })
    }
    
    setKisses(prev => [...prev, ...newKisses])
    
    // Clean up old kisses after animation
    setTimeout(() => {
      setKisses(prev => prev.slice(count))
    }, 3000)
  }, [])

  const getMessage = () => {
    if (clickCount === 0) return "Tap the button below! 👇"
    if (clickCount < 3) return "More kisses for you! 🥰"
    if (clickCount < 6) return `${clickCount} clicks! You love kisses hehe 😘`
    if (clickCount < 10) return "Okay okay, someone's greedy! 😂💋"
    return "I can do this all day for you 💕"
  }

  return (
    <div className="gift-card kiss-button-card">
      <h2 className="gift-title">
        <span>💋</span> Gift 2: Kiss Rain
      </h2>
      
      <div className="kiss-area">
        {/* Falling kisses */}
        {kisses.map((kiss) => (
          <span
            key={kiss.id}
            className="falling-kiss"
            style={{
              left: `${kiss.left}%`,
              animationDelay: `${kiss.delay}s`,
              animationDuration: `${kiss.duration}s`,
              fontSize: `${kiss.size}rem`,
            }}
          >
            {kiss.emoji}
          </span>
        ))}
        
        <p className="kiss-message">{getMessage()}</p>
        
        <button 
          className="kiss-trigger-btn"
          onClick={handleKissClick}
        >
          💋 Click for Kisses! 💋
        </button>
        
        {clickCount > 0 && (
          <p className="kiss-count">Kisses sent: {clickCount * 10} 💕</p>
        )}
      </div>
    </div>
  )
}

export default KissButton
