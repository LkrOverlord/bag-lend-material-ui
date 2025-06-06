"use client"

import ProductGridSection from "@/components/ui/Lists/ProductGridSection"
import { CardType } from "@/types/Product"
import { generateMockProducts } from "@/utils/mockUtils"
import { Box, Container, useTheme } from "@mui/material"
import { useState } from "react"


const LandingPage = () => {
  const theme = useTheme()
  const [cardType] = useState<CardType>("landing")

  // Generate mock products for different sections
  const trendingProducts = generateMockProducts(12, { basePrice: 30 })
  const topRatedProducts = generateMockProducts(12, { basePrice: 25 })

  // Event handlers
  const handleFavoriteToggle = (id: string) => console.log(`Toggle favorite for product ${id}`)

  return (
    <Box sx={{ overflowX: "hidden" }}>
      {/* Main content container */}
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
        {/* Trending Products Section */}
        <ProductGridSection
          title="Trending products 🔥"
          products={trendingProducts}
          cardType={cardType}
          onFavoriteToggle={handleFavoriteToggle}
        />

        {/* Top-rated Users Section */}
        <ProductGridSection
          title="Top-rated users 🏆"
          products={topRatedProducts}
          cardType={cardType}
          onFavoriteToggle={handleFavoriteToggle}
        />
      </Container>
    </Box>
  )
}

export default LandingPage
