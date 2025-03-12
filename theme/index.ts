import { PaletteMode } from '@mui/material';
import { deepmerge } from '@mui/utils';
import { palettes } from './palette';
import { typography } from './typography';
import { components } from './components';

export const getThemeOptions = (mode: PaletteMode) => {
  const palette = palettes[mode];
  
  return deepmerge(
    {
      palette,
      typography,
      components: components(mode),
      shape: {
        borderRadius: 8,
      },
    },
    {
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    }
  );
};