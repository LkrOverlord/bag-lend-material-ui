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
      backgroundColor: mode === 'light' ? '#89C96A' : '#42a5f5', // Color base
      '&:hover': {
        backgroundColor: mode === 'light' ? '#89C96A' : 'inherit', // Color hover
        // Opcional: Añadir transición suave
        transition: 'background-color 0.3s ease',
      },
      // Estilo cuando está deshabilitado
      '&.Mui-disabled': {
        backgroundColor: mode === 'light' ? '#e0e0e0' : '#424242',
        color: mode === 'light' ? '#a0a0a0' : '#686868',
      },
    },
    // Estilos para el botón "outlined primary" (si necesitas ajustarlo)
    outlinedPrimary: {
      borderColor: mode === 'light' ? '#1976d2' : '#42a5f5',
      '&:hover': {
        borderColor: mode === 'light' ? '#1565c0' : '#42a5f5',
        backgroundColor: 'transparent', // Asegura que el fondo sea transparente
      },
    },
  },
});