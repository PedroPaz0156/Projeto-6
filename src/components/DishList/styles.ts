import styled from 'styled-components'
import { cores } from '../../styles'
import { Botao } from '../Dishes/styles'

export const Container = styled.section`
  padding: 0px;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`

export const BannerPerfil = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, 0.7);
  margin-bottom: 40px;

  img {
    position: fixed;
    z-index: -1;
    height: 280px;
    width: 100%;
    object-fit: cover;
  }

  .container {
    height: 280px;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    padding: 16px;
    color: ${cores.branco};
    font-size: 32px;
    font-weight: 900;
  }

  .categoria {
    font-weight: 100;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalImg = styled.img`
  display: block;
  padding: 8px 16px;
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const ModalCard = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  padding: 16px;
  position: relative;
  border: 2px solid ${cores.vermelho};
  position: relative;
  z-index: 1;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    padding: 8px 16px;
    line-height: 22px;
  }
`

export const ModalBotao = styled(Botao)`
  background-color: ${cores.salmao};
  width: 33%;
  padding: 8px;
  font-size: 14px;
`
