import { List } from '@mui/material';
import { Genres, ParentPlatforms } from '../../types';

interface Props {
  elements: null | undefined | ParentPlatforms[] | Genres[];
  isLoading: boolean;
}

export function SideBar({ elements, isLoading }: Props) {
  return <List></List>;
}
