import { Inter } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeProvider from '@/theme/ThemeProvider';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next.js con Material UI',
  description: 'Aplicación de ejemplo con Next.js 14 y Material UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}