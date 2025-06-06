"use client"

import DrawerRental from "@/components/features/rentals/DrawerRental"
import ProductGridSection from "@/components/ui/Lists/ProductGridSection"
import { CardType, Product } from "@/types/Product"
import { generateMockProducts } from "@/utils/mockUtils"
import { Box, Container, useTheme } from "@mui/material"
import { useState } from "react"

const MyRentalsPage = () => {
  const theme = useTheme()
  const [cardType] = useState<CardType>("rental")
  const [openDrawer, setOpenDrawer] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  // Generate mock products for different months
  const mayProducts = generateMockProducts(8, { basePrice: 28 })
  const aprilProducts = generateMockProducts(8, { basePrice: 25 })

  // Event handlers
  const handleFavoriteToggle = (id: string) => console.log(`Toggle favorite for product ${id}`)
  const handleReport = (id: string) => console.log(`Report problem for product ${id}`)

  // Handle card click to open drawer
  const handleCardClick = (product: Product) => {
    setSelectedProduct(product)
    setOpenDrawer(true)
  }

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
        {/* May Products Section */}
        <ProductGridSection
          title="May"
          products={mayProducts}
          cardType={cardType}
          onFavoriteToggle={handleFavoriteToggle}
          onReport={handleReport}
          onCardClick={handleCardClick}
        />

        {/* April Products Section */}
        <ProductGridSection
          title="April"
          products={aprilProducts}
          cardType={cardType}
          onFavoriteToggle={handleFavoriteToggle}
          onReport={handleReport}
          onCardClick={handleCardClick}
        />
      </Container>

      {/* Rental Drawer */}
      {selectedProduct && (
        // <DrawerRental isDrawerOpen={openDrawer} ={setOpenDrawer} product={selectedProduct} />
        
        <DrawerRental isDrawerOpen={openDrawer} setIsDrawerOpen={setOpenDrawer} product={selectedProduct} />
      )}
    </Box>
  )
}

export default MyRentalsPage
