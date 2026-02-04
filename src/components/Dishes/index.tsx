import { Descricao, DishCard, Titulo, Botao } from './styles'

type Props = {
  title: string
  description: string
  image: string
  id?: number
}

const Dishes = ({ title, description, image }: Props) => (
  <DishCard>
    <img src={image} alt="" />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>Adicionar ao carrinho</Botao>
  </DishCard>
)

export default Dishes
