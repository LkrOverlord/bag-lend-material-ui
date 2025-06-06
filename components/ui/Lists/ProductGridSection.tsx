"use client"

import { CardType, Product } from "@/types/Product"
import { Box, Typography, useTheme } from "@mui/material"
import Grid from "@mui/material/Grid2"
import ProductCard from "../Cards/ProductCard"


interface ProductGridSectionProps {
  title?: string
  products: Product[]
  cardType: CardType
  onFavoriteToggle: (id: string) => void
  onEdit?: (id: string) => void
  onPause?: (id: string) => void
  onDelete?: (id: string) => void
  onReport?: (id: string) => void
  onCardClick?: (product: Product) => void
}

/**
 * Reusable component for displaying a grid of product cards with title
 */
const ProductGridSection = ({
  title,
  products,
  cardType,
  onFavoriteToggle,
  onEdit,
  onPause,
  onDelete,
  onReport,
  onCardClick,
}: ProductGridSectionProps) => {
  const theme = useTheme()

  // Determine grid column sizing based on card type
  const getGridColumnSize = () => {
    // Landing cards show 2 per row on mobile, more on larger screens
    if (cardType === "landing") {
      return {
        xs: 6, // 2 per row on mobile
        sm: 6, // 2 per row on tablet
        md: 4, // 3 per row on small desktop
        lg: 3, // 4 per row on large desktop
      }
    }

    // Favorite, rental, and listing cards show 1 per row on mobile when horizontal
    return {
      xs: 12, // 1 per row on mobile
      sm: 6, // 2 per row on tablet
      md: 4, // 3 per row on small desktop
      lg: 3, // 4 per row on large desktop
    }
  }

  const gridSize = getGridColumnSize()

  return (
    <Box sx={{ mb: 6 }}>
      {title && (
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem" },
            fontWeight: 600,
            mb: 2,
          }}
        >
          {title}
        </Typography>
      )}

      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 3, md: 4 }}
          sx={{
            width: "100%",
            mx: 0,
            pr: 0,
            ml: 0,
            paddingBottom: "10px",
          }}
        >
          {products.map((product) => (
            <Grid
              size={{
                xs: gridSize.xs,
                sm: gridSize.sm,
                md: gridSize.md,
                lg: gridSize.lg,
              }}
              key={`${title ? title.toLowerCase() : "product"}-${product.id}`}
            >
              <ProductCard
                product={product}
                cardType={cardType}
                onFavoriteToggle={onFavoriteToggle}
                onEdit={onEdit}
                onPause={onPause}
                onDelete={onDelete}
                onReport={onReport}
                onClick={onCardClick ? () => onCardClick(product) : undefined}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default ProductGridSection
