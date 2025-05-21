// src/utils/mockUtils.ts
import Product1Hardcode from "@/public/assets/HarcodeProducts/Product-1-Harcode.svg";
import { Product } from "@/types/Product";

/**
 * Generates an array of mock products for development and testing
 * 
 * @param count Number of products to generate
 * @param options Optional configuration for generated products
 * @returns Array of mock product objects
 */
export const generateMockProducts = (
  count: number, 
  options?: {
    basePrice?: number,
    favoritePattern?: number, // Every nth product will be favorite
    statusPattern?: number    // Every nth product will have pending status
  }
): Product[] => {
  const {
    basePrice = 25,
    favoritePattern = 4,
    statusPattern = 5
  } = options || {};

  const locations = ["Los Angeles, CA", "San Francisco, CA", "New York, NY"];
  const handedness = ["Left-handed", "Right-handed"];

  return Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    title: `Product ${i + 1}`,
    image: Product1Hardcode,
    price: basePrice + i,
    location: locations[i % locations.length],
    rating: 4.5 - (i % 3) * 0.1,
    tags: [handedness[i % handedness.length]],
    isFavorite: i % favoritePattern === 0,
    status: i % statusPattern === 0 ? "pending" : "active",
    currency: "USD",
    period: "day"
  }));
};