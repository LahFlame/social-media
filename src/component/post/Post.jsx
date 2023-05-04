import React from 'react'
import "./post.css"
import Comment from "../../img/comment.png"
import Share from "../../img/share.png"
import Heart from "../../img/like.png"
import notLike from "../../img/notlike.png"

const Post = ({img,name,desc,likes,liked}) => {
  return (
    <div className='post'>
        <img src={img} alt="" />
        <div className="postReact">
            <img src={liked?Heart:notLike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>
        <span style={{color: "gray",fontSize: "12px"}}>{likes} likes</span>
        <div className="details">
            <span><b>{name}</b> </span>
            <span>{desc}</span>
        </div>
    </div>
  )
}

export default Post