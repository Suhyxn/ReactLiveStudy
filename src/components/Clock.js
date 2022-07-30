import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

function Clock() {
  const [time, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'))

  useEffect(() => {
    setTimeout(() => {setTime(moment().format('YYYY-MM-DD HH:mm:ss'))}, 1000)
  }, [time])

  return (
    <>
    <div>{ time }</div>
    </>
  )
}

export default Clock