import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity:  0
  }
  to {
    opacity: 1
  }
`

export const Button = styled.button`
  outline: none;
  border: none;

  ${({ theme }) => theme.common.flexCenter}

  background-color: ${({ theme }) => theme.palette.orange};
  border-radius: 10px;
  color: white;
  width: 100px;

  margin: 10px;

  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;

  animation-name: ${fadeIn};
  animation-duration: 1s;
  animation-timing-function: ease-out;
`
