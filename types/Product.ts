export enum ProductStatus {
  Active = "active",
  Pending = "pending",
  Cancelled = "cancelled",
  Closed = "closed",
}

export type CardType = "landing" | "rental" | "listing" | "favorite" | "rentalDrawer"

export interface ProductImage {
  src: string
  alt?: string
}

export interface Product {
  id: string
  title: string
  image: string | ProductImage
  price: number
  currency?: string
  period?: string
  location?: string
  rating?: number
  tags?: string[]
  isFavorite?: boolean
  status?: ProductStatus
  handType?: "left-handed" | "right-handed"
}

export interface BaseCardProps {
  product: Product
  menuItems?: CardMenuItem[]
  variant?: "vertical" | "horizontal"
  showRating?: boolean
  showLocation?: boolean
  showMenu?: boolean
  imageHeight?: number
  sx?: any
  cardType: CardType
  onFavoriteToggle?: (id: string) => void
  onClick?: () => void
}

export interface ProductCardProps {
  product: Product
  cardType: CardType
  onFavoriteToggle?: (id: string) => void
  onEdit?: (id: string) => void
  onPause?: (id: string) => void
  onDelete?: (id: string) => void
  onReport?: (id: string) => void
  onClick?: () => void
}

export interface CardMenuItem {
  label: string
  action: () => void
  color?: string
}
