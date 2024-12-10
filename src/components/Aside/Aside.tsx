import { Box } from '@mui/material';
import { useGenres } from '../../hooks/useGenres';
import { usePlatforms } from '../../hooks/usePlatforms';
import { Genres, ParentPlatforms } from '../../types';
import { GenresSideBar } from './GenresSideBar';
import { PlatformsSideBar } from './PlatformsSideBar';

interface Props {
  handleGenreSelect: (clickedGenre: Genres) => void;
  handlePlatformSelect: (clickedPlatform: ParentPlatforms) => void;
}

export function Aside({ handleGenreSelect, handlePlatformSelect }: Props) {
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
        margin: '5px 0 20px 40px',
        paddingRight: '25px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <GenresSideBar
        elements={genres}
        listTitle={'Genres'}
        isLoading={isLoading}
        handleGenreSelect={handleGenreSelect}
      />
      <PlatformsSideBar
        elements={platforms}
        listTitle={'Platforms'}
        isLoading={isLoading}
        handlePlatformSelect={handlePlatformSelect}
      />
    </Box>
  );
}
