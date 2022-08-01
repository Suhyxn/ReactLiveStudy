import React, { useState } from 'react'

function Handlers() {
  const [number, setNumber] = useState(0)

  const changeHandler = (e) => {
    if (e.key === 'Enter') {
    setNumber(10)
    }
  }

  return (
    <div>
      <input onKeyDown={changeHandler}></input> 
      {/* onClick onChange onFocus onBlur ...*/}
      <p>{number}</p>
    </div>
  )
}

export default Handlers