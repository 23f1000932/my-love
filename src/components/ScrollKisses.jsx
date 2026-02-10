import { useState, useEffect } from 'react'
import './ScrollKisses.css'

function ScrollKisses() {
  const [kisses, setKisses] = useState([])
  const [lastScrollY, setLastScrollY] = useState(0)
  
  const kissEmojis = ['😘', '💋', '💖', '🥰', '💕', '😍']

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Only trigger on scroll down
      if (currentScrollY > lastScrollY) {
        // Create new kiss every 50px of scrolling
        const scrollDiff = currentScrollY - lastScrollY
        const kissesToAdd = Math.floor(scrollDiff / 50)
        
        if (kissesToAdd > 0) {
          const newKisses = []
          for (let i = 0; i < kissesToAdd; i++) {
            const kiss = {
              id: Date.now() + Math.random(),
              emoji: kissEmojis[Math.floor(Math.random() * kissEmojis.length)],
              left: Math.random() * 90 + 5, // 5% to 95%
              top: currentScrollY + window.innerHeight * 0.3,
            }
            newKisses.push(kiss)
          }
          
          setKisses(prev => [...prev, ...newKisses].slice(-30)) // Keep max 30 kisses
        }
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="scroll-kisses-container">
      {kisses.map((kiss) => (
        <span
          key={kiss.id}
          className="scroll-kiss"
          style={{
            left: `${kiss.left}%`,
            top: `${kiss.top}px`,
          }}
        >
          {kiss.emoji}
        </span>
      ))}
    </div>
  )
}

export default ScrollKisses
