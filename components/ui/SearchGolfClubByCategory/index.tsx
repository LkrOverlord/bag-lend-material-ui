import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import CustomAutocomplete from './CustomAutocomplete';
import SearchButton from '../Buttons/SearchButton';
import { useThemeContext } from '@/theme/ThemeProvider';

const golfClubs = [
  "Driver",
  "Wood",
  "Hibrid",
  "Iron",
];

const states = [
  "Florida",
  "California",
  "Texas",
  "Whashington",
];

type Props = {};

const SearchGolfClubByCity = (props: Props) => {
  const { mode } = useThemeContext(); // Obtén el modo actual (light/dark)
  
  return (
    <>
      <Box sx={{
        width: "666.4px",
        minHeight: "95px",
        height: "auto",
        display: "flex",
        backgroundColor: "background.paper", // Usa el color de fondo del tema
        alignItems: "center",
        padding: "0 16px",
        borderRadius: "16px",
      }}>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "32px",
        }}>
          <Box sx={{ width: "237px" }}>
            <Typography 
              variant="body2" 
              color="text.primary"
              sx={{ mb: 0.5 }}
            >
              Where would you like to rent?
            </Typography>
            <CustomAutocomplete
              options={golfClubs}
              placeholder="Search by golf club"
              onSelectionChange={(selected) => {
                console.log(selected);
              }}
            />
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              borderColor: 'divider', // Usa el color del tema
              borderWidth: 1,
            }}
          />
          <Box sx={{ width: "237px" }}>
            <Typography 
              variant="body2" 
              color="text.primary"
              sx={{ mb: 0.5 }}
            >
              What are you looking for?
            </Typography>
            <CustomAutocomplete
              options={states}
              placeholder="Search by city"
              onSelectionChange={(selected) => {
                console.log(selected);
              }}
            />
          </Box>
          <SearchButton />
        </Box>
      </Box>
    </>
  );
};

export default SearchGolfClubByCity;