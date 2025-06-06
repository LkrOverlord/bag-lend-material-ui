"use client"

import ProductGridSection from "@/components/ui/Lists/ProductGridSection"
import { CardType } from "@/types/Product"
import { generateMockProducts } from "@/utils/mockUtils"
import { Box, Container, useTheme } from "@mui/material"
import { useState } from "react"


const FavoritesPage = () => {
  const theme = useTheme()
  const [cardType] = useState<CardType>("favorite")

  // Generate mock products from utility function
  const products = generateMockProducts(12)

  // Event handlers
  const handleFavoriteToggle = (id: string) => console.log(`Toggle favorite for product ${id}`)

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: "16px", sm: "32px" },
          py: 4,
          [theme.breakpoints.down(1440)]: {
            maxWidth: "100%",
          },
        }}
      >
        <ProductGridSection
          title="Your Favorites"
          products={products}
          cardType={cardType}
          onFavoriteToggle={handleFavoriteToggle}
        />
      </Container>
    </Box>
  )
}

export default FavoritesPage
