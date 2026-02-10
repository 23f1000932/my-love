import { useState, useEffect } from 'react'
import './KissesGift.css'

function KissesGift() {
  const [emojis, setEmojis] = useState([])
  
  const kissEmojis = ['😘', '💋', '💖', '🥰', '💕', '😍']

  useEffect(() => {
    // Generate emojis with random properties
    const generateEmojis = () => {
      const newEmojis = []
      const emojiCount = window.innerWidth < 768 ? 20 : 30 // Fewer on mobile for performance
      
      for (let i = 0; i < emojiCount; i++) {
        newEmojis.push({
          id: i,
          emoji: kissEmojis[Math.floor(Math.random() * kissEmojis.length)],
          left: Math.random() * 100,
          size: Math.random() * 1.5 + 1, // 1 to 2.5
          delay: Math.random() * 2,
          duration: Math.random() * 3 + 3 // 3 to 6 seconds
        })
      }
      
      setEmojis(newEmojis)
    }

    generateEmojis()

    // Regenerate emojis every 6 seconds for continuous animation
    const interval = setInterval(generateEmojis, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="gift-card kisses-card">
      <h2 className="gift-title">
        <span>💋</span> Sending You Kisses
      </h2>
      <div className="kisses-container">
        {emojis.map((item) => (
          <span
            key={item.id}
            className="kiss-emoji"
            style={{
              left: `${item.left}%`,
              fontSize: `${item.size}rem`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`
            }}
          >
            {item.emoji}
          </span>
        ))}
      </div>
    </div>
  )
}

export default KissesGift
