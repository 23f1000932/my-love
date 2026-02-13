import { useState, useEffect } from 'react'
import Confetti from 'react-confetti'
import './ProposalScreen.css'

function ProposalScreen({ onYesClick, showConfetti }) {
  const [noClickCount, setNoClickCount] = useState(0)
  const [yesSize, setYesSize] = useState(1)

  const girlfriendName = "Dua" // CUSTOMIZE THIS

  // Progressive funny text changes for No button
  const noButtonTexts = [
    "NO 😢",
    "really? 🥺",
    "think once again 💭",
    "i will give u kitkat 🍫",
    "okay... 5 star? 🌟",
    "bro please 😭😭",
    "i'm not asking, i'm telling 😤",
  ]

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

  const handleNoClick = () => {
    // Progress to next text, loop back to last one if exhausted
    if (noClickCount < noButtonTexts.length - 1) {
      setNoClickCount(prev => prev + 1)
    }
    // Make YES button grow with each No click
    setYesSize(prev => Math.min(prev + 0.15, 2))
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
            style={{ transform: `scale(${yesSize})` }}
          >
            YES 💖
          </button>
          
          <button 
            className="no-button"
            onClick={handleNoClick}
          >
            {noButtonTexts[noClickCount]}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProposalScreen
