"use client"

import { Box, Card, CardContent, Rating, Typography, useMediaQuery, useTheme } from "@mui/material"
import { LocationOn as LocationOnIcon } from "@mui/icons-material"


import { BaseCardProps, CardType } from "@/types/CardTypes"
import { FavoriteButton } from "./FavoriteButton"
import { TagDisplay } from "./TagDisplay"
import { CardMenu } from "./CardMenu"

interface EnhancedBaseCardProps extends BaseCardProps {
  cardType: CardType
}

const BaseCard = ({
  id,
  title,
  image,
  price,
  currency = "USD",
  period = "day",
  location,
  rating,
  tags = [],
  status,
  isFavorite = false,
  onFavoriteToggle,
  onClick,
  menuItems = [],
  variant = "vertical",
  showRating = true,
  showLocation = true,
  showFavorite = true,
  showMenu = true,
  imageHeight = 200,
  sx = {},
  cardType,
}: EnhancedBaseCardProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // Image handling for both string and object formats
  const imageUrl = typeof image === "string" ? image : image.src

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: variant === "vertical" ? "column" : "row",
        cursor: onClick ? "pointer" : "default",
        position: "relative",
        height: "428px",
        width: "100%",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          height: 291,
        },
        "&:hover": {
          boxShadow: theme.shadows[4],
        },
        ...sx,
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          height: variant === "vertical" ? imageHeight : "100%",
          width: variant === "horizontal" ? { xs: 120, sm: 150 } : "100%",
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: variant === "vertical" ? "12px" : 0,
          borderTopRightRadius: variant === "vertical" ? "12px" : 0,
          position: "relative",
        }}
      >
        {/* Favorite Button */}
        {showFavorite && <FavoriteButton id={id} initialFavorite={isFavorite} onToggle={onFavoriteToggle} />}

        {/* Tag Display - only show if there are tags */}
        {tags.length > 0 && tags[0] && <TagDisplay tag={tags[0]} cardType={cardType} />}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          position: "relative",
        }}
      >
        {/* Menu */}
        {showMenu && menuItems.length > 0 && <CardMenu menuItems={menuItems} />}

        <CardContent sx={{ flexGrow: 1, pb: 1 }}>
          <Typography variant="h6" component="h2" gutterBottom noWrap>
            {title}
          </Typography>

          {/* Location */}
          {showLocation && location && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
              <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
              <Typography variant="body2" color="text.secondary" noWrap>
                {location}
              </Typography>
            </Box>
          )}

          {/* Rating */}
          {showRating && rating !== undefined && (
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Rating value={rating} precision={0.5} size="small" readOnly />
              <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                {rating}
              </Typography>
            </Box>
          )}

          {/* Price */}
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mt: "auto" }}>
            ${price} {currency}/{period}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default BaseCard

