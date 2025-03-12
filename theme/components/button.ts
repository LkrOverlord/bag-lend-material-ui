import { PaletteMode } from '@mui/material';

export const getButtonOverrides = (mode: PaletteMode) => ({
  styleOverrides: {
    root: {
      borderRadius: 8,
      textTransform: 'none',
      fontWeight: 600,
      boxShadow: mode === 'light' 
        ? '0px 2px 4px -1px rgba(0,0,0,0.07), 0px 4px 5px 0px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.03)'
        : 'none',
      '&:hover': {
        boxShadow: mode === 'light' 
          ? '0px 3px 5px -1px rgba(0,0,0,0.1), 0px 6px 10px 0px rgba(0,0,0,0.08), 0px 1px 18px 0px rgba(0,0,0,0.05)'
          : '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
      },
    },
    containedPrimary: {
      '&:hover': {
        backgroundColor: mode === 'light' ? '#1565c0' : '#42a5f5',
      },
    },
  },
});