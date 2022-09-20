import React from 'react'
import "../css/Herosection.css"

export default function Herosection() {
  return (
    <div className='row-hero-section  padding-tb '>
      <div className='herosection-content'>
        <h1>Timeless products, great <span className='colour'>Brands.</span> </h1>
        <p> We craft outstanding direct-to-consumer brands with the common 
          ambition to offer true craftsmanship, timeless products that are carbon
          neutral-and this without ever making any concessions.</p>
        <br />
        <h4>DISCOVER OUR WORK</h4>
        <div className='hero-hr'>
          <p className='hr-left'>____</p><p className='hr-right'>________________</p>
        </div>
      </div>
      <div className='arrow-herosection'>

        <i class="fa-solid fa-circle-arrow-left nav-arrow"></i>
        <i class="fa-solid fa-circle-arrow-right nav-arrow"></i>

      </div>
    </div>
  )
}
