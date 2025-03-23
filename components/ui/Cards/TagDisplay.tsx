"use client"

import { CardType } from "@/types/CardTypes"
import { Box, Chip, useTheme } from "@mui/material"

interface TagDisplayProps {
  tag: string
  cardType: CardType
}

export const TagDisplay = ({ tag, cardType }: TagDisplayProps) => {
  const theme = useTheme()

  // For landing cards, use custom styled tag
  if (cardType === "landing") {
    return (
      <Box
        sx={{
          display: "flex",
          height: "28px",
          padding: "4px 8px",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          borderRadius: "4px",
          border: `1px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.mode === "light" ? "#FFF" : theme.palette.background.paper,
          color: theme.palette.primary.main,
          fontSize: "14px",
          fontWeight: 500,
        }}
      >
        {tag}
      </Box>
    )
  }

  // For other card types, use standard Chip
  return (
    <Chip
      label={tag}
      color="primary"
      variant="filled"
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      }}
    />
  )
}