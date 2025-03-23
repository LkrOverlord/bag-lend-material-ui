"use client"

import type React from "react"

import { useState } from "react"
import { Box, IconButton, Menu, MenuItem } from "@mui/material"
import { MoreVert as MoreVertIcon } from "@mui/icons-material"
import { CardMenuItem } from "@/types/CardTypes"

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
    <Box sx={{ position: "absolute", top: 8, right: 8 }}>
      <IconButton onClick={handleMenuClick} size="small">
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={handleMenuItemClick(item.action)} sx={{ color: item.color }}>
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

