"use client"

import { Box, Card, CardContent, Rating, Typography, useMediaQuery, useTheme } from "@mui/material"
import { LocationOn as LocationOnIcon } from "@mui/icons-material"

import { BaseCardProps, CardType } from "@/types/CardTypes"
import { FavoriteButton } from "./FavoriteButton"
import { TagDisplay } from "./TagDisplay"
import { CardMenu } from "./CardMenu"
import { height } from "@mui/system"

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
  const isLanding = cardType === "landing";

  // Nueva lógica simplificada
  const getFlexDirection = () => {
    if (isLanding) return "column"; // Siempre vertical
    return isMobile ? "row" : "column"; // Horizontal en mobile para no-landing
  };

  const getTextSize = (mobileSize: string, desktopSize: string) =>
    isLanding ? desktopSize : { xs: mobileSize, sm: desktopSize };

  // Image handling for both string and object formats
  const imageUrl = typeof image === "string" ? image : image.src

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: getFlexDirection(),
        // height: cardType === "favorite" && isMobile ? 120 :
        height: {
          xs: cardType === "favorite" ? "auto" : 291, // Altura automática para favoritos
          sm: isLanding ? 550 : 428 // Altura personalizada para desktop
        },
        minHeight: cardType === "favorite" ? 140 : "unset", // Altura mínima para mobile
        // variant === "vertical" ? 428 : "auto",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          ...(!isLanding && { height: 120 })
        },
        ...sx,
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          width: !isLanding && isMobile ? 120 : "100%",
          height: isLanding ? 240 : isMobile ? 140 : 240,

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
          {tags.length > 0 && tags[0] && cardType !== "favorite" && ( // Cambio aquí
            <TagDisplay tag={tags[0]} />
          )}
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

        <CardContent sx={{
          flexGrow: 1,  // Padding vertical reducido en mobile
          px: { xs: 1, sm: 2 },
          padding: { xs: 1, sm: 4 },
          '&:last-child': {
            paddingBottom: { xs: 1, sm: 1 }
          }
        }}>
          <Box sx={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>

            {/* Title/Name - Using variant h6 that matches the style specs */}
            <Typography
              variant="h6"
              component="h2"
              noWrap
              color="text.primary"
              sx={{
                fontSize: getTextSize("0.875rem", "1.2rem"),
                fontWeight: isLanding ? 700 : 600
              }}
            >
              {title}
            </Typography>

            {cardType === "rental" && tags.length > 0 && tags[0] && (
              <Box sx={{ mb: 1 }}>
                <TagDisplay tag={tags[0]} />
              </Box>
            )}

            {/* Content section (location and rating) */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 0, sm: 1 }, flex: 1, justifyContent: "center", margin: 0, padding: 0 }}>

              {/* Location - Using subtitle2 for the semi-bold medium text style */}
              {showLocation && location && (
                <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                  <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    noWrap
                    sx={{
                      fontSize: getTextSize("0.875rem", "1.125rem")
                    }}
                  >
                    {location}
                  </Typography>
                </Box>
              )}

              {/* Rating - Using subtitle2 for the semi-bold medium text style */}
              {showRating && rating !== undefined && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Rating value={rating} precision={0.5} size="small" readOnly />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{
                      fontSize: getTextSize("0.875rem", "1.125rem")
                    }}
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
              sx={{
                fontSize: getTextSize("0.875rem", "1.125rem")
              }}
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