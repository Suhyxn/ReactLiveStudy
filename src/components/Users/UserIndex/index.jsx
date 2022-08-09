import React from 'react'
import { Link } from 'react-router-dom'
import { userData } from '../../../constants/userData'

function UserIndex() {
  return (
    <div>
      {userData.map((user) => (
        <Link to={`/user/${user.id}`}>
          <p>{user.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default UserIndex
