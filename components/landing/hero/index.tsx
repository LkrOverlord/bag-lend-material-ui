import { Box } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import HeroImage from '@/public/assets/Hero.svg'

type Props = {}

const Hero = (props: Props) => {
  return (
    <>
    <Box>
        <Image alt='' src={HeroImage}/>
    </Box>
    </>
  )
}

export default Hero