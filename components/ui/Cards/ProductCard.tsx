"use client"

import { useRouter } from "next/navigation"
import { useMediaQuery, useTheme } from "@mui/material"
import { CardMenuItem, ProductCardProps } from "@/types/Product"
import BaseCard from "./BaseCard"


const ProductCard = ({
  product,
  onEdit,
  onPause,
  onDelete,
  onReport,
  onFavoriteToggle,
  cardType,
  onClick,
}: ProductCardProps) => {
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // Card click handler based on card type
  const handleCardClick = () => {
    if (cardType === "landing" || cardType === "favorite") {
      router.push(`/products/${product.id}`)
      return
    }
    if (cardType === "rental" && onClick) {
      onClick() // Execute provided onClick for rental
      return
    }
    // For listing, we don't do anything on card click
  }

  // Get appropriate menu items based on card type
  const getMenuItems = (): CardMenuItem[] => {
    switch (cardType) {
      case "listing":
        return [
          { label: "Edit", action: () => onEdit?.(product.id) },
          { label: "Pause", action: () => onPause?.(product.id) },
          { label: "Delete", action: () => onDelete?.(product.id), color: theme.palette.error.main },
        ]
      case "rental":
        return [{ label: "Report problem", action: () => onReport?.(product.id) }]
      default:
        return []
    }
  }

  // Determine card variant (vertical or horizontal)
  const getCardVariant = () => {
    if (cardType === "landing") return "vertical"
    if (cardType === "favorite" || cardType === "rental" || cardType === "listing") {
      return isMobile ? "horizontal" : "vertical"
    }
    return "vertical" // Default
  }

  // Card style based on type and device
  const getCardStyle = () => {
    if (cardType === "landing") {
      return {
        width: "100%",
        height: isMobile ? 320 : 400,
      }
    }

    if (cardType === "favorite" && isMobile) {
      return {
        width: "100%",
        height: 120,
      }
    }

    return {
      width: "100%",
    }
  }

  // Determine if we should show the menu
  const shouldShowMenu = cardType === "rental" || cardType === "listing"

  // Only pass onFavoriteToggle for cards that need it
  const shouldPassFavoriteToggle = cardType === "favorite" || cardType === "landing"

  return (
    <BaseCard
      product={product}
      onClick={handleCardClick}
      menuItems={getMenuItems()}
      showMenu={shouldShowMenu}
      variant={getCardVariant()}
      cardType={cardType}
      sx={getCardStyle()}
      imageHeight={cardType === "landing" ? (isMobile ? 180 : 240) : isMobile ? 120 : 200}
      onFavoriteToggle={shouldPassFavoriteToggle ? onFavoriteToggle : undefined}
      showRating={cardType !== "listing"}
      showLocation={cardType !== "listing"}
    />
  )
}

export default ProductCard
