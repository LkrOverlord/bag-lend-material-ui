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
    IconButton,
    InputAdornment
} from '@mui/material';

import { FormField, GolfClubFormProps } from '@/types/FormTypes';
import { getFormConfig } from '@/utils/formConfig';
import { Controller, useForm } from 'react-hook-form';
import { getValidationRules } from '@/utils/formValidations';
import ClubQuantitySelector from './ClubQuantitySelection';
import { ClubType } from '@/types/GolfClub';
import { ExpandMore } from '@mui/icons-material';

const flexOptions = [
    'X Stiff',
    'Stiff',
    'Regular',
    'Senior',
    'Ladies'
];

// Tipos actualizados para shaft
interface ShaftItem {
    id: string;
    name: string;
}

interface PutterShaftSelectorProps {
    value: ShaftItem[];
    onChange: (value: ShaftItem[]) => void;
    maxCustomItems?: number;
}

const PutterShaftSelector: React.FC<PutterShaftSelectorProps> = ({
    value,
    onChange,
    maxCustomItems = 5
}) => {
    const [customInput, setCustomInput] = useState('');
    const [customItems, setCustomItems] = useState<ShaftItem[]>([]);

    // Elementos por defecto
    const defaultItems: ShaftItem[] = [
        { id: 'blade-putter', name: 'Blade Putter' },
        { id: 'mallet-putter', name: 'Mallet Putter' }
    ];

    // Obtener todos los items disponibles
    const allItems = [...defaultItems, ...customItems];

    const isItemSelected = (item: ShaftItem): boolean => {
        return value.some(selected => selected.id === item.id);
    };

    const handleItemChange = (item: ShaftItem, checked: boolean) => {
        let newSelection: ShaftItem[];

        if (checked) {
            newSelection = [...value, item];
        } else {
            newSelection = value.filter(selected => selected.id !== item.id);
            // Si es un item personalizado y se desmarca, eliminarlo de customItems
            if (!defaultItems.some(defaultItem => defaultItem.id === item.id)) {
                setCustomItems(prev => prev.filter(custom => custom.id !== item.id));
            }
        }

        onChange(newSelection);
    };

    const generateId = (name: string): string => {
        return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    };

    const handleAddCustomItem = () => {
        if (customInput.trim() &&
            customItems.length < maxCustomItems &&
            !allItems.some(item => item.name.toLowerCase() === customInput.trim().toLowerCase())) {

            const newItem: ShaftItem = {
                id: generateId(customInput.trim()) + '-' + Date.now(),
                name: customInput.trim()
            };

            setCustomItems(prev => [...prev, newItem]);

            // Agregar automáticamente a la selección
            const newSelection = [...value, newItem];
            onChange(newSelection);

            setCustomInput('');
        }
    };

    const handleInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddCustomItem();
        }
    };

    return (
        <Box>
            <Typography variant="subtitle1" gutterBottom>
                Select all that apply
            </Typography>

            {/* Elementos disponibles */}
            {allItems.map((item) => (
                <Box
                    key={item.id}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 1,
                        borderBottom: '1px solid #e0e0e0'
                    }}
                >
                    <Typography variant="body2">{item.name}</Typography>
                    <Checkbox
                        checked={isItemSelected(item)}
                        onChange={(e) => handleItemChange(item, e.target.checked)}
                        color="primary"
                    />
                </Box>
            ))}

            {/* Input para agregar nuevos elementos */}
            {customItems.length < maxCustomItems && (
                <Box sx={{ mt: 2 }}>
                    <TextField
                        fullWidth
                        size="small"
                        placeholder="Other"
                        value={customInput}
                        onChange={(e) => setCustomInput(e.target.value)}
                        onKeyDown={handleInputKeyDown}
                        variant="outlined"
                        slotProps={{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Typography variant="caption" color="text.secondary">
                                            Press Enter
                                        </Typography>
                                    </InputAdornment>
                                )
                            }
                        }}
                    />
                </Box>
            )}
        </Box>
    );
};

