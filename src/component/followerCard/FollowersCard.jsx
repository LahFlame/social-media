import React from 'react'
import "./followersCard.css"
import { Followers } from '../../data/followersData'

const FollowersCard = () => {
  return (
    <div className='followersCard'>
        <h3>Who is following you</h3>
        {
            Followers.map((follower,id)=>{
                 return(
                    <div className='follower' key={id}>
                        <div>
                            <img src={follower.img} alt="" className='followerImg' />
                            <div className="name">
                                <span>
                                    {follower.name}
                                </span>
                                <span>
                                    @{follower.username}
                                </span>
                            </div>
                        </div>
                        <button className='button fc-button'>
                            Follow
                        </button>
                    </div>
                 )
            }

            )
        }
    </div>
  )
}

export default FollowersCard;