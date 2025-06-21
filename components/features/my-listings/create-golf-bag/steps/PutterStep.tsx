"use client"
import GolfClubForm from '@/components/ui/Forms/GolfClubForm'
import { ClubType } from '@/types/GolfClub'
import React from 'react'

type Props = {}

const PutterStep = (props: Props) => {
    return (
        <>
            <GolfClubForm type={ClubType.PUTTER}
                onSubmit={(data) => console.log('Datos válidos:', data)}
            >
            </GolfClubForm>
        </>
    )
}

export default PutterStep