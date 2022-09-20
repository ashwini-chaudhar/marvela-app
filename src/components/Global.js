import React from 'react'
import image from '../images/global.png'
import globalusa from '../images/globalusa.png'
import '../css/Global.css'


export default function Global() {
  return (
    <div className='container-row padding-tb-global' >
        <div className='column'>
        <img src={image}></img>
        </div>
        <div className='global-usa'>
        <img src={globalusa}></img>
        </div>
        <div className='columns'>
       <p className='global-title'> WHO WE ARE </p>
        <h1 className='We-are-local'> We are local, <br/> yet <span className='colour'> global</span></h1>
      <p className='betacraft'> Betacraft is a trusted global Digital Product Engineering and 
        Enterprise Modernization company. we integrate experience  
        design, complex engineering and domain expertise to help 
        our clients envision what's possible and accelerate their 
        transition into tomorrow's digital business.</p> 
        <h4>DISCOVER OUR WORK</h4>
          <div className='hero-hr'>
            <p className='hr-left'>_________</p><p className='hr-right'>________________________</p>
          </div>
        
    </div>
    
    </div>
  )
}
