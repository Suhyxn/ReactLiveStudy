import React, { useState, useRef, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(60)
  const [isClicked, setIsClicked] = useState(false)
  const inputRef = useRef()

  const inputHandler = () => {
    const { value } = inputRef.current
    setSeconds(value)
  }

  useEffect(() => {
    if (isClicked) {
      const countDown = setTimeout(() => {
        if (seconds > 0) {
          // 초가 0보다 크면, 1을 감소시킵니다.
          setSeconds(seconds - 1)
        } else if (seconds === 0) {
          // 만약에 초가 0이 되면, 해당 함수가 실행되는 걸 그만해주세요!
          clearTimeout(countDown)
        }
      }, 1000)
      // 페이지에서 벗어나면, 해당 함수도 이제는 작동하지 않도록 없애주세요!
      return () => clearTimeout(countDown)
    }
  }, [seconds, isClicked])

  return (
    <div>
      <input
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            inputHandler()
          }
        }}
      ></input>
      <button onClick={inputHandler}>타이머 설정</button>
      <h1>우리의 타이머</h1>
      <h1>{seconds}</h1>
      <button onClick={() => setIsClicked(true)}>타이머 시작</button>
      <button onClick={() => setIsClicked(false)}>타이머 중지</button>
    </div>
  )
}

export default Timer
