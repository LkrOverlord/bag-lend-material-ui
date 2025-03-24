import type { SxProps, Theme } from "@mui/material"

// Base types for all cards
export type CardVariant = "vertical" | "horizontal"
export type CardType = "landing" | "listing" | "rental" | "favorite";
export type CardStatus = "pending" | "active" | "paused"

// Menu item type
export interface CardMenuItem {
  label: string
  action: () => void
  color?: string
}

// Base card props that are common to all card types
export interface BaseCardProps {
  id: string
  title: string
  image: string | { src: string }
  price: number
  currency?: string
  period?: string
  location?: string
  rating?: number
  tags?: string[]
  status?: CardStatus
  isFavorite?: boolean
  onFavoriteToggle?: (id: string) => void
  onClick?: () => void
  menuItems?: CardMenuItem[]
  variant?: CardVariant
  showRating?: boolean
  showLocation?: boolean
  showFavorite?: boolean
  showMenu?: boolean
  imageHeight?: number | string
  sx?: SxProps<Theme>
}

// Product card specific props
export interface ProductCardProps extends Omit<BaseCardProps, "onClick" | "menuItems" | "variant"> {
  productId: string
  onEdit?: () => void
  onPause?: () => void
  onDelete?: () => void
  onReport?: () => void
  cardType: CardType
}

