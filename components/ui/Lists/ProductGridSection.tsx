"use client";

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Grid from "@mui/material/Grid2";
import ProductCard from '@/components/ui/Cards/ProductCard';
import { CardType, Product } from '@/types/Product';

interface ProductGridSectionProps {
  title?: string;
  products: Product[];
  cardType: CardType;
  onFavoriteToggle: (id: string) => void;
  onEdit?: (id: string) => void;
  onPause?: (id: string) => void;
  onDelete?: (id: string) => void;
  onReport?: (id: string) => void;
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
  onReport
}: ProductGridSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  
  return (
    <Box sx={{ mb: 6 }}>
      {title && (
        <Typography variant="h5" component="h2" gutterBottom>
          {title}
        </Typography>
      )}
      
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 4 }}
          sx={{
            width: "100%",
            mx: 0,
            pr: 0,
            ml: 0,
            paddingBottom: "10px",
            justifyContent: { xl: "flex-start" }
          }}
        >
          {products.map((product) => (
            <Grid 
              size={{ 
                xs: cardType === "favorite" ? 12 : 6, 
                sm: 6, 
                md: 4, 
                lg: 3 
              }} 
              key={`${title ? title.toLowerCase() : 'product'}-${product.id}`}
            >
              <ProductCard
                product={product}
                cardType={cardType}
                onFavoriteToggle={onFavoriteToggle}
                onEdit={onEdit}
                onPause={onPause}
                onDelete={onDelete}
                onReport={onReport}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductGridSection;