import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import ProfileAvatarSvg from '@/public/assets/ProfileAvatar.svg'
import CarretDownSvg from '@/public/assets/CaretDown.svg'

type Props = {}

const ProfileButton = (props: Props) => {
  return (
    <Button variant="contained" sx={{ borderRadius: '30px', p: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src={ProfileAvatarSvg} alt='Avatar' />
        <Image src={CarretDownSvg} alt='CarretDown' />
    </Button>
  )
}

export default ProfileButton