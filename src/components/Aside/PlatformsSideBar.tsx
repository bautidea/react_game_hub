import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { ParentPlatforms } from '../../types';
import { iconMapper } from '../../utils/iconPlatformMapper';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ListItem } from './ListItemComponents';

interface Props {
  elements: null | undefined | ParentPlatforms[];
  listTitle: string;
  isLoading: boolean;
}

export function PlatformsSideBar({ elements, listTitle, isLoading }: Props) {
  const [displayAllItems, setDisplayAllItems] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoverDisplayAll, setHoverDisplayAll] = useState<boolean>(false);

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
          const isHovered = hoveredItem === element.id;
          return (
            <ListItemButton
              key={element.id}
              onMouseEnter={() => setHoveredItem(element.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <ListItem isHovered={isHovered} itemName={element.name}>
                <PlatformIcon
                  size={`20px`}
                  fill={
                    hoveredItem === element.id ? 'black' : 'rgb(255,255,255)'
                  }
                />
              </ListItem>
            </ListItemButton>
          );
        })}

        {!displayAllItems && (
          <ListItemButton
            sx={{ opacity: '0.5' }}
            onMouseEnter={() => setHoverDisplayAll(true)}
            onMouseLeave={() => setHoverDisplayAll(false)}
            onClick={() => setDisplayAllItems(true)}
          >
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
                    hoverDisplayAll
                      ? 'rgb(255,255,255)'
                      : 'rgba(255,255,255,0.2)'
                  }`,
                }}
              >
                <ExpandMoreIcon
                  sx={{
                    fontSize: '32px',
                    color: `${hoverDisplayAll ? 'black' : 'rgb(255,255,255)'}`,
                  }}
                />
              </Box>
            </ListItemIcon>
            <ListItemText
              primary="Show all"
              primaryTypographyProps={{ sx: { fontSize: '1.3rem' } }}
            />
          </ListItemButton>
        )}

        {displayAllItems &&
          elements?.slice(3).map((element) => {
            const PlatformIcon = iconMapper[element.slug];
            const isHovered = hoveredItem === element.id;
            return (
              <ListItemButton
                key={element.id}
                onMouseEnter={() => setHoveredItem(element.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <ListItem isHovered={isHovered} itemName={element.name}>
                  <PlatformIcon
                    size={`20px`}
                    fill={
                      hoveredItem === element.id ? 'black' : 'rgb(255,255,255)'
                    }
                  />
                </ListItem>
              </ListItemButton>
            );
          })}

        {displayAllItems && (
          <ListItemButton
            sx={{ opacity: '0.5' }}
            onMouseEnter={() => setHoverDisplayAll(true)}
            onMouseLeave={() => setHoverDisplayAll(false)}
            onClick={() => setDisplayAllItems(false)}
          >
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
                    hoverDisplayAll
                      ? 'rgb(255,255,255)'
                      : 'rgba(255,255,255,0.2)'
                  }`,
                }}
              >
                <ExpandLessIcon
                  sx={{
                    fontSize: '32px',
                    color: `${hoverDisplayAll ? 'black' : 'rgb(255,255,255)'}`,
                  }}
                />
              </Box>
            </ListItemIcon>
            <ListItemText
              primary="Hide"
              primaryTypographyProps={{ sx: { fontSize: '1.3rem' } }}
            />
          </ListItemButton>
        )}
      </List>
    </Box>
  );
}
