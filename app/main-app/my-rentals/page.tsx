"use client";

import { Box, Container, useTheme } from '@mui/material';
import { useState } from 'react';
import { CardType } from '@/types/Product';
import { generateMockProducts } from '@/utils/mockUtils';
import ProductGridSection from '@/components/ui/Lists/ProductGridSection';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import AvatarHarcode from '@/public/assets/AvatarRental.png'
import SimpleTable from '@/components/ui/Tables/SimpleTable';

const MyRentalsPage = () => {
  const theme = useTheme();
  const [cardType] = useState<CardType>("rental");

  // Generate mock products for different months
  const mayProducts = generateMockProducts(8, { basePrice: 28 });
  const aprilProducts = generateMockProducts(8, { basePrice: 25 });

  // Event handlers
  const handleFavoriteToggle = (id: string) => console.log(`Toggle favorite for product ${id}`);
  const handleReport = (id: string) => console.log(`Report problem for product ${id}`);

  const items = [
    { label: "Simple text", value: "Simple value" },
    {
      label: { text: "With icon", icon: <PaymentOutlinedIcon /> },
      value: "Value"
    },
    {
      label: "Owner",
      value: { text: "John", avatar: { src: AvatarHarcode.src, alt: "John" } }
    }
  ];

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
        />

        {/* April Products Section */}
        <ProductGridSection
          title="April"
          products={aprilProducts}
          cardType={cardType}
          onFavoriteToggle={handleFavoriteToggle}
          onReport={handleReport}
        />
      </Container>
      <div style={{
        margin: "20px"
      }}>
        <SimpleTable items={items} />
      </div>

    </Box>
  );
};

export default MyRentalsPage;