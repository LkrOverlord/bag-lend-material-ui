import { Box, useTheme } from "@mui/material"


interface TagDisplayProps {
  tag: string
}

export const TagDisplay = ({ tag }: TagDisplayProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "fit-content",
        display: "flex",
        height: { xs: '22px', sm: '28px' },
        padding: { xs: '2px 4px', sm: '4px 8px' },
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        border: `1px solid ${theme.palette.primary.main}`,
        backgroundColor: theme.palette.mode === "light" ? "#FFF" : theme.palette.background.paper,
        color: theme.palette.primary.main,
        fontSize: { xs: '0.75rem', sm: '0.875rem' }, // 12px - 14px
        fontWeight: 500,
        lineHeight: 1,
      }}
    >
      {tag}
    </Box>
  );
};