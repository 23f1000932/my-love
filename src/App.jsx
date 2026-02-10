import { useState, useEffect } from 'react'
import './App.css'
import ProposalScreen from './components/ProposalScreen'
import GiftsSection from './components/GiftsSection'

function App() {
  const [showGifts, setShowGifts] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

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

    // Create hearts periodically
    const interval = setInterval(createHeart, 1000)
    
    // Create initial hearts
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
    
    // Vibration for mobile (if supported)
    if (navigator.vibrate) {
      navigator.vibrate([100, 50, 100, 50, 200])
    }
    
    // Show gifts after confetti animation
    setTimeout(() => {
      setShowGifts(true)
      setShowConfetti(false)
    }, 3000)
  }

  return (
    <div className="app">
      {!showGifts ? (
        <ProposalScreen 
          onYesClick={handleYesClick} 
          showConfetti={showConfetti}
        />
      ) : (
        <GiftsSection />
      )}
    </div>
  )
}

export default App
