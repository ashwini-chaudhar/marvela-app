import React from 'react'
import '../css/News.css'
import news from '../images/news.png'

export default function News() {
  return (
    <div className='news-section'>
      <div className='news-images'>
        <img src={news} alt='news' />
      </div>
      <div className="news-section-desciption">
      <div className='news-min-read'>
        NEWS | 4 min read
        <div className='news-description'>
          Lorem Ipsum is simply dummy 
          text of the printing and 
          typesetting industry.
        </div>
        <div className='december-14-2021'>
          December 14, 2021
        </div>
      </div>
      </div>

    </div>
  )
}
