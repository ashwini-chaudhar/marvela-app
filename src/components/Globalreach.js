import React from 'react'
import google from '../images/google.png'
import infosys from '../images/infosys.png'
import blueyonder from '../images/blueyounder.png'
import nttdata from '../images/ntdddata.png'
import data from '../images/data.png'
import '../css/Globalreach.css'
export default function Globalreach() {
  return (
    <div className='global-reach  padding-tb-global'>
      OUR GLOBAL REACH
      <h1 className="text">
        Our Clients <span className="colour">love</span> Us, you will love too
      </h1>
      <div className="row-primary-icons">
      <div className='company-icons'>
        <ul>
          <li>
           <img src={google} alt="google" />
          </li>
          <li>
          <img src={nttdata} alt="nttdata" />
           </li>
        </ul>
        <ul>
          <li>
           
            <img src={blueyonder} alt="blueyonder" />
          </li>
          <li>

            <img src={infosys} alt="infosys" />
          </li>
        </ul>
        <ul>
          <li>
          
            <img src={infosys} alt="infosys" />
          </li>
          <li>

            <img src={data} alt="data" />
          </li>
        </ul>
        <ul>
          <li>
           
            <img src={nttdata} alt="nttdata" />
          </li>
          <li>

            <img src={google} alt="google" />
          </li>
        </ul>
        <ul>
          <li>
            
            <img src={data} alt="data" />
          </li>
          <li>
          <img src={blueyonder} alt="blueyonder" />
            
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}
