import { PaletteMode } from '@mui/material';

export const getCardContentOverrides = (mode: PaletteMode) => ({
  styleOverrides: (theme: any) => ({
    root: {
      '&:last-child': {
        padding: theme.spacing(1), // 16px en mobile
        paddingBottom: 0,
        [theme.breakpoints.up('sm')]: { // Aplicar desde 600px en adelante
          padding: theme.spacing(4), // 32px en desktop
        }
      }
    }
  })
});


