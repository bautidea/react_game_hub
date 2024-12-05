import { Genres } from '../../types';
import { AsideListItem } from './AsideListItem';
import { SideBar } from './SideBar';

function RenderGenreItem(element: Genres, isHovered: boolean) {
  return (
    <AsideListItem isHovered={isHovered} itemName={element.name}>
      <img
        src={element.image_background}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </AsideListItem>
  );
}
interface GenresSideBarProps {
  elements: null | undefined | Genres[];
  listTitle: string;
  isLoading: boolean;
  handleGenreSelect: (clickedGenre: Genres) => void;
}

export function GenresSideBar({
  elements,
  listTitle,
  isLoading,
  handleGenreSelect,
}: GenresSideBarProps) {
  return (
    <SideBar
      elements={elements}
      listTitle={listTitle}
      isLoading={isLoading}
      renderItem={RenderGenreItem}
      handleItemClick={handleGenreSelect}
    />
  );
}
