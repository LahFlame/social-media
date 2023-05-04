import React from 'react'
import PostSide from '../../component/postSide/PostSide'
import ProfileCard from '../../component/profileCard/ProfileCard'
import ProfileLeft from '../../component/profileLeft/ProfileLeft'
import RightSide from '../../component/rightSide/RightSide'
import "./profile.css"

const Profile = () => {
  return (
    <div className='profile'>
        <ProfileLeft />
        <div className='profileCenter'>
            <ProfileCard />
            <PostSide />
        </div>
        <RightSide/>
    </div>
  )
}

export default Profile