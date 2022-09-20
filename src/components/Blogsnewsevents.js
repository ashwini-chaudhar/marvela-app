import React from 'react'
import Blogs from './Blogs'
import Features from './Feature'
import '../css/Blogsnewsevents.css'
import News from './News'


export default function Blogsnewsevents() {
  return (
    <div className='blogs-news-events padding-tb'>
      Blogs/News/Events
      <h1 className="text"> Latest<span className="colour"> Insights</span> </h1>

      <div className='bne-row'>
        <div className='feature-column'>
          <Features />
        </div>

        <div className='blognews-column'>
          <Blogs />
          <News />
        </div>
      </div>

    </div>
  )
}
