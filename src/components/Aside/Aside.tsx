import { Box } from '@mui/material';
import { useGenres } from '../../hooks/useGenres';
import { usePlatforms } from '../../hooks/usePlatforms';
import { SideBar } from './SideBar';

export function Aside() {
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
    <Box
      sx={{
        height: '100%',
        margin: '20px 15px 20px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <SideBar elements={genres} listTitle={'Genres'} isLoading={isLoading} />
      <SideBar
        elements={platforms}
        listTitle={'Platforms'}
        isLoading={isLoading}
      />
    </Box>
  );
}
