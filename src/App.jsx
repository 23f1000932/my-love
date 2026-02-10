import { useState, useEffect } from 'react'
import './App.css'
import ProposalScreen from './components/ProposalScreen'
import GiftsSection from './components/GiftsSection'

function App() {
  const [showGifts, setShowGifts] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showTransition, setShowTransition] = useState(false)

  // Floating hearts background
  useEffect(() => {
    const heartsContainer = document.createElement('div')
    heartsContainer.className = 'floating-hearts'
    document.body.appendChild(heartsContainer)

    const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '❤️']
    
    const createHeart = () => {
      const heart = document.createElement('div')
      heart.className = 'heart'
      heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
      heart.style.left = Math.random() * 100 + '%'
      heart.style.animationDuration = (Math.random() * 3 + 5) + 's'
      heart.style.animationDelay = Math.random() * 2 + 's'
      heartsContainer.appendChild(heart)

      setTimeout(() => {
        heart.remove()
      }, 8000)
    }

    const interval = setInterval(createHeart, 1000)

    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 200)
    }

    return () => {
      clearInterval(interval)
      heartsContainer.remove()
    }
  }, [])

  const handleYesClick = () => {
    setShowConfetti(true)

    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200])
    }
    
    // After confetti, show love letter transition
    setTimeout(() => {
      setShowConfetti(false)
      setShowTransition(true)
    }, 2500)

    // After transition, show gifts
    setTimeout(() => {
      setShowTransition(false)
      setShowGifts(true)
    }, 5500)
  }

  return (
    <div className="app">
      {!showGifts && !showTransition ? (
        <ProposalScreen 
          onYesClick={handleYesClick} 
          showConfetti={showConfetti}
        />
      ) : showTransition ? (
        <div className="love-transition">
          <div className="love-envelope">
            <div className="envelope-body">💌</div>
          </div>
          <h1 className="transition-text">Opening your gifts...</h1>
          <div className="transition-hearts">
            {[...Array(12)].map((_, i) => (
              <span
                key={i}
                className="burst-heart"
                style={{
                  '--angle': `${(360 / 12) * i}deg`,
                  '--delay': `${i * 0.1}s`,
                }}
              >
                {['💖', '💕', '❤️', '💗', '🥰', '✨'][i % 6]}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <GiftsSection />
      )}
    </div>
  )
}

export default App
