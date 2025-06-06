"use client"

import { useState } from "react"
import { Drawer, IconButton, Typography, Box, Button } from "@mui/material"
import { ArrowBack, Close } from "@mui/icons-material"
import { StepConfig } from "@/types/Drawer"


type MultiStepDrawerProps = {
  open?: boolean
  isDrawerOpen?: boolean
  onClose: () => void
  steps: StepConfig[]
  initialStep?: number
}

export const MultiStepDrawer = ({ open, isDrawerOpen, onClose, steps, initialStep = 0 }: MultiStepDrawerProps) => {
  const [currentStep, setCurrentStep] = useState(initialStep)
  const currentStepConfig = steps[currentStep]

  // Use either open or isDrawerOpen prop
  const isOpen = open !== undefined ? open : isDrawerOpen || false

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    } else {
      onClose()
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      anchor="right"
      slotProps={{
        paper: {
          sx: {
            width: { xs: "100%", sm: 400 },
            maxWidth: "100%",
          },
        },
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        {currentStepConfig.header.backButton && (
          <IconButton onClick={handleBack}>
            <ArrowBack />
          </IconButton>
        )}

        <Typography
          variant="h6"
          sx={{
            flex: 1,
            textAlign: currentStepConfig.header.titlePosition,
            ml: currentStepConfig.header.backButton ? 2 : 0,
            mr: currentStepConfig.header.closeButton ? 2 : 0,
          }}
        >
          {currentStepConfig.header.title}
        </Typography>

        {currentStepConfig.header.closeButton && (
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        )}
      </Box>

      {/* Body */}
      <Box sx={{ p: 3, flexGrow: 1, overflow: "auto" }}>{currentStepConfig.body}</Box>

      {/* Footer */}
      {currentStepConfig.footer && (
        <Box
          sx={{
            p: 2,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          {currentStepConfig.footer.submitButton && (
            <Button
              variant="contained"
              onClick={async () => {
                await currentStepConfig.footer?.submitButton?.onClick()
                handleNext()
              }}
            >
              {currentStepConfig.footer.submitButton.text}
            </Button>
          )}
        </Box>
      )}
    </Drawer>
  )
}

export default MultiStepDrawer
