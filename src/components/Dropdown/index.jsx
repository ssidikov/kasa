import React, { useState } from 'react'
import ArrowIcon from '../../assets/Icons/arrow-down.svg'

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        <h3 className='dropdown-title'>{title}</h3>
        <div
          className='dropdown-arrow'
          style={{ transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)' }}>
          <img src={ArrowIcon} alt='Dropdown Arrow' />
        </div>
      </div>
      {isOpen && <div className='dropdown-content'>{children}</div>}
    </div>
  )
}

export default Dropdown
