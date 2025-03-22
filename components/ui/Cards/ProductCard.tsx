"use client"

import type React from "react"
import BaseCard, { type BaseCardProps } from "./BaseCard"
import { useRouter } from "next/navigation"
import { useMediaQuery, useTheme } from "@mui/material"

interface ProductCardProps extends Omit<BaseCardProps, "onClick" | "menuItems" | "image"> {
  productId: string
  onEdit?: () => void
  onPause?: () => void
  onDelete?: () => void
  onReport?: () => void
  cardType: "landing" | "listing" | "rental"
  image: string | { src: string } // Mismo tipo que BaseCard
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
    cardType !== "rental" && router.push(`/products/${productId}`)
  }

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
    <BaseCard
      {...baseCardProps}
      id={productId}
      onClick={handleCardClick}
      menuItems={getMenuItems()}
      showMenu={cardType !== "landing"}
      variant={cardType === "landing" ? "vertical" : "horizontal"}
      tags={cardType === "landing" ? [] : baseCardProps.tags}
      sx={cardType === "landing" ? {
        width: isMobile ? "100%" : "100%",
        height: isMobile ? 291 : 428,
      } : undefined}
      imageHeight={cardType === "landing" ? (isMobile ? 120 : 240) : 200}
    />
  )
}

export default ProductCard