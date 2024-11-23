import { Box } from '@mui/material';
import { useGenres } from '../../hooks/useGenres';

export function Nav() {
  const { genres, isLoading, isError, error } = useGenres();
  console.log(genres);

  return <Box sx={{ bgcolor: 'blue', height: 100 }} />;
}
