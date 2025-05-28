import { Box, useTheme } from "@mui/material"

interface TagDisplayProps {
  tag: string
  variant?: 'default' | 'status'
}

export const TagDisplay = ({ tag, variant = 'default' }: TagDisplayProps) => {
  const theme = useTheme();
  
  // Function to get status colors based on tag value
  const getStatusColors = (status: string) => {
    const normalizedStatus = status.toLowerCase();
    
    switch (normalizedStatus) {
      case 'pending':
        return {
          backgroundColor: '#FFF3ED', // Light orange background
          color: '#FF9F0A', // Orange text
          borderColor: '#FF9F0A', // Orange border
        };
      case 'cancelled':
      case 'canceled':
        return {
          backgroundColor: '#FFEBEE', // Light red background
          color: '#D32F2F', // Red text
          borderColor: '#D32F2F', // Red border
        };
      case 'active':
        return {
          backgroundColor: '#E8F5E8', // Light green background
          color: '#2E7D32', // Green text
          borderColor: '#2E7D32', // Green border
        };
      case 'closed':
        return {
          backgroundColor: '#F5F5F5', // Light gray background
          color: '#616161', // Gray text
          borderColor: '#616161', // Gray border
        };
      default:
        return {
          backgroundColor: theme.palette.mode === "light" ? "#FFF" : theme.palette.background.paper,
          color: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        };
    }
  };

  const colors = variant === 'status' ? getStatusColors(tag) : {
    backgroundColor: theme.palette.mode === "light" ? "#FFF" : theme.palette.background.paper,
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  };

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
        border: `1px solid ${colors.borderColor}`,
        backgroundColor: colors.backgroundColor,
        color: colors.color,
        fontSize: { xs: '0.75rem', sm: '0.875rem' }, // 12px - 14px
        fontWeight: 500,
        lineHeight: 1,
      }}
    >
      {tag}
    </Box>
  );
};