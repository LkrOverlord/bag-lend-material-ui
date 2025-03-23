import { ProductStatus } from "./ProductStatus"

export interface Product {
    id: string
    title: string
    image: string | { src: string }
    price: number
    location?: string
    rating?: number
    tags?: string[]
    status?: ProductStatus
    isFavorite?: boolean
  }