import { createGlobalStyle } from 'styled-components'

export const cores = {
  branco: '#fff',
  fundo: '#fff8f2',
  salmao: '#ffebd9',
  vermelho: '#e66767'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundo};
    color:${cores.vermelho};
  }

  .container {
  display: flex;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  }
`
