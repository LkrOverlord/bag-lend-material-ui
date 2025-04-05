import React from 'react'
import MenuWithUnderline from '../ui/Menus/Menu'
import { Box, Divider } from '@mui/material';

type Props = {}
const legaPages = ['Terms', 'Privacy', 'Cookies'];
const pages = ['FAQs', 'About Us', 'Contact Us'];

const Footer = (props: Props) => {
    return (
        <>
            <Box sx={{
                height: "450px",
                backgroundColor: "black",
                display: "flex",
                padding: "0px 234px",
                position: "relative",
                backgroundImage: "url('/assets/HandGolf.svg')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom left",
                backgroundSize: "auto",
                justifyContent:"flex-end",
                flexDirection: 'column'
            }}>

                <Box sx={{
                    width: '100%',
                    paddingLeft:"11px",
                    paddingRight:"1px",
                    marginBottom: '40px'
                }}>
                    <Divider
                        sx={{
                            backgroundColor: "white",
                            height: "2px",
                            width: '100%'
                        }}
                    />
                </Box>
                <Box sx={{
                    height: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    marginBottom: "72.3px"
                }}>
                    <MenuWithUnderline pages={legaPages} textColor='white' />
                    <MenuWithUnderline pages={pages} textColor='white' />
                    <MenuWithUnderline
                        icons={[
                            { src: '/assets/FacebookIcon.svg', alt: "Facebook" },
                            { src: '/assets/InstagramIcon.svg', alt: "Instagram" },
                            { src: '/assets/XRedSocialIcon.svg', alt: "Twitter" }
                        ]}
                        textColor="white"
                    />
                </Box>
            </Box>
        </>
    )
}

export default Footer