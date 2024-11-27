import { Box } from '@mui/material';
import { useGenres } from '../../hooks/useGenres';
import { usePlatforms } from '../../hooks/usePlatforms';
import { SideBar } from './SideBar';

export function Nav() {
  const {
    genres,
    isLoading: isGenreLoading,
    isError: isGenreError,
  } = useGenres();
  const {
    platforms,
    isLoading: isPlatformLoading,
    isError: isPlatformError,
  } = usePlatforms();

  const isLoading = isGenreLoading || isPlatformLoading;
  if (isGenreError || isPlatformError) return;

  return (
    <Box height={'100%'}>
      <SideBar elements={genres} isLoading={isLoading} />
      <SideBar elements={platforms} isLoading={isLoading} />
    </Box>
  );
}
