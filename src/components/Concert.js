import React from 'react';
import "../css/Concert.css";
import profile from '../images/profile.jpeg';

export default function Concert() {
  return (
    <div className='back-ground'>
            <div className='concert-componet'>
                <span className='chat-q'> <i className="bi bi-chat-quote-fill"></i></span>
                 <div className='text-card-concert'>
                <h1 className='lorem'>Lorem ipsum is simple dummy text of the printing<div className='chat-2'>and typesetting industry.</div></h1></div>
                <div className='bill-1'><img src={profile} alt='' className='bill'></img></div>
                <div className='profile-name'>-Bill Gust, CEO and President</div>

                <div className='btn-circle'><i class="bi bi-play-circle"></i>   View Success Story 
                <span className='concert-icon-arrow'>
                    <i className="bi bi-arrow-left "></i> 
                    <i className="bi bi-arrow-right "></i>
                    </span>
                    </div>

            </div>

            

        </div>
  )
}
