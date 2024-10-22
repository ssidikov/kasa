import React, { useState } from 'react'
import Slider from '../Slider'
import Star from '../../assets/Icons/star.svg'
import RedStar from '../../assets/Icons/red-star.svg'
import ArrowIcon from '../../assets/Icons/arrow-down.svg'

function PropertyCard({ title, description, pictures, host, rating, location, equipments, tags }) {
  const [isDetailsOpen, setDetailsOpen] = useState(false) // condition for Details
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false) // condition for equipments

  const toggleDetails = () => {
    setDetailsOpen(!isDetailsOpen)
  }

  const toggleEquipments = () => {
    setEquipmentsOpen(!isEquipmentsOpen)
  }

  return (
    <div className='property'>
      {/* Slider */}
      <div className='property__gallery'>
        <Slider pictures={pictures} title={title} />
      </div>

      {/* Information about location, owner and rating */}
      <div className='property__info'>
        <div className='property__info-main'>
          <h1 className='property__info-title'>{title}</h1>
          <p className='property__info-location'>{location}</p>
          {/* Tags */}
          <div className='property__info-tags'>
            {tags.map((tag, index) => (
              <span key={index} className='property__info-tag'>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Host information */}
        <div className='property__host'>
          <div className='property__host-info'>
            <p className='property__host-name'>{host.name}</p>
            <img src={host.picture} alt={host.name} className='property__host-picture' />
          </div>
          {/* Host rating */}
          <div className='property__host-rating'>
            {Array.from({ length: 5 }, (_, index) => (
              <div key={index} className='property__host-star'>
                <img src={index < rating ? RedStar : Star} alt='star' className='star-ico' />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description and list of equipment */}
      <div className='property__details'>
        {/* Dropdown for Details */}
        <div className='property-description'>
          <div className='dropdown-header' onClick={toggleDetails}>
            <h3 className='property-description__title'>Details</h3>
            <img
              src={ArrowIcon}
              alt='Dropdown Arrow'
              className='dropdown-arrow'
              style={{ transform: isDetailsOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
            />
          </div>
          <div className={`property-description__text ${isDetailsOpen ? 'expanded' : ''}`}>
            {description}
          </div>
        </div>

        {/* Dropdown for Équipements */}
        <div className='property-equipments'>
          <div className='dropdown-header' onClick={toggleEquipments}>
            <h3 className='property-equipments__title'>Équipements</h3>
            <img
              src={ArrowIcon}
              alt='Dropdown Arrow'
              className='dropdown-arrow'
              style={{ transform: isEquipmentsOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
            />
          </div>
          <ul className={`property-equipments__text ${isEquipmentsOpen ? 'expanded' : ''}`}>
            {equipments.map((equipment, index) => (
              <li key={index} className='property-equipments__text-list'>
                {equipment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
