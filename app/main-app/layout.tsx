"use client"
import Toolbar from "@/components/layout/Toolbar";
import { Box, useTheme } from "@mui/material";

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{
        backgroundColor: theme.palette.background.paper
      }}>
        <Toolbar sx={{
          padding: "0 22px",
        }}/>
        <main>
          {children}
        </main>
      </Box>
    </>
  );
}