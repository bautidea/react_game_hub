import { Box } from '@mui/material';
import { useGenres } from '../../hooks/useGenres';
import { usePlatforms } from '../../hooks/usePlatforms';

export function Nav() {
  const {
    genres,
    isLoading: isGenreLoading,
    isError: isGenreError,
    error,
  } = useGenres();
  const {
    platforms,
    isLoading: isPlatformLoading,
    isError: isPlatformError,
  } = usePlatforms();

  const isLoading = isGenreLoading || isPlatformLoading;
  if (isGenreError || isPlatformError) return;

  return <Box sx={{ bgcolor: 'blue', height: 100 }} />;
}
