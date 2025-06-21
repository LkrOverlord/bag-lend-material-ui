"use client"
import GolfClubForm from '@/components/ui/Forms/GolfClubForm'
import { ClubType } from '@/types/GolfClub'
import { getClubOptions } from '@/utils/mock/ClubOptions'
import React from 'react'

type Props = {}

const WedgesStep = (props: Props) => {
    return (
        <>
            <GolfClubForm type={ClubType.WEDGES}
                onSubmit={(data) => console.log('Datos válidos:', data)}
                clubOptions={getClubOptions(ClubType.WEDGES)}>
            </GolfClubForm>
        </>
    )
}

export default WedgesStep