import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  background-color: ${cores.branco};
  color: ${cores.vermelho};
  width: 480px;
  position: relative;
  font-size: 14px;
  border: 2px solid ${cores.vermelho};
  text-decoration: none;

  img {
    width: 100%;
    height: 280px;
  }

  div {
    padding: 8px;
  }
`
export const Tags = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`

export const Texto = styled.div`
  padding: 8px;
`

export const Titulo = styled.div`
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
    margin-left: 8px;
  }
`

export const Descricao = styled.div`
  line-height: 22px;
  display: block;
`
export const Botao = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  cursor: pointer;
  border: transparent;
  font-weight: bold;
  padding: 8px;
`
