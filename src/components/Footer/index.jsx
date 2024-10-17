import React from 'react'
import LogoDark from '../../assets/logo-dark.svg'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='footer'>
      <img src={LogoDark} alt='Kasa' className='footer-logo' />
      <p className='footer-text'>&copy; {currentYear} Kasa. All rights reserved.</p>
    </footer>
  )
}

export default Footer
