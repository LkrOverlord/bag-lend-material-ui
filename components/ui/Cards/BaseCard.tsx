"use client"

import { Box, Button, Card, CardContent, Rating, Typography, useMediaQuery, useTheme } from "@mui/material"
import { LocationOn as LocationOnIcon } from "@mui/icons-material"
import { BaseCardProps, ProductStatus } from "@/types/Product"
import { FavoriteButton } from "./FavoriteButton"
import { TagDisplay } from "./TagDisplay"
import { CardMenu } from "./CardMenu"


const BaseCard = ({
  product,
  menuItems = [],
  variant = "vertical",
  showRating = true,
  showLocation = true,
  showMenu = false,
  imageHeight = 200,
  sx = {},
  cardType,
  onFavoriteToggle,
  onClick,
}: BaseCardProps) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // Card type flags for easier reference
  const isLanding = cardType === "landing"
  const isFavorite = cardType === "favorite"
  const isRental = cardType === "rental"
  const isListing = cardType === "listing"
  const isRentalDrawer = cardType === "rentalDrawer"

  const {
    id,
    title,
    image,
    price,
    currency = "USD",
    period = "day",
    location,
    rating,
    tags = [],
    isFavorite: productIsFavorite = false,
    status,
    handType,
  } = product

  // Capitalize first letter of handType
  const capitalizedHandType = handType ? handType.charAt(0).toUpperCase() + handType.slice(1) : ""

  // Determine card layout direction based on card type and screen size
  const getFlexDirection = () => {
    if (isRentalDrawer) return "row" // Always horizontal for rentalDrawer
    if (isLanding) return "column" // Always vertical for landing
    if (isFavorite || isRental || isListing) {
      return isMobile ? "row" : "column" // Responsive for other types
    }
    return "column" // Default fallback
  }

  // Choose text size based on device and card type
  const getTextSize = (mobileSize: string, desktopSize: string) => {
    if (isLanding) {
      return { xs: mobileSize, sm: desktopSize } // Landing should be responsive too
    }
    return { xs: mobileSize, sm: desktopSize }
  }

  // Image URL handling
  const imageUrl = typeof image === "string" ? image : image.src

  // Card heights for different scenarios
  const getCardHeight = () => {
    if (isRentalDrawer) {
      return { xs: "auto", sm: "auto" } // Auto height for rentalDrawer
    }
    if (isLanding || isFavorite) {
      return { xs: 340, sm: 400 } // Same height for landing and favorite
    }
    if (isRental) {
      return { xs: "auto", sm: isMobile ? "auto" : 380 } // Increased height for rental on desktop
    }
    if (isListing) {
      return { xs: "auto", sm: isMobile ? "auto" : 320 } // Less height for listing on desktop
    }
    return "auto" // Default fallback
  }

  // Image dimensions based on card type and device
  const getImageDimensions = () => {
    if (isRentalDrawer) {
      return {
        width: isMobile ? 100 : 120,
        height: isMobile ? 100 : 130,
      }
    }
    if (isLanding) {
      return {
        width: "100%",
        height: isMobile ? 200 : 240,
      }
    }
    if (isFavorite) {
      return {
        width: isMobile ? 120 : "100%", // Fixed: favorite mobile should behave like rental
        height: isMobile ? 140 : 240, // Fixed: favorite mobile should behave like rental
      }
    }
    if (isRental || isListing) {
      return {
        width: isMobile ? 120 : "100%",
        height: isMobile ? 140 : 200, // Taller on mobile for rental
      }
    }
    return {
      width: "100%",
      height: imageHeight,
    }
  }

  const imageDimensions = getImageDimensions()

  // Check if we should show favorite button (only for favorite and landing card types)
  const shouldShowFavorite = (isLanding || isFavorite) && onFavoriteToggle

  // Check if we should show hand type tag in header
  const shouldShowHandTypeInHeader = handType && (isLanding || (isFavorite && !isMobile))

  // Check if we should show hand type in body
  const shouldShowHandTypeInBody =
    handType &&
    ((isFavorite && isMobile) || // Favorite mobile
      isRental || // Rental always
      isListing) // Listing always

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: getFlexDirection(),
        height: getCardHeight(),
        minHeight: isFavorite ? 140 : isRentalDrawer ? 80 : "unset",
        width: "100%",
        cursor: onClick ? "pointer" : "default",
        overflow: "hidden",
        borderRadius: "12px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          boxShadow: onClick ? "0 4px 12px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.08)",
          transform: onClick ? "translateY(-2px)" : "none",
        },
        ...sx,
      }}
      onClick={onClick}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: imageDimensions.width,
          height: imageDimensions.height,
          flexShrink: 0,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: variant === "vertical" ? "12px" : 0,
          borderTopRightRadius: variant === "vertical" ? "12px" : 0,
          borderBottomLeftRadius: variant !== "vertical" ? "12px" : 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 1.5,
        }}
      >
        {/* Top section with favorite button and hand type */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {/* Left side: Favorite Button or Status Tag */}
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            flex: shouldShowFavorite ? 0 : 1,
          }}>
            {shouldShowFavorite && (
              <FavoriteButton id={id} initialFavorite={productIsFavorite} onToggle={() => onFavoriteToggle?.(id)} />
            )}
            {/* Status and Menu in same row for rental */}
            {(isRental || isListing) && (
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}>
                {/* Status only shows for rental */}
                {isRental && status && <TagDisplay tag={status} variant="status" />}
                {/* Menu for desktop listing/rental in header */}
                {showMenu && menuItems.length > 0 && !isMobile && (
                  <Box
                    sx={{
                      bgcolor: "rgba(255, 255, 255, 0.7)",
                      borderRadius: "50%",
                      backdropFilter: "blur(10px)",
                      width: 32,
                      height: 32,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      ml: isRental && status ? 0 : "auto",
                    }}
                  >
                    <CardMenu menuItems={menuItems} />
                  </Box>
                )}
              </Box>
            )}
          </Box>

          {/* Right side: Hand Type Tag */}
          <Box>{shouldShowHandTypeInHeader && <TagDisplay tag={capitalizedHandType} />}</Box>
        </Box>

        {/* Image Pagination Dots */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 0.5,
            alignSelf: "center",
          }}
        >
          {[...Array(4)].map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: i === 0 ? "white" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minWidth: 0,
        }}
      >
        <CardContent
          sx={{
            flexGrow: 1,
            px: isRentalDrawer ? { xs: 1, sm: 2 } : { xs: 1.5, sm: 2 },
            py: isRentalDrawer ? { xs: 1, sm: 1.5 } : { xs: 1, sm: 1.5 },
            "&:last-child": {
              paddingBottom: isRentalDrawer ? { xs: 1, sm: 1.5 } : { xs: 1, sm: 1.5 },
            },
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Header with title and menu for mobile */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: isMobile ? 0.5 : 1,
            }}
          >
            {/* Title */}
            <Typography
              variant="h6"
              component="h2"
              color="text.primary"
              sx={{
                fontSize: getTextSize("0.875rem", "1.2rem"),
                fontWeight: isLanding ? { xs: 500, sm: 700 } : { xs: 500, sm: 600 },
                lineHeight: 1.3,
                flex: 1,
                mr: showMenu && menuItems.length > 0 && isMobile && (isRental || isListing) ? 1 : 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: isRentalDrawer ? 2 : 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {title}
            </Typography>

            {/* Menu for mobile listing/rental in body */}
            {showMenu && menuItems.length > 0 && isMobile && (isRental || isListing) && (
              <CardMenu menuItems={menuItems} />
            )}
          </Box>

          {/* Body Content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? 0.25 : 0.5,
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            {/* Content wrapper for better spacing */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? 0.25 : 0.5,
              }}
            >
              {/* Hand Type in body */}
              {shouldShowHandTypeInBody && (
                <Box>
                  <TagDisplay tag={capitalizedHandType} />
                </Box>
              )}

              {/* Location - only for landing, favorite, rental (not listing) */}
              {showLocation && location && !isListing && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnIcon
                    fontSize="small"
                    color="action"
                    sx={{ mr: 0.5, fontSize: isMobile ? "0.875rem" : "1rem" }}
                  />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    noWrap
                    sx={{
                      fontSize: getTextSize("0.75rem", "0.875rem"),
                    }}
                  >
                    {location}
                  </Typography>
                </Box>
              )}

              {/* Rating - only for landing, favorite, rental (not listing) */}
              {showRating && rating !== undefined && !isListing && (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Rating
                    value={rating}
                    precision={0.5}
                    size={isMobile ? "small" : "medium"}
                    readOnly
                    sx={{
                      fontSize: isMobile ? "0.75rem" : "1rem",
                      mr: 0.5,
                    }}
                  />
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{
                      fontSize: getTextSize("0.75rem", "0.875rem"),
                    }}
                  >
                    {rating}
                  </Typography>
                </Box>
              )}

              {/* Rent Again Button for RentalDrawer */}
              {isRentalDrawer && status === ProductStatus.Active && (
                <Button
                  color="primary"
                  variant="contained"
                  size={isMobile ? "small" : "medium"}
                  sx={{
                    width: "100%",
                    mt: 0.5,
                    fontSize: isMobile ? "0.75rem" : "0.875rem",
                  }}
                >
                  Rent again
                </Button>
              )}
            </Box>

            {/* Price - Always show for all types except rentalDrawer */}
            {!isRentalDrawer && (
              <Typography
                variant="subtitle1"
                component="div"
                color="text.primary"
                sx={{
                  fontSize: getTextSize("0.875rem", "1.125rem"),
                  fontWeight: { xs: 500, sm: 600 },
                  mt: isMobile ? 0.5 : "auto",
                }}
              >
                ${price} {currency}/{period}
              </Typography>
            )}
          </Box>
        </CardContent>
      </Box>
    </Card>
  )
}

export default BaseCard