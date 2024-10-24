import React, { useState } from 'react'
import ArrowIcon from '../../assets/Icons/arrow-down.svg'

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='collapse'>
      <div className='collapse-header' onClick={toggleCollapse}>
        <h3 className='collapse-title'>{title}</h3>
        <div
          className='collapse-arrow'
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}>
          <img src={ArrowIcon} alt='Collapse Arrow' className='arrow-icon' />
        </div>
      </div>
      <div className={`collapse-content ${isOpen ? 'expanded' : ''}`}>{children}</div>
    </div>
  )
}

export default Collapse
