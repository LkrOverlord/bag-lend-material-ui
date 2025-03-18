import { Box } from '@mui/material'
import React from 'react'
import HeroSvg from '@/public/assets/Hero.svg'

type Props = {}

const HeroSection = (props: Props) => {
  return (
    <Box sx={{ backgroundImage: 'url(/assets/Hero.svg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', height:"440px" }}>

    </Box>
  )
}

export default HeroSection