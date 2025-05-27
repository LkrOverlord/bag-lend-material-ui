import CustomAlert from '@/components/ui/Alerts/CustomAlert';
import { MultiStepDrawer } from '@/components/ui/Drawers';
import SimpleTable from '@/components/ui/Tables/SimpleTable';
import { StepConfig } from '@/types/Drawer';
import React, { useState } from 'react'
import AvatarRental from '@/public/assets/AvatarRental.png'
import { AlertType } from '@/types/Alert';
import BaseCard from '@/components/ui/Cards/BaseCard';
import { generateMockProducts } from '@/utils/mockUtils';
import { Box } from '@mui/material';

type Props = {
    isDrawerOpen: boolean;
    setIsDrawerOpen: (isOpen: boolean) => void;
}

const items = [
    { label: "Transaction ID", value: "543543543543" },
    {
        label: "Owner",
        value: { text: "Mark Mcallister", avatar: { src: AvatarRental.src, alt: "John" } }
    },
    { label: "Location", value: "Los Angles, CA" },
    { label: "Number of days", value: "2" },
    { label: "From", value: "October 28 of 2023" },
    { label: "To", value: "October 30 of 2023" },
    { label: "Price per day", value: "$25" },
    { label: "Total", value: "$50" },
];

const DrawerRental = ({ isDrawerOpen, setIsDrawerOpen }: Props) => {

    const product1 = generateMockProducts(1, { basePrice: 28 });

    const steps: StepConfig[] = [
        {
            header: {
                title: 'Rental Information',
                titlePosition: 'left',
                backButton: true,
                closeButton: false,
            },
            body:
                <>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <CustomAlert text='Your rental request is pending owner approval.' type={AlertType.WARNING} />
                        <BaseCard
                            product={product1[0]}
                            cardType="rentalDrawer"

                        // No necesitas showRating, showLocation, etc. porque se ocultan automáticamente
                        />
                        <SimpleTable items={items}></SimpleTable>
                    </Box>
                </>
        },
    ];



    return (
        <div>
            <MultiStepDrawer
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                steps={steps}
            />
        </div>
    );
};

export default DrawerRental