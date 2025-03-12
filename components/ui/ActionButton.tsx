'use client';

import { useState } from 'react';
import { 
  Button, 
  Snackbar, 
  Alert, 
  Box
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function ActionButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Button 
        variant="contained" 
        onClick={handleClick} 
        endIcon={<SendIcon />}
        size="large"
        sx={{ 
          minWidth: 200
        }}
      >
        Acción Principal
      </Button>
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleClose} 
          severity="success" 
          variant="filled"
          sx={{ width: '100%' }}
        >
          ¡Acción completada con éxito!
        </Alert>
      </Snackbar>
    </Box>
  );
}