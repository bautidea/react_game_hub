import { ParentPlatforms } from '../../types';
import { iconMapper } from '../../utils/iconPlatformMapper';
import { AsideListItem } from './AsideListItem';
import { SideBar } from './SideBar';

function RenderPlatformItem(element: ParentPlatforms, isHovered: boolean) {
  const PlatformIcon = iconMapper[element.slug];

  return (
    <AsideListItem isHovered={isHovered} itemName={element.name}>
      <PlatformIcon
        size={`20px`}
        fill={isHovered ? 'black' : 'rgb(255,255,255)'}
      />
    </AsideListItem>
  );
}

interface PlatformsSideBarProps {
  elements: null | undefined | ParentPlatforms[];
  listTitle: string;
  isLoading: boolean;
  handlePlatformSelect: (clickedPlatform: ParentPlatforms) => void;
  selectedPlatform: number | null;
}

export function PlatformsSideBar({
  elements,
  listTitle,
  isLoading,
  handlePlatformSelect,
  selectedPlatform,
}: PlatformsSideBarProps) {
  return (
    <SideBar
      elements={elements}
      listTitle={listTitle}
      isLoading={isLoading}
      renderItem={RenderPlatformItem}
      handleItemClick={handlePlatformSelect}
      selectedItem={selectedPlatform}
    />
  );
}
