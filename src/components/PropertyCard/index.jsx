import Slider from '../Slider'

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
          {/* Tag */}
          <div className='property__info-tags'>
            {tags.map((tag, index) => (
              <span key={index} className='property__info-tag'>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className='property__host'>
          <p className='property__host-name'>Host: {host.name}</p>
          <img src={host.picture} alt={host.name} className='property__host-picture' />
        </div>
        {/* <p className='property__rating'>Rating: {rating} stars</p> */}
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < rating ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>

      {/* list of Equipment */}
      <div className='property__details'>
        <p className='property__details-description'>{description}</p>
        <ul className='property__details-equipments'>
          {equipments.map((equipment, index) => (
            <li key={index} className='property__details-equipment'>
              {equipment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PropertyCard
