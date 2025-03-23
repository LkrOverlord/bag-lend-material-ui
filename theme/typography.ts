import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
  fontFamily: '"Plus Jakarta Sans", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
 
  // Headings
  h1: {
    fontFamily: '"Rubik", sans-serif',
    fontWeight: 700,
    fontSize: '2.5rem',
    lineHeight: 1.2,
  },
  h2: {
    fontFamily: '"Rubik", sans-serif',
    fontWeight: 700,
    fontSize: '2rem',
    lineHeight: 1.2,
  },
  h3: {
    fontFamily: '"Rubik", sans-serif',
    fontWeight: 600,
    fontSize: '1.75rem',
    lineHeight: 1.2,
  },
  h4: {
    fontFamily: '"Rubik", sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.2,
  },
  h5: {
    fontFamily: '"Rubik", sans-serif',
    fontWeight: 600,
    fontSize: '1.5rem',
    lineHeight: 1.2,
  },
 
  // Card title (name)
  h6: {
    fontFamily: '"Rubik", sans-serif',
    fontSize: '1.25rem', // 20px
    fontWeight: 500,
    lineHeight: 1.8, // 180% (36px)
    fontFeatureSettings: "'liga' off",
  },
 
  // Body text standard
  body1: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.5, // 150%
  },
  
  // Body text smaller
  body2: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.43, // ~20px (142.857%)
    fontFeatureSettings: "'liga' off",
  },
 
  // Location and rating text
  subtitle2: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '0.9rem', // 16px
    fontWeight: 550,
    lineHeight: 1.5, // 150% (24px)
    fontFeatureSettings: "'liga' off",
  },
 
  // Price text
  subtitle1: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1.125rem', // 18px
    fontWeight: 600,
    lineHeight: 1.78, // ~32px (177.778%)
    fontFeatureSettings: "'liga' off",
  },
 
  // Form labels and small text
  caption: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '0.875rem', // 14px
    fontWeight: 500,
    lineHeight: 1.43, // ~20px (142.857%)
    fontFeatureSettings: "'liga' off",
  },
  
  // Placeholder text
  overline: {
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontSize: '1rem', // 16px
    fontWeight: 400,
    lineHeight: 1.5, // 150%
    color: 'var(--Gray-scale-500, #A6A6A6)',
    fontFeatureSettings: "'liga' off",
    textTransform: 'none',
  },
 
  button: {
    textTransform: 'none',
    fontWeight: 600,
  },
};