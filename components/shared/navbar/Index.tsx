'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '../menu/Index';
import ProfileButton from './ProfileButton';
import AppLogo from '@/public/assets/AppLogo.svg';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('/');

  const menuItems = [
    { 
      label: 'HOW IT WORKS', 
      path: '/how-it-works', 
      onClick: () => setActiveItem('/how-it-works')
    },
    { 
      label: 'ABOUT US', 
      path: '/about', 
      onClick: () => setActiveItem('/about')
    },
    { 
      label: 'FAQS', 
      path: '/faqs', 
      onClick: () => setActiveItem('/faqs')
    },
    { 
      label: 'CONTACT', 
      path: '/contact', 
      onClick: () => setActiveItem('/contact')
    },
  ];

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Box>
          <Link href="/" passHref>
            <Image src={AppLogo.src} alt="Logo" width={247} height={24} style={{ cursor: 'pointer' }} />
          </Link>
        </Box>

        {/* Menu and Profile Button */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Menu items={menuItems} activeItem={activeItem} />
          <ProfileButton />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

