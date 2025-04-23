"use client"
import { Box, Button, IconButton, useTheme } from "@mui/material"
import { useState, ReactNode } from "react"

type SvgIcon = {
  src: string;
  alt: string;
}

type Props = {
  pages?: string[] // Ahora es opcional
  icons?: SvgIcon[] // Array de SVGs opcional
  textColor?: string
  displayStyle?: {
    xs?: string
    md?: string
  }
}

const MenuWithUnderline = ({ pages, icons, textColor, displayStyle }: Props) => {
  const [selectedPage, setSelectedPage] = useState<string | null>(null)
  const theme = useTheme()

  // Usar el displayStyle proporcionado o el valor por defecto
  const display = displayStyle || { xs: "flex", md: "flex" }

  return (
    <>
      {/* Sección de páginas (opcional) */}
      {pages && pages.length > 0 && (
        <Box sx={{ display: display, ...displayStyle, height: "fit-content" }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => setSelectedPage(page)}
              sx={{
                my: 2,
                color: textColor,
                display: "block",
                position: "relative",
                textTransform: "none",
                minWidth: "auto",
                padding: "6px 12px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "transparent !important",
                  boxShadow: "none !important",
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: selectedPage === page ? "100%" : "0%",
                  height: "2px",
                  backgroundColor: theme.palette.primary.main,
                  transition: "width 0.3s ease",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
              variant="text"
            >
              {page}
            </Button>
          ))}
        </Box>
      )}

      {/* Sección de iconos (opcional) */}
      {icons && icons.length > 0 && (
        <Box sx={{ 
          display: "flex", 
          gap: 2,
          justifyContent: "center",
          height: "fit-content",
        }}>
          {icons.map((icon, index) => (
            <Box
              key={index}
              component="a"
              href="#"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid #333",
                color: textColor || "#fff",
                transition: "border-color 0.3s ease",
                "&:hover": {
                  border: `1px solid ${theme.palette.primary.main}`,
                },
              }}
            >
              <Box
                component="img"
                src={icon.src}
                alt={icon.alt}
                sx={{
                  width: 20,
                  height: 20,
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    </>
  )
}

export default MenuWithUnderline