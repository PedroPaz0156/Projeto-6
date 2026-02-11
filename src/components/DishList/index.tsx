import { useState } from 'react'
import Dish from '../../models/Dish'
import Dishes from '../Dishes'
import {
  Container,
  List,
  Modal,
  ModalBotao,
  ModalCard,
  ModalContent,
  ModalImg,
  BannerPerfil
} from './styles'

type Props = {
  dishes: Dish[]
  nomePerfil: string
  categoria: string
  imagePerfil: string
}

interface ModalState {
  isVisible: boolean
  name: string
  url: string
}

const DishList = ({ dishes, nomePerfil, categoria, imagePerfil }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    name: '',
    url: ''
  })

  const closeModal = () =>
    setModal({
      isVisible: false,
      name: '',
      url: ''
    })

  return (
    <>
      <Container>
        <BannerPerfil className="overlay">
          <img src={imagePerfil} alt="imagem do restaurante" />
          <div className="container">
            <h2 className="categoria">{categoria}</h2>
            <h2>{nomePerfil}</h2>
          </div>
        </BannerPerfil>
        <div className="container">
          <List>
            {dishes.map((dish) => (
              <li
                key={dish.id}
                onClick={() => {
                  setModal({
                    isVisible: true,
                    name: dish.title,
                    url: dish.image
                  })
                }}
              >
                <Dishes
                  title={dish.title}
                  description={dish.description}
                  image={dish.image}
                />
              </li>
            ))}
          </List>
        </div>
      </Container>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalCard className="container">
          <ModalImg src={modal.url} alt="Imagem do prato" />
          <ModalContent>
            <h3>Pizza Marguerita</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br />
              Serve: de 2 a 3 pessoas
            </p>
            <ModalBotao>Adicionar ao carrinho - 60,90</ModalBotao>
          </ModalContent>
        </ModalCard>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}
export default DishList
