"use client"

import GolfClubForm from '@/components/ui/Forms/GolfClubForm'
import { useGolfClubStore } from '@/store/GolfClubStore'
import { ClubType } from '@/types/GolfClub'
import { FormsNumber } from '@/utils/formConfig'
import React from 'react'

type Props = {}

const DriverStep = (props: Props) => {
  const { clubs } = useGolfClubStore()
  const driverCount = clubs[ClubType.DRIVER] || 0
  const formNumbers = Object.values(FormsNumber)
  
  const forms = []
  
  for (let i = 0; i < driverCount; i++) {
    forms.push(
      <GolfClubForm 
        key={i}
        type={ClubType.DRIVER}
        config={{ 
          fields: {
            brand: true,
            model: true,
            flex: true,
            loft: true,
          },
          title: `${formNumbers[i]} club` 
        }}
        onSubmit={(data) => console.log('Datos válidos:', data)}
      />
    )
  }

  return <>{forms}</>
}

export default DriverStep