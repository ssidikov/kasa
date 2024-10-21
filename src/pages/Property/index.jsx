import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import data from '../../data/data.json'
import PropertyCard from '../../components/PropertyCard'

function Property() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = data.find((item) => item.id === id)

  // If the property is not found, then redirect to error page
  useEffect(() => {
    if (!property) {
      navigate('/error')
    }
  }, [property, navigate])

  if (!property) {
    // Return NULL, since the redirect is already executed
    return null
  }

  return (
    <div className='property'>
      <PropertyCard
        pictures={property.pictures}
        title={property.title}
        location={property.location}
        tags={property.tags}
        host={property.host}
        rating={property.rating}
        description={property.description}
        equipments={property.equipments}
      />
    </div>
  )
}

export default Property
