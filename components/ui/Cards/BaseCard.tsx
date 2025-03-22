"use client"

import type React from "react"
import { useState } from "react"
import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip,
    IconButton,
    Menu,
    MenuItem,
    Rating,
    useMediaQuery,
    useTheme,
    SxProps,
    Theme,
} from "@mui/material"
import {
    MoreVert as MoreVertIcon,
    Favorite as FavoriteIcon,
    FavoriteBorder as FavoriteBorderIcon,
    LocationOn as LocationOnIcon,
} from "@mui/icons-material"

export interface BaseCardProps {
    id: string
    title: string
    image: string | { src: string } // Acepta string o objeto con src
    price: number
    currency?: string
    period?: string
    location?: string
    rating?: number
    tags?: string[]
    status?: "pending" | "active" | "paused"
    isFavorite?: boolean
    onFavoriteToggle?: (id: string) => void
    onClick?: () => void
    menuItems?: Array<{
        label: string
        action: () => void
        color?: string
    }>
    variant?: "vertical" | "horizontal"
    showRating?: boolean
    showLocation?: boolean
    showFavorite?: boolean
    showMenu?: boolean
    imageHeight?: number | string
    sx?: SxProps<Theme>
}

const BaseCard: React.FC<BaseCardProps> = ({
    id,
    title,
    image,
    price,
    currency = "USD",
    period = "day",
    location,
    rating,
    tags = [],
    status,
    isFavorite = false,
    onFavoriteToggle,
    onClick,
    menuItems = [],
    variant = "vertical",
    showRating = true,
    showLocation = true,
    showFavorite = true,
    showMenu = true,
    imageHeight = 200,
    sx = {},
}) => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const [favorite, setFavorite] = useState(isFavorite)

    // const cardVariant = isMobile && variant === "vertical" ? "horizontal" : variant
    const cardVariant = variant;

    // Manejo de imagen para ambos casos (string o objeto)
    const imageUrl = typeof image === 'string' ? image : image.src

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

    const handleFavoriteClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation()
        setFavorite(!favorite)
        onFavoriteToggle?.(id)
    }

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: cardVariant === "vertical" ? "column" : "row",
                cursor: onClick ? "pointer" : "default",
                position: "relative",
                
                height: "428px",
                width: "100%",
                [theme.breakpoints.down('sm')]: {
                    width: "100%",
                    height: 291
                },
                '&:hover': {
                    boxShadow: theme.shadows[4],
                },
                ...sx
            }}
            onClick={onClick}
        >
            {status && (
                <Chip
                    label={status.charAt(0).toUpperCase() + status.slice(1)}
                    color={status === "pending" ? "warning" : status === "active" ? "success" : "default"}
                    size="small"
                    sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        zIndex: 1,
                    }}
                />
            )}

            <Box
                sx={{
                    height: cardVariant === "vertical" ? imageHeight : '100%',
                    width: cardVariant === "horizontal" ? { xs: 120, sm: 150 } : '100%',
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderTopLeftRadius: cardVariant === "vertical" ? '12px' : 0,
                    borderTopRightRadius: cardVariant === "vertical" ? '12px' : 0,
                    position: 'relative'
                }}
            >
                {showFavorite && (
                    <IconButton
                        sx={{
                            position: "absolute",
                            top: 8,
                            left: 8,
                            zIndex: 1,
                            bgcolor: "background.paper",
                            "&:hover": { bgcolor: "background.default" }
                        }}
                        onClick={handleFavoriteClick}
                    >
                        {favorite ? <FavoriteIcon color="primary" /> : <FavoriteBorderIcon />}
                    </IconButton>
                )}

                {tags.length > 0 && (
                    <Chip
                        label={tags[0]}
                        color="primary"
                        variant="filled"
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            zIndex: 1,
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText
                        }}
                    />
                )}
            </Box>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    position: "relative",
                }}
            >
                {showMenu && menuItems.length > 0 && (
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
                )}

                <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                    <Typography variant="h6" component="h2" gutterBottom noWrap>
                        {title}
                    </Typography>

                    {showLocation && location && (
                        <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                            <LocationOnIcon fontSize="small" color="action" sx={{ mr: 0.5 }} />
                            <Typography variant="body2" color="text.secondary" noWrap>
                                {location}
                            </Typography>
                        </Box>
                    )}

                    {showRating && rating !== undefined && (
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <Rating value={rating} precision={0.5} size="small" readOnly />
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                                {rating}
                            </Typography>
                        </Box>
                    )}

                    <Typography variant="h6" component="div" sx={{ fontWeight: "bold", mt: "auto" }}>
                        ${price} {currency}/{period}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}

export default BaseCard