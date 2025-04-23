import { Box, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { ReactNode } from 'react';

interface NavigationButtonProps {
    label: string;
    icon: ReactNode;
    onClick: () => void;
    isLast?: boolean;
}

const NavigationButton = ({ label, icon, onClick, isLast }: NavigationButtonProps) => {
    const theme = useTheme();
    return (
        <ListItem disablePadding>
            <ListItemButton
                onClick={onClick}
                sx={{
                    borderRadius: 1,
                    mb: isLast ? 0 : 1,
                    '&:hover': {
                        backgroundColor: 'grey.100',
                    },
                    '& .MuiListItemIcon-root': {
                        minWidth: '40px',
                    },
                    border: "1px solid",
                    borderColor: theme.palette.grey[200],

                }}
            >
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: "100%"

                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: "fit-content",

                    }}>
                        <ListItemIcon sx={{ color: theme.palette.primary.main }}>
                            {icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={label}
                            slots={{
                                primary: Typography,
                            }}
                            slotProps={{
                                primary: {
                                    variant: 'h6',
                                    color: theme.palette.primary.main,
                                    component: 'span',
                                    fontSize: '16px',
                                },
                            }}
                            sx={{
                                fontSize: '16px !important',
                            }}
                        />

                    </Box>
                    <ArrowRightAltIcon color="primary" sx={{
                        marginTop: "2.5px",
                    }} />
                </Box>

            </ListItemButton>
        </ListItem>
    );
};

export default NavigationButton;