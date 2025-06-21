'use client';

import React, { useState } from 'react';
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Paper,
    FormHelperText,
    Collapse,
    IconButton,
    Checkbox
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { FormField, GolfClubFormProps } from '@/types/FormTypes';
import { getFormConfig } from '@/utils/formConfig';
import { Controller, useForm } from 'react-hook-form';
import { getValidationRules } from '@/utils/formValidations';
import ClubQuantitySelector from './ClubQuantitySelection';
import { ClubType } from '@/types/GolfClub';

const flexOptions = ['X Stiff', 'Stiff', 'Regular', 'Senior', 'Ladies'];

// Componente simple para shaft regular (Steel/Graphite)
const ShaftSelector: React.FC<{
    value: string[];
    onChange: (value: string[]) => void;
    isPutter?: boolean;
}> = ({ value, onChange, isPutter = false }) => {
    const options = isPutter 
        ? ['Blade Putter', 'Mallet Putter'] 
        : ['Steel', 'Graphite'];

    const handleChange = (option: string, checked: boolean) => {
        if (isPutter) {
            // Putter permite múltiples selecciones
            if (checked) {
                onChange([...value, option]);
            } else {
                onChange(value.filter(v => v !== option));
            }
        } else {
            // Regular permite solo una selección
            onChange(checked ? [option] : []);
        }
    };

    return (
        <Box>
            <Typography variant="subtitle1" gutterBottom>
                {isPutter ? 'Select all that apply' : 'Shaft'}
            </Typography>
            {options.map((option) => (
                <Box
                    key={option}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 1,
                        borderBottom: '1px solid #e0e0e0'
                    }}
                >
                    <Typography variant="body2">{option}</Typography>
                    <Checkbox
                        checked={value.includes(option)}
                        onChange={(e) => handleChange(option, e.target.checked)}
                        color="primary"
                    />
                </Box>
            ))}
        </Box>
    );
};

const GolfClubForm: React.FC<GolfClubFormProps> = ({
    type,
    initialData = {},
    config: customConfig,
    clubOptions,
    onSubmit,
    onValidationChange
}) => {
    const formConfig = customConfig || getFormConfig(type);
    const [isExpanded, setIsExpanded] = useState(true);

    const {
        control,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<FormField>({
        mode: 'onChange',
        defaultValues: {
            brand: initialData.brand || '',
            model: initialData.model || '',
            flex: initialData.flex || 'X Stiff',
            loft: initialData.loft || 5.5,
            shaft: initialData.shaft || [],
            clubSelections: initialData.clubSelections || {}
        }
    });

    const onFormSubmit = (data: FormField) => {
        console.log("Form data:", data);
        onSubmit?.(data);
    };

    return (
        <Paper elevation={1} sx={{ p: 3, maxWidth: 500, mx: 'auto', mb: 3 }}>
            {/* Header */}
            {formConfig.title && (
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        mb: 2
                    }}
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    <Typography variant="h6">
                        {formConfig.title}
                    </Typography>
                    <IconButton size="small">
                        <ExpandMore sx={{ 
                            transform: isExpanded ? 'rotate(0deg)' : 'rotate(-90deg)',
                            transition: 'transform 0.2s'
                        }} />
                    </IconButton>
                </Box>
            )}

            {/* Form */}
            <Collapse in={isExpanded}>
                <Box component="form" onSubmit={handleSubmit(onFormSubmit)}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>

                        {/* Brand */}
                        {formConfig.fields.brand && (
                            <Controller
                                name="brand"
                                control={control}
                                rules={getValidationRules('brand')}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Brand*"
                                        fullWidth
                                        error={!!errors.brand}
                                        helperText={errors.brand?.message}
                                        placeholder="Cobra"
                                    />
                                )}
                            />
                        )}

                        {/* Model */}
                        {formConfig.fields.model && (
                            <Controller
                                name="model"
                                control={control}
                                rules={getValidationRules('model')}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Model*"
                                        fullWidth
                                        error={!!errors.model}
                                        helperText={errors.model?.message}
                                        placeholder="King F9"
                                    />
                                )}
                            />
                        )}

                        {/* Flex */}
                        {formConfig.fields.flex && (
                            <Controller
                                name="flex"
                                control={control}
                                render={({ field }) => (
                                    <FormControl fullWidth>
                                        <InputLabel>Flex</InputLabel>
                                        <Select {...field} label="Flex">
                                            {flexOptions.map((option) => (
                                                <MenuItem key={option} value={option}>
                                                    {option}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )}
                            />
                        )}

                        {/* Loft */}
                        {formConfig.fields.loft && (
                            <Controller
                                name="loft"
                                control={control}
                                render={({ field }) => (
                                    <TextField
                                        {...field}
                                        label="Loft"
                                        type="number"
                                        fullWidth
                                        slotProps={{
                                            htmlInput: { step: 0.5, min: 1, max: 90 }
                                        }}
                                    />
                                )}
                            />
                        )}

                        {/* Shaft */}
                        {formConfig.fields.shaft && (
                            <Controller
                                name="shaft"
                                control={control}
                                render={({ field }) => (
                                    <ShaftSelector
                                        value={Array.isArray(field.value) ? field.value.map(String) : []}
                                        onChange={field.onChange}
                                        isPutter={type === ClubType.PUTTER}
                                    />
                                )}
                            />
                        )}

                        {/* Club Selections */}
                        {formConfig.fields.clubSelections && clubOptions && (
                            <Controller
                                name="clubSelections"
                                control={control}
                                render={({ field }) => (
                                    <ClubQuantitySelector
                                        defaultClubs={clubOptions}
                                        clubType={type}
                                        onChange={(selections) => {
                                            field.onChange(selections);
                                            setValue('clubSelections', selections);
                                        }}
                                    />
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