"use client"
import ProductCard from '@/components/ui/Cards/ProductCard'
import { Box, Container, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Grid from "@mui/material/Grid2"
import { CardType } from '@/types/CardTypes'
import Product1Hardcode from "@/public/assets/HarcodeProducts/Product-1-Harcode.svg"

type Props = {}

const FavoritesPage = (props: Props) => {
  const theme = useTheme()

   const [cardType, setCardType] = useState<CardType>("favorite")
      // Datos corregidos con status válido
      const products = Array.from({ length: 12 }, (_, i) => ({
          id: String(i + 1),
          title: `Product ${i + 1}`,
          image: Product1Hardcode,
          price: 25 + i,
          location: ["Los Angeles, CA", "San Francisco, CA", "New York, NY"][i % 3],
          rating: 4.5 - (i % 3) * 0.1,
          tags: [i % 2 === 0 ? "Left-handed" : "Right-handed"],
          isFavorite: i % 4 === 0,
          status: i % 5 === 0 ? "pending" : undefined, // Solo valores permitidos
      }))
  
      const handleFavoriteToggle = (id: string) => console.log(`Toggle favorite for product ${id}`)
  
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: "16px", sm: "32px" }, // 16px en móviles, 32px en pantallas más grandes
          py: 4,
          [theme.breakpoints.down(1440)]: {
            maxWidth: "100%",
            px: { xs: "16px", sm: "32px" }, 
          },
        }}
      >
        {/* Favorites Cards */}
        <Box sx={{ mb: 6 }}>
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              pr: "0px !important",
            }}
          >
            <Grid
              container
              spacing={4} // 32px entre cards (8px * 4)
              sx={{
                width: "100%",
                mx: 0, 
                pr: 0, 
                ml: 0, 
                [theme.breakpoints.down("xl")]: {
                  justifyContent: "flex-start",
                },
                [theme.breakpoints.down("sm")]: {
                  spacing: 2, // Reduce el espacio entre cards en móviles
                },
                paddingBottom: "10px"
              }}
            >
              {products.map((product) => (
                <Grid size={{ xs: cardType == "favorite" ? 12 : 6, sm: 6, md: 4, lg: 3 }} key={`landing-${product.id}`}>
                  <ProductCard
                    productId={product.id}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    location={product.location}
                    rating={product.rating}
                    tags={product.tags}
                    isFavorite={product.isFavorite}
                    onFavoriteToggle={() => handleFavoriteToggle(product.id)}
                    cardType={cardType}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default FavoritesPage