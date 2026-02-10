import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './MemoriesGift.css'

function MemoriesGift() {
  // CUSTOMIZE: Add your photo paths here
  const photos = [
    '/images/couple1.jpg',
    '/images/couple2.jpg',
    '/images/couple3.jpg',
  ]

  return (
    <div className="gift-card memories-card">
      <h2 className="gift-title">
        <span>📸</span> Our Beautiful Memories
      </h2>
      <div className="carousel-container">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          showStatus={false}
          swipeable={true}
          emulateTouch={true}
          dynamicHeight={false}
        >
          {photos.map((photo, index) => (
            <div key={index} className="carousel-slide">
              <img 
                src={photo} 
                alt={`Memory ${index + 1}`}
                className="carousel-image"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default MemoriesGift
