import { useState, useEffect } from 'react'
import './PoemGift.css'

function PoemGift() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  // CUSTOMIZE YOUR POEM HERE
  const poem = `In every heartbeat, you're there,
A love beyond compare.
Your smile lights up my darkest days,
In countless beautiful ways.

With you, my world is bright,
You make everything feel right.
Forever and always, you'll see,
You mean the world to me. 💕`

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 50 // milliseconds per character

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
        <span>🎁</span> A Poem For You
      </h2>
      <div className="poem-content">
        <p className="poem-text">
          {displayedText}
          {isTyping && <span className="typing-cursor">|</span>}
        </p>
      </div>
    </div>
  )
}

export default PoemGift
