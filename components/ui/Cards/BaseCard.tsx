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
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Top section with favorite button and tag */}
        <Box sx={{ 
          display: "flex", 
          justifyContent: "space-between", 
          padding: 1,
          height: "auto"
        }}>
          {/* Favorite Button */}
          {showFavorite && <FavoriteButton id={id} initialFavorite={isFavorite} onToggle={onFavoriteToggle} />}

          {/* Tag Display - only show if there are tags */}
          {tags.length > 0 && tags[0] && <TagDisplay tag={tags[0]} cardType={cardType} />}
        </Box>
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
        {showMenu && menuItems.length > 0 && (
          <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
            <CardMenu menuItems={menuItems} />
          </Box>
        )}

        <CardContent sx={{ flexGrow: 1, py: 2 }}>
          <Box sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>

            {/* Title/Name - Using variant h6 that matches the style specs */}
            <Typography 
              variant="h6" 
              component="h2" 
              noWrap
              color="text.primary"
              sx={{ 
                fontWeight: 600,
                mb: 1
              }}
            >
              {title}
            </Typography>

            {/* Content section (location and rating) */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, flex: 1, justifyContent: "center", margin: 0, padding: 0 }}>

              {/* Location - Using subtitle2 for the semi-bold medium text style */}
              {showLocation && location && (
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                  <Typography 
                    variant="subtitle2" 
                    color="text.secondary" 
                    noWrap
                  >
                    {location}
                  </Typography>
                </Box>
              )}

              {/* Rating - Using subtitle2 for the semi-bold medium text style */}
              {showRating && rating !== undefined && (
                <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                  <Rating value={rating} precision={0.5} size="small" readOnly />
                  <Typography 
                    variant="subtitle2" 
                    color="text.secondary" 
                    sx={{ ml: 0.5 }}
                  >
                    {rating}
                  </Typography>
                </Box>
              )}

            </Box>

            {/* Price - Using subtitle1 for the semi-bold large text style */}
            <Typography 
              variant="subtitle1" 
              component="div"
              color="text.primary"
            >
              ${price} {currency}/{period}
            </Typography>
          </Box>
        </CardContent>

      </Box>
    </Card>
  )
}

export default BaseCard