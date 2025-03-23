"use client"

import type React from "react"

import { useState } from "react"
import { IconButton, useTheme } from "@mui/material"
import { Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material"

interface FavoriteButtonProps {
  id: string
  initialFavorite: boolean
  onToggle?: (id: string) => void
}

export const FavoriteButton = ({ id, initialFavorite, onToggle }: FavoriteButtonProps) => {
  const theme = useTheme()
  const [isFavorite, setIsFavorite] = useState(initialFavorite)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setIsFavorite(!isFavorite)
    onToggle?.(id)
  }

  return (
    <IconButton
      sx={{
        bgcolor: "background.paper",
        "&:hover": { bgcolor: "background.default" },
      }}
      onClick={handleClick}
    >
      {isFavorite ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon />}
    </IconButton>
  )
}