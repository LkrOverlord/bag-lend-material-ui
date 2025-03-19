// 'use client';

// import { useState } from 'react';
// import {
//   AppBar,
//   Box,
//   Button,
//   Container,
//   IconButton,
//   Menu,
//   MenuItem,
//   Toolbar,
//   Typography,
//   useScrollTrigger,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import LightModeIcon from '@mui/icons-material/LightMode';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import { useThemeContext } from '@/theme/ThemeProvider';
// import Image from 'next/image';
// import LogoSvg from '@/public/assets/Logo.svg';
// import ProfileButton from './ProfileButton';

// const pages = ['HOW IT WORKS', 'ABOUT US', 'FAQS'];

// export default function Header() {
//   const { mode, toggleColorMode } = useThemeContext();
//   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
//   const [selectedPage, setSelectedPage] = useState<string | null>(null); // Estado para la página seleccionada

//   // Detecta si el usuario ha hecho scroll
//   const hasScrolled = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   // Define colores dinámicos para los textos y los íconos
//   const textColor = hasScrolled ? (mode === 'light' ? 'black' : 'white') : 'white';
//   const iconColor = hasScrolled ? (mode === 'light' ? 'black' : 'white') : 'white';

//   return (
//     <AppBar
//       position="fixed"
//       sx={{
//         backgroundColor: hasScrolled ? 'background.paper' : 'transparent',
//         boxShadow: hasScrolled ? 1 : 'none',
//         transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
//       }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
//           {/* Logo - Desktop */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             <Image src={LogoSvg} alt="logo" />
//           </Box>

//           {/* Menu - Mobile */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="menú de navegación"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon sx={{ color: iconColor }} />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center" sx={{ color: textColor }}>
//                     {page}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>

//           {/* Logo - Mobile */}
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <Image src={LogoSvg} alt="logo" />
//           </Box>

//           {/* Menu - Desktop */}
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//             <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={() => setSelectedPage(page)}
//                   sx={{
//                     my: 2,
//                     color: textColor,
//                     display: 'block',
//                     position: 'relative',
//                     textTransform: 'none',
//                     minWidth: 'auto',
//                     padding: '6px 12px',
//                     boxShadow: 'none', 
//                     '&::after': {
//                       content: '""',
//                       position: 'absolute',
//                       bottom: 0,
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       width: selectedPage === page ? '100%' : '0%',
//                       height: '2px',
//                       backgroundColor: 'green',
//                       transition: 'width 0.3s ease',
//                     },
//                     '&:hover::after': {
//                       width: '100%',
//                     },
//                   }}
//                   variant="text"
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>

//             <ProfileButton />

//             {/* Theme Toggle Button */}
//             <Box>
//               <IconButton onClick={toggleColorMode} color="inherit">
//                 {mode === 'dark' ? (
//                   <LightModeIcon sx={{ color: iconColor }} />
//                 ) : (
//                   <DarkModeIcon sx={{ color: iconColor }} />
//                 )}
//               </IconButton>
//             </Box>
//           </div>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }


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
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo - Desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Image src={LogoSvg} alt="logo" />
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
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <Image src={LogoSvg} alt="logo" />
          </Box>

          {/* Menu - Desktop */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => setSelectedPage(page)}
                  sx={{
                    my: 2,
                    color: textColor,
                    display: 'block',
                    position: 'relative',
                    textTransform: 'none',
                    minWidth: 'auto',
                    padding: '6px 12px',
                    boxShadow: 'none',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: selectedPage === page ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: theme.palette.primary.main, // Usar el color primario de la paleta
                      transition: 'width 0.3s ease',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                  variant="text"
                >
                  {page}
                </Button>
              ))}
            </Box>

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