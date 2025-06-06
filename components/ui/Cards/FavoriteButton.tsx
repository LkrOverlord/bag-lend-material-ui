"use client"

import type React from "react"

import { useState } from "react"
import { IconButton, useMediaQuery, useTheme } from "@mui/material"
import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material"

interface FavoriteButtonProps {
  id: string
  initialFavorite: boolean
  onToggle?: (id: string) => void
}

export const FavoriteButton = ({ id, initialFavorite, onToggle }: FavoriteButtonProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const [isFavorite, setIsFavorite] = useState(initialFavorite)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setIsFavorite(!isFavorite)
    onToggle?.(id)
  }

  return (
    <IconButton
      size={isMobile ? "small" : "medium"}
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.8)",
        "&:hover": { bgcolor: "background.paper" },
        p: { xs: "4px", sm: "8px" },
        "& svg": {
          fontSize: { xs: "1rem", sm: "1.25rem" },
        },
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
      onClick={handleClick}
    >
      {isFavorite ? <FavoriteIcon sx={{ color: theme.palette.primary.main }} /> : <FavoriteBorderIcon />}
    </IconButton>
  )
}
