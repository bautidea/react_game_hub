import { Box, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode } from 'react';

interface ListItemProps {
  isHovered: boolean;
  itemName: string;
  children: ReactNode;
  isMobile: null | boolean;
}
export function AsideListItem({
  isHovered,
  itemName,
  children,
  isMobile,
}: ListItemProps) {
  let backgroundColor = isMobile ? 'black' : 'rgba(255,255,255,0.2)';
  if (isHovered) {
    backgroundColor = 'rgb(255,255,255)';
  }

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
            backgroundColor: backgroundColor,
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
