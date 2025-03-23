import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import ThemeProvider from '@/theme/ThemeProvider';
import Header from '@/components/layout/Header';
import { FontProvider } from '@/theme/fonts';


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
      <body>
        <AppRouterCacheProvider>
          <FontProvider>
            <ThemeProvider>
              <Header />
              {children}
            </ThemeProvider>
          </FontProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}