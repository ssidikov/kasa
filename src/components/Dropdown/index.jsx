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
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}>
          <img src={ArrowIcon} alt='Dropdown Arrow' className='arrow-icon' />
        </div>
      </div>
      <div className={`dropdown-content ${isOpen ? 'expanded' : ''}`}>{children}</div>
    </div>
  )
}

export default Dropdown
