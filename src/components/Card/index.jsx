import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Card({ cover, title, id }) {
  return (
    <Link to={`/property/${id}`} className='card'>
      <div className='card-img__container'>
        <img src={cover} alt={title} className='card-img' />
        <h2 className='card-title'>{title}</h2>
      </div>
    </Link>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}

export default Card
