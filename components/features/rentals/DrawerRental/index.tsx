"use client"

import CustomAlert from "@/components/ui/Alerts/CustomAlert"
import BaseCard from "@/components/ui/Cards/BaseCard"
import MultiStepDrawer from "@/components/ui/Drawers"
import SimpleTable from "@/components/ui/Tables/SimpleTable"
import AvatarRental from "@/public/assets/AvatarRental.png"
import { AlertType } from "@/types/Alert"
import { StepConfig } from "@/types/Drawer"
import { Product, ProductStatus } from "@/types/Product"

import { Box } from "@mui/material"


type Props = {
  isDrawerOpen: boolean
  setIsDrawerOpen: (isOpen: boolean) => void
  product: Product
}

const items = [
  { label: "Transaction ID", value: "543543543543" },
  {
    label: "Owner",
    value: { text: "Mark Mcallister", avatar: { src: AvatarRental.src, alt: "John" } },
  },
  { label: "Location", value: "Los Angeles, CA" },
  { label: "Number of days", value: "2" },
  { label: "From", value: "October 28 of 2023" },
  { label: "To", value: "October 30 of 2023" },
  { label: "Price per day", value: "$25" },
  { label: "Total", value: "$50" },
]

const DrawerRental = ({ isDrawerOpen, setIsDrawerOpen, product }: Props) => {
  const steps: StepConfig[] = [
    {
      header: {
        title: "Rental Information",
        titlePosition: "left",
        backButton: true,
        closeButton: false,
      },
      body: (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: "400px" }}>
          {product.status === ProductStatus.Pending && (
            <CustomAlert text="Your rental request is pending owner approval." type={AlertType.WARNING} />
          )}

          <BaseCard product={product} cardType="rentalDrawer" />
          <SimpleTable items={items} />
        </Box>
      ),
    },
  ]

  return <MultiStepDrawer isDrawerOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} steps={steps} />
}

export default DrawerRental
