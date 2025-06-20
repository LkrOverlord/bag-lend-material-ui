"use client"
import GolfClubForm from '@/components/ui/Forms/GolfClubForm'
import { ClubType } from '@/types/GolfClub'
import React from 'react'

type Props = {}

const WoodsStep = (props: Props) => {
  return (
    <>
      <GolfClubForm type={ClubType.WOODS} 
      onSubmit={(data) => console.log('Datos válidos:', data)}>
      </GolfClubForm>
    </>
  )
}

export default WoodsStep