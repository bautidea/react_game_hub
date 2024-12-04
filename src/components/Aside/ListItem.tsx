import { Box, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode } from 'react';

interface ListItemProps {
  isHovered: boolean;
  itemName: string;
  children: ReactNode;
}
export function ListItem({ isHovered, itemName, children }: ListItemProps) {
  return (
    <>
      <ListItemIcon
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          display: ' flex',
        }}
      >
        <Box
          sx={{
            height: '32px',
            width: '32px',
            borderRadius: '10px',
            backgroundColor: `${
              isHovered ? 'rgb(255,255,255)' : 'rgba(255,255,255,0.2)'
            }`,
            justifyContent: 'center',
            alignItems: 'center',
            display: ' flex',
            overflow: 'hidden',
          }}
        >
          {children}
        </Box>
      </ListItemIcon>
      <ListItemText
        primary={itemName}
        primaryTypographyProps={{ sx: { fontSize: '1.3rem' } }}
      />
    </>
  );
}
