import React, { useState } from 'react'

function Slider({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1))
  }

  if (!pictures || pictures.length === 0) {
    return <p className='slider__error'>Aucune image disponible</p>
  }

  return (
    <div className='slider'>
      <img
        src={pictures[currentIndex]}
        alt={`${title} - ${currentIndex + 1}`}
        className='slider__image'
      />
      {pictures.length > 1 && (
        <>
          <button className='slider__button slider__button--prev' onClick={prevSlide}>
            ❮
          </button>
          <button className='slider__button slider__button--next' onClick={nextSlide}>
            ❯
          </button>
          <div className='slider__counter'>
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  )
}

export default Slider
