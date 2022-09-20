import React from 'react'

import '../css/Careers.css'


export default function Careers() {
  return (
    <div className='careers-section padding-lr'>
      <div className='careers-heading'>
        <h1 className='text'> Join Our <span className='colour'> Team </span> </h1>
        <hr  className="career-hr" />
        <div className='career-row'>
          <div className='careers-content'>
            Benefits
          </div>
          <div className='career-column'>
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>

        <hr className="career-hr" />
        <div className='career-row'>
          <div className='careers-content'>
            Interview Process
          </div>
          <div className='career-column'>
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>

        <hr className="career-hr" />
        <div className='career-row'>
          <div className='careers-content'>
            Opportunities
          </div>
          <div className='career-column'>
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <hr className="career-hr" />


      </div>

      <div className='image'>


      </div>

    </div>
  )
}
