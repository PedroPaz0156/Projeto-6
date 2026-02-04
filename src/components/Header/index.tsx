import logo from '../../assets/images/logo.png'
import { HeaderContainer, HeaderText, LinkText } from './styles'

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <LinkText to="/">
        <HeaderText> Restaurantes</HeaderText>
      </LinkText>
      <img src={logo} alt="efood" />
      <HeaderText>0 produto(s) no carrinho</HeaderText>
    </div>
  </HeaderContainer>
)

export default Header
