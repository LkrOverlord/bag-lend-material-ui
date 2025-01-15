import { Box } from '@mui/material'
import React from 'react'
import HeroImage from '@/public/assets/Hero.svg'
import GolfClubSearchFilter from '@/components/shared/golfClubSearchFilter'

type Props = {}

const Hero = (props: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "404px",
        backgroundImage: `url(${HeroImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <GolfClubSearchFilter />
    </Box>
  )
}

export default Hero

