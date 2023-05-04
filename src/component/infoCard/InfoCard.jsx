import React from 'react'
import "./infoCard.css"
import { UilPen } from "@iconscout/react-unicons"

const InfoCard = () => {
  return (
    <div className='infoCard'>
        <div className='infoHead'>
            <h4>Your name</h4>
            <UilPen width="2rem" height="1.2rem" />
        </div>
        <div className='info'>
            <span><b>Status </b></span>
            <span>in Relationship</span>
        </div>
        <div className='info'>
            <span><b>Lives in </b></span>
            <span>Kano</span>
        </div>
        <div className='info'>
            <span><b>Works at </b></span>
            <span>Zainkeepscode inc</span>
        </div>
        <button className='button lButton'>
            Logout
        </button>
    </div>
  )
}

export default InfoCard