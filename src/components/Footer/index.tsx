import { Container, FooterSection, Link, Links } from './styles'

import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

import { Logo } from '../Hero/styles'
import logo from '../../assets/images/logo.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Logo src={logo} alt="efood" />
        <Links>
          <li>
            <Link>
              <img src={instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={facebook} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twitter} alt="Twitter" />
            </Link>
          </li>
        </Links>
        <p>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </p>
      </FooterSection>
    </div>
  </Container>
)

export default Footer
