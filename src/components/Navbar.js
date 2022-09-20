import React from 'react'
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <div className='wrap'>
      <div className='menu'>
        <i className="fa-solid fa-grip-lines icons"></i>
      </div>
      <div className='logoname'>
        <span className='color'>Beta</span>
        <span className='black'>craft</span>
      </div>
      <div className='contact-us-button'>
        <button className='button'>CONTACT US</button>
      </div>


    </div>
  )
}
