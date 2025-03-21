"use client"

import type React from "react"
import BaseCard, { type BaseCardProps } from "./BaseCard"
import { useRouter } from "next/navigation"
import { useMediaQuery, useTheme } from "@mui/material"

interface ProductCardProps extends Omit<BaseCardProps, "onClick" | "menuItems"> {
  productId: string
  onEdit?: () => void
  onPause?: () => void
  onDelete?: () => void
  onReport?: () => void
  cardType: "landing" | "listing" | "rental"
}

const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  onEdit,
  onPause,
  onDelete,
  onReport,
  cardType,
  ...baseCardProps
}) => {
  const router = useRouter()
  const theme = useTheme()
const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleCardClick = () => {
    if (cardType === "rental") {
      // Open drawer or side menu for rentals
      // This would be implemented in the parent component
    } else {
      // Navigate to product detail page for landing and listings
      router.push(`/products/${productId}`)
    }
  }

  // Configure menu items based on card type
  const getMenuItems = () => {
    switch (cardType) {
      case "listing":
        return [
          { label: "Edit", action: onEdit || (() => {}) },
          { label: "Pause", action: onPause || (() => {}) },
          { label: "Delete", action: onDelete || (() => {}), color: "error.main" },
        ]
      case "rental":
        return [{ label: "Report problem", action: onReport || (() => {}) }]
      default:
        return []
    }
  }

  return (
    // <BaseCard
    //   {...baseCardProps}
    //   id={productId}
    //   onClick={handleCardClick}
    //   menuItems={getMenuItems()}
    //   showMenu={cardType !== "landing"}
    //   variant={cardType === "landing" ? "vertical" : "horizontal"}
    // />
    <BaseCard
    {...baseCardProps}
    id={productId}
    onClick={handleCardClick}
    menuItems={getMenuItems()}
    showMenu={cardType !== "landing"}
    variant={cardType === "landing" ? "vertical" : "horizontal"}
    sx={cardType === "landing" ? {
      width: isMobile ? 171 : 325,
      height: isMobile ? 291 : 428,
      '& .MuiCardMedia-root': {
        height: isMobile ? 120 : 240
      }
    } : undefined}
    imageHeight={cardType === "landing" ? (isMobile ? 120 : 240) : 200}
  />
  )
}

export default ProductCard

