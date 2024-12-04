import { ParentPlatforms } from '../../types';
import { iconMapper } from '../../utils/iconPlatformMapper';
import { ListItem } from './ListItem';
import { SideBar } from './SideBar';

function RenderPlatformItem(element: ParentPlatforms, isHovered: boolean) {
  const PlatformIcon = iconMapper[element.slug];

  return (
    <ListItem isHovered={isHovered} itemName={element.name}>
      <PlatformIcon
        size={`20px`}
        fill={isHovered ? 'black' : 'rgb(255,255,255)'}
      />
    </ListItem>
  );
}

interface PlatformsSideBarProps {
  elements: null | undefined | ParentPlatforms[];
  listTitle: string;
  isLoading: boolean;
}

export function PlatformsSideBar({
  elements,
  listTitle,
  isLoading,
}: PlatformsSideBarProps) {
  return (
    <SideBar
      elements={elements}
      listTitle={listTitle}
      isLoading={isLoading}
      renderItem={RenderPlatformItem}
    />
  );
}
