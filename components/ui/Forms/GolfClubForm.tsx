'use client';

import React, { useState } from 'react';
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormControlLabel,
    Checkbox,
    Typography,
    Paper,
    FormHelperText,
    Collapse,
    IconButton
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { FormField, GolfClubFormProps } from '@/types/FormTypes';
import { getFormConfig } from '@/utils/formConfig';
import { Controller, useForm } from 'react-hook-form';
import { getValidationRules } from '@/utils/formValidations';

const flexOptions = [
    'X Stiff',
    'Stiff',
    'Regular',
    'Senior',
    'Ladies'
];

const GolfClubForm: React.FC<GolfClubFormProps> = ({
    type,
    initialData = {},
    config: customConfig
}) => {
    const formConfig = customConfig || getFormConfig(type);
    const [isValidForm, setIsValidForm] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true); // Estado para el collapse

    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isDirty }
    } = useForm<FormField>({
        mode: 'onChange',
        defaultValues: {
            brand: initialData.brand || '',
            model: initialData.model || '',
            flex: initialData.flex || 'X Stiff',
            loft: initialData.loft || 5.5,
            shaft: initialData.shaft || 'Steel'
        }
    });

    const isFieldCompleted = (value: any): boolean => {
        if (value === undefined) return false;
        if (value === null) return false;
        if (value === '') return false;
        return true;
    };

    const onFormSubmit = (allFormData: FormField) => {
        const allowedFields = formConfig.fields;
        const enabledFields = Object.keys(allowedFields).filter(
            field => allowedFields[field as keyof FormField] === true
        ) as (keyof FormField)[];

        const allFieldsCompleted = enabledFields.every(fieldName => {
            const fieldValue = allFormData[fieldName];
            return isFieldCompleted(fieldValue);
        });

        setIsValidForm(allFieldsCompleted);

        if (allFieldsCompleted) {
            console.log("Formulario válido, datos:", allFormData);
        }
    };

    const handleToggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Paper elevation={1} sx={{ p: 3, maxWidth: 500, mx: 'auto' }}>
            {/* Header con título y botón de collapse */}
            {formConfig.title && (
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        mb: 2
                    }}
                    onClick={handleToggleCollapse}
                >
                    <Typography variant="h6" component="h2">
                        {formConfig.title}
                    </Typography>
                    <IconButton 
                        size="small"
                        sx={{ 
                            transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                            transition: 'transform 0.2s ease-in-out'
                        }}
                    >
                        <ExpandMore />
                    </IconButton>
                </Box>
            )}

            {/* Formulario colapsable */}
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <Box component="form" onSubmit={handleSubmit(onFormSubmit)} noValidate>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                        {/* Brand Field */}
                        {formConfig.fields.brand && (
                            <Controller
                                name="brand"
                                control={control}
                                rules={getValidationRules('brand')}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Brand*"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.brand}
                                        helperText={errors.brand?.message}
                                        placeholder="Cobra"
                                    />
                                )}
                            />
                        )}

                        {/* Model Field */}
                        {formConfig.fields.model && (
                            <Controller
                                name="model"
                                control={control}
                                rules={getValidationRules('model')}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Model*"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.model}
                                        helperText={errors.model?.message}
                                        placeholder="King F9"
                                    />
                                )}
                            />
                        )}

                        {/* Flex Field */}
                        {formConfig.fields.flex && (
                            <Controller
                                name="flex"
                                control={control}
                                rules={getValidationRules('flex')}
                                render={({ field }) => (
                                    <FormControl fullWidth error={!!errors.flex}>
                                        <InputLabel>Flex</InputLabel>
                                        <Select
                                            {...field}
                                            label="Flex"
                                        >
                                            {flexOptions.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                        {errors.flex && (
                                            <FormHelperText>{errors.flex.message}</FormHelperText>
                                        )}
                                    </FormControl>
                                )}
                            />
                        )}

                        {/* Loft Field */}
                        {formConfig.fields.loft && (
                            <Controller
                                name="loft"
                                control={control}
                                rules={getValidationRules('loft')}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Loft"
                                        type="number"
                                        variant="outlined"
                                        fullWidth
                                        error={!!errors.loft}
                                        helperText={errors.loft?.message}
                                        inputProps={{
                                            step: 0.5,
                                            min: 1,
                                            max: 90
                                        }}
                                    />
                                )}
                            />
                        )}

                        {/* Shaft Field */}
                        {formConfig.fields.shaft && (
                            <Controller
                                name="shaft"
                                control={control}
                                rules={getValidationRules('shaft')}
                                render={({ field }) => (
                                    <Box>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Shaft
                                        </Typography>
                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={field.value === 'Steel'}
                                                        onChange={() => field.onChange('Steel')}
                                                        color="primary"
                                                    />
                                                }
                                                label="Steel"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={field.value === 'Graphite'}
                                                        onChange={() => field.onChange('Graphite')}
                                                        color="primary"
                                                    />
                                                }
                                                label="Graphite"
                                            />
                                        </Box>
                                        {errors.shaft && (
                                            <FormHelperText error>{errors.shaft.message}</FormHelperText>
                                        )}
                                    </Box>
                                )}
                            />
                        )}

                    </Box>
                </Box>
            </Collapse>
        </Paper>
    );
};

export default GolfClubForm;