import { Box, List, ListItemButton, Typography } from '@mui/material';
import { Genres } from '../../types';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ListItem } from './ListItemComponents';

interface Props {
  elements: null | undefined | Genres[];
  listTitle: string;
  isLoading: boolean;
}

export function GenresSideBar({ elements, listTitle, isLoading }: Props) {
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
          const isHovered = hoveredItem === element.id;
          return (
            <ListItemButton
              key={element.id}
              onMouseEnter={() => setHoveredItem(element.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <ListItem isHovered={isHovered} itemName={element.name}>
                <img
                  src={element.image_background}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
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
            <ListItem isHovered={hoverDisplayAll} itemName="Show all">
              <ExpandMoreIcon
                sx={{
                  fontSize: '32px',
                  color: `${hoverDisplayAll ? 'black' : 'rgb(255,255,255)'}`,
                }}
              />
            </ListItem>
          </ListItemButton>
        )}

        {displayAllItems &&
          elements?.slice(3).map((element) => {
            const isHovered = hoveredItem === element.id;
            return (
              <ListItemButton
                key={element.id}
                onMouseEnter={() => setHoveredItem(element.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <ListItem isHovered={isHovered} itemName={element.name}>
                  <img
                    src={element.image_background}
                    style={{
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
                    }}
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
            <ListItem isHovered={hoverDisplayAll} itemName="Hide">
              <ExpandLessIcon
                sx={{
                  fontSize: '32px',
                  color: `${hoverDisplayAll ? 'black' : 'rgb(255,255,255)'}`,
                }}
              />
            </ListItem>
          </ListItemButton>
        )}
      </List>
    </Box>
  );
}
