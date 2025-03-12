import Header from '@/components/layout/Header';
import ActionButton from '@/components/ui/ActionButton';
import DataTable from '@/components/ui/DataTable';
import FeatureCard from '@/components/ui/FeatureCard';
import MainCard from '@/components/ui/MainCard';
import { Box, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Container component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 6, textAlign: 'center' }}>
          Bienvenido a Next.js con Material UI
        </Typography>
        
        <MainCard title="Componente Principal">
          <Typography variant="body1" sx={{ mb: 2 }}>
            Este es un ejemplo de aplicación construida con Next.js 14 y Material UI.
            Puedes cambiar entre modo claro y oscuro usando el botón en la esquina superior derecha.
          </Typography>
          
          <ActionButton />
        </MainCard>
        
        <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
          <FeatureCard 
            title="Componente Reutilizable" 
            description="Este es un componente de tarjeta que puede ser reutilizado en toda la aplicación"
            icon="star"
          />
          <FeatureCard 
            title="Diseño Responsivo" 
            description="La aplicación se adapta perfectamente a diferentes tamaños de pantalla"
            icon="devices"
          />
          <FeatureCard 
            title="Themeable" 
            description="Personaliza los colores y estilos según tus necesidades"
            icon="palette"
          />
        </Box>
        
        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Tabla de Datos
          </Typography>
          <DataTable />
        </Box>
      </Container>
    </Box>
  );
}