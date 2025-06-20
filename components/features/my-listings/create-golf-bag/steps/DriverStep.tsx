"use client"
import GolfClubForm from '@/components/ui/Forms/GolfClubForm'
import { ClubType } from '@/types/GolfClub'
import React from 'react'

type Props = {}

const DriverStep = (props: Props) => {
  return (
    <>
      <GolfClubForm type={ClubType.DRIVER} 
      onSubmit={(data) => console.log('Datos válidos:', data)}>
      </GolfClubForm>
    </>
  )
}

export default DriverStep