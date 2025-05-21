"use client";

import MenuWithUnderline from '@/components/ui/Menus/Menu';
import { Box, Container, useTheme } from '@mui/material';
import { useState } from 'react';
import { CardType } from '@/types/Product';
import { generateMockProducts } from '@/utils/mockUtils';
import ProductGridSection from '@/components/ui/Lists/ProductGridSection';


const MyListingsPage = () => {
  const theme = useTheme();
  const pages = ['Active Listings', 'Active Rentals', 'Paused Listings'];
  const [cardType] = useState<CardType>("listing");
  
  // Generate mock products from utility function
  const products = generateMockProducts(12);
  
  // Event handlers
  const handleFavoriteToggle = (id: string) => console.log(`Toggle favorite for product ${id}`);
  const handleEdit = (id: string) => console.log(`Edit product ${id}`);
  const handlePause = (id: string) => console.log(`Pause product ${id}`);
  const handleDelete = (id: string) => console.log(`Delete product ${id}`);

  return (
    <Box>
      <Box sx={{ padding: "0 32px" }}>
        <MenuWithUnderline 
          pages={pages} 
          textColor={theme.palette.grey[800]} 
          displayStyle={{ xs: 'none', md: 'flex' }} 
        />
      </Box>
      
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
          products={products}
          cardType={cardType}
          onFavoriteToggle={handleFavoriteToggle}
          onEdit={handleEdit}
          onPause={handlePause}
          onDelete={handleDelete}
        />
      </Container>
    </Box>
  );
};

export default MyListingsPage;