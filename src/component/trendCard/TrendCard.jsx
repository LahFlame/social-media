import React from 'react'
import "./trendCard.css"
import { trendData } from '../../data/trendData'

const TrendCard = () => {
  return (
    <div className='trendCard'>
        <h3>Trends for you</h3>
        {
          trendData.map((trend,id) => (
            <div className='trend'>
               <span>#{trend.name}</span>
               <span>{trend.shares}k shares</span>
            </div>
          ))
        }
    </div>
  )
}

export default TrendCard