import { ParentPlatforms } from '../../types';
import { iconMapper } from '../../utils/iconPlatformMapper';
import { AsideListItem } from './AsideListItem';
import { SideBar } from './SideBar';

function RenderPlatformItem(
  element: ParentPlatforms,
  isHovered: boolean,
  isMobile: boolean | null
) {
  const PlatformIcon = iconMapper[element.slug];

  let fillColor = 'rgb(255,255,255)';
  if (isHovered && !isMobile) {
    fillColor = 'black';
  }

  return (
    <AsideListItem
      isHovered={isHovered}
      itemName={element.name}
      isMobile={isMobile}
    >
      <PlatformIcon size={`20px`} fill={fillColor} />
    </AsideListItem>
  );
}

interface PlatformsSideBarProps {
  elements: null | undefined | ParentPlatforms[];
  listTitle: string;
  isLoading: boolean;
  handlePlatformSelect: (clickedPlatform: ParentPlatforms) => void;
  selectedPlatform: number | null;
  isMobile: boolean;
}

export function PlatformsSideBar({
  elements,
  listTitle,
  isLoading,
  handlePlatformSelect,
  selectedPlatform,
  isMobile,
}: PlatformsSideBarProps) {
  return (
    <SideBar
      elements={elements}
      listTitle={listTitle}
      isLoading={isLoading}
      renderItem={RenderPlatformItem}
      handleItemClick={handlePlatformSelect}
      selectedItem={selectedPlatform}
      isMobile={isMobile}
    />
  );
}
