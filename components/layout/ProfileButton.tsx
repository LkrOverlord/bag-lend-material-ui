import { Button } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import ProfileAvatarSvg from '@/public/assets/ProfileAvatar.svg'
import CarretDownSvg from '@/public/assets/CaretDown.svg'
import RightDrawer from './DrawerProfile'

type Props = {}

const ProfileButton = (props: Props) => {
   const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

   const handleOpenDrawer = () => {
    setDrawerOpen(true);
  }
  return (
    <>
      <Button variant="contained" sx={{ borderRadius: '30px', p: 0.7, display: 'flex',
         alignItems: 'center', justifyContent: 'center' }} onClick={handleOpenDrawer}>
        <Image src={ProfileAvatarSvg} alt='Avatar' />
        <Image src={CarretDownSvg} alt='CarretDown' />
      </Button>
      <RightDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        user={{
          name: "JohnDoe",
          avatar: "/path-to-avatar.jpg"
        }}
      />
    </>

  )
}

export default ProfileButton