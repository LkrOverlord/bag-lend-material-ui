'use client';

import { Card, CardContent, CardHeader, Paper, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface MainCardProps {
  title: string;
  children: ReactNode;
}

export default function MainCard({ title, children }: MainCardProps) {
  return (
    <Paper elevation={0} sx={{ borderRadius: 2 }}>
      <Card sx={{ height: '100%' }}>
        <CardHeader 
          title={
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
          }
          sx={{
            backgroundColor: (theme) => 
              theme.palette.mode === 'light' 
                ? 'rgba(25, 118, 210, 0.08)' 
                : 'rgba(144, 202, 249, 0.08)',
            px: 3,
            py: 2,
          }}
        />
        <CardContent sx={{ p: 3 }}>
          {children}
        </CardContent>
      </Card>
    </Paper>
  );
}