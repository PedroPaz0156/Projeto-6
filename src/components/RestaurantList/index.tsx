import Restaurante from '../../models/Restaurante'
import Restaurant from '../Restaurant'
import { Container, List } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const RestaurantList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurant
            key={restaurante.id}
            rating={restaurante.rating}
            description={restaurante.description}
            image={restaurante.image}
            tags={restaurante.tags}
            title={restaurante.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantList
