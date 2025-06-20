"use client"
import { Box, Button, Card, Typography } from '@mui/material'
import React, { useState } from 'react'

type StepConfig = {
    title: string;
    component: React.ReactNode;
    canContinue?: boolean; // Para validar si se puede continuar al siguiente paso
}

type Props = {
    steps: StepConfig[];
}

const CreateGolfBag = ({ steps }: Props) => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleContinue = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const currentStepConfig = steps[currentStep];
    const isLastStep = currentStep === steps.length - 1;
    const isFirstStep = currentStep === 0;

    return (
        <Card sx={{
            width: "550px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            height: "auto",
            alignItems: "center",
            padding: "20px 35px"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                width: "100%"
            }}>
                {/* Indicador de progreso opcional */}
                <Typography variant='caption' color='text.secondary'>
                    Paso {currentStep + 1} de {steps.length}
                </Typography>
                
                <Typography variant='subtitle1'>
                    {currentStepConfig.title}
                </Typography>
                
                <Box>
                    {currentStepConfig.component}
                </Box>
            </Box>
            
            {/* Botones de navegación */}
            <Box sx={{
                display: "flex",
                gap: "16px",
                width: "100%",
                justifyContent: "center"
            }}> 
                <Button 
                    variant='contained' 
                    color='primary' 
                    sx={{ width: "260px" }}
                    onClick={handleContinue}
                    disabled={currentStepConfig.canContinue === false}
                >
                    {isLastStep ? 'Finalizar' : 'Continuar'}
                </Button>
            </Box>
        </Card>
    );
};

export default CreateGolfBag;