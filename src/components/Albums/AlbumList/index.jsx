import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AlbumList() {
  const [albums, setAlbums] = useState()

  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/albums',
    )
    setAlbums(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {albums &&
        albums.map((album) => {
          return (
            <Link to={`${album.id}`}>
              <p>{album.title}</p>
            </Link>
          )
        })}
    </div>
  )
}

export default AlbumList
