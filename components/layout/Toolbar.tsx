"use client"
import { usePathname, useRouter } from "next/navigation"
import { AppBar, Toolbar as MuiToolbar, Typography, IconButton, Button, useTheme } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import AddIcon from "@mui/icons-material/Add"

const Toolbar = () => {
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
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          {getTitle()}
        </Typography>

        {/* Publish Button - only shown for my-listings */}
        <div style={{ minWidth: "80px", display: "flex", justifyContent: "flex-end" }}>
          {showPublishButton ? (
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handlePublish}
              sx={{
                textTransform: "none",
                fontWeight: 600,
                borderRadius: "8px",
                boxShadow: isDarkMode
                  ? "none"
                  : "0px 2px 4px -1px rgba(0,0,0,0.07), 0px 4px 5px 0px rgba(0,0,0,0.05), 0px 1px 10px 0px rgba(0,0,0,0.03)",
                "&:hover": {
                  boxShadow: isDarkMode
                    ? "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)"
                    : "0px 3px 5px -1px rgba(0,0,0,0.1), 0px 6px 10px 0px rgba(0,0,0,0.08), 0px 1px 18px 0px rgba(0,0,0,0.05)",
                  backgroundColor: isDarkMode ? "#42a5f5" : "#1565c0",
                },
                padding: "6px 16px",
              }}
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
