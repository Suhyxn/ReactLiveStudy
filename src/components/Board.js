import React from 'react'
import { data } from '../constant/data'

function Board() {
  return (
    <>
    <h3>{ data.title }</h3>
    <p>{ data.content }</p>
    </>
  )
}

export default Board