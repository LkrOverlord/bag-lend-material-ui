import type { ReactNode } from "react"

export interface StepConfig {
  header: {
    title: string
    titlePosition: "left" | "center" | "right"
    backButton: boolean
    closeButton: boolean
  }
  body: ReactNode
  footer?: {
    submitButton?: {
      text: string
      onClick: () => Promise<void> | void
    }
  }
}
