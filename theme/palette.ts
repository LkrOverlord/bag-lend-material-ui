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
      primary: '#404040', // Gray-scale-900 for titles and important text
      secondary: '#737373', // Gray-scale-700 for secondary text
    },
    grey: {
      900: '#404040', // Gray-scale-900
      800: '#525252',
      700: '#737373', // Gray-scale-700
      600: '#8A8A8A',
      500: '#A3A3A3',
      400: '#C2C2C2',
      300: '#D9D9D9',
      200: '#E5E5E5',
      100: '#F5F5F5',
      50: '#FAFAFA',
    },
    // Status colors
    warning: {
      main: '#FF9800', // Orange for pending
      light: '#FFB74D',
      dark: '#F57C00',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#F44336', // Red for cancelled
      light: '#EF5350',
      dark: '#D32F2F',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#4CAF50', // Green for active
      light: '#66BB6A',
      dark: '#388E3C',
      contrastText: '#FFFFFF',
    },
    info: {
      main: '#757575', // Gray for closed
      light: '#9E9E9E',
      dark: '#424242',
      contrastText: '#FFFFFF',
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
      primary: '#E5E5E5', // Light version of Gray-scale-900
      secondary: '#C2C2C2', // Light version of Gray-scale-700
    },
    grey: {
      900: '#E5E5E5', // Light version of Gray-scale-900
      800: '#D9D9D9',
      700: '#C2C2C2', // Light version of Gray-scale-700
      600: '#A3A3A3',
      500: '#8A8A8A',
      400: '#737373',
      300: '#525252',
      200: '#404040',
      100: '#333333',
      50: '#1E1E1E',
    },
    // Status colors for dark mode
    warning: {
      main: '#FFA726', // Lighter orange for dark mode
      light: '#FFB74D',
      dark: '#FF9800',
      contrastText: '#000000',
    },
    error: {
      main: '#EF5350', // Lighter red for dark mode
      light: '#F44336',
      dark: '#D32F2F',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#66BB6A', // Lighter green for dark mode
      light: '#81C784',
      dark: '#4CAF50',
      contrastText: '#000000',
    },
    info: {
      main: '#9E9E9E', // Lighter gray for dark mode
      light: '#BDBDBD',
      dark: '#757575',
      contrastText: '#000000',
    },
  },
};