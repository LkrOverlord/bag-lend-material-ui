'use client';

import React, { useState } from 'react';
import { Button, Menu as MuiMenu, MenuItem, useMediaQuery, useTheme, IconButton, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

interface MenuItemType {
  label: string;
  path: string;
  onClick: () => void;
}

interface MenuProps {
  items: MenuItemType[];
  activeItem: string;
}

const Menu: React.FC<MenuProps> = ({ items, activeItem }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (onClick: () => void) => {
    onClick();
    handleCloseMenu();
  };

  if (isMobile) {
    return (
      <>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleOpenMenu}
        >
          <MenuIcon />
        </IconButton>
        <MuiMenu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          {items.map((item) => (
            <MenuItem 
              key={item.path} 
              onClick={() => handleItemClick(item.onClick)}
              component={Link}
              href={item.path}
              selected={activeItem === item.path}
            >
              {item.label}
            </MenuItem>
          ))}
        </MuiMenu>
      </>
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      {items.map((item) => (
        <Button
          key={item.path}
          color="inherit"
          component={Link}
          href={item.path}
          onClick={item.onClick}
          sx={{
            borderBottom: activeItem === item.path ? '2px solid' : 'none',
            borderRadius: 0,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
            },
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
};

export default Menu;

