import React from 'react';
import { Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Ícono de lupa

const SearchButton = () => {
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: '15px',
        height: '58px',
        padding: '0',
        minWidth: '58px',
        backgroundColor: 'primary.main', // Usa el color primario del tema
        display: 'flex', // Centrado horizontal y vertical
        alignItems: 'center', // Centrado vertical
        justifyContent: 'center', // Centrado horizontal
        '&:hover': {
          backgroundColor: 'primary.dark', // Usa el color primario oscuro del tema
        },
      }}
    >
      <SearchIcon sx={{ color: 'primary.contrastText' }} /> {/* Usa el color de contraste del tema */}
    </Button>
  );
};

export default SearchButton;