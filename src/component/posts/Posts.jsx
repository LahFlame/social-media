import React from 'react'
import "./posts.css"
import { PostData } from '../../data/postsData'
import Post from '../post/Post'

const Posts = () => {
  return (
    <div className='posts'>
        {
            PostData.map((post,id) =>  <Post {...post} /> )
        }
    </div>
  )
}

export default Posts