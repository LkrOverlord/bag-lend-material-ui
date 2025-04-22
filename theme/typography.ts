// src/theme/typography.ts
import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
  fontFamily: 'var(--font-jakarta), sans-serif',
  
  // Headings
  h1: {
    fontFamily: 'var(--font-rubik), sans-serif',
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.2,
    fontFeatureSettings: "'liga' off",
  },
  h2: {
    fontFamily: 'var(--font-rubik), sans-serif',
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: 1.2,
    fontFeatureSettings: "'liga' off",
  },
  h3: {
    fontFamily: 'var(--font-rubik), sans-serif',
    fontWeight: 600,
    fontSize: '1.75rem',
    lineHeight: 1.2,
    fontFeatureSettings: "'liga' off",
  },
  h4: {
    fontFamily: 'var(--font-rubik), sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.2,
    fontFeatureSettings: "'liga' off",
  },
  h5: {
    fontFamily: 'var(--font-rubik), sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.2,
    fontFeatureSettings: "'liga' off",
  },

  // Card title (name) - Usando variable CSS para Noto Sans Gothic
  h6: {
    fontFamily: 'var(--font-rubik), sans-serif',
    fontSize: '1.25rem', // 20px
    fontWeight: 500,
    lineHeight: 1.8, // 180% (36px)
    fontFeatureSettings: "'liga' off",
  },
  // Body text standard
  body1: {
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.5, // 150%
    fontFeatureSettings: "'liga' off",
  },
  
  // Body text smaller
  body2: {
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.43,
    fontFeatureSettings: "'liga' off",
  },

  // Location and rating text
  subtitle2: {
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '1rem', // 16px (corregido de 0.9rem)
    fontWeight: 600, // 550 no es standard, usar 600
    lineHeight: 1.5,
    fontFeatureSettings: "'liga' off",
  },

  // Price text
  subtitle1: {
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    lineHeight: 1.78,
    fontFeatureSettings: "'liga' off",
  },

  // Form labels and small text
  caption: {
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.43,
    fontFeatureSettings: "'liga' off",
  },
  
  // Placeholder text
  overline: {
    fontFamily: 'var(--font-jakarta), sans-serif',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5,
    color: 'var(--Gray-scale-500)',
    fontFeatureSettings: "'liga' off",
    textTransform: 'none',
  },

  button: {
    textTransform: 'none',
    fontWeight: 600,
  },
};