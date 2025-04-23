import { Drawer, Box, Avatar, Typography, Button, Divider, useTheme } from '@mui/material';
import NavigationButton from './NavigationButton';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useRouter } from 'next/navigation';

interface RightDrawerProps {
    open: boolean;
    onClose: () => void;
    user: {
        name: string;
        avatar: string;
    };
}

const RightDrawer = ({ open, onClose, user }: RightDrawerProps) => {
    const router = useRouter();
    const navigationItems = [
        { label: 'Notifications', icon: <NotificationsNoneIcon />, onClick: () => console.log('Notifications clicked') },
        { label: 'Inbox', icon: <ForumOutlinedIcon />, onClick: () => console.log('Inbox clicked') },
        { label: 'Favorites', icon: <FavoriteBorderOutlinedIcon />, onClick: () => router.push('/main-app/favorites') },
        { label: 'Wallet', icon: <AccountBalanceWalletOutlinedIcon />, onClick: () => console.log('Wallet clicked') },
        { label: 'My Listings', icon: <SellOutlinedIcon />, onClick: () => router.push('/main-app/my-listings') },
        { label: 'My Rentals', icon: <ShoppingBagOutlinedIcon />, onClick: () => console.log('Rentals clicked') },
        { label: 'Log Out', icon: <LogoutOutlinedIcon />, onClick: () => console.log('Logout clicked') },
    ];

     const theme = useTheme();

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: 300,
                    bgcolor: 'background.paper',
                    p: 2,
                },
            }}
        >
            {/* Header */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                    src={user.avatar}
                    sx={{
                        width: 56,
                        height: 56,
                        mr: 2,
                        border: '2px solid',
                        borderColor: 'primary.main'
                    }}
                />
                <Box >
                    <Typography variant="h4" color="text.primary">
                        Hi, {user.name}
                    </Typography>
                    <Button
                        variant="text"
                        sx={{
                            color: 'secondary.main',
                            textTransform: 'none',
                            padding: "5px 8px",
                            '&:hover': {
                                backgroundColor: 'transparent',
                                opacity: 0.8
                            },
                            display: "flex",
                            alignItems: "center",
                            alignContent:"center",
                            gap: "5px",
                        }}
                        onClick={navigationItems[0].onClick}
                    >
                        <Typography variant="body2" color="text.primary">
                            My profile
                        </Typography>
                        <ArrowRightAltIcon color="primary" sx={{
                            marginTop:"2.5px",
                            
                        }}/>
                    </Button>
                </Box>
            </Box>

            <Divider sx={{ my: 2, bgcolor: 'grey.300' }} />

            {/* Navigation Buttons */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {navigationItems.map((item, index) => (
                    <NavigationButton
                        key={index}
                        label={item.label}
                        icon={item.icon}
                        onClick={item.onClick}
                        isLast={index === navigationItems.length - 1}
                    />
                ))}
            </Box>
        </Drawer>
    );
};

export default RightDrawer;