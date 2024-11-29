import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
} from '@mui/material';
import { Genres, ParentPlatforms } from '../../types';
import { iconMapper } from '../../utils/iconPlatformMapper';

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
      <List>
        {elements?.slice(0, 3).map((element) => {
          const PlatformIcon = iconMapper[element.slug];

          return (
            <ListItemButton key={element.id}>
              <ListItemIcon>
                <Box sx={{ height: '32px', width: '32px' }}>
                  {PlatformIcon && <PlatformIcon size={`28px`} />}
                  {!PlatformIcon && (
                    <img
                      src={element.image_background}
                      height={'100%'}
                      width={'100%'}
                    />
                  )}
                </Box>
              </ListItemIcon>
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
}
