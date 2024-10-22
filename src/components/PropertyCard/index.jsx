// import React, { useState } from 'react'
import Slider from '../Slider'
import Star from '../../assets/Icons/star.svg'
import RedStar from '../../assets/Icons/red-star.svg'
// import ArrowIcon from '../../assets/Icons/arrow-down.svg'
import Dropdown from '../Dropdown'

function PropertyCard({ title, description, pictures, host, rating, location, equipments, tags }) {
  // const [isDetailsOpen, setDetailsOpen] = useState(false) // condition for Details
  // const [isEquipmentsOpen, setEquipmentsOpen] = useState(false) // condition for equipments

  // const toggleDetails = () => {
  //   setDetailsOpen(!isDetailsOpen)
  // }

  // const toggleEquipments = () => {
  //   setEquipmentsOpen(!isEquipmentsOpen)
  // }

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
        <Dropdown title='Details'>{description}</Dropdown>

        {/* Dropdown for Équipements */}
        <Dropdown title='Équipements'>
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index} className='equipment-list'>
                {equipment}
              </li>
            ))}
          </ul>
        </Dropdown>
      </div>
    </div>
  )
}

export default PropertyCard
