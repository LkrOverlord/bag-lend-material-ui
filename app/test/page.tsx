
import CreateGolfBag from '@/components/features/my-listings/create-golf-bag/steps'
import DriverStep from '@/components/features/my-listings/create-golf-bag/steps/DriverStep'
import GolfClubSelector from '@/components/features/my-listings/create-golf-bag/steps/GolfClubTypeStep'
import { ClubType } from '@/types/GolfClub'
import { Box } from '@mui/material'
import React from 'react'

type Props = {}

const TestPage = (props: Props) => { 

const steps = [
    {
        title: 'Elige la categoría y cantidad de palos que quieres listar',
        component: <GolfClubSelector />,
        canContinue: true // Puedes agregar lógica de validación aquí
    },
    {
        title:  `Provide additional information for the ${ClubType.DRIVER}`,
        component: <DriverStep />,
        canContinue: true
    },
];
return (
    <>
        <Box sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            paddingBottom: "100px"
        }}>
            <CreateGolfBag steps={steps}/>
        </Box>
    </>
)
}

export default TestPage