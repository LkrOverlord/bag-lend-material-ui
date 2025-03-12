import { PaletteMode } from '@mui/material';

export const getTableOverrides = (mode: PaletteMode) => ({
  styleOverrides: {
    root: {
      backgroundColor: mode === 'light' ? '#ffffff' : '#1e1e1e',
    },
  },
});