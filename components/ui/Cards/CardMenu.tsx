"use client"

import type React from "react"

import { useState } from "react"
import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import { MoreHoriz } from "@mui/icons-material"
import { CardMenuItem } from "@/types/Product"


interface CardMenuProps {
  menuItems: CardMenuItem[]
}

export const CardMenu = ({ menuItems }: CardMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    setAnchorEl(null)
  }

  const handleMenuItemClick = (action: () => void) => (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
    action()
    setAnchorEl(null)
  }

  return (
    <Box>
      <IconButton
        onClick={handleMenuClick}
        size="small"
        sx={{
          padding: "4px",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          },
        }}
      >
        <MoreHoriz />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        elevation={2}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={handleMenuItemClick(item.action)}
            sx={{
              color: item.color,
              fontSize: "0.875rem",
              py: 1,
              px: 2,
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
