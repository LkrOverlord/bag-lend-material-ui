// components/Item/Item.tsx
import React from 'react';
import { Box, Typography, Avatar, Stack, useTheme } from '@mui/material';

// Tipos para el label
export interface LabelConfig {
  text: string;
  icon?: React.ReactNode; // Para iconos de Material UI
  image?: string; // Para imágenes PNG/JPG
}

// Tipos para el valor
export interface ValueConfig {
  text: string;
  avatar?: {
    src: string; // Solo string para JPG/PNG
    alt: string;
  };
}

export interface ItemTableProps {
  label: string | LabelConfig;
  value: string | ValueConfig;
}

const ItemTable: React.FC<ItemTableProps> = ({ label, value }) => {
  const theme = useTheme();
  // Renderizar el label
  const renderLabel = () => {
    if (typeof label === 'string') {
      return (
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '14px' }}>
          {label}
        </Typography>
      );
    }

    return (
      <Stack direction="row" alignItems="center" spacing={1}>
        {/* Icono o imagen */}
        {label.icon && label.icon}
        {label.image && (
          <Box
            component="img"
            src={label.image}
            alt=""
            sx={{
              width: 20,
              height: 20,
              objectFit: 'contain'
            }}
          />
        )}
        {/* Texto del label */}
        <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontSize: '14px' }}>
          {label.text}
        </Typography>
      </Stack>
    );
  };

  // Renderizar el valor
  const renderValue = () => {
    if (typeof value === 'string') {
      return (
        <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontSize: '14px' }}>
          {value}
        </Typography>
      );
    }

    return (
      <Stack direction="row" alignItems="center" spacing={1}>
        {/* Avatar si existe */}
        {value.avatar && (
          <Avatar
            src={value.avatar.src}
            alt={value.avatar.alt}
            sx={{ 
              width: 24, 
              height: 24,
              border: `2px solid ${theme.palette.primary.main}` // Borde circular verde
            }}
          />
        )}
        {/* Texto del valor */}
        <Typography variant="body2" sx={{ color: theme.palette.text.primary, fontSize: '14px' }}>
          {value.text}
        </Typography>
      </Stack>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2,
        px: 3,
        minHeight: 56
      }}
    >
      {/* Label a la izquierda */}
      <Box sx={{ flex: '0 0 auto' }}>
        {renderLabel()}
      </Box>

      {/* Valor a la derecha */}
      <Box sx={{ flex: '0 0 auto' }}>
        {renderValue()}
      </Box>
    </Box>
  );
};

export default ItemTable;