'use client';

import { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from '@/theme/ThemeProvider';
import Image from 'next/image';
import LogoSvg from '@/public/assets/Logo.svg';
import ProfileButton from './ProfileButton';
import MenuWithUnderline from '../ui/Menus/Menu';

const pages = ['HOW IT WORKS', 'ABOUT US', 'FAQS'];

export default function Header() {
  const { mode, toggleColorMode } = useThemeContext();
  const theme = useTheme(); // Usar el tema de Material-UI
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);

  // Detecta si el usuario ha hecho scroll
  const hasScrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Define colores dinámicos para los textos y los íconos
  const textColor = hasScrolled ? theme.palette.text.primary : 'white';
  const iconColor = hasScrolled ? theme.palette.text.primary : 'white';

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: hasScrolled ? theme.palette.background.paper : 'transparent',
        boxShadow: hasScrolled ? 1 : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {/* Logo - Desktop */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Image src={LogoSvg} alt="logo" />
          </Box> */}

          {/* Menu - Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menú de navegación"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: iconColor }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" sx={{ color: textColor }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Image src={LogoSvg} alt="logo" />
          </Box> */}

          {/* Menu - Desktop */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MenuWithUnderline pages={pages} textColor={textColor} displayStyle={{ xs: 'none', md: 'flex' }} />
            <ProfileButton />
            {/* Theme Toggle Button */}
            <Box>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === 'dark' ? (
                  <LightModeIcon sx={{ color: iconColor }} />
                ) : (
                  <DarkModeIcon sx={{ color: iconColor }} />
                )}
              </IconButton>
            </Box>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}