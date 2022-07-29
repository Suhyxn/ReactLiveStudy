import React, { useState } from 'react'

function Intro() {
  // const [변수명, set변수명] = useState(변수의 초기값)
  const [test, setTest] = useState(0)
  const countUp = () => {
    setTest(test+1)
    console.log(test)
  }

  const countDown = () => {
    setTest(test-1)
    console.log(test)
  }

  return (
    <div>
      {test}
      <button onClick={countUp}>카운트업!</button>
      <button onClick={countDown}>카운트다운!</button>
    </div>
  )
}

Intro.defaultProps = {
  name: '기본 이름'
}

export default Intro