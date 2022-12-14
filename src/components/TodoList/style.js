import styled from 'styled-components'

export const TodoContainer = styled.div`
  ${({ theme }) => theme.common.flexColumnStart};

  background-color: ${({ theme }) => theme.palette.Navy};
  border-radius: 10px;
  color: white;
  width: 50rem;
  height: 33rem;
  margin: 3rem auto;

  font-family: 'BlackHanSans';
`

export const TodoTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
`
