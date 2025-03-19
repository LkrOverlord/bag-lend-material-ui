"use client"
import { Box } from '@mui/material'
import React from 'react'
import HeroSvg from '@/public/assets/Hero.svg'
import CustomAutocomplete from '@/components/ui/CustomAutocomplete'

type Props = {}

const HeroSection = (props: Props) => {
  const golfTypes = ['Golf 1', 'Golf 2', 'Golf 3', 'Golf 4'];
  return (
    <Box sx={{ backgroundImage: 'url(/assets/Hero.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', height:"440px" }}>
      <CustomAutocomplete options={golfTypes} placeholder="Buscar tipos de golf..."
        onSelectionChange={(selected) => console.log(selected)}/>
    </Box>
  )
}

export default HeroSection