interface RegularShaftSelectorProps {
    value: ShaftItem[];
    onChange: (value: ShaftItem[]) => void;
}

const RegularShaftSelector: React.FC<RegularShaftSelectorProps> = ({
    value,
    onChange
}) => {
    const shaftOptions: ShaftItem[] = [
        { id: 'steel', name: 'Steel' },
        { id: 'graphite', name: 'Graphite' }
    ];

    const isItemSelected = (item: ShaftItem): boolean => {
        return value.some(selected => selected.id === item.id);
    };

    const handleShaftChange = (item: ShaftItem) => {
        // Para tipos regulares, solo se permite una selección
        onChange([item]);
    };

    return (
        <Box>
            <Typography variant="subtitle1" gutterBottom>
                Shaft
            </Typography>
            {shaftOptions.map((option) => (
                <Box
                    key={option.id}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 1,
                        borderBottom: '1px solid #e0e0e0'
                    }}
                >
                    <Typography variant="body2">{option.name}</Typography>
                    <Checkbox
                        checked={isItemSelected(option)}
                        onChange={() => handleShaftChange(option)}
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
    const [isValidForm, setIsValidForm] = useState(false);
    const [isExpanded, setIsExpanded] = useState(true);

    // Función helper para obtener el valor inicial del shaft como array de objetos
    const getInitialShaftValue = (): ShaftItem[] => {
        if (Array.isArray(initialData.shaft)) {
            return initialData.shaft;
        }
        // Valor por defecto según el tipo
        if (type === ClubType.PUTTER) {
            return [];
        } else {
            return [{ id: 'steel', name: 'Steel' }];
        }
    };

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isValid, isDirty }
    } = useForm<FormField>({
        mode: 'onChange',
        defaultValues: {
            brand: initialData.brand || '',
            model: initialData.model || '',
            flex: initialData.flex || 'X Stiff',
            loft: initialData.loft || 5.5,
            shaft: getInitialShaftValue(),
            clubSelections: initialData.clubSelections || {}
        }
    });

    const isFieldCompleted = (value: any): boolean => {
        if (value === undefined) return false;
        if (value === null) return false;
        if (value === '') return false;
        if (Array.isArray(value) && value.length === 0) return false;
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
            onSubmit?.(allFormData);
        }

        onValidationChange?.(allFieldsCompleted);
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
                                            <FormHelperText>{errors.flex?.message}</FormHelperText>
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
                                        slotProps={{
                                            htmlInput: {
                                                step: 0.5,
                                                min: 1,
                                                max: 90
                                            }
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
                                        {type === ClubType.PUTTER ? (
                                            <PutterShaftSelector
                                                value={Array.isArray(field.value) ? field.value : []}
                                                onChange={(newValue) => {
                                                    field.onChange(newValue);
                                                }}
                                                maxCustomItems={6}
                                            />
                                        ) : (
                                            <RegularShaftSelector
                                                value={Array.isArray(field.value) ? field.value : []}
                                                onChange={(newValue) => {
                                                    field.onChange(newValue);
                                                }}
                                            />
                                        )}
                                        {errors.shaft && (
                                            <FormHelperText error>
                                                {errors.shaft.message as React.ReactNode}
                                            </FormHelperText>
                                        )}
                                    </Box>
                                )}
                            />
                        )}

                        {/* Club Selections Field */}
                        {formConfig.fields.clubSelections && clubOptions && (
                            <Controller
                                name="clubSelections"
                                control={control}
                                rules={getValidationRules('clubSelections')}
                                render={({ field }) => (
                                    <Box>
                                        <ClubQuantitySelector
                                            defaultClubs={clubOptions}
                                            maxCustomClubs={5}
                                            onChange={(selections) => {
                                                field.onChange(selections);
                                                setValue('clubSelections', selections);
                                            }}
                                            initialSelections={field.value || {}}
                                        />
                                        {errors.clubSelections && (
                                            <FormHelperText error>
                                                {errors.clubSelections.message as React.ReactNode}
                                            </FormHelperText>
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