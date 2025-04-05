"use client"
import ProductCard from "@/components/ui/Cards/ProductCard"
import { Container, Typography, Box, useMediaQuery, useTheme } from "@mui/material"
import Grid from "@mui/material/Grid2"
import Product1Hardcode from "@/public/assets/HarcodeProducts/Product-1-Harcode.svg"
import HeroSection from "@/components/features/landing/HeroSection"
import { useState } from "react"
import { CardType } from "@/types/CardTypes"

export default function LandingPage() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [cardType, setCardType] = useState<CardType>("landing")

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

    // Handlers (mantenemos los mismos)
    const handleFavoriteToggle = (id: string) => console.log(`Toggle favorite for product ${id}`)
    const handleEdit = (id: string) => console.log(`Edit product ${id}`)
    const handlePause = (id: string) => console.log(`Pause product ${id}`)
    const handleDelete = (id: string) => console.log(`Delete product ${id}`)
    const handleReport = (id: string) => console.log(`Report problem for product ${id}`)

    return (
        <Box sx={{ overflowX: "hidden" }}>
            {/* Hero Section sin márgenes ni paddings */}
            <Box
                sx={{
                    width: "100vw",
                    position: "relative",
                    left: "50%",
                    right: "50%",
                    marginLeft: "-50vw",
                    marginRight: "-50vw",
                }}
            >
                <HeroSection />
            </Box>

            {/* Container principal con padding lateral */}
            <Container
                maxWidth="xl"
                sx={{
                    px: { xs: "16px", sm: "32px" }, // 16px en móviles, 32px en pantallas más grandes
                    py: 4,
                    [theme.breakpoints.down(1440)]: {
                        maxWidth: "100%",
                        px: { xs: "16px", sm: "32px" }, // Asegúrate de que esto también se ajuste
                    },
                }}
            >
                {/* Landing Cards */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Trending products 🔥
                    </Typography>
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
                                mx: 0, // Elimina el margen negativo
                                pr: 0, // Asegura que no haya padding derecho extra
                                ml: 0, // Elimina el margen izquierdo negativo que MUI aplica por defecto
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

                {/* Landing Cards */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Top-rated users 🏆
                    </Typography>
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
                                mx: 0, // Elimina el margen negativo
                                pr: 0, // Asegura que no haya padding derecho extra
                                ml: 0, // Elimina el margen izquierdo negativo que MUI aplica por defecto
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

                {/* My Listings Cards */}
                {/* <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          My Listings Cards
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid size={12} key={`listing-${product.id}`}>
              <ProductCard
                 productId={product.id}
                 id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                location={product.location}
                rating={product.rating}
                tags={product.tags}
                status={product.id === "3" ? "pending" : undefined}
                isFavorite={product.isFavorite}
                onFavoriteToggle={() => handleFavoriteToggle(product.id)}
                onEdit={() => handleEdit(product.id)}
                onPause={() => handlePause(product.id)}
                onDelete={() => handleDelete(product.id)}
                cardType="listing"
              />
            </Grid>
          ))}
        </Grid>
      </Box> */}

                {/* My Rentals Cards */}
                {/* <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          My Rentals Cards
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid size={12} key={`rental-${product.id}`}>
              <ProductCard
                 productId={product.id}
                 id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                location={product.location}
                rating={product.rating}
                tags={product.tags}
                isFavorite={false}
                showFavorite={false}
                onReport={() => handleReport(product.id)}
                cardType="rental"
              />
            </Grid>
          ))}
        </Grid>
      </Box> */}
            </Container>
        </Box>
    )
}

