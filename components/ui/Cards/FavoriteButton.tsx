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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [isFavorite, setIsFavorite] = useState(initialFavorite)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setIsFavorite(!isFavorite)
    onToggle?.(id)
  }

  return (
    <IconButton
      size={isMobile ? "small" : "medium"} // Tamaño responsive
      sx={{
        bgcolor: "background.paper",
        "&:hover": { bgcolor: "background.default" },
        p: { xs: '4px', sm: '8px' }, // Padding responsive
        '& svg': {
          fontSize: { xs: '1rem', sm: '1.25rem' } // Tamaño de ícono
        }
      }}
      onClick={handleClick}
    >
      {isFavorite ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};