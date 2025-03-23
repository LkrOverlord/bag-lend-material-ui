'use client';

import React, { ReactNode } from 'react';
import { Rubik, Plus_Jakarta_Sans } from 'next/font/google';

// Configuración de la fuente Rubik
const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700'],
});

// Configuración de la fuente Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta-sans',
  weight: ['300', '400', '500', '600', '700'],
});

interface FontProviderProps {
  children: ReactNode;
}

export function FontProvider({ children }: FontProviderProps) {
  return (
    <div className={`${rubik.variable} ${plusJakartaSans.variable}`}>
      {children}
    </div>
  );
}