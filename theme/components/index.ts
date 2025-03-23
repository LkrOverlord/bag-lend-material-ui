import { PaletteMode } from '@mui/material';
import { getButtonOverrides } from './button';
import { getCardOverrides } from './card';
import { getTableOverrides } from './table';
import { getCardContentOverrides } from './cardContent';

export const components = (mode: PaletteMode) => ({
  MuiButton: getButtonOverrides(mode),
  MuiCard: getCardOverrides(mode),
  MuiCardContent: getCardContentOverrides(mode),
  MuiTable: getTableOverrides(mode),
  MuiAppBar: {
    styleOverrides: {
      root: {
        boxShadow: mode === 'light' 
          ? '0px 2px 4px -1px rgba(0,0,0,0.07), 0px 4px 5px 0px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.03)'
          : '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
      },
    },
  },
});