'use client';

import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  useTheme 
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DevicesIcon from '@mui/icons-material/Devices';
import PaletteIcon from '@mui/icons-material/Palette';
import CodeIcon from '@mui/icons-material/Code';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const theme = useTheme();
  
  const getIcon = () => {
    switch (icon) {
      case 'star':
        return <StarIcon sx={{ fontSize: 40 }} />;
      case 'devices':
        return <DevicesIcon sx={{ fontSize: 40 }} />;
      case 'palette':
        return <PaletteIcon sx={{ fontSize: 40 }} />;
      default:
        return <CodeIcon sx={{ fontSize: 40 }} />;
    }
  };
  
  return (
    <Card sx={{ 
      width: { xs: '100%', sm: 'calc(50% - 8px)', md: 'calc(33.33% - 8px)' },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <CardContent sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        p: 3
      }}>
        <Box 
          sx={{ 
            display: 'flex',
            alignItems: 'center',
            mb: 2,
            color: theme.palette.primary.main
          }}
        >
          {getIcon()}
        </Box>
        <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}