import CreateGolfBag from '@/components/features/my-listings/create-golf-bag/steps'
import DriverStep from '@/components/features/my-listings/create-golf-bag/steps/DriverStep'
import GolfClubSelector from '@/components/features/my-listings/create-golf-bag/steps/GolfClubTypeStep'
import HybridStep from '@/components/features/my-listings/create-golf-bag/steps/HybridStep'
import IronsStep from '@/components/features/my-listings/create-golf-bag/steps/IronsStep'
import PutterStep from '@/components/features/my-listings/create-golf-bag/steps/PutterStep'
import WedgesStep from '@/components/features/my-listings/create-golf-bag/steps/WedgesStep'
import WoodsStep from '@/components/features/my-listings/create-golf-bag/steps/WoodsStep'
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
            title: `Provide additional information for the ${ClubType.DRIVER}`,
            component: <DriverStep />,
            canContinue: true
        },
        {
            title: `Provide additional information for the ${ClubType.WOODS}`,
            component: <WoodsStep />,
            canContinue: true
        },
        {
            title: `Provide additional information for the ${ClubType.HYBRID} / rescue clubs`,
            component: <HybridStep />,
            canContinue: true
        },
        {
            title: `Provide additional information for the ${ClubType.IRONS}`,
            component: <IronsStep />,
            canContinue: true
        },
        {
            title: `Provide additional information for the ${ClubType.WEDGES}`,
            component: <WedgesStep />,
            canContinue: true
        },
        {
            title: `Provide additional information for the ${ClubType.PUTTER}`,
            component: <PutterStep />,
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
                <CreateGolfBag steps={steps} />
            </Box>
        </>
    )
}

export default TestPage