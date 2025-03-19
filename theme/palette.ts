import { PaletteOptions } from '@mui/material/styles';

interface PaletteConfig {
  [key: string]: PaletteOptions;
}

export const palettes: PaletteConfig = {
  light: {
    mode: 'light',
    primary: {
      main: '#4CAF50', // Verde como color primario
      dark: '#388E3C', // Verde oscuro
      light: '#81C784', // Verde claro
      contrastText: '#FFFFFF', // Texto en contraste (blanco)
    },
    secondary: {
      main: '#9c27b0', // Color secundario (púrpura)
      dark: '#7b1fa2',
      light: '#ba68c8',
    },
    background: {
      default: '#f5f5f5', // Fondo predeterminado
      paper: '#ffffff', // Fondo de componentes como tarjetas
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)', // Texto principal
      secondary: 'rgba(0, 0, 0, 0.6)', // Texto secundario
    },
  },
  dark: {
    mode: 'dark',
    primary: {
      main: '#4CAF50', // Verde como color primario
      dark: '#388E3C', // Verde oscuro
      light: '#81C784', // Verde claro
      contrastText: '#FFFFFF', // Texto en contraste (blanco)
    },
    secondary: {
      main: '#ce93d8', // Color secundario (púrpura)
      dark: '#ab47bc',
      light: '#f3e5f5',
    },
    background: {
      default: '#121212', // Fondo predeterminado
      paper: '#1e1e1e', // Fondo de componentes como tarjetas
    },
    text: {
      primary: '#ffffff', // Texto principal
      secondary: 'rgba(255, 255, 255, 0.7)', // Texto secundario
    },
  },
};