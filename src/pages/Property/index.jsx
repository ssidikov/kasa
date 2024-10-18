import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../../data/data.json'

function Property() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = data.find((item) => item.id === id)

  useEffect(() => {
    if (!property) {
      navigate('/error')
    }
  }, [property, navigate])

  return (
    <div className='property'>
      <img src={property.cover} alt={property.title} className='property__image' />
      <h1>{property.title}</h1>
      <p>{property.location}</p>
      <h2>Tags</h2>
      <div>
        {property.tags.map((tag, index) => (
          <span key={index} className='tag'>
            {tag}
          </span>
        ))}
      </div>
      <p>
        <strong>Host:</strong> {property.host.name}
      </p>
      <img src={property.host.picture} alt={property.host.name} className='host__image' />
      <div className='property-rating'>
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className={index < property.rating ? 'star filled' : 'star'}>
            ★
          </span>
        ))}
      </div>
      <p>{property.description}</p>
      <h2>Equipments</h2>
      <ul>
        {property.equipments.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    </div>
  )
}

export default Property
