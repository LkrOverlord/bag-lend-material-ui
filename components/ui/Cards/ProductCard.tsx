"use client";

import { useRouter } from "next/navigation";
import { useMediaQuery, useTheme } from "@mui/material";
import BaseCard from "./BaseCard";
import { ProductCardProps } from "@/types/Product";
import { MenuItem } from "@/types/MenuItem";


const ProductCard = ({
  product,
  onEdit,
  onPause,
  onDelete,
  onReport,
  onFavoriteToggle,
  cardType,
  onClick,
}: ProductCardProps) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


  // Card click handler
  const handleCardClick = () => {
    if (cardType === "landing" || cardType === "favorite") {
      router.push(`/products/${product.id}`);
      return;
    }

    if (onClick) {
      onClick(); // Solo se ejecuta para rental
    }

    // Para listing no hacemos nada a menos que se agregue lógica específica
  };

  // Get appropriate menu items based on card type
  const getMenuItems = (): MenuItem[] => {
    switch (cardType) {
      case "listing":
        return [
          { label: "Edit", action: () => onEdit?.(product.id) },
          { label: "Pause", action: () => onPause?.(product.id) },
          { label: "Delete", action: () => onDelete?.(product.id), color: "error.main" },
        ];
      case "rental":
        return [{ label: "Report problem", action: () => onReport?.(product.id) }];
      default:
        return [];
    }
  };

  // Card style based on type and device
  const cardStyle =
    (cardType === "landing" || cardType === "favorite") ? {
      width: "100%",
      height: isMobile && cardType === "favorite" ? 120 : undefined,
    } : undefined;

  return (
    <BaseCard
      product={product}
      onClick={handleCardClick}
      menuItems={getMenuItems()}
      showMenu={cardType !== "landing"}
      variant={cardType === "landing" ? "vertical" : "horizontal"}
      cardType={cardType}
      sx={cardStyle}
      imageHeight={
        cardType === "landing" || cardType === "favorite"
          ? (isMobile ? 120 : 240)
          : 200
      }
      onFavoriteToggle={onFavoriteToggle}
    />
  );
};

export default ProductCard;