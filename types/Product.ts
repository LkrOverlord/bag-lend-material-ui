// src/types/Product.ts
import { StaticImageData } from "next/image";
import { MenuItem } from "./MenuItem";

export type CardType = "landing" | "listing" | "rental" | "favorite";

export type ProductStatus = "active" | "pending" | "paused";

export interface Product {
  id: string;
  title: string;
  image: string | StaticImageData;
  price: number;
  currency?: string;
  period?: string;
  location?: string;
  rating?: number;
  tags?: string[];
  status?: ProductStatus;
  isFavorite?: boolean;
}

export interface BaseCardProps {
  product: Product;
  cardType?: CardType;
  variant?: "vertical" | "horizontal";
  showRating?: boolean;
  showLocation?: boolean;
  showMenu?: boolean;
  imageHeight?: number;
  sx?: object;
  menuItems?: MenuItem[];
  onFavoriteToggle?: (id: string) => void;
  onClick?: () => void;
}

export interface ProductCardProps {
  product: Product;
  cardType: CardType;
  onFavoriteToggle?: (id: string) => void;
  onEdit?: (id: string) => void;
  onPause?: (id: string) => void;
  onDelete?: (id: string) => void;
  onReport?: (id: string) => void;
}