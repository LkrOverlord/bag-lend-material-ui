'use client';

import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    TextField,
    IconButton,
    Divider
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

interface ClubQuantitySelectorProps {
    defaultClubs: Record<string, string>; // id -> label mapping
    maxCustomClubs?: number;
    onChange?: (selections: Record<string, number>) => void;
    initialSelections?: Record<string, number>;
}

interface CustomClub {
    id: string;
    name: string;
    quantity: number;
}

const ClubQuantitySelector: React.FC<ClubQuantitySelectorProps> = ({
    defaultClubs,
    maxCustomClubs = 10,
    onChange,
    initialSelections = {}
}) => {
    // Estado para las cantidades de los palos por defecto
    const [defaultQuantities, setDefaultQuantities] = useState<Record<string, number>>(() => {
        const initial: Record<string, number> = {};
        Object.keys(defaultClubs).forEach(clubId => {
            initial[clubId] = initialSelections[clubId] || 0;
        });
        return initial;
    });

    // Estado para los palos personalizados
    const [customClubs, setCustomClubs] = useState<CustomClub[]>(() => {
        const customEntries = Object.entries(initialSelections).filter(
            ([key]) => !Object.keys(defaultClubs).includes(key)
        );
        return customEntries.map(([name, quantity], index) => ({
            id: `custom-${index}`,
            name,
            quantity
        }));
    });

    // Función para actualizar cantidades de palos por defecto
    const updateDefaultQuantity = (clubId: string, change: number) => {
        setDefaultQuantities(prev => {
            const newQuantity = Math.max(0, (prev[clubId] || 0) + change);
            return {
                ...prev,
                [clubId]: newQuantity
            };
        });
    };

    // Función para agregar un palo personalizado
    const addCustomClub = () => {
        if (customClubs.length < maxCustomClubs) {
            const newId = `custom-${Date.now()}`;
            setCustomClubs(prev => [...prev, {
                id: newId,
                name: '',
                quantity: 1
            }]);
        }
    };

    // Función para actualizar el nombre de un palo personalizado
    const updateCustomClubName = (id: string, name: string) => {
        setCustomClubs(prev => prev.map(club => 
            club.id === id ? { ...club, name } : club
        ));
    };

    // Función para actualizar la cantidad de un palo personalizado
    const updateCustomClubQuantity = (id: string, change: number) => {
        setCustomClubs(prev => {
            const updated = prev.map(club => {
                if (club.id === id) {
                    const newQuantity = Math.max(0, club.quantity + change);
                    return { ...club, quantity: newQuantity };
                }
                return club;
            });
            
            // Filtrar los palos con cantidad 0
            return updated.filter(club => club.quantity > 0);
        });
    };

    // Efecto para notificar cambios al componente padre
    useEffect(() => {
        if (onChange) {
            const allSelections: Record<string, number> = {};
            
            // Agregar selecciones por defecto
            Object.entries(defaultQuantities).forEach(([clubId, quantity]) => {
                if (quantity > 0) {
                    allSelections[clubId] = quantity;
                }
            });
            
            // Agregar selecciones personalizadas
            customClubs.forEach(club => {
                if (club.name.trim() && club.quantity > 0) {
                    allSelections[club.name] = club.quantity;
                }
            });
            
            onChange(allSelections);
        }
    }, [defaultQuantities, customClubs, onChange]);

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Select all that apply
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 3, display: 'block' }}>
                (Add {maxCustomClubs} more)
            </Typography>

            {/* Palos por defecto */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {Object.entries(defaultClubs).map(([clubId, label]) => (
                    <Box 
                        key={clubId}
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            py: 1
                        }}
                    >
                        <Typography variant="body1">
                            {label}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton
                                size="small"
                                onClick={() => updateDefaultQuantity(clubId, -1)}
                                disabled={defaultQuantities[clubId] === 0}
                                sx={{ 
                                    border: '1px solid',
                                    borderColor: 'grey.300',
                                    borderRadius: '50%',
                                    width: 32,
                                    height: 32
                                }}
                            >
                                <Remove fontSize="small" />
                            </IconButton>
                            
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    minWidth: 20, 
                                    textAlign: 'center',
                                    fontWeight: 500
                                }}
                            >
                                {defaultQuantities[clubId]}
                            </Typography>
                            
                            <IconButton
                                size="small"
                                onClick={() => updateDefaultQuantity(clubId, 1)}
                                sx={{ 
                                    border: '1px solid',
                                    borderColor: 'grey.300',
                                    borderRadius: '50%',
                                    width: 32,
                                    height: 32
                                }}
                            >
                                <Add fontSize="small" />
                            </IconButton>
                        </Box>
                    </Box>
                ))}

                {/* Divider */}
                {customClubs.length > 0 && (
                    <Divider sx={{ my: 1 }} />
                )}

                {/* Palos personalizados */}
                {customClubs.map((club) => (
                    <Box 
                        key={club.id}
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'space-between',
                            py: 1
                        }}
                    >
                        <TextField
                            value={club.name}
                            onChange={(e) => updateCustomClubName(club.id, e.target.value)}
                            placeholder="Enter club name"
                            variant="outlined"
                            size="small"
                            sx={{ flex: 1, mr: 2 }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <IconButton
                                size="small"
                                onClick={() => updateCustomClubQuantity(club.id, -1)}
                                sx={{ 
                                    border: '1px solid',
                                    borderColor: 'grey.300',
                                    borderRadius: '50%',
                                    width: 32,
                                    height: 32
                                }}
                            >
                                <Remove fontSize="small" />
                            </IconButton>
                            
                            <Typography 
                                variant="body1" 
                                sx={{ 
                                    minWidth: 20, 
                                    textAlign: 'center',
                                    fontWeight: 500
                                }}
                            >
                                {club.quantity}
                            </Typography>
                            
                            <IconButton
                                size="small"
                                onClick={() => updateCustomClubQuantity(club.id, 1)}
                                sx={{ 
                                    border: '1px solid',
                                    borderColor: 'grey.300',
                                    borderRadius: '50%',
                                    width: 32,
                                    height: 32
                                }}
                            >
                                <Add fontSize="small" />
                            </IconButton>
                        </Box>
                    </Box>
                ))}

                {/* Campo "Other" para agregar nuevos palos */}
                <Box 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'space-between',
                        py: 1
                    }}
                >
                    <TextField
                        value="Other"
                        disabled
                        variant="outlined"
                        size="small"
                        sx={{ 
                            flex: 1, 
                            mr: 2,
                            '& .MuiInputBase-input.Mui-disabled': {
                                WebkitTextFillColor: 'rgba(0, 0, 0, 0.38)'
                            }
                        }}
                    />
                    <IconButton
                        size="small"
                        onClick={addCustomClub}
                        disabled={customClubs.length >= maxCustomClubs}
                        sx={{ 
                            border: '1px solid',
                            borderColor: 'grey.300',
                            borderRadius: '50%',
                            width: 32,
                            height: 32
                        }}
                    >
                        <Add fontSize="small" />
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
};

export default ClubQuantitySelector;