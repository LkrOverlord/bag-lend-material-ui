'use client';

import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useGolfClubStore } from '@/store/GolfClubStore';

interface ClubQuantitySelectorProps {
    defaultClubs: Record<string, string>; // id -> label mapping
    clubType: string;
    onChange?: (selections: Record<string, number>) => void;
}

const ClubQuantitySelector: React.FC<ClubQuantitySelectorProps> = ({
    defaultClubs,
    clubType,
    onChange
}) => {
    const { clubs } = useGolfClubStore();
    const maxTotal = clubs[clubType] || 0;
    
    // Estado simple: solo las cantidades
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const [customClubs, setCustomClubs] = useState<string[]>([]);
    const [customInput, setCustomInput] = useState('');

    // Calcular total actual
    const totalUsed = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    const canAdd = totalUsed < maxTotal;

    // Actualizar cantidad
    const updateQuantity = (clubName: string, change: number) => {
        const currentQty = quantities[clubName] || 0;
        const newQty = Math.max(0, currentQty + change);
        
        // Validar límite total
        if (change > 0 && totalUsed >= maxTotal) return;
        
        const newQuantities = { ...quantities, [clubName]: newQty };
        if (newQty === 0) delete newQuantities[clubName];
        
        setQuantities(newQuantities);
        onChange?.(newQuantities);
    };

    // Agregar club personalizado
    const addCustomClub = () => {
        if (customInput.trim() && canAdd && !customClubs.includes(customInput.trim())) {
            const newClub = customInput.trim();
            setCustomClubs(prev => [...prev, newClub]);
            updateQuantity(newClub, 1);
            setCustomInput('');
        }
    };

    // Todos los clubs disponibles
    const allClubs = [
        ...Object.entries(defaultClubs),
        ...customClubs.map(name => [name, name])
    ];

    return (
        <Box>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                Select all that apply
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                ({totalUsed}/{maxTotal} selected)
            </Typography>

            {/* Lista de clubs */}
            {allClubs.map(([id, label]) => (
                <Box 
                    key={id}
                    sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        py: 1,
                        borderBottom: '1px solid #eee'
                    }}
                >
                    <Typography>{label}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton
                            size="small"
                            onClick={() => updateQuantity(id, -1)}
                            disabled={(quantities[id] || 0) === 0}
                            sx={{ border: '1px solid #ccc' }}
                        >
                            <Remove fontSize="small" />
                        </IconButton>
                        
                        <Typography sx={{ minWidth: 24, textAlign: 'center' }}>
                            {quantities[id] || 0}
                        </Typography>
                        
                        <IconButton
                            size="small"
                            onClick={() => updateQuantity(id, 1)}
                            disabled={!canAdd}
                            sx={{ border: '1px solid #ccc' }}
                        >
                            <Add fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
            ))}

            {/* Input para agregar custom */}
            <Box sx={{ 
                display: 'flex', 
                gap: 1, 
                mt: 2,
                alignItems: 'center'
            }}>
                <TextField
                    size="small"
                    placeholder="Add custom wood"
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && addCustomClub()}
                    sx={{ flex: 1 }}
                />
                <IconButton
                    onClick={addCustomClub}
                    disabled={!canAdd || !customInput.trim()}
                    sx={{ border: '1px solid #ccc' }}
                >
                    <Add />
                </IconButton>
            </Box>
        </Box>
    );
};

export default ClubQuantitySelector;