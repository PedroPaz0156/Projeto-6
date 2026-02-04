import Dish from '../../models/Dish'
import Dishes from '../Dishes'
import { Container, List } from './styles'

type Props = {
  dishes: Dish[]
}

const DishList = ({ dishes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {dishes.map((dish) => (
          <Dishes
            key={dish.id}
            title={dish.title}
            description={dish.description}
            image={dish.image}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default DishList
