import Tag from '../Tag'
import estrela from '../../assets/images/estrela.svg'
import { Card, Descricao, Titulo, Tags, Botao, Texto } from './styles'

type Props = {
  title: string
  rating?: string
  description: string
  tags?: string[]
  image: string
  id?: number
}

const Restaurant = ({ title, rating, description, tags, image }: Props) => (
  <Card to={`/perfil/${title}`}>
    <img src={image} />
    <Tags>
      {tags?.map((tag) => (
        <Tag key={title}>{tag}</Tag>
      ))}
    </Tags>

    <Texto>
      <Titulo>
        {title}
        <span>
          {rating}
          <img src={estrela} alt="estrela de avaliação" />
        </span>
      </Titulo>
      <Descricao>{description}</Descricao>
      <Botao type="primary">Saiba mais</Botao>
    </Texto>
  </Card>
)

export default Restaurant
