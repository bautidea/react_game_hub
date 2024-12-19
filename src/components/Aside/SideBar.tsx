import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Skeleton,
  Typography,
} from '@mui/material';
import { ReactNode, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { AsideListItem } from './AsideListItem';

interface SidebarProps<T extends { id: number }> {
  elements: null | undefined | T[];
  listTitle: string;
  isLoading: boolean;
  renderItem: (element: T, isHovered: boolean) => ReactNode;
  handleItemClick: (clickedItem: T) => void;
  selectedItem: number | null;
}

const NUMBEROFSKELETONS = 4;

export function SideBar<T extends { id: number }>({
  elements,
  listTitle,
  isLoading,
  renderItem,
  handleItemClick,
  selectedItem,
}: SidebarProps<T>) {
  const [displayAllItems, setDisplayAllItems] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [hoverDisplayAll, setHoverDisplayAll] = useState<boolean>(false);

  if (isLoading)
    return (
      <Box>
        <Skeleton sx={{ width: '100%', height: '4rem' }} variant="text" />

        <List>
          {[...Array(NUMBEROFSKELETONS)].map((_, ind) => (
            <ListItem key={ind}>
              <ListItemIcon
                sx={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  display: ' flex',
                }}
              >
                <Skeleton
                  variant="rounded"
                  sx={{
                    height: '32px',
                    width: '32px',
                    borderRadius: '10px',
                  }}
                />
              </ListItemIcon>
              <Skeleton
                variant="text"
                sx={{ height: '2rem', width: '100%', borderRadius: '10px' }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    );

  return (
    <Box>
      <Typography
        variant="h4"
        component="p"
        sx={{
          fontWeight: '400',
          letterSpacing: '1px',
        }}
      >
        {listTitle}
      </Typography>
      <List>
        {elements?.slice(0, 3).map((element: T & { id: number }) => {
          const isHovered = hoveredItem === element.id;
          const isSelected = selectedItem === element.id;

          return (
            <ListItemButton
              key={element.id}
              onMouseEnter={() => setHoveredItem(element.id)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => handleItemClick(element)}
              sx={{
                backgroundColor: isSelected
                  ? 'rgba(130, 129, 129, 0.5) !important'
                  : 'auto',
              }}
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
            <AsideListItem isHovered={hoverDisplayAll} itemName="Show all">
              <ExpandMoreIcon
                sx={{
                  fontSize: '32px',
                  color: `${hoverDisplayAll ? 'black' : 'rgb(255,255,255)'}`,
                }}
              />
            </AsideListItem>
          </ListItemButton>
        )}

        {displayAllItems &&
          elements?.slice(3).map((element: T & { id: number }) => {
            const isHovered = hoveredItem === element.id;
            const isSelected = selectedItem === element.id;

            return (
              <ListItemButton
                key={element.id}
                onMouseEnter={() => setHoveredItem(element.id)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => handleItemClick(element)}
                sx={{
                  backgroundColor: isSelected
                    ? 'rgba(130, 129, 129, 0.5) !important'
                    : 'auto',
                }}
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
            <AsideListItem isHovered={hoverDisplayAll} itemName="Hide">
              <ExpandLessIcon
                sx={{
                  fontSize: '32px',
                  color: `${hoverDisplayAll ? 'black' : 'rgb(255,255,255)'}`,
                }}
              />
            </AsideListItem>
          </ListItemButton>
        )}
      </List>
    </Box>
  );
}
