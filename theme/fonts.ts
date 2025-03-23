// src/theme/fonts.ts
import { Rubik, Plus_Jakarta_Sans } from 'next/font/google';

export const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700'],
  adjustFontFallback: false,
});

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['300', '400', '500', '600', '700'],
  adjustFontFallback: false,
});