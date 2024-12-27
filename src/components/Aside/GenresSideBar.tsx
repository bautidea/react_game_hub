import { Genres } from '../../types';
import { AsideListItem } from './AsideListItem';
import { SideBar } from './SideBar';

function RenderGenreItem(
  element: Genres,
  isHovered: boolean,
  isMobile: boolean | null
) {
  return (
    <AsideListItem
      isHovered={isHovered}
      itemName={element.name}
      isMobile={isMobile}
    >
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
  selectedGenre: number | null;
  isMobile: boolean | null;
}

export function GenresSideBar({
  elements,
  listTitle,
  isLoading,
  handleGenreSelect,
  selectedGenre,
  isMobile,
}: GenresSideBarProps) {
  return (
    <SideBar
      elements={elements}
      listTitle={listTitle}
      isLoading={isLoading}
      renderItem={RenderGenreItem}
      handleItemClick={handleGenreSelect}
      selectedItem={selectedGenre}
      isMobile={isMobile}
    />
  );
}
