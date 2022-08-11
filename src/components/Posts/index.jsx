import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

function Posts() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div>
      <p>Posts</p>
      <Outlet />
      {location.pathname}
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </div>
  )
}

export default Posts
