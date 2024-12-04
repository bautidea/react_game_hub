import { Box, List, ListItemButton, Skeleton, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { ListItem } from './ListItem';

interface SidebarProps<T extends { id: number }> {
  elements: null | undefined | T[];
  listTitle: string;
  isLoading: boolean;
  renderItem: (element: T, isHovered: boolean) => ReactNode;
}

const NUMBEROFSKELETONS = 4;

export function SideBar<T extends { id: number }>({
  elements,
  listTitle,
  isLoading,
  renderItem,
}: SidebarProps<T>) {
  const [displayAllItems, setDisplayAllItems] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoverDisplayAll, setHoverDisplayAll] = useState<boolean>(false);

  if (isLoading)
    return (
      <Box>
        <Typography
          variant="h4"
          component="p"
          sx={{ fontWeight: '400', letterSpacing: '1px' }}
        >
          {listTitle}
        </Typography>

        {[...Array(NUMBEROFSKELETONS)].map((_, ind) => (
          <Skeleton
            key={ind}
            sx={{ height: '32px', width: '32px', borderRadius: '10px' }}
          />
        ))}
      </Box>
    );

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
        {elements?.slice(0, 3).map((element: T & { id: number }) => {
          const isHovered = hoveredItem === element.id;
          return (
            <ListItemButton
              key={element.id}
              onMouseEnter={() => setHoveredItem(element.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {renderItem(element, isHovered)}
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
          elements?.slice(3).map((element: T & { id: number }) => {
            const isHovered = hoveredItem === element.id;
            return (
              <ListItemButton
                key={element.id}
                onMouseEnter={() => setHoveredItem(element.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {renderItem(element, isHovered)}
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
