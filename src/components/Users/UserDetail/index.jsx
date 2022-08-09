import React from 'react'
import { useParams } from 'react-router-dom'
import { userData } from '../../../constants/userData'

function UserDetail() {
  const params = useParams()
  const user = userData.find((user) => user.id === parseInt(params.postId))

  return (
    <div>
      <p>{user.title}</p>
      <p>{user.body}</p>
    </div>
  )
}

export default UserDetail
