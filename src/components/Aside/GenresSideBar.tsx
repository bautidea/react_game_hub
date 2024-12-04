import { Genres } from '../../types';
import { ListItem } from './ListItem';
import { SideBar } from './SideBar';

function RenderGenreItem(element: Genres, isHovered: boolean) {
  return (
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
  );
}
interface GenresSideBarProps {
  elements: null | undefined | Genres[];
  listTitle: string;
  isLoading: boolean;
}

export function GenresSideBar({
  elements,
  listTitle,
  isLoading,
}: GenresSideBarProps) {
  return (
    <SideBar
      elements={elements}
      listTitle={listTitle}
      isLoading={isLoading}
      renderItem={RenderGenreItem}
    />
  );
}
