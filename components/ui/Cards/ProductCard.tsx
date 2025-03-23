"use client"

import { useRouter } from "next/navigation"
import { useMediaQuery, useTheme } from "@mui/material"
import BaseCard from "./BaseCard"
import { ProductCardProps } from "@/types/CardTypes"


const ProductCard = ({
  productId,
  onEdit,
  onPause,
  onDelete,
  onReport,
  cardType,
  ...baseCardProps
}: ProductCardProps) => {
  const router = useRouter()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleCardClick = () => {
    if (cardType !== "rental") {
      router.push(`/products/${productId}`)
    }
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
      cardType={cardType}
      sx={
        cardType === "landing"
          ? {
              width: isMobile ? "100%" : "100%",
              height: isMobile ? 291 : 428,
            }
          : undefined
      }
      imageHeight={cardType === "landing" ? (isMobile ? 120 : 240) : 200}
    />
  )
}

export default ProductCard

