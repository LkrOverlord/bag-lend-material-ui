import { PaletteOptions } from '@mui/material/styles';

interface PaletteConfig {
  [key: string]: PaletteOptions;
}

export const palettes: PaletteConfig = {
  light: {
    mode: 'light',
    primary: {
      main: '#1976d2',
      dark: '#1565c0',
      light: '#42a5f5',
    },
    secondary: {
      main: '#9c27b0',
      dark: '#7b1fa2',
      light: '#ba68c8',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  dark: {
    mode: 'dark',
    primary: {
      main: '#90caf9',
      dark: '#42a5f5',
      light: '#e3f2fd',
    },
    secondary: {
      main: '#ce93d8',
      dark: '#ab47bc',
      light: '#f3e5f5',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
};