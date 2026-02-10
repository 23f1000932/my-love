import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import './ProposalScreen.css'

function ProposalScreen({ onYesClick, showConfetti }) {
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 'auto', left: 'auto' })
  const [noButtonMoved, setNoButtonMoved] = useState(false)

  const girlfriendName = "Beautiful" // CUSTOMIZE THIS

  // Get window dimensions for confetti
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const moveNoButton = () => {
    setNoButtonMoved(true)
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    // Button dimensions (approximate)
    const buttonWidth = 150
    const buttonHeight = 60
    
    // Calculate safe boundaries (with padding)
    const padding = 20
    const maxLeft = viewportWidth - buttonWidth - padding
    const maxTop = viewportHeight - buttonHeight - padding
    
    // Generate random position within safe boundaries
    const randomLeft = Math.max(padding, Math.random() * maxLeft)
    const randomTop = Math.max(padding, Math.random() * maxTop)
    
    setNoButtonPosition({
      left: `${randomLeft}px`,
      top: `${randomTop}px`
    })
  }

  return (
    <div className="proposal-screen">
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          numberOfPieces={500}
          recycle={false}
          colors={['#FFB3C6', '#FF8FAB', '#E0BBE4', '#957DAD', '#FFE5EC']}
        />
      )}
      
      <div className="proposal-content">
        <h1 className="proposal-title">
          Hey {girlfriendName} ❤️
        </h1>
        <p className="proposal-question">
          Will you be my Valentine?
        </p>
        
        <div className="buttons-container">
          <button 
            className="yes-button"
            onClick={onYesClick}
          >
            YES 💖
          </button>
          
          <button 
            className={`no-button ${noButtonMoved ? 'moving' : ''}`}
            style={noButtonMoved ? noButtonPosition : {}}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={(e) => {
              e.preventDefault()
              moveNoButton()
            }}
          >
            NO 😢
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProposalScreen
