import styled from 'styled-components'

import fundo from '../../assets/images/Hero.png'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  background-image: url(${fundo});
  padding: 24px;
  border-radius: 16px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
  }
`

export const LinkText = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const HeaderText = styled.p`
  font-weight: bold;
  font-size: 18px;
`
