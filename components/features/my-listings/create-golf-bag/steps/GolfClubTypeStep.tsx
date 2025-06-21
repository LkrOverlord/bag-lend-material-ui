'use client';

import React from 'react';
import {
  Box,
  IconButton,
  Typography,
  Stack,
  LinearProgress,
  Alert,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { ClubType } from '@/types/GolfClub';
import { useGolfClubStore } from '@/store/GolfClubStore';

// Mapeo de ClubType a nombres de display
const clubDisplayNames: Record<ClubType, string> = {
  [ClubType.DRIVER]: 'Driver',
  [ClubType.WOODS]: 'Wood',
  [ClubType.HYBRID]: 'Hybrid/Rescue',
  [ClubType.IRONS]: 'Iron',
  [ClubType.WEDGES]: 'Wedge',
  [ClubType.PUTTER]: 'Putter',
};

const MAX_TOTAL_CLUBS = 18;

const GolfClubSelector = () => {
  const { clubs, handleChange, getTotalClubs, getAvailableSlots, canAddClub } = useGolfClubStore();
  
  // Obtener las claves ordenadas para mostrar consistentemente
  const clubTypes = Object.values(ClubType);
  const totalClubs = getTotalClubs();
  const availableSlots = getAvailableSlots();
  const progressPercentage = (totalClubs / MAX_TOTAL_CLUBS) * 100;

  return (
    <Box sx={{ width: '100%' }}>
    

      {/* Lista de clubs */}
      {clubTypes.map((clubType) => {
        const displayName = clubDisplayNames[clubType];
        const count = clubs[clubType] || 0;
        const canAdd = canAddClub(clubType);

        return (
          <Stack
            key={clubType}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ py: 1, borderBottom: '1px solid #eee' }}
          >
            <Typography>{displayName}</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton
                onClick={() => handleChange(clubType, -1)}
                size="small"
                sx={{
                  borderRadius: '50%',
                  border: '1px solid #ccc',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  },
                  '&:disabled': {
                    borderColor: '#e0e0e0',
                    color: '#c0c0c0'
                  }
                }}
                disabled={count === 0}
              >
                <RemoveIcon fontSize="small" />
              </IconButton>
              <Typography 
                sx={{ 
                  minWidth: '24px', 
                  textAlign: 'center',
                  fontWeight: 'medium'
                }}
              >
                {count}
              </Typography>
              <IconButton
                onClick={() => handleChange(clubType, 1)}
                size="small"
                sx={{
                  borderRadius: '50%',
                  border: '1px solid #ccc',
                  '&:hover': {
                    backgroundColor: canAdd ? 'rgba(0, 0, 0, 0.04)' : 'rgba(244, 67, 54, 0.04)',
                  },
                  '&:disabled': {
                    borderColor: '#e0e0e0',
                    color: '#c0c0c0'
                  }
                }}
                disabled={!canAdd}
                title={!canAdd ? `Maximum limit reached (${MAX_TOTAL_CLUBS} clubs)` : 'Add club'}
              >
                <AddIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        );
      })}
    </Box>
  );
};

export default GolfClubSelector;