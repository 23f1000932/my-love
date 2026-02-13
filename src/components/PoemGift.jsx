import { useState, useEffect } from 'react'
import './PoemGift.css'

function PoemGift() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  // Sweet Bollywood love song lyrics
  const poem = `Tum hi ho, ab tum hi ho,
Zindagi ab tum hi ho,
Chain bhi, mera dard bhi,
Meri aashiqui tum hi ho... 💕`

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 50

    const typeNextCharacter = () => {
      if (currentIndex < poem.length) {
        setDisplayedText(poem.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
      }
    }

    const intervalId = setInterval(typeNextCharacter, typingSpeed)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="gift-card poem-card">
      <h2 className="gift-title">
        <span>🎶</span> Gift 1: A Song For You
      </h2>
      <div className="poem-content">
        <p className="poem-text">
          {displayedText}
          {isTyping && <span className="typing-cursor">|</span>}
        </p>
        {!isTyping && (
          <p className="poem-credit">— Tum Hi Ho (Aashiqui 2) 🎵</p>
        )}
      </div>
    </div>
  )
}

export default PoemGift
