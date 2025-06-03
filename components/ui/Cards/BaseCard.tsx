
"use client";

import { Box, Button, Card, CardContent, Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import Image from "next/image";

import { FavoriteButton } from "./FavoriteButton";
import { TagDisplay } from "./TagDisplay";
import { CardMenu } from "./CardMenu";
import { BaseCardProps, ProductStatus } from "@/types/Product";

const BaseCard = ({
  product,
  menuItems = [],
  variant = "vertical",
  showRating = true,
  showLocation = true,
  showMenu = true,
  imageHeight = 200,
  sx = {},
  cardType,
  onFavoriteToggle,
  onClick,
}: BaseCardProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isLanding = cardType === "landing";
  const isRentalDrawer = cardType === "rentalDrawer";

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
    isFavorite = false,
    status // Add status field
  } = product;

  // Direction based on card type and screen size
  const getFlexDirection = () => {
    if (isRentalDrawer) return "row"; // Always horizontal for rentalDrawer
    return isLanding ? "column" : (isMobile ? "row" : "column");
  };

  // Choose text size based on device and card type
  const getTextSize = (mobileSize: string, desktopSize: string) =>
    isLanding ? desktopSize : { xs: mobileSize, sm: desktopSize };

  // Image URL handling
  const imageUrl = typeof image === "string" ? image : image.src;

  // Card heights for different scenarios
  const getCardHeight = () => {
    if (isRentalDrawer) {
      return { xs: "auto", sm: "auto" }; // Auto height for rentalDrawer
    }
    return {
      xs: cardType === "favorite" ? "auto" : 291,
      sm: isLanding ? 550 : 428
    };
  };

  // Image dimensions for rentalDrawer
  const getImageDimensions = () => {
    if (isRentalDrawer) {
      return {
        width: isMobile ? 100 : 120, // Fixed width for horizontal layout
        height: isMobile ? 100 : 130
      };
    }
    return {
      width: !isLanding && isMobile ? 120 : "100%",
      height: isLanding ? 240 : isMobile ? 140 : 240
    };
  };

  const imageDimensions = getImageDimensions();

  // Check if we should show favorite button (only for favorite and landing card types)
  const shouldShowFavorite = (cardType === "favorite" || cardType === "landing") && onFavoriteToggle;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: getFlexDirection(),
        height: getCardHeight(),
        minHeight: cardType === "favorite" ? 140 : isRentalDrawer ? 80 : "unset",
        width: "100%",
        cursor: onClick ? "pointer" : "default",
        ...(isMobile && !isLanding && !isRentalDrawer && { height: 120 }),
        ...sx,
      }}
      onClick={onClick}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: imageDimensions.width,
          height: imageDimensions.height,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: variant === "vertical" ? "12px" : 0,
          borderTopRightRadius: variant === "vertical" ? "12px" : 0,
          borderBottomLeftRadius: isRentalDrawer && isMobile ? "12px" : 0,
          position: "relative",
          flexShrink: 0, // Prevent image from shrinking
        }}
      >
        {/* Top section with favorite button and tag - Only show for non-rentalDrawer */}
        {!isRentalDrawer && (
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            height: "auto"
          }}>
            {/* Favorite Button - Only show for favorite and landing cards */}
            {shouldShowFavorite && (
              <FavoriteButton
                id={id}
                initialFavorite={isFavorite}
                onToggle={() => onFavoriteToggle?.(id)}
              />
            )}

            {/* Status Display for rental cards */}
            {cardType === "rental" && status && (
              <TagDisplay tag={status} variant="status" />
            )}

            {/* Tag Display for favorite cards */}
            {tags.length > 0 && tags[0] && cardType === "favorite" && (
              <TagDisplay tag={tags[0]} />
            )}

            {/* Menu */}
            {showMenu && menuItems.length > 0 && (
              <Box
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: '50%',
                  backdropFilter: 'blur(10px)',
                  width: 32,
                  height: 32,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <CardMenu menuItems={menuItems} />
              </Box>
            )}
          </Box>
        )}
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          position: "relative",
          minWidth: 0, // Prevent content from overflowing
        }}
      >
        <CardContent sx={{
          flexGrow: 1,
          px: isRentalDrawer ? { xs: 1, sm: 2 } : { xs: 1, sm: 2 },
          py: isRentalDrawer ? { xs: 1, sm: 1.5 } : { xs: 1, sm: 4, md: 2 },
          '&:last-child': {
            paddingBottom: isRentalDrawer ? { xs: 1, sm: 1.5 } : { xs: 1, sm: 1 }
          },
        }}>
          <Box sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: isRentalDrawer ? "flex-start" : "space-between",
            gap: isRentalDrawer ? 1 : 0
          }}>
            {/* Title */}
            <Typography
              variant="h6"
              component="h2"
              noWrap={!isRentalDrawer} // Allow wrapping for rentalDrawer
              color="text.primary"
              sx={{
                fontSize: isRentalDrawer
                  ? { xs: "1rem", sm: "1.125rem" }
                  : getTextSize("0.875rem", "1.2rem"),
                fontWeight: isLanding ? 700 : isRentalDrawer ? 600 : 600,
                lineHeight: isRentalDrawer ? 1.3 : "normal",
                display: isRentalDrawer ? "-webkit-box" : "block",
                WebkitLineClamp: isRentalDrawer ? 2 : "unset",
                WebkitBoxOrient: isRentalDrawer ? "vertical" : "unset",
                overflow: isRentalDrawer ? "hidden" : "visible"
              }}
            >
              {title}
            </Typography>

            {/* Tags - Show for rentalDrawer and rental types (but not status) */}
            {((cardType === "rental" && tags.length > 0 && tags[0]) ||
              (isRentalDrawer && tags.length > 0 && tags[0])) && (
                <Box sx={{ mb: isRentalDrawer ? 0 : 1 }}>
                  <TagDisplay tag={tags[0]} />
                  {isRentalDrawer && product.status == ProductStatus.Active && (
                    <Button
                      color="primary"
                      variant="contained"
                      sx={{ width: "100%", mt: 1 }}  // Agregué margen superior (mt: 1) para separarlo del TagDisplay
                    >
                      Rent again
                    </Button>
                  )}

                </Box>
              )}

            {/* Middle Content - Only show for non-rentalDrawer */}
            {!isRentalDrawer && (
              <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 0, sm: 1 },
                flex: 1,
                justifyContent: "center",
                margin: 0,
                padding: 0
              }}>
                {/* Location */}
                {showLocation && location && cardType !== "listing" && (
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

                {/* Rating */}
                {showRating && rating !== undefined && cardType !== "listing" && (
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

                {/* Tags for listing type */}
                {cardType === "listing" && tags.length > 0 && tags[0] && (
                  <Box sx={{ mb: 1 }}>
                    <TagDisplay tag={tags[0]} />
                  </Box>
                )}
              </Box>
            )}

            {/* Price - Only show for non-rentalDrawer */}
            {!isRentalDrawer && (
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
            )}
          </Box>
        </CardContent>
      </Box>
    </Card>
  );
};

export default BaseCard;