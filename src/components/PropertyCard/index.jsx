import Slider from '../Slider'
import Dropdown from '../Dropdown'
import Star from '../../assets/Icons/star.svg'
import RedStar from '../../assets/Icons/red-star.svg'

function PropertyCard({ title, description, pictures, host, rating, location, equipments, tags }) {
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
          <p className='property__info-location'>Location: {location}</p>
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
        <div className='property-description'>
          <h3 className='property-description__title'>Details</h3>
          <p className='property-description__text'>{description}</p>
        </div>
        <div className='property-equipments'>
          <h3 className='property-equipments__title'>Équipements</h3>
          <ul className='property-equipments-list'>
            {equipments.map((equipment, index) => (
              <li key={index} className='property-equipments-list-item'>
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
