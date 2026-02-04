import styled from 'styled-components'

import hero from '../../assets/images/Hero.png'

export const HeroContainer = styled.div`
  background-image: url(${hero});
  width: 100%;
  height: 384px;
  margin: 0 auto;
  position: relative;
`

export const Logo = styled.img`
  align-items: center;
  width: 124px;
  height: 56px;
  margin-top: 40px;
`

export const Titulo = styled.h1`
  width: 540px;
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
`
