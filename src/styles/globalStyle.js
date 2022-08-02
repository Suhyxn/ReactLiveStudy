import { createGlobalStyle } from 'styled-components'
import BlackHanSans from '../assets/fonts/BlackHanSans-Regular.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'BlackHanSans';
    src: url(${BlackHanSans}) format('truetype');
  }
`
// src: format은 확장자 명에 따라서 다르게 작성한다
