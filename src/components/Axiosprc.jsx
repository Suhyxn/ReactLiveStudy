import React, { useEffect, useState } from 'react'
import axios from 'axios'

function AxiosPrc() {
  const [posts, setPosts] = useState(null)
  const getPost = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      { title: 'Title', body: 'Body', userId: 1 },
    )
    console.log(response.data)
  }

  useEffect(() => {
    getPost()
  }, [])

  return <div>{posts && posts.map((post) => <p>{post.title}</p>)}</div>
}

export default AxiosPrc
