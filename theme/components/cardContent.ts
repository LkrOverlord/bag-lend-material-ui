// Create a new file like cardContent.ts or add to an existing file
import { PaletteMode } from '@mui/material';

export const getCardContentOverrides = (mode: PaletteMode) => ({
  styleOverrides: {
    root: {
      '&:last-child': {
        paddingBottom: 16,
      },
    },
  },
});