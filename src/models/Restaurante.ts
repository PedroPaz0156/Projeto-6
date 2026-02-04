class Restaurante {
  rating?: string
  description: string
  image: string
  tags?: string[]
  title: string
  id: number

  constructor(
    id: number,
    rating: string,
    image: string,
    tags: string[],
    description: string,
    title: string
  ) {
    this.id = id
    this.rating = rating
    this.image = image
    this.tags = tags
    this.description = description
    this.title = title
  }
}

export default Restaurante
