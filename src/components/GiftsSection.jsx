import { useEffect, useState } from 'react'
import './GiftsSection.css'
import PoemGift from './PoemGift'
import KissButton from './KissButton'

import MemoriesGift from './MemoriesGift'

function GiftsSection() {
  const [showSuccess, setShowSuccess] = useState(true)
  const [showGifts, setShowGifts] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(false)
      setShowGifts(true)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="gifts-section">
      {showSuccess && (
        <div className="success-message">
          <h1 className="success-title">Yayyy! I knew you'd say yes 🥰</h1>
          <p className="success-subtitle">Here are some gifts for you... 💝</p>
        </div>
      )}
      
      {showGifts && (
        <div className="gifts-container">
          <PoemGift />
          <KissButton />
          <MemoriesGift />
        </div>
      )}
    </div>
  )
}

export default GiftsSection
