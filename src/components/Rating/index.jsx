import Star from '../../assets/Icons/star.svg'
import RedStar from '../../assets/Icons/red-star.svg'

function Rating({ rating }) {
  return (
    <div className='rating'>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={index} className='rating__star'>
          <img src={index < rating ? RedStar : Star} alt='star' className='star-ico' />
        </div>
      ))}
    </div>
  )
}

export default Rating
