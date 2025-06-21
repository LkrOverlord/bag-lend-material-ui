"use client"
import GolfClubForm from '@/components/ui/Forms/GolfClubForm'
import { ClubType } from '@/types/GolfClub'
import { getClubOptions } from '@/utils/mock/ClubOptions'
import React from 'react'

type Props = {}

const WoodsStep = (props: Props) => {
  const handleSubmit = (data: any) => {
    console.log('Datos válidos:', data);
    console.log('Club selections:', data.clubSelections);
  };

  return (
    <>
      <GolfClubForm 
        type={ClubType.WOODS}
        clubOptions={getClubOptions(ClubType.WOODS)}
        onSubmit={handleSubmit}
        initialData={{
          // Puedes pre-cargar algunos valores si quieres
          brand: '',
          model: '',
          clubSelections: {}
        }}
      />
    </>
  )
}

export default WoodsStep