import React, { useState } from 'react'
import "./rightSide.css"
import Home from "../../img/home.png"
import Noti from "../../img/noti.png"
import Comment from "../../img/comment.png"
import { UilSetting } from "@iconscout/react-unicons"
import TrendCard from '../trendCard/TrendCard'
import ShareModal from '../shareModal/ShareModal'

const RightSide = () => {
  const [modalOpened,setModalOpened] = useState(false);
  return (
    <div className='rightSide'>
        <div className='navIcon'>
            <img src={Home} alt="" />
            <UilSetting />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard />
        <button className='button rButton' onClick={() => setModalOpened(true)}>
            Share
        </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  )
}

export default RightSide