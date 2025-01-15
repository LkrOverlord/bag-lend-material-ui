'use client';

import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Plus_Jakarta_Sans, Rubik } from 'next/font/google';
import { createContext, useContext, useMemo, useState } from 'react';
import { PaletteMode } from '@mui/material';

const plusJakartaSans = Plus_Jakarta_Sans({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const rubik = Rubik({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

// Definir los tokens de diseño
const tokens = {
    colors: {
        primary: '#8BC34A', // Color verde para acciones principales
        accent: '#6A9D50', // Color verde para enlaces y textos destacados
        text: {
            primary: '#404040', // Color principal para textos
            secondary: '#737373', // Color para textos secundarios
            accent: '#6A9D50', // Color verde para textos especiales
            placeholder: '#A6A6A6', // Gray-scale-500
            title: '#404040', // Gray-scale-900
        },
        background: {
            light: '#FFFFFF',
            dark: '#121212',
        },
    },
    typography: {
        small: {
            fontSize: '14px',
            lineHeight: '20px',
        },
        medium: {
            fontSize: '16px',
            lineHeight: '24px',
        },
    },
    fontWeights: {
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
    },
};

const ColorModeContext = createContext({ toggleColorMode: () => { } });

export const useColorMode = () => useContext(ColorModeContext);

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<PaletteMode>('light');

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        []
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: tokens.colors.primary,
                        contrastText: '#FFFFFF',
                    },
                    text: {
                        primary: tokens.colors.text.primary,
                        secondary: tokens.colors.text.secondary,
                    },
                    background: {
                        default: mode === 'light' ? tokens.colors.background.light : tokens.colors.background.dark,
                    },
                },
                typography: {
                    fontFamily: plusJakartaSans.style.fontFamily,
                    fontSize: 16,
                    h1: {
                        color: tokens.colors.text.primary,
                        fontWeight: tokens.fontWeights.bold,
                    },
                    h2: {
                        color: tokens.colors.text.primary,
                        fontWeight: tokens.fontWeights.medium,
                    },
                    body1: {
                        color: tokens.colors.text.primary,
                        fontWeight: tokens.fontWeights.regular,
                    },
                    body2: {
                        color: tokens.colors.text.secondary,
                        fontWeight: tokens.fontWeights.regular,
                    },
                    button: {
                        textTransform: 'none',
                        fontWeight: tokens.fontWeights.medium,
                    },
                },
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                borderRadius: '8px',
                                padding: '8px 24px',
                                boxShadow: 'none',
                                '&:hover': {
                                    boxShadow: 'none',
                                },
                            },
                            containedPrimary: {
                                backgroundColor: tokens.colors.primary,
                                '&:hover': {
                                    backgroundColor: tokens.colors.primary,
                                    opacity: 0.9,
                                },
                            },
                            text: {
                                color: tokens.colors.text.accent,
                                padding: '8px 24px',
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    opacity: 0.8,
                                },
                            },
                        },
                    },
                    MuiLink: {
                        styleOverrides: {
                            root: {
                                color: tokens.colors.text.accent,
                                textDecoration: 'none',
                                '&:hover': {
                                    opacity: 0.8,
                                },
                            },
                        },
                    },
                    // Nuevas configuraciones para inputs
                    MuiInputLabel: {
                        styleOverrides: {
                            root: {
                                color: tokens.colors.text.title,
                                fontSize: tokens.typography.small.fontSize,
                                lineHeight: tokens.typography.small.lineHeight,
                                fontWeight: tokens.fontWeights.medium,
                                fontFeatureSettings: '"liga" off',
                            },
                        },
                    },
                    MuiOutlinedInput: {
                        styleOverrides: {
                            root: {
                                '& .MuiOutlinedInput-input': {
                                    color: tokens.colors.text.primary,
                                    fontSize: tokens.typography.medium.fontSize,
                                    lineHeight: tokens.typography.medium.lineHeight,
                                    fontWeight: tokens.fontWeights.regular,
                                    fontFeatureSettings: '"liga" off',
                                    '&::placeholder': {
                                        color: tokens.colors.text.placeholder,
                                        opacity: 1,
                                    },
                                },
                            },
                        },
                    },
                },
            }),
        [mode]
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ColorModeContext.Provider>
    );
}

