"use client"
import GolfClubForm from '@/components/ui/Forms/GolfClubForm'
import { ClubType } from '@/types/GolfClub'
import { getClubOptions } from '@/utils/mock/ClubOptions'
import React from 'react'

type Props = {}

const HybridStep = (props: Props) => {
    return (
        <>
            <GolfClubForm type={ClubType.HYBRID}
                onSubmit={(data) => console.log('Datos válidos:', data)}
                clubOptions={getClubOptions(ClubType.HYBRID)}>
            </GolfClubForm>
        </>
    )
}

export default HybridStep