"use client";

import { Box, Card, CardContent, Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LocationOn as LocationOnIcon } from "@mui/icons-material";
import Image from "next/image";


import { FavoriteButton } from "./FavoriteButton";
import { TagDisplay } from "./TagDisplay";
import { CardMenu } from "./CardMenu";
import { BaseCardProps } from "@/types/Product";

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
    isFavorite = false
  } = product;

  // Direction based on card type and screen size
  const flexDirection = isLanding ? "column" : (isMobile ? "row" : "column");
  
  // Choose text size based on device and card type
  const getTextSize = (mobileSize: string, desktopSize: string) =>
    isLanding ? desktopSize : { xs: mobileSize, sm: desktopSize };

  // Image URL handling
  const imageUrl = typeof image === "string" ? image : image.src;

  // Card heights for different scenarios
  const cardHeight = {
    xs: cardType === "favorite" ? "auto" : 291,
    sm: isLanding ? 550 : 428
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection,
        height: cardHeight,
        minHeight: cardType === "favorite" ? 140 : "unset",
        width: "100%",
        cursor: onClick ? "pointer" : "default",
        ...(isMobile && !isLanding && { height: 120 }),
        ...sx,
      }}
      onClick={onClick}
    >
      {/* Image Section */}
      <Box
        sx={{
          width: !isLanding && isMobile ? 120 : "100%",
          height: isLanding ? 240 : isMobile ? 140 : 240,
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderTopLeftRadius: variant === "vertical" ? "12px" : 0,
          borderTopRightRadius: variant === "vertical" ? "12px" : 0,
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
          {cardType === "favorite" && (
            <FavoriteButton 
              id={id} 
              initialFavorite={isFavorite} 
              onToggle={() => onFavoriteToggle?.(id)} 
            />
          )}

          {/* Tag Display */}
          {tags.length > 0 && tags[0] && cardType === "favorite" && (
            <TagDisplay tag={tags[0]} />
          )}

          {/* Menu */}
          {showMenu && menuItems.length > 0 && (
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
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
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          position: "relative",
        }}
      >
        <CardContent sx={{
          flexGrow: 1,
          px: { xs: 1, sm: 2 },
          padding: { xs: 1, sm: 4 },
          '&:last-child': {
            paddingBottom: { xs: 1, sm: 1 }
          }
        }}>
          <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            height: "100%", 
            justifyContent: "space-between" 
          }}>
            {/* Title */}
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

            {/* Tags for rental type */}
            {cardType === "rental" && tags.length > 0 && tags[0] && (
              <Box sx={{ mb: 1 }}>
                <TagDisplay tag={tags[0]} />
              </Box>
            )}

            {/* Middle Content */}
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

            {/* Price */}
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
  );
};

export default BaseCard;