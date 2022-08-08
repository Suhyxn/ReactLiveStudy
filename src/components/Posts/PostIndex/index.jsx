import React from 'react'
import { Link } from 'react-router-dom'
import { postData } from '../../../constants/postData'

function PostIndex() {
  return (
    <div>
      {postData.map((post) => (
        <Link to={`/posts/${post.id}`}>
          <p>{post.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default PostIndex
