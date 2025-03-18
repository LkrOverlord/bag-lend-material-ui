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
  Typography
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeContext } from '@/theme/ThemeProvider';
import Image from 'next/image';
import LogoSvg from '@/public/assets/Logo.svg'
import ProfileButton from './ProfileButton';

const pages = ['HOW IT WORKS', 'ABOUT US', 'FAQS'];

export default function Header() {
  const { mode, toggleColorMode } = useThemeContext();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "transparent", // Fondo transparente
        boxShadow: "none", // Elimina la sombra predeterminada
        backgroundImage: "none", // Elimina cualquier gradiente o imagen de fondo
      }}
    >
      <Container maxWidth="xl" sx={{
        backgroundColor: "transparent",
      }}>
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: "transparent" }}>
          {/* Logo - Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Image src={LogoSvg} alt='logo' />
          </Box>

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
              <MenuIcon />
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
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo - Mobile */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Image src={LogoSvg} alt='logo' />
          </Box>

          {/* Menu - Desktop */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <ProfileButton />

            {/* Theme Toggle Button */}
            <Box>
              <IconButton onClick={toggleColorMode} color="inherit">
                {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>
          </div>

        </Toolbar>
      </Container>
    </AppBar>
  );
}