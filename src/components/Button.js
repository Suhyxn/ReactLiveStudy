import React from 'react'
import style from '../styles/Button.module.css'

function Button() {
  return (
    <button className={`${style.Button} ${style.large}`}>
      <p>Button</p>
    </button>
  )
}

export default Button
