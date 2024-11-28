import { Box, List, Typography } from '@mui/material';
import { Genres, ParentPlatforms } from '../../types';

interface Props {
  elements: null | undefined | ParentPlatforms[] | Genres[];
  listTitle: string;
  isLoading: boolean;
}

export function SideBar({ elements, listTitle, isLoading }: Props) {
  return (
    <Box>
      <Typography
        variant="h4"
        component="p"
        sx={{ fontWeight: '400', letterSpacing: '1px' }}
      >
        {listTitle}
      </Typography>
    </Box>
  );
}
