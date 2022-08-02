import React, { useState } from 'react'
import * as S from './style'

function Button() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <S.Button isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
      {isClicked ? <p>Click!</p> : <p>Not Click!</p>}
    </S.Button>
  )
}

export default Button
