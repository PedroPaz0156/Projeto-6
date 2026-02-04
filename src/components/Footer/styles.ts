import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.salmao};
  padding: 32px 0px;
  margin: 0 auto;
  font-size: 14px;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
`

export const Link = styled.a`
  text-decoration: none;
  margin-right: 8px;
  cursor: pointer;
`

export const FooterSection = styled.div`
  margin: 0 auto;
  margin-bottom: 64px;
  text-align: center;
`
