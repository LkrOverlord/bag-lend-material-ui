'use client';

import React, { useState } from 'react';
import { Grid2, IconButton, Menu, MenuItem, Stack } from '@mui/material';
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ProfileAvatar from '@/public/assets/profileAvatar.svg';

const ProfileButton = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
        sx={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '4px',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
          },
        }}
      >
        <Stack direction="row" alignItems="center">
          <Image
            src={ProfileAvatar}
            alt="Profile"
            width={24}
            height={24}
          />
          <KeyboardArrowDownIcon sx={{ fontSize: 20, color:"black" }} />
        </Stack>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          marginTop: '8px',
        }}
      >
        <MenuItem onClick={handleClose}>Perfil</MenuItem>
        <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
        <MenuItem onClick={handleClose}>Cerrar sesión</MenuItem>
      </Menu>
      <Grid2>
        
      </Grid2>
    </div>
  );
};

export default ProfileButton;

