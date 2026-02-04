import logo from '../../assets/images/logo.png'
import { HeroContainer, Logo, Titulo } from './styles'

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <Logo src={logo} alt="efood" />
      <Titulo>Viva experiências gastronômicas no conforto da sua casa</Titulo>
    </div>
  </HeroContainer>
)

export default Hero
