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
      <div
        className='slider__image-wrapper'
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`${title} - ${index + 1}`}
            className='slider__image'
          />
        ))}
      </div>
      {pictures.length > 1 && (
        <React.Fragment>
          <button className='slider__button slider__button--prev' onClick={prevSlide}>
            ❮
          </button>
          <button className='slider__button slider__button--next' onClick={nextSlide}>
            ❯
          </button>
          <div className='slider__counter'>
            {currentIndex + 1} / {pictures.length}
          </div>
        </React.Fragment>
      )}
    </div>
  )
}

export default Slider
