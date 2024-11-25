import { Box } from '@mui/material';
import { useGenres } from '../../hooks/useGenres';
import { usePlatforms } from '../../hooks/usePlatforms';

export function Nav() {
  const { genres, isLoading, isError, error } = useGenres();
  usePlatforms();
  console.log(genres);

  return <Box sx={{ bgcolor: 'blue', height: 100 }} />;
}
