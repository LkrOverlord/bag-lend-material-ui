import React from 'react';
import { Card, Divider, useTheme } from '@mui/material';
import ItemTable, { ItemTableProps } from './ItemTable';

export interface SimpleTableProps {
  items: ItemTableProps[];
}

const SimpleTable: React.FC<SimpleTableProps> = ({ items }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        overflow: 'hidden',
        width: '100%',
        border: `1px solid ${theme.palette.divider}`,
      }}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ItemTable label={item.label} value={item.value} />
          {index < items.length - 1 && (
            <Divider 
              sx={{ 
                mx: 3, 
                borderColor: theme.palette.mode === 'light' 
                  ? 'rgba(0, 0, 0, 0.12)' 
                  : 'rgba(255, 255, 255, 0.12)' 
              }} 
            />
          )}
        </React.Fragment>
      ))}
    </Card>
  );
};

export default SimpleTable;