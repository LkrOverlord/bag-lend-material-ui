// pages/checkout.tsx

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { MultiStepDrawer} from ".";
import { StepConfig } from "@/types/Drawer";



const CheckoutPage = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
   

    const steps: StepConfig[] = [
        {
            header: {
                title: 'Paso 1: Información',
                titlePosition: 'left',
                backButton: true,
                closeButton: false,
            },
            body: <Box>
                <Typography variant="h6">Información del cliente</Typography>
            </Box>,
            footer: {
                submitButton: {
                    text: 'Continuar',
                    onClick: () => console.log('Paso 1 completado'),
                },
            },
        },
        {
            header: {
                title: 'Paso 2: Método de pago',
                titlePosition: 'left',
                backButton: false,
                closeButton: true,
            },
            body: <Box>
                <Typography variant="h6">Método de pago</Typography>
            </Box>,
            footer: {
                submitButton: {
                    text: 'Continuar',
                    onClick: () => console.log('Paso 2 completado'),
                },
            },
        },
        // ... más pasos
    ];

    return (
        <div>
            <button onClick={() => setIsDrawerOpen(true)}>Iniciar compra</button>

            <MultiStepDrawer
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
                steps={steps}
            />
        </div>
    );
};

export default CheckoutPage;