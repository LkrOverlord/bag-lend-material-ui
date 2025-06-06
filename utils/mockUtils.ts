import Product1Hardcode from "@/public/assets/HarcodeProducts/Product-1-Harcode.svg";
import { Product, ProductStatus } from "@/types/Product";

interface MockProductOptions {
  basePrice?: number
  withStatus?: boolean
}

export const generateMockProducts = (count: number, options: MockProductOptions = {}): Product[] => {
  const { basePrice = 25, withStatus = true } = options

  const products: Product[] = []
  const statuses = Object.values(ProductStatus)
  const handTypes = ["left-handed", "right-handed"] as const

  for (let i = 0; i < count; i++) {
    const id = `product-${i + 1}`
    // Use deterministic values instead of Math.random() to avoid hydration errors
    const isFavorite = i % 3 === 0 // Every 3rd product is favorite
    const price = basePrice + i * 5 // Deterministic price increment
    const rating = 3.5 + (i % 3) * 0.5 // Deterministic rating (3.5, 4.0, 4.5)
    const statusIndex = i % statuses.length
    const handTypeIndex = i % handTypes.length

    products.push({
      id,
      title: i % 3 === 0 ? "Premium Pack (6 Clubs)" : `DRIVER TSi${(i % 4) + 1}`,
      image: Product1Hardcode,
      price,
      location: "Los Angeles, CA",
      rating: Number.parseFloat(rating.toFixed(1)),
      isFavorite,
      status: withStatus ? statuses[statusIndex] : undefined,
      handType: handTypes[handTypeIndex],
      tags: [handTypes[handTypeIndex]],
    })
  }

  return products
}
