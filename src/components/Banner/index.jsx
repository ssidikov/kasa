import PropTypes from 'prop-types'

function Banner({ image, title, altText, lighter = false }) {
  const bannerOverlay = lighter ? 'banner-overlay lighter' : 'banner-overlay'
  return (
    <div className='banner'>
      <img src={image} alt={altText} className='banner-img' />
      <div className={bannerOverlay}></div>
      {title && <h1 className='banner__title'>{title}</h1>}
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
  altText: PropTypes.string.isRequired,
}

Banner.defaultProps = {
  title: null,
}

export default Banner
