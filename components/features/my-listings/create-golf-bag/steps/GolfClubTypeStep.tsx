'use client';

import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  Stack,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const clubNames = ['Driver', 'Wood', 'Hybrid/Rescue', 'Iron', 'Wedge', 'Putter'];
const INITIAL_COUNT = 0;

const GolfClubSelector = () => {
  const [clubs, setClubs] = useState<Record<string, number>>(
    clubNames.reduce((acc, name) => ({ ...acc, [name]: INITIAL_COUNT }), {})
  );

  const handleChange = (name: string, delta: number) => {
    setClubs(prev => {
      const newCount = Math.max(0, (prev[name] ?? 0) + delta);
      return { ...prev, [name]: newCount };
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      {clubNames.map(name => (
        <Stack
          key={name}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 1, borderBottom: '1px solid #eee' }}
        >
          <Typography>{name}</Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <IconButton
              onClick={() => handleChange(name, -1)}
              size="small"
              sx={{
                borderRadius: '50%',
                border: '1px solid #ccc',
              }}
            >
              <RemoveIcon fontSize="small" />
            </IconButton>
            <Typography>{clubs[name]}</Typography>
            <IconButton
              onClick={() => handleChange(name, 1)}
              size="small"
              sx={{
                borderRadius: '50%',
                border: '1px solid #ccc',
              }}
            >
              <AddIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
};

export default GolfClubSelector;
