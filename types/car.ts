export type CarType = {
  id: string
  name: string
  type: string
  carType: string
  image?: string
  images?: string[]
  price: number
  seats: number
  transmission: string
  fuelType: string
  featured?: boolean
  description?: string
  available?: boolean
  features?: string[]
  reviews?: Review[]
}

export type Review = {
  id: string
  rating: number
  comment: string
  userName: string
  date: string
}
