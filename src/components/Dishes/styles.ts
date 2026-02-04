import styled from 'styled-components'
import { cores } from '../../styles'

export const DishCard = styled.div`
  background-color: ${cores.vermelho};
  color: ${cores.branco};
  padding: 8px;
  width: 480px;
  position: relative;
  font-size: 14px;
  border: 2px solid ${cores.vermelho};

  img {
    width: 100%;
    height: 280px;
  }

  div {
    padding: 8px;
  }
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
  font-size: 14px;
  display: block;
`

export const Botao = styled.button`
  background-color: ${cores.branco};
  color: ${cores.vermelho};
  width: 100%;
  cursor: pointer;
  border: transparent;
  font-weight: bold;
`
