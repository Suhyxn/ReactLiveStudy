import React, { useState } from 'react'
import moment from 'moment-timezone'

function Clock(props) {
  const {timezone, newTz} = props
  const [time, setTime] = useState(moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss'))

  const changeTz = (Tz) => {
    setTime(moment().tz(Tz).format('YYYY-MM-DD HH:mm:ss'))
  }

  return (
    <>
    <div>{ time }</div>
    <button onClick={ () => changeTz(newTz) }>{newTz}로 바꾸기</button>
    </>
  )
}

export default Clock