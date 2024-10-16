import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Card({ cover, title, id }) {
  return (
    <Link to={`/property/${id}`} className='card'>
      <img src={cover} alt={title} className='card-img' />
      <h2 className='card-title'>{title}</h2>
    </Link>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Card
