// import HeroSection from '@/components/features/landing/HeroSection';
// import Header from '@/components/layout/Header';
// import ActionButton from '@/components/ui/ActionButton';
// import DataTable from '@/components/ui/DataTable';
// import FeatureCard from '@/components/ui/FeatureCard';
// import MainCard from '@/components/ui/MainCard';
// import { Box, Container, Typography } from '@mui/material';

// export default function Home() {
//   return (
//     <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: "red" }}>
//       {/* <Header /> */}
//       <HeroSection />
//       <HeroSection />
//       <HeroSection />
//       <HeroSection />
      
//       {/* <Container component="main" sx={{ flexGrow: 1, py: 8 }}>
//         <Typography variant="h3" component="h1" sx={{ mb: 6, textAlign: 'center' }}>
//           Bienvenido a Next.js con Material UI
//         </Typography>
        
//         <MainCard title="Componente Principal">
//           <Typography variant="body1" sx={{ mb: 2 }}>
//             Este es un ejemplo de aplicación construida con Next.js 14 y Material UI.
//             Puedes cambiar entre modo claro y oscuro usando el botón en la esquina superior derecha.
//           </Typography>
          
//           <ActionButton />
//         </MainCard>
        
//         <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
//           <FeatureCard 
//             title="Componente Reutilizable" 
//             description="Este es un componente de tarjeta que puede ser reutilizado en toda la aplicación"
//             icon="star"
//           />
//           <FeatureCard 
//             title="Diseño Responsivo" 
//             description="La aplicación se adapta perfectamente a diferentes tamaños de pantalla"
//             icon="devices"
//           />
//           <FeatureCard 
//             title="Themeable" 
//             description="Personaliza los colores y estilos según tus necesidades"
//             icon="palette"
//           />
//         </Box>
        
//         <Box sx={{ mt: 6 }}>
//           <Typography variant="h5" sx={{ mb: 2 }}>
//             Tabla de Datos
//           </Typography>
//           <DataTable />
//         </Box>
//       </Container> */}
//     </Box>
//   );
// }


"use client"
import ProductCard from "@/components/ui/Cards/ProductCard"
import { Container, Typography, Box, useMediaQuery, useTheme } from "@mui/material"
import Grid from "@mui/material/Grid2"
import Product1Hardcode from '@/public/assets/HarcodeProducts/Product-1-Harcode.svg'


export default function ExamplesPage() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  // Datos corregidos con status válido
  const products = Array.from({length: 20}, (_, i) => ({
    id: String(i + 1),
    title: `Product ${i + 1}`,
    image: Product1Hardcode,
    price: 25 + i,
    location: ["Los Angeles, CA", "San Francisco, CA", "New York, NY"][i % 3],
    rating: 4.5 - (i % 3 * 0.1),
    tags: [i % 2 === 0 ? "Left-handed" : "Right-handed"],
    isFavorite: i % 4 === 0,
    status: i % 5 === 0 ? "pending" : undefined // Solo valores permitidos
  }));

  // Handlers (mantenemos los mismos)
  const handleFavoriteToggle = (id: string) => console.log(`Toggle favorite for product ${id}`);
  const handleEdit = (id: string) => console.log(`Edit product ${id}`);
  const handlePause = (id: string) => console.log(`Pause product ${id}`);
  const handleDelete = (id: string) => console.log(`Delete product ${id}`);
  const handleReport = (id: string) => console.log(`Report problem for product ${id}`);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Card Examples
      </Typography>

      {/* Landing Cards */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Landing Cards
        </Typography>
        <Grid container spacing={3}>
          {products.map((product) => (
            // <Grid size={{ xs: 12, sm: 6, md: 4 }} key={`landing-${product.id}`}>
            <Grid size={{ xs: 6, sm: 6, md: 4 }} key={`landing-${product.id}`}>
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
                cardType="landing"
              />
            </Grid>
          ))}
        </Grid>
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
  )
}

