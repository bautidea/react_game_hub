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
      <Typography variant="h4" component="p">
        {listTitle}
      </Typography>
    </Box>
  );
}
