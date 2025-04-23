"use client"
import { usePathname, useRouter } from "next/navigation"
import { AppBar, Toolbar as MuiToolbar, Typography, IconButton, Button, useTheme, Box, Theme, SxProps } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import AddIcon from "@mui/icons-material/Add"

interface ToolbarProps {
  sx?: SxProps<Theme> // 1. Definir prop para estilos opcionales
}

const Toolbar = ({ sx }: ToolbarProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const theme = useTheme()

  // Determine title based on pathname
  const getTitle = () => {
    if (pathname.endsWith("/favorites")) return "Favorites"
    if (pathname.endsWith("/my-rentals")) return "My Rentals"
    if (pathname.endsWith("/my-listings")) return "My Listings"

    // Default title or extract from pathname
    const segments = pathname.split("/")
    const lastSegment = segments[segments.length - 1]
    return lastSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  // Check if we should show the publish button
  const showPublishButton = pathname.endsWith("/my-listings")

  // Handle back button click
  const handleBack = () => {
    router.back()
  }

  // Handle publish button click
  const handlePublish = () => {
    // Add your publish logic here
    console.log("Publish clicked")
  }

  const isDarkMode = theme.palette.mode === "dark"

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.grey[isDarkMode ? 200 : 300]}`,
        ...sx,
      }}
    >
      <MuiToolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "8px 16px",
          minHeight: "56px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", width:"100%", gap: "20px" }}>
          {/* Back Button */}
          <IconButton
            edge="start"
            onClick={handleBack}
            sx={{
              color: theme.palette.text.primary,
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          {/* Title */}
          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {getTitle()}
          </Typography>
        </Box>


        {/* Publish Button - only shown for my-listings */}
        <div style={{ minWidth: "80px", display: "flex", justifyContent: "flex-end" }}>
          {showPublishButton ? (
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handlePublish}
            >
              Publish
            </Button>
          ) : (
            <div /> // Empty div to maintain layout
          )}
        </div>
      </MuiToolbar>
    </AppBar>
  )
}

export default Toolbar